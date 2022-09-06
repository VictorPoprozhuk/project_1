<template>
    <div class="main">
        <h1>Page with posts</h1>
        <div class="app__btns">
            <my-button @click="showDialog">Create post</my-button>
            <my-button
                style="border: none; margin-left: auto"
                @click="changeSortRevers"
                >{{ reverseSort ? "🔼" : "🔽" }}</my-button
            >
            <my-select
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
        <my-input
            placeholder="Search"
            v-model="searchInput"
            style="width: 300px; margin: 0"
        />
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <post-list
            v-if="!isPostsLoading"
            :posts="inputSearch"
            @remove="removePost"
        />
        <div v-else>Loading...</div>
        <!-- <pagination
            v-if="!isPostsLoading"
            :totalPages="totalPages"
            :page="page"
            @pageNow="changePage"
        /> -->
        <div
            v-if="!isPostsLoading"
            class="observer"
            v-intersection="{loadMorePosts}"
        ></div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
// import Pagination from "@/components/Pagination.vue";
import axios from "axios";

export default {
    components: {
        PostForm,
        PostList,
        // Pagination,
    },

    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            reverseSort: false,
            searchInput: "",
            selectedSort: "",
            sortOptions: [
                {value: "title", name: "By name"},
                {value: "body", name: "By body "},
                {value: "id", name: "By id"},
            ],
            page: 1,
            limit: 10,
            totalPages: 0,
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                setTimeout(async () => {
                    const response = await axios.get(
                        "https://jsonplaceholder.typicode.com/posts",
                        {
                            params: {
                                _page: this.page,
                                _limit: this.limit,
                            },
                        }
                    );
                    this.totalPages = Math.ceil(
                        response.headers["x-total-count"] / this.limit
                    );
                    this.posts = response.data;
                    this.isPostsLoading = false;
                }, 1000);
            } catch (error) {
                alert("Error");
            }
        },
        async loadMorePosts() {
            //безкінечна підгрузка постів
            try {
                this.page += 1;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        },
                    }
                );
                this.totalPages = Math.ceil(
                    response.headers["x-total-count"] / this.limit
                );
                this.posts = [...this.posts, ...response.data];
            } catch (error) {
                alert("Error");
            }
        },

        changeSortRevers() {
            this.reverseSort = !this.reverseSort;
        },
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        sortPosts() {
            if (this.selectedSort === "id") {
                return [...this.posts].sort((post1, post2) =>
                    post1.id > post2.id ? 1 : -1
                );
            } else {
                return [...this.posts].sort((post1, post2) =>
                    post1[this.selectedSort]?.localeCompare(
                        post2[this.selectedSort]
                    )
                );
            }
        },
        inputSearch() {
            if (this.reverseSort) {
                const arr = this.sortPosts.reverse();
                console.log(1);

                return arr.filter((post) =>
                    post.title
                        .toLowerCase()
                        .includes(this.searchInput.toLowerCase())
                );
            }
            console.log(2);

            return this.sortPosts.filter((post) =>
                post.title
                    .toLowerCase()
                    .includes(this.searchInput.toLowerCase())
            );
        },
    },
    watch: {
        // reverseSort() {
        //     console.log(1);
        //     this.inputSearch;
        // },
    },
};
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.checkbox {
    width: 30px;
    height: 30px;
    background: sandybrown;
    margin-left: auto;
    margin-right: 20px;
}
.observer {
    height: 30px;
    background: transparent;
}
</style>

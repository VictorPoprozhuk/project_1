<template>
    <div>
        <h1>Page with posts</h1>
        <div class="app__btns">
            <my-button @click="showDialog">Create post</my-button>
            <my-button
                style="border: none; margin-left: auto"
                @click="setSortReverse"
                >{{ sortReverse ? "🔼" : "🔽" }}</my-button
            >
            <my-select
                :modelValue="selectedSort"
                @update:modelValue="setSelectedSort"
                :options="sortOptions"
            />
        </div>
    </div>
    <my-input
        placeholder="Search"
        :modelValue="searchInput"
        @update:modelValue="setSearchInput"
        style="width: 300px; margin-top: 30px"
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

    <div
        v-if="!isPostsLoading && !searchInput.length > 0"
        class="observer"
        v-intersection="{loadMorePosts}"
    ></div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import {mapState, mapActions, mapGetters, mapMutations} from "vuex";

export default {
    components: {
        PostForm,
        PostList,
    },

    data() {
        return {
            dialogVisible: false,
        };
    },

    methods: {
        ...mapActions({
            loadMorePosts: "post/loadMorePosts",
            fetchPosts: "post/fetchPosts",
        }),

        ...mapMutations({
            setPage: "post/setPage",
            setSearchInput: "post/setSearchInput",
            setSelectedSort: "post/setSelectedSort",
            setSortReverse: "post/setSortReverse",
            setPosts: "post/setPosts",
        }),

        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
           this.setPosts(this.posts.filter((p) => p.id !== post.id))
        },
        showDialog() {
            this.dialogVisible = true;
        },
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        ...mapState({
            posts: (state) => state.post.posts,
            isPostsLoading: (state) => state.post.isPostsLoading,
            searchInput: (state) => state.post.searchInput,
            selectedSort: (state) => state.post.selectedSort,
            sortOptions: (state) => state.post.sortOptions,
            page: (state) => state.post.page,
            limit: (state) => state.post.limit,
            totalPages: (state) => state.post.totalPages,
            sortReverse: (state) => state.post.sortReverse,
        }),
        ...mapGetters({
            sortPosts: "post/sortPosts",
            inputSearch: "post/inputSearch",
        }),
    },
    watch: {},
};
</script>

<style>
.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

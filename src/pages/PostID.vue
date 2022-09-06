<template>
    <div>
        <h1>Page of the post with ID -</h1>

        <div class="post">
            <div style="width: 100%">
                <strong class="iD">Id : {{ post.id }}</strong>
                <div><strong>Title: </strong>{{ post.title }}</div>
                <div>
                    <strong>Discription: </strong>{{ post.body }}
                </div>
            </div>
        </div>
        <div class="post__btns">
            <my-button @click="$router.back()">Back</my-button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            post: {},
        };
    },
    methods: {
        async fetch() {
            console.log(this.$route);
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
                );
                this.post = response.data;
            } catch (error) {
                console.error(error);
            }
        },
    },

    mounted() {
        this.fetch();
    },
};
</script>
<style>
.post {
    padding: 15px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.post__btns {
    margin-left: auto;
}
.iD {
    cursor: pointer;
    color: rgb(20, 34, 223);
}
@media (max-width: 800px) {
    .post__btns {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
}
@media (max-width: 500px) {
    .post {
        font-size: 14px;
    }
}
</style>

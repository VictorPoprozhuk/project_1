<template>
    <form @submit.prevent>
        <h4>Create post</h4>
        <my-input
            v-focus
            :class="{active: !validatePost}"
            v-model="post.title"
            type="text"
            placeholder="Name posts"
        />

        <my-input
            :class="{active: !validateBody}"
            v-model="post.body"
            type="text"
            placeholder="Description"
        />
        <my-button
            @click="createPost"
            style="align-self: flex-end; margin-top: 15px"
            >add post</my-button
        >
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
            },
            validatePost: true,
            validateBody: true,
        };
    },
    methods: {
        createPost() {
            if (!this.validatePost || !this.post.title.length) {
                if (this.validateBody) {
                    this.validateBody = false;
                }
                return (this.validatePost = false);
            } else if (!this.validateBody || !this.post.body.length) {
                console.log(2);
                return (this.validateBody = false);
            } else {
                console.log(3);
                this.post.id = Date.now();
                this.$emit("create", this.post);
                this.post = {
                    title: "",
                    body: "",
                };
            }
        },
    },
    watch: {
        "post.title"(newVal) {
            this.validatePost = newVal.length > 0 ? true : false;
        },
        "post.body"(newVal) {
            this.validateBody = newVal.length > 0 ? true : false;
        },
    },
};
</script>

<style>
form {
    display: flex;
    flex-direction: column;
}
.input.active {
    border: 1px solid red;
    outline: none;
}
</style>

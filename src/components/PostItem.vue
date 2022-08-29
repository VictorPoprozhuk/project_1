<template>
    <div class="post">
        <div style="width: 80%">
            <strong
                class="iD"
                @click.stop="$router.push(`/posts/${post.id}`)"
                >Id : {{ post.id }}</strong
            >
            <div><strong>Title: </strong>{{ post.title }}</div>
            <div><strong>Discription: </strong>{{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button @click.stop="$router.push(`/posts/${post.id}`)"
                >Open</my-button
            >
            <my-button @click.stop="$emit('remove', post)"
                >Delete</my-button
            >
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
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
</style>

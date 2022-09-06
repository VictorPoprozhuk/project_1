<template>
    <div class="post">
        <div style="width: 80%">
            <strong
                >Id : {{ post.id }}</strong
            >
            <div><strong>Title: </strong>{{ post.title }}</div>
            <div><strong>Discription: </strong>{{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button
                class="btn"
                @click.stop="$router.push(`/vue/posts/${post.id}`)"
                >Open</my-button
            >
            <my-button class="btn" @click.stop="$emit('remove', post)"
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
    border-radius: 10px;
}
.post__btns {
    display: flex;
    margin-left: auto;
    gap: 5px;
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
    .btn{
        font-size: 16px;
        
    }
}
</style>

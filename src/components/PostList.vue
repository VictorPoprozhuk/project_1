<template>
    <div class="list-posts" v-if="posts.length > 0">
        <h3>List users</h3>
        <transition-group name="post">
            <post-item
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
                class="list-item"
            />
        </transition-group>
    </div>
    <h2 v-else style="color: red; text-align: center">No posts 🤕</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
    components: {
        PostItem,
    },

    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.list-posts {
    width: 70%;
}
@media (max-width: 1000px) {
    .list-posts {
        width: 100%;
    }
}
.post-enter-active,
.post-leave-active {
    transition: all 0.6s ease;
}
.post-enter-from,
.post-leave-to {
    opacity: 0;
    transform: scale(0);
}
.post-move {
    transition: transform 0.6s ease;
}
</style>

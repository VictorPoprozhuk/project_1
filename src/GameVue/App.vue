<template>
    <div class="app">
        <h1>Remember me, Vue3</h1>
        <p>Remember and open all green cages</p>
        <Board />
    </div>
</template>
<script>
import Board from "@/GameVue/components/Board.vue";
export default {
    components: {
        Board,
    },
};
</script>

<style scoped>
#app {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.app {
    font-family: "Avenir", Arial, Helvetica, sans-serif;
    text-align: center;
}
.app > h1 {
    margin: 0;
}
</style>

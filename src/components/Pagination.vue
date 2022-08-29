<template>
    <div class="pagination">
        <div
            v-for="item in totalPages"
            :key="item"
            @click="$emit('pageNow', item)"
            class="pagi-item"
            :class="{active: page === item}"
        >
            {{ item }}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
        page: {
            type: Number,
            required: true,
        },
    },
};
</script>
<style>
.pagination {
    margin-top: 30px;
    display: flex;
    justify-content: center;
}
.pagi-item {
    border: 1px solid black;
    width: 40px;
    padding: 5px 0;
    font-size: 25px;
    border-radius: 50%;
    margin-right: 10px;
    background: teal;
    cursor: pointer;
}
.pagi-item.active {
    background: rgb(62, 235, 235);
}
</style>

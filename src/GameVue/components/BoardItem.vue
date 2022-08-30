<template>
    <span
        class="item"
        @click="select(field.id)"
        :class="
            'item ' +
            (field.value === 3 ? ' error ' : '') +
            ((field.value === 1 && preview) || field.clicked
                ? ' active '
                : '')
        "
    ></span>
</template>
<script>
export default {
    props: {
        field: {
            type: Object,
            required: true,
        },
        preview: {
            type: Boolean,
            required: false,
            default: false,
        },
        gameStatus: {
            type: Number,
            required: true,
        },
    },
    methods: {
        select(id) {
            if (this.gameStatus === 2) this.$emit("selectField", id);
        },
    },
};
</script>
<style>
.item {
    position: relative;
    width: 50px;
    height: 50px;
    background: #ccc;
    display: inline-block;
    margin: 5px;
    cursor: pointer;

    transition: 0.5s;
    transform-style: preserve-3d;
}
.active {
    background: #42b983;
    transform: rotateX(180deg);
}
.error {
    background: #e45a5a;
    transform: rotateX(180deg);
}
</style>

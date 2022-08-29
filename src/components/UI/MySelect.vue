<template>
    <select
        required="true"
        v-model="modelValue"
        @change="changeOption"
    >
        <option disabled value="">Select in list</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
        Sort
    </select>
</template>
<script>
export default {
    name: "my-select",
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        changeOption(event) {
            this.$emit("update:modelValue", event.target.value);
            console.log(event.target.value);
        },
    },
};
</script>
<style>
select {
    height: 20px;
    font-size: 16px;
    padding: 0 10px;

}
</style>

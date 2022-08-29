<template>
    <div class="navbar">
        <h2 @click="$router.push('/vue/')">Vue - 3</h2>
        <div class="links">
            <my-button
                class="link"
                @click="$router.push('/vue/posts')"
                style="color: black; border-radius: 10px"
                >Posts</my-button
            >
            <my-button
                class="link"
                @click="$router.push('/vue/about')"
                style="color: black; border-radius: 10px"
                >About</my-button
            >
            <my-button
                class="link"
                @click="$router.push('/vue/store')"
                style="color: black; border-radius: 10px"
                >Store</my-button
            >
            <my-button
                class="link"
                @click="$router.push('/vue/calc')"
                style="color: black; border-radius: 10px"
                >API</my-button
            >
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style>
.navbar {
    background: rgb(172, 209, 209);
    box-shadow: 2px 2px 4px gray;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.navbar h2 {
    cursor: pointer;
}
.links {
    margin-left: auto;
}
.link {
    font-size: 20px;
    margin-right: 20px;
}
</style>

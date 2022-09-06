<template>
    <div>
        <h1>
            On this app used Vue.js, Vue-router, VueX, Vue-transition.
        </h1>
        <!-- <button class="btn"></button> -->
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.btn {
    width: 100px;
    height: 50px;
    background: rgb(92, 212, 233);
    background-image: linear-gradient(
        270deg,
        #64b5ef00 48.44%,
        #ffffff 75.52%,
        #64b5ef00 100%
    );
    background-repeat: no-repeat;
    animation: anim 2.5s linear infinite;
    overflow: hidden;
    border-radius: 18px;
}

@keyframes anim {
    0% {
        background-position: -500px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}
</style>

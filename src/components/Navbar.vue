<template>
    <div class="navbar" @keyup.esc="this.burger = false">
        <h2>Vue - 3</h2>
        <my-button
            class="btn"
            v-if="widthWindow < 700"
            @click="closeBurger"
            >Menu</my-button
        >
        <div v-if="burger || widthWindow > 700" class="links">
            <div class="li" @click="this.burger = false">
                <my-button
                    class="link"
                    @click="$router.push('/vue')"
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
                    >Post-VueX</my-button
                >
                <my-button
                    class="link"
                    @click="$router.push('/vue/calc')"
                    style="color: black; border-radius: 10px"
                    >Custom Calc</my-button
                >
            </div>
        </div>
        <div
            class="backdrop"
            v-if="burger"
            @click="this.burger = false"
        ></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            burger: false,
            widthWindow: window.innerWidth,
            overflow: "none",
        };
    },
    methods: {
        width() {
            this.widthWindow = window.innerWidth;
        },
        closeBurger() {
            this.burger = !this.burger;
            this.overflow = this.burger ? "hidden" : "none";
        },
    },
    mounted() {
        window.addEventListener("resize", this.width);
    },

    watch: {
        widthWindow() {
            this.width();
            this.burger = false;
        },
    },
};
</script>
<style>
body {
    overflow: v-bind(overflow);
}
.navbar {
    background: rgb(172, 209, 209);
    box-shadow: 2px 2px 4px gray;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    position: sticky;
    top: 0;
    overflow: hidden;
}
.navbar h2 {
    cursor: pointer;
}
.links {
    margin-left: auto;
}
.li {
    display: flex;
    gap: 10px;
}

@media (max-width: 700px) {
    .navbar {
        justify-content: space-between;
        padding: 10px;
        z-index: 5;
    }
    .links {
        z-index: 10;
        position: fixed;
        left: 0;
        top: 65px;
        width: 300px;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        gap: 10px;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .li {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
    }
    .backdrop {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 65px;
        right: 0;
        background: rgba(0, 0, 0, 0.25);
    }
    .links .link {
        z-index: 11;
        background: #fff;
        width: 80%;
        margin: 0;
    }
}
.link {
    font-size: 20px;
    margin-right: 20px;
}
.btn {
    margin: 0;
    font-size: 20px;
}
</style>

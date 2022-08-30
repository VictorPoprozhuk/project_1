<template>
    <div class="board__wrapper">
        <div class="board">
            <BoardItem
                v-for="(field, i) in fields"
                :field="field"
                :key="i"
                :preview="preview"
                @selectField="selectField($event)"
                :gameStatus="gameStatus"
            />
        </div>
        <p class="difficult">
            Difficult: <strong>{{ difficult }}</strong>
        </p>
        <button @click="start" :disabled="cantStartGame" class="btn">
            Start
        </button>
    </div>
</template>
<script>
import BoardItem from "@/GameVue/components/BoardItem.vue";
export default {
    components: {
        BoardItem,
    },

    data() {
        return {
            difficult: 3,
            fields: [],
            number: 25,
            preview: false,
            gameStatus: 0,
        };
    },

    methods: {
        init() {
            this.fields = [];

            for (let i = 0; i < this.number; i++) {
                this.fields.push({
                    id: i,
                    clicked: false,
                    value: 0,
                });
            }
        },
        start() {
            this.init();
            this.gameStatus = 1;
            this.prepareGame();
        },
        selectField(id) {
            const index = this.fields.findIndex((field) => {
                return field.id === id;
            });
            if (index > -1 && !this.fields[index].clicked) {
                this.fields[index].clicked = true;
                this.checkGame();
            }
        },

        checkGame() {
            const errorIndex = this.fields.findIndex((field) => {
                return field.clicked && field.value === 0;
            });
            if (errorIndex > -1) {
                this.fields[errorIndex].value = 3;
                this.setGameOver();
                return;
            }
            const notFoundItemIndex = this.fields.findIndex(
                (field) => {
                    return !field.clicked && field.value === 1;
                }
            );

            if (notFoundItemIndex === -1) {
                this.setWin();
            }
        },
        setGameOver() {
            this.difficult = 3;
            this.gameStatus = 0;
            setTimeout(() => {
                alert("Game Over");
                this.init();
            }, 500);
        },

        setWin() {
            this.gameStatus = 1;
            this.difficult += 1;
            setTimeout(() => {
                this.init();
                setTimeout(() => {
                    this.prepareGame();
                }, 500);
            }, 500);
        },

        prepareGame() {
            this.preview = true;
            for (let i = 0; i < this.difficult; i++) {
                const index = this.random(0, this.number);
                if (this.fields[index].value !== 1) {
                    this.fields[index].value = 1;
                } else i--;
            }
            setTimeout(() => {
                this.preview = false;
                this.gameStatus = 2;
            }, 2000);
        },
        random(min, max) {
            return Math.floor(min + Math.random() * (max - min));
        },
    },
    computed: {
        cantStartGame() {
            return this.gameStatus !== 0;
        },
    },
    mounted() {
        this.init();
    },
};
</script>
<style scoped>
.board__wrapper {
    margin-bottom: 50px;
}
.btn {
    font-size: 20px;
    background: #42b983;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 40px;
    margin: 10px 0;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
}
.btn:active {
    background: #028349;
    box-shadow: -2px -2px 4px rgb(61, 61, 61),
        2px 2px 4px rgb(61, 61, 61), 2px -2px 4px rgb(61, 61, 61),
        -2px 2px 4px rgb(61, 61, 61);
}
.btn:hover {
    background: #028349;
}
.board {
    width: 300px;
    background: #eee;
    margin: 0 auto;
}
</style>

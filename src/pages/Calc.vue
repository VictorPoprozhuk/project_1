<template>
    <div class="page">
        <div class="calc">
            <input type="text" v-model="result" @keyup.enter="calc" />
            <div class="board">
                <div class="numbers">
                    <div
                        class="num bnt"
                        @click="input(num)"
                        v-for="num in numbers"
                    >
                        {{ num }}
                    </div>
                    <button @click="input(',')" class="num bnt">
                        ,
                    </button>
                    <button @click="reset" class="clear num bnt">
                        C
                    </button>
                </div>
                <div class="operators">
                    <div
                        class="operator bnt"
                        v-for="operator in operators"
                        @click="input(operator)"
                    >
                        {{ operator }}
                    </div>
                </div>
            </div>
            <button class="icl" @click="calc">=</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            operators: ["/", "*", "+", "-"],
            result: "",
        };
    },
    methods: {
        input(char) {
            if (this.result === "Іди нахуй") {
                this.result = "";
            }
            this.result = this.result.toString();
            if (this.result.length < 15) {
                this.result += char;
            } else return;
        },
        reset() {
            this.result = "";
        },
        calc() {
            try {
                let input = this.result.split("");
                if (
                    input[input.length - 1] === "-" ||
                    input[input.length - 1] === "/" ||
                    input[input.length - 1] === "*" ||
                    input[input.length - 1] === "+"
                ) {
                    input.splice(input.length - 1);
                    return (this.result = eval(input.join("")));
                }
                if (!Number.isInteger(eval(this.result))) {
                    return (this.result = eval(this.result).toFixed(
                        2
                    ));
                } else this.result = eval(this.result);
            } catch (e) {
                this.result = "Іди нахуй";
            }
        },
    },
};
</script>
<style scoped>
.page {
    height: 500px;
    width: 100%;
}
.calc {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    background: black;
}
input {
    margin: 50px 0 20px;
    width: 100%;
    font-size: 40px;
    padding-right: 20px;
    text-align: right;
    border: none;
    outline: none;
    background: black;
    color: white;
}
.board {
    display: flex;
    padding: 5px;
}
.numbers {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
}

.bnt {
    font-size: 35px;
    height: 75px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 5px;
    transition: background 0.4s;
    cursor: pointer;
}
.num {
    width: calc(100% / 3 - 10px);
    background: rgb(59, 59, 59);
}
.num:active {
    background: rgb(197, 197, 197);
}
.operators {
    width: 25%;
    display: flex;
    flex-direction: column;
}
.operator {
    background: rgb(255, 149, 11);
}
.operator:active {
    background: rgb(243, 193, 128);
}
.icl {
    width: 90%;
    border-radius: 20px;
    height: 50px;
    font-size: 35px;
    background: rgb(59, 59, 59);
    margin: 0 10px 10px 10px;
    transition: background 0.4s;
    cursor: pointer;
}
.icl:active {
    background: rgb(197, 197, 197);
}
</style>

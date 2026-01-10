import { atom } from "nanostores";

export const diceValue = atom(1);

export function rollDice() {
    diceValue.set(Math.floor(Math.random() * 6) + 1);
}
// export const useDiceStore = defineStore("dice", () => {
//     const diceValue = ref(1); //initial value

//     const roll = () => {
//         diceValue.value = Math.floor(Math.random() * 6) + 1;
//     };

//     return { diceValue, roll };
// });
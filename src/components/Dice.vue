<script setup>
    import IconDie1 from './icons/IconDie1.vue';
    import IconDie2 from './icons/IconDie2.vue';
    import IconDie3 from './icons/IconDie3.vue';
    import IconDie4 from './icons/IconDie4.vue';
    import IconDie5 from './icons/IconDie5.vue';
    import IconDie6 from './icons/IconDie6.vue';

    import { useStore } from "@nanostores/vue";
    import { diceValue, rollDice } from '../stores/dice';

    // const diceStore = useDiceStore();
    const value = useStore(diceValue);
    // const getDiceSymbol = () => {
    //     switch(diceStore.diceValue) {
    //         case 1: return IconDie1;
    //         case 2: return IconDie2;
    //         case 3: return IconDie3;
    //         case 4: return IconDie4;
    //         case 5: return IconDie5;
    //         case 6: return IconDie6;
    //         default: return IconDie2;
    //     }
    // }

    const diceIcons = {
        1: IconDie1,
        2: IconDie2,
        3: IconDie3,
        4: IconDie4,
        5: IconDie5,
        6: IconDie6,
    };

    const getDiceSymbol = () => diceIcons[value.value] ?? IconDie1;
</script>

<template>
    <div class="dicebox">
        <component :is="getDiceSymbol()" @click="rollDice()" />
    </div>
</template>
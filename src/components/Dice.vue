<script setup>
    import { Icon } from "@iconify/vue";
    import IconDie1 from './icons/IconDie1.vue';
    import IconDie2 from './icons/IconDie2.vue';
    import IconDie3 from './icons/IconDie3.vue';
    import IconDie4 from './icons/IconDie4.vue';
    import IconDie5 from './icons/IconDie5.vue';
    import IconDie6 from './icons/IconDie6.vue';

    import { useStore } from "@nanostores/vue";
    import { diceValue, rollDice } from '../stores/dice';

    // const { name, size = '1em', class: className = ''} = Astro.props;
    // <Icon icon={name} width={size} height={size} class={className} />
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
    // const diceIcons = {
    //     1: 'mdi:die-1',
    //     2: 'mdi:die-2',
    //     3: 'mdi:die-3',
    //     4: 'mdi:die-4',
    //     5: 'mdi:die-5',
    //     6: 'mdi:die-6',
    // };
    const getDiceSymbol = () => diceIcons[value.value] ?? IconDie1;
    // const getDiceSymbol = () => diceIcons[value.value] ?? "mdi:die-1";
</script>
<template>
<!-- <Icon icon="mdi:die-1" width="2.5em" height="2.5em" />
<Icon icon="mdi:die-2" width="2.5em" height="2.5em" />
<Icon icon="mdi:die-3" width="2.5em" height="2.5em" />
<Icon icon="mdi:die-4" width="2.5em" height="2.5em" />
<Icon icon="mdi:die-5" width="2.5em" height="2.5em" />
<Icon icon="mdi:die-6" width="2.5em" height="2.5em" /> -->
<div class="dicebox">
    <!-- <Icon :icon="getDiceSymbol()" class="dice-button" @click="rollDice()" /> -->
        <component :is="getDiceSymbol()" @click="rollDice()" />
    </div>
</template>

<style scoped>
    .dice-button {
        width: 2.5em;
        height: 2.5em;
        border: 1px solid mediumslateblue;
        border-radius: .25rem;
        background: none;
        border: none;
        color: inherit;
        padding: 0;
        margin: 0;
    } 
</style>
<script setup>
    import DesignerImage from "./DesignerImage.vue";
    import FlowerImage from "./FlowerImage.vue";
    import { ref } from "vue";
    const flower = ref(true);
</script>

<template>
    <div @click="flower = !flower">
        <div v-if="flower"><component :is="FlowerImage" /></div>
        <div v-else><component :is="DesignerImage" /></div>
    </div>
</template>


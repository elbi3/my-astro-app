<template>
    <button class="dice-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g fill="none" stroke="midnightblue" stroke-linecap="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" stroke-linejoin="round" rx="2"/><path d="M12.25 11.75v.5M12 12h.5"/></g></svg>
    </button>
</template>

<style scoped>
svg {
    border: 1px solid white;
    border-radius: .25rem;
}
svg:hover {
    background-color: whitesmoke;   
}
svg:active,
svg:focus {
    background-color: thistle;
}
</style>
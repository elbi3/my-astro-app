<template>
    <button class="dice-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g fill="none" stroke="midnightblue" stroke-linecap="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" stroke-linejoin="round" rx="2"/><path d="M8 8h.5m7 0h.5m-4 4h.5m-.25-.25v.5M8 16h.5m7 0h.5M8.25 7.75v.5m0 7.5v.5m7.5-8.5v.5m0 7.5v.5"/></g></svg>
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
<template>
    <button class="dice-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g fill="none" stroke="midnightblue" stroke-linecap="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" stroke-linejoin="round" rx="2"/><path d="M8 8h.5m-.25-.25v.5m0 3.5v.5m0 3.5v.5M15.5 8h.5m-.25-.25v.5m0 3.5v.5m0 3.5v.5M8 12h.5m7 0h.5m-8 4h.5m7 0h.5"/></g></svg>
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
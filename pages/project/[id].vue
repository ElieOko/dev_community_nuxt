<script setup>
const route = useRoute()
// const $route = useNuxtApp()
// console.log("route =>",$route);
</script>

<template>
    <div>
        <h2> Hi {{ route.params.id }}</h2>
    </div>
</template>


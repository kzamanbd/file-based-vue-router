<script setup lang="ts">
    import TheWelcome from '../components/TheWelcome.vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    console.log(router.getRoutes());
</script>

<template>
    <main>
        <TheWelcome />
    </main>
</template>

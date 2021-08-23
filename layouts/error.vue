

<!-- Script -->
<script>
export default {
  props: ['error'],
};
</script>

<!-- Template -->
<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <p v-text="error"></p>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>
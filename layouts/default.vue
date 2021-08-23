

<!-- Script -->
<script>

// Imports
import TheHeader from '~/components/page/TheHeader';

// Exports
export default {
  
  // Configuration
  name: 'ItemListLayout',
  components: { TheHeader },

};
</script>

<!-- Template -->
<template>
  <div class="w-screen h-screen overflow-y-scroll fixed top-0 left-0 bg-gray-100">
    <TheHeader />
    <div class="w-9/12 mx-auto py-16">
      <Nuxt />
    </div>
  </div>
</template>
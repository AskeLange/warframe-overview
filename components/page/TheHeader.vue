

<!-- Script -->
<script>

// Imports
import TheCategories from '~/components/page/TheCategories';

// Exports
export default {
  name: 'TheHeader',
  components: { TheCategories }
};
</script>

<!-- Template -->
<template>
  <header class="sticky -top-32 w-full bg-white z-10 border-b border-gray-200">
    <div class="w-9/12 mx-auto pb-6 pt-16">
      <div class="relative font-sans mb-8">
        <div class="text-sm font-light uppercase tracking-widest">Warframe Codex</div>
        <div class="text-2xl font-bold uppercase tracking-widest">Categories</div>
        
        <!-- Category controls -->
        <div class="control right-12 opacity-40">
          <svg-icon name="chevron-left" />
        </div>

        <div class="control right-0">
          <svg-icon name="chevron-right" />
        </div>

      </div>

      <TheCategories class="-mx-12" />
    </div>
  </header>
</template>

<!-- Styling -->
<style scoped>
.control { 

  @apply absolute bottom-0 w-10 h-10 rounded-full bg-primary-dark hover:bg-primary-dark cursor-pointer; 
  
}

.control svg { 
  
  @apply absolute top-1/2 left-1/2  w-3 h-3; 
  transform: translate(-50%,-50%);
  fill: #fff; 
  
}
</style>


<!-- Script -->
<script>

// Exports
export default {
  name: 'AppSwiper',
  props: { items: Array },
};
</script>

<!-- Template -->
<template>
  <div class="relative">
    <div class="flex flex-nowrap hide-scroll overflow-x-scroll px-12">
      <div v-for="(item, n) in items" :key="`item#${n}`">
        <slot name="item" :item="item" :index="n"></slot>
      </div>
    </div>

    <div class="overlay">
    </div>
  </div>
</template>

<!-- Styling -->
<style scoped>

.hide-scroll::-webkit-scrollbar {
  display: none;
}

.hide-scroll {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.overlay:before,
.overlay:after {

  content: '';
  @apply block absolute top-0 w-12 h-full pointer-events-none;

}

.overlay:before {

  @apply left-0;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);

}

.overlay:after {

  @apply right-0;
  background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);

}

</style>
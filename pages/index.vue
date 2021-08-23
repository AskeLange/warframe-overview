

<!-- Script -->
<script>

// Imports
import { mapState } from 'vuex';
import ItemCard from '~/components/page/ItemCard';

// Exports
export default {
  
  // Configuration
  name: 'Home',
  components: { ItemCard },

  // Computed
  computed: mapState ({
    items: state => {
      let { elements, activeCategory } = state.items;
      if (Object.keys (elements).length) return elements [activeCategory].slice (0, 20);
      else return [ ];
    }
  }),

  // Life cycle events
  // Mounted
  created () { 
    this.$store.dispatch ('items/Fetch'); 
  }

};
</script>


<!-- Template -->
<template>
  <div class="page-wrapper">
    <div class="flex flex-wrap">
      <ItemCard v-for="(item, n) in items" :key="`items#${n}`" :item="item"
        class="flex-1 m-2"/>
    </div>
    <NuxtChild />
  </div>
</template>
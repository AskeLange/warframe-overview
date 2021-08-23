

<!-- Script -->
<script>

// Imports
import { mapState } from 'vuex';
import AppSwiper from '~/components/global/AppSwiper';

// Exports
export default {
  
  // Configuration
  name: 'TheCategories',
  components: { AppSwiper },

  // Computed
  computed: mapState ({
    activeCategory: state => state.items.activeCategory,
    categories: state => {
      let c = state.items.categories.concat ([ ]);
      c.sort ((a, b) => (a > b) * 2 - 1);
      return c;
    }
  }),

  // Methods
  methods: {
    setActiveCategory: function (index) {
      this.$store.commit ('items/SetActiveCategory', { index });
    }
  }

};
</script>

<!-- Template -->
<template>
  <div class="categories-wrapper">
    <AppSwiper :items="categories" class=""> 
      <template slot="item" slot-scope="{ item }">
        <div v-text="item" @click="e => setActiveCategory (item)" 
          :class="['px-12 py-3 border rounded-full text-xs font-normal uppercase whitespace-nowrap mr-2 cursor-pointer',
          { 'text-primary hover:text-primary-dark border-primary-light hover:border-primary': item != activeCategory },
          { 'bg-primary-dark border-primary-dark text-white ': item == activeCategory  }]">
        </div>
      </template>
    </AppSwiper>
  </div>
</template>
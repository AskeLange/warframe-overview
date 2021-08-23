

<!-- Script -->
<script>

// Imports
import { mapState } from 'vuex';

// Exports
export default {
  
  // Configuration
  name: 'SingleItemPage',
  layout: 'single',
  data () { return { id: this.$route.params.id }},

  // Computed
  computed: {
    ...mapState ({
      items: state => state.items.elements
    }),

    item () {

      // Generates list of items
      let items = Object.keys (this.items).reduce (( t=[], c ) => {
        if (typeof t != 'object') return this.items [c];
        return t.concat (this.items [c]);
      });

      // Finds item
      let e = items.find (e => e.uniqueName == this.id);
      if (!e) this.$router.push ({ path: '/' });
      else return e;

    }
  },

  // Methods
  methods: {
    formatDate: function (dateString) {
      let d = new Date (dateString);
      return `${d.getDate ()} / ${d.getMonth ()+1} - ${d.getFullYear ()}`;
    }
  }

};
</script>

<!-- Template -->
<template>
  <div class="single-item-page fixed z-20 top-0 left-0 w-screen h-screen bg-black bg-opacity-20 overflow-y-scroll" v-if="item" v-anime="{ opacity: [0, 1], duration: 200, easing: 'cubicBezier(.75,0,.35,1)' }">
    <div class="pag relative w-8/12 mx-auto my-32 bg-white rounded p-2 shadow-lg pb-32 page" v-anime="{ translateY: [256, 0], duration: 200, easing: 'cubicBezier(.75,0,.35,1)' }">
      <div class="relative mb-32">
        <div class="w-full h-96 bg-cover bg-center bg-gray-200 bg-opacity-100 rounded opacity-20" 
          :style="`background-image:url(https://cdn.warframestat.us/img/${item.imageName})`"></div>

        <div class="absolute -bottom-11 w-full">
          <div class="uppercase text-base font-light mx-auto w-min whitespace-nowrap mb-2" v-text="item.type"></div>
          <div class="uppercase text-7xl tracking-widest font-bold text-center" v-text="item.name"></div>
        </div>
      </div>

      <div class="relative w-2/4 mx-auto" v-if="item.description">
        <div class="uppercase text-1xl font-medium text-center tracking-widest" v-text="'Overview'"></div>
        <div class="border-b border-gray-200 w-8 mx-auto mt-4"></div>
        <div class="mt-4 leading-6 tracking-wide text-sm font-light text-center" v-text="item.description"></div>
      </div>

      <div class="relative w-2/4 mx-auto mt-16" v-if="item.drops">
        <div class="uppercase text-1xl font-medium text-center tracking-widest" v-text="'Drops'"></div>
        <div class="border-b border-gray-200 w-8 mx-auto mt-4 mb-4"></div>
        <div v-for="(drop, n) in item.drops" :key="`drop#${n}`" class="leading-6 tracking-wide text-sm font-light">
          <span v-text="drop.location"></span>
          <span class="float-right" v-text="`${Math.round (drop.chance*1000)/10}%`"></span>
        </div>
      </div>

      <div class="relatiev w-2/4 mx-auto mt-16" v-if="item.patchlogs">
        <div class="uppercase text-1xl font-medium text-center tracking-widest" v-text="'Patches'"></div>
        <div v-for="(log, n) in item.patchlogs" :key="`patchlog#${n}`">
          <div class="border-b border-gray-200 w-8 mx-auto mt-4 mb-6"></div>
          <div class="text-sm font-light uppercase text-center" v-text="log.name"></div>
          <div class="text-sm font-thin uppercase text-center" v-text="formatDate(log.date)"></div>
          <div class="mt-2 text-sm font-thin tracking-wide leading-6 text-center" v-text="log.changes"></div>
        </div>
      </div>

    </div>
  </div>
</template>
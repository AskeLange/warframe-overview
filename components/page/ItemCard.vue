

<!-- Script -->
<script>
export default {
  
  // Configuration
  name: 'ItemCard',
  props: { item: Object },

  // Methods
  methods: {
    truncateText: function (text, length) {
      if (!text || text.length <= length) return text;
      let t = text.substring (0, length).split (' ');
      if (t.length > 1) t.splice (t.length - 1, 1);
      return t.join (' ') + ' ...';
    }
  }

};
</script>

<!-- Template -->
<template>
  <nuxt-link :to="`/${item.uniqueName}`" class="relative bg-white rounded-lg w-64 min-w-1/5 group cursor-pointer">
    <div class="w-full h-48 bg-cover bg-center bg-gray-100 bg-opacity-50 rounded-t-md opacity-100 group-hover:bg-opacity-40" 
      :style="`background-image:url(https://cdn.warframestat.us/img/${item.imageName})`"></div>
    
    <div class="relative p-6">
      <div class="hidden absolute top-4 right-3 w-9 h-9 rounded-full bg-white">
        <svg-icon name="chevron-right" class="absolute w-3 h-3 top-3 left-3 fill-primary-dark rotate-90"/>
      </div>

      <div class="w-full whitespace-nowrap overflow-hidden overflow-ellipsis text-base font-normal" 
        v-text="truncateText(item.name, 16)"></div>
      <div class="w-full text-sm tracking-wide leading-4 font-light mt-2" 
        v-text="truncateText(item.description, 80)"></div>
    
    </div>
  </nuxt-link>
</template>

<!--

{
  "category": "Fish",
  "description": "These fish hatch out of translucent pods formed in caverns below the Infested landscape. They hover to feed.",
  "imageName": "amniophysi.png",
  "name": "Amniophysi",
  "patchlogs": [
    {
      "name": "Heart of Deimos: Update 29",
      "date": "2020-08-25T19:57:29Z",
      "url": "https://forums.warframe.com/topic/1216407-heart-of-deimos-update-29/",
      "additions": "",
      "changes": "",
      "fixes": "Amniophysi "
    }
  ],
  "tradable": true,
  "type": "Fish",
  "uniqueName": "/Lotus/Types/Items/Fish/Deimos/InfestedCommonDFishItem"
}

drops: [{
  chance: 0.0141
  location: "Veil/Erato (Skirmish), Rotation C"
  rarity: "Rare"
  type: "Arcane Grace"
}, ...]

-->
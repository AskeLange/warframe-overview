

<!-- Script -->
<script>
export default {
  
  // Configuration
  name: 'HelloWorld',
  props: { },

  // Life cycle events
  created () { this.unsub = this.$store.subscribe (this.onStoreChange) },
  beforeUnmount () { this.unsub () },

  // Methods
  methods: {
    onStoreChange: function (mutations, state) {
      
    }
  },

};
</script>

<!-- Template -->
<template>
  <div class="hello-world">
    Hello World!
  </div>
</template>
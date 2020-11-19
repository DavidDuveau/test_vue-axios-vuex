<template>
  <div class="home">
    <HearthStoneComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HearthStoneComponent from "@/components/HearthStoneComponent.vue";

export default {
  name: "Home",
  components: {
    HearthStoneComponent,
  },
};
</script>

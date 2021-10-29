<template>
  <div class="main-content">
      <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
.main-content {
  width: 100%;
  height: 100%;
}
</style>

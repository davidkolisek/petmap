<template>
  <div>
    <div class="img-wrapper">
      <img v-bind:src="imageUrl" v-bind:alt="title" />
    </div>
    <div class="base-card-content">
      <h5>{{ title }}</h5>
      <p>
        {{ desc }}
      </p>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: {
    imageUrl: String,
    title: String,
    desc: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.base-card {
  background: #fff;
  z-index: 3;
  max-width: 260px;
  h5{
    font-weight: bold;
  }
  .img-wrapper {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .base-card-content {
    padding: 1rem;
  }
}
</style>

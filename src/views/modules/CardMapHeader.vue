<template>
  <div class="map-header">
    <div class="header-col">
      <h4 class="map-header-title">{{ title }}</h4>
      <span class="map-header-subtitle">{{ subtitle }}</span>
    </div>
    <div class="header-col">
      <slot />
    </div>
    <div class="header-col"><weather-today /></div>
  </div>
</template>

<script>
import WeatherToday from "../../components/WeatherToday.vue";
export default {
  components: {
    WeatherToday,
  },
  name: "CardMapHeader",
  props: {
    title: "",
    subtitle: "",
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.map-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: -9px -7px 19px -11px #000000;
  z-index: 2;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    position: unset;
  }
  .header-col {
    width: 100%;

    &:nth-child(1) {
        @media (max-width: 768px) {
          display: flex;
          flex-direction: row;
          align-items: center;
          span {
            display: none;
          }
        }
      h4 {
        @media (max-width: 768px) {
          font-size: 1.2rem;
        }
      }
    }
    &:nth-child(2) {
      display: flex;
      justify-content: center;

      @media (max-width: 768px) {
        position: absolute;
        bottom: 1rem;
        z-index: 4;
      }
    }
    &:nth-child(3) {
      display: flex;
      justify-content: flex-end;
      text-align: right;
      @media (max-width: 768px) {
        position: absolute;
        top: .3rem;
        right: 1rem;
        z-index: 4;
      }
    }
  }
  .map-header-title {
    margin: 0;
    font-weight: 600;
  }
  .map-header-subtitle {
    margin: 0;
    font-size: .8rem;
  }
}
</style>

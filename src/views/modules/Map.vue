<template>
  <div class="map-card-wrapper">
    <CardMapHeader title="Mapa výbehov pre psov">
      <button
        @click="testToggle"
        :class="
          testBol === true
            ? 'main-btn dark-map-btn active-btn is true'
            : 'main-btn dark-map-btn is false'
        "
      >
        Dark map
      </button>
      <button
        @click="testToggle"
        :class="
          testBol === false
            ? 'main-btn light-map-btn active-btn is true'
            : 'main-btn light-map-btn is false'
        "
      >
        Light map
      </button>
    </CardMapHeader>

    <GMapMap
      :center="{ lat: 48.1356952, lng: 17.0403788 }"
      :zoom="12"
      v-bind:options="optionsDark"
      map-type-id="terrain"
      style="width: 100vw; height: 100vh"
      :class="testBol === false ? 'd-none' : 'd-block'"
    >
      <GMapMarker
        :key="index"
        class="asds"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        @click="toggleCard(m.id)"
        :icon="{
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Creative-Tail-Animal-dog.svg/1024px-Creative-Tail-Animal-dog.svg.png',
          scaledSize: { width: 50, height: 50 },
          labelOrigin: { x: 16, y: -10 },
        }"
      >
      </GMapMarker>
    </GMapMap>

    <GMapMap
      :center="{ lat: 48.1356952, lng: 17.0403788 }"
      :zoom="12"
      v-bind:options="optionsLight"
      map-type-id="terrain"
      style="width: 100vw; height: 100vh"
      :class="testBol === true ? 'd-none' : 'd-block'"
    >
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        @click="toggleCard(m.id)"
        :icon="{
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Creative-Tail-Animal-dog.svg/1024px-Creative-Tail-Animal-dog.svg.png',
          scaledSize: { width: 50, height: 50 },
          labelOrigin: { x: 16, y: -10 },
        }"
      >
      </GMapMarker>
    </GMapMap>

    <div class="scroll-wrapper">
      <BaseCard
        :key="index"
        v-for="(m, index) in markers"
        :class="'base-card base-card' + m.id"
        :title="m.name"
        :imageUrl="m.img"
        :desc="m.desc"
      >
        <button @click="closeCard"></button>
        <review-rating v-bind:ratingNumber="m.rating"/>
      </BaseCard>
    </div>
  </div>
</template>

<script>
import BaseCard from "../../components/BaseCard.vue";
import ReviewRating from '../../components/ReviewRating.vue';
import CardMapHeader from "../modules/CardMapHeader.vue";
import mapStyleDark from "./mapstyle/dark";
import mapStyleLight from "./mapstyle/light";
import vyberPokrok from "../../../src/assets/images/pokrok-vybeh.png";
import vyberPetrzalka from "../../../src/assets/images/petrzalka-vybeh.png";
import vyberPolna from "../../../src/assets/images/polna-vybeh.png";
export default {
  name: "App",
  components: {
    BaseCard,
    CardMapHeader,
    ReviewRating,
  },
  data() {
    const openedMarker = null;
    const test = false;
    return {
      testBol: test,
      styleLightMap: mapStyleLight,
      styleDarkMap: mapStyleDark,
      openedMarkerID: openedMarker,
      center: { lat: 48.1356952, lng: 17.0403788 },
      optionsLight: {
        styles: mapStyleLight,
      },
      optionsDark: {
        styles: mapStyleDark,
      },
      markers: [
        {
          id: 1,
          rating: 4.5,
          name: "Park pre psov - Pokrok",
          desc: "Oploteny vyber pre psov bla bla",
          img: vyberPokrok,
          position: {
            lat: 48.166525,
            lng: 17.122163,
          },
        },
        {
          id: 2,
          rating: 5,
          name: "Psí Park Petržalka",
          desc: "Oploteny vyber pre psov bla bla",
          img: vyberPetrzalka,
          position: {
            lat: 48.1243532,
            lng: 17.1028739,
          },
        },
        {
          id: 3,
          rating: 3.4,
          name: "Psí Park Polna",
          desc: "Vybeh v meste pri contorine",
          img: vyberPolna,
          position: {
            lat: 48.149278,
            lng: 17.124715,
          },
        },
      ],
    };
  },
  methods: {
    openMarker(id) {
      this.openedMarkerID = id;
    },
    toggleCard(id) {
      const specDiv = document.querySelector(".base-card" + id);
      const allDivs = document.querySelectorAll(".base-card");
      allDivs.forEach(function (a) {
        a.classList.remove("active");
      });
      specDiv.classList.add("active");
    },
    closeCard() {
      const allDivs = document.querySelectorAll(".base-card");
      allDivs.forEach(function (a) {
        a.classList.remove("active");
      });
    },
    testToggle() {
      if (this.testBol === false) {
        this.testBol = !this.testBol;
      } else {
        this.testBol = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.asds {
}
.map-card-wrapper {
  height: 100%;
  border-radius: 14px;
  position: relative;
  overflow: hidden;
}
.vue-map-container {
  height: calc(100% - 77px);
  position: relative;
  z-index: 1;
  @media(max-width: 768px){
  height: calc(100% - 56px);
  }
}
.scroll-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
  .base-card {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: -280px;
    right: 0;
    top: 91px;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee;
    max-width: 260px;
    transition: all ease 250ms;
    @media(max-width:768px){
    top: 55px;
    }

    &.active {
      /* display: block; */
      left: 0;
      transition: all ease 250ms;
    }
    button {
      width: 40px;
      height: 40px;
      position: absolute;
      top: calc(50% - 28px);
      right: -20px;
      border-radius: 99px;
      background: #463bde;
      border: none;
      color: #fff;
      transition: all ease 250ms;
      &:before,
      &:after {
        content: " ";
        width: 14px;
        height: 2px;
        background: #fff;
        position: absolute;
        right: 14px;
      }
      &:before {
        content: " ";
        transform: rotate(45deg);
        bottom: 15px;
      }
      &:after {
        content: " ";
        transform: rotate(-45deg);
        top: 15px;
      }
      &:hover {
        transition: all ease 250ms;
        opacity: 1;
        transform: scale(1.05, 1.05);
      }
    }
  }
}
.main-btn {
  background: #f4f4f6;
  padding: 1rem;
  border: none;
  color: #1f3052;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  transition: all ease 200ms;
  &:first-child {
    margin-right: 0.25rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:last-child {
    margin-right: 0.25rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &.active-btn {
    transition: all ease 200ms;
    background: #1f3052;
    color: #fff;
  }
}
</style>

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
        <review-rating v-bind:ratingNumber="m.rating" />
      </BaseCard>
    </div>
  </div>
</template>

<script>
import BaseCard from "../../components/BaseCard.vue";
import ReviewRating from "../../components/ReviewRating.vue";
import CardMapHeader from "../modules/CardMapHeader.vue";
import mapStyleDark from "./mapstyle/dark";
import mapStyleLight from "./mapstyle/light";
import vyberPokrok from "../../../src/assets/images/vybeh-pokrok.jpg";
import vyberPanonska from "../../../src/assets/images/vybeh-panonska.jpg";
import vyberPolna from "../../../src/assets/images/vybeh-polna.jpg";
import vyberVysehradska from "../../../src/assets/images/vybeh-vysehradska.jpg";
import vyberHolicska from "../../../src/assets/images/vybeh-holicska.jpg";
import vyberSienkiewiczova from "../../../src/assets/images/vybeh-sienkiewiczova.jpg";
import vyberDostojevskeho from "../../../src/assets/images/vybeh-dostojevskeho.jpg";
import vybehJurajov from "../../../src/assets/images/vybeh-jurajov.jpg";
import vybehPalarikova from "../../../src/assets/images/vybeh-palarikova.jpg";
import vybehBrezovska from "../../../src/assets/images/vybeh-brezovska.jpg";
import vybehCernockeho from "../../../src/assets/images/vybeh-cernockeho.jpg";
import vybehDrienova from "../../../src/assets/images/vybeh-drienova.jpg";
import vybehTomasikova from "../../../src/assets/images/vybeh-tomasikova.jpg";
import vybehSyslia from "../../../src/assets/images/vybeh-syslia.jpg";
import vybehAstronomicka from "../../../src/assets/images/vybeh-astronomicka.jpg";
import vybehVrakunska from "../../../src/assets/images/vybeh-vrakunska.jpg";
import vybehMelickovej from "../../../src/assets/images/vybeh-melickovej.jpg";
import vybehStudenohorska from "../../../src/assets/images/vybeh-studenohorska.jpg";
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
          desc: "Výber - Nové mesto",
          img: vyberPokrok,
          position: {
            lat: 48.166525,
            lng: 17.122163,
          },
        },
        {
          id: 2,
          rating: 5,
          name: "Psí Park Petržalka - Panónska",
          desc: "Výber - Petržalka",
          img: vyberPanonska,
          position: {
            lat: 48.1243532,
            lng: 17.1028739,
          },
        },
        {
          id: 3,
          rating: 3.4,
          name: "Psí Park Poľná - Poľná",
          desc: " Výber - Staré Mesto",
          img: vyberPolna,
          position: {
            lat: 48.149278,
            lng: 17.124715,
          },
        },
        {
          id: 4,
          rating: 4.7,
          name: "Oplotený výbeh psov - Vyšehradská",
          desc: "Výber - Petržalka",
          img: vyberVysehradska,
          position: {
            lat: 48.0958536,
            lng: 17.103603,
          },
        },
        {
          id: 5,
          rating: 4.7,
          name: "Oplotený výbeh psov - Holičská",
          desc: "Výber - Petržalka",
          img: vyberHolicska,
          position: {
            lat: 48.10905,
            lng: 17.103998,
          },
        },
        {
          id: 6,
          rating: 4,
          name: "Park pre psov - Sienkiewiczova",
          desc: "Výber - Staré Mesto",
          img: vyberSienkiewiczova,
          position: {
            lat: 48.1428349,
            lng: 17.1158828,
          },
        },
        {
          id: 7,
          rating: 4.3,
          name: "Psi park - Dostojevského",
          desc: "Výber - Staré Mesto",
          img: vyberDostojevskeho,
          position: {
            lat: 48.1432212,
            lng: 17.1225564,
          },
        },
        {
          id: 8,
          rating: 4.3,
          name: "Psí Park - Jurajov výbeh - Lehockého",
          desc: "Výber - Staré Mesto",
          img: vybehJurajov,
          position: {
            lat: 48.1547757,
            lng: 17.1130657,
          },
        },
        {
          id: 9,
          rating: 4.3,
          name: "Výbeh pre psov - Palárikova",
          desc: "Výber - Staré Mesto",
          img: vybehPalarikova,
          position: {
            lat: 48.1578902,
            lng: 17.1084653,
          },
        },
        {
          id: 10,
          rating: 4,
          name: "Výbeh pre psov - Brezovská",
          desc: "Výber - Nové Mesto",
          img: vybehBrezovska,
          position: {
            lat: 48.1734375,
            lng: 17.1334613,
          },
        },
        {
          id: 11,
          rating: 4.8,
          name: "Agility ihrisko - Černockého",
          desc: "Výber - Rača",
          img: vybehCernockeho,
          position: {
            lat: 48.2002733,
            lng: 17.1474907,
          },
        },
        {
          id: 12,
          rating: 4.7,
          name: "Oplotený výbeh pre psov - Drieňová",
          desc: "Výber - Ružinov",
          img: vybehDrienova,
          position: {
            lat: 48.1599893,
            lng: 17.1493881,
          },
        },
        {
          id: 13,
          rating: 4.6,
          name: "Oplotený výbeh pre psov Ružinov",
          desc: "Výber - Ružinov",
          img: vybehTomasikova,
          position: {
            lat: 48.1586533,
            lng: 17.1626927,
          },
        },
        {
          id: 14,
          rating: 5,
          name: "Výbeh pre psov Prievoz - Syslia",
          desc: "Výber - Ružinov",
          img: vybehSyslia,
          position: {
            lat: 48.1429825,
            lng: 17.1690464,
          },
        },
        {
          id: 15,
          rating: 4.3,
          name: "Výbeh pre psy - Astronomická",
          desc: "Výber - Ružinov",
          img: vybehAstronomicka,
          position: {
            lat: 48.1604001,
            lng: 17.1777978,
          },
        },
        {
          id: 16,
          rating: 4,
          name: "Psí Park Karlova ves - Hany Meličkovej",
          desc: "Výber - Karlova ves",
          img: vybehMelickovej,
          position: {
            lat: 48.149027,
            lng: 17.051787,
          },
        },
        {
          id: 17,
          rating: 5,
          name: "Psí Park Lamač - Studenohorská",
          desc: "Výber - Lamač",
          img: vybehStudenohorska,
          position: {
            lat: 48.194246,
            lng: 17.055165,
          },
        },
        {
          id: 18,
          rating: 4,
          name: "Psí Park Podunajské Biskupice - Vrakunská",
          desc: "Výber - Podunajské Biskupice",
          img: vybehVrakunska,
          position: {
            lat: 48.1372075,
            lng: 17.2000673,
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
  @media (max-width: 768px) {
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
    @media (max-width: 768px) {
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

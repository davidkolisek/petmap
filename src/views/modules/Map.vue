<template>
  <div class="map-card-wrapper">
    <CardMapHeader title="Mapa výbehov pre psov" subtitle="Bratislava">
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
      :center="{ lat: 48.1432912, lng: 17.1134732 }"
      :zoom="12"
      v-bind:options="optionsDark"
      map-type-id="terrain"
      style="width: 100vw; height: 100vh"
      :class="testBol === false ? 'd-none' : 'd-block'"
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

    <GMapMap
      :center="{ lat: 48.1432912, lng: 17.1134732 }"
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
        <review-rating v-bind:ratingNumber="m.rating" />
        <button @click="closeCard"></button>
        <p>
          {{ m.address }}
        </p>
        <a :href="m.gmapAddress" target="_blank" rel="noopener"
          >Zobraziť na Google maps</a
        >
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
import clusterImg from "../../../src/assets/images/vybeh-pokrok.jpg";
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
      clusterImg: clusterImg,
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
          address: "Križovatka ulice Pionierska a Kyjevská",
          gmapAddress:
            "https://www.google.com/maps/place/48%C2%B010'00.1%22N+17%C2%B007'20.0%22E/@48.166685,17.1216618,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d48.1666854!4d17.1222086",
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
          address: "Panónska cesta, Rusovská cesta, 851 01 Petržalka",
          gmapAddress:
            "https://www.google.com/maps/place/Ps%C3%AD+Park+Petr%C5%BEalka/@48.1243552,17.1049665,18.84z/data=!4m12!1m6!3m5!1s0x476c897448aa7bc1:0xbfaf1b7eb9879c98!2zUHPDrSBQYXJrIFBldHLFvmFsa2E!8m2!3d48.1243532!4d17.1050679!3m4!1s0x476c897448aa7bc1:0xbfaf1b7eb9879c98!8m2!3d48.1243532!4d17.1050679",
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
          address: "Poľná, 811 08 Bratislava",
          gmapAddress:
            "https://www.google.com/maps/place/Ps%C3%AD+park+Po%C4%BEn%C3%A1/@48.1492416,17.1245382,19.32z/data=!4m5!3m4!1s0x476c894805bd49db:0x798e63c8e9e5aef3!8m2!3d48.1492606!4d17.1247355",
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
          address: "Vyšehradská, 851 06 Petržalka",
          gmapAddress:
            "https://www.google.com/maps/place/Oploten%C3%BD+v%C3%BDbeh+psov/@48.0958784,17.1035204,18.81z/data=!4m5!3m4!1s0x476c89c6d3e3e297:0x6320172994c69cb0!8m2!3d48.0958536!4d17.103603",
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
          address: "Holíčska 3196/2, 851 05 Petržalka",
          gmapAddress:
            "https://www.google.com/maps/place/48%C2%B006'32.6%22N+17%C2%B006'14.5%22E/@48.109047,17.1034738,162m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x476c89bcfe4a17bb:0x6fedb7f5951f280e!2zSG9sw63EjXNrYSAzMTk2LzIsIDg1MSAwNSBQZXRyxb5hbGth!3b1!8m2!3d48.1087012!4d17.1041607!3m5!1s0x0:0x0!7e2!8m2!3d48.1090466!4d17.1040206",
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
          address: "Alžbetínska, 811 09 Bratislava",
          gmapAddress:
            "https://www.google.com/maps/place/48%C2%B008'32.6%22N+17%C2%B006'58.0%22E/@48.142397,17.1155508,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d48.1423974!4d17.1160984",
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
          address: "Dostojevského rad, Bratislava I, Staré Mesto",
          gmapAddress:
            "https://www.google.com/maps/place/Psi+park/@48.1431121,17.1224374,19.76z/data=!4m5!3m4!1s0x476c899fb325bc8b:0x4b8ff134ffa9545d!8m2!3d48.1431261!4d17.1225278",
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
          address: "Lehockého 2943/1, 811 06 Bratislava",
          gmapAddress:
            "https://www.google.com/maps/place/Ps%C3%AD+Park/@48.1544447,17.1127993,19.26z/data=!4m13!1m7!3m6!1s0x476c8951ebc3120b:0x56b6d3f6bb3e9a0b!2sLehock%C3%A9ho+2943%2F1,+811+06+Bratislava!3b1!8m2!3d48.1547049!4d17.1128878!3m4!1s0x476c897f2d2fc4f1:0xe45f7d023f9360c!8m2!3d48.154446!4d17.112801",
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
          address: "Palárikova 31, 811 04 Bratislava",
          gmapAddress:
            "https://www.google.com/maps/place/48%C2%B009'28.7%22N+17%C2%B006'33.5%22E/@48.157971,17.1087548,19z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d48.1579711!4d17.109302",
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
          address: "Brezovská 465/2, 831 03 Bratislava",
          gmapAddress:
            "https://www.google.com/maps/place/Cvi%C4%8Disko+pre+psov/@48.1734307,17.1333824,20.12z/data=!4m13!1m7!3m6!1s0x476c8ebbfe23529f:0x32d57a66a3a96563!2sBrezovsk%C3%A1+465%2F2,+831+03+Bratislava!3b1!8m2!3d48.1729307!4d17.1328556!3m4!1s0x476c8f8e28f7457b:0x173ea5af8fe1f4c4!8m2!3d48.1734375!4d17.1334613",
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
          address: "Černockého 3, 831 53 Bratislava",
          gmapAddress:
            "https://www.google.com/maps/place/Agility+ihrisko/@48.2004708,17.1476978,19.3z/data=!4m13!1m7!3m6!1s0x476c8e63bc7d6fed:0x5f220da2026071ad!2s%C4%8Cernock%C3%A9ho+3,+831+53+Bratislava!3b1!8m2!3d48.2000836!4d17.147259!3m4!1s0x476c8f783aeef355:0x83955c9718cb5ba1!8m2!3d48.2004587!4d17.1476647",
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
          address: "Drieňová 11, 821 03 Bratislava",
          gmapAddress:
            "https://www.google.com/maps/place/Oploten%C3%BD+v%C3%BDbeh+pre+psov/@48.1599378,17.1491921,19.47z/data=!4m13!1m7!3m6!1s0x476c8f3060eefca7:0x7556a7ebbd41aa5e!2sDrie%C5%88ov%C3%A1+11,+821+03+Bratislava!3b1!8m2!3d48.1606078!4d17.1498185!3m4!1s0x476c8f8eb230c8e1:0x1b14ce39c0a0f887!8m2!3d48.1598948!4d17.1492715",
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
          address: "Tomášikova 18, 821 02 Bratislava",
          gmapAddress:
            "https://www.google.com/maps/place/Oploten%C3%BD+v%C3%BDbeh+pre+psov+Ru%C5%BEinov/@48.1579938,17.1631568,19.71z/data=!4m5!3m4!1s0x476c8faa70603e75:0xb4a3a6781608206c!8m2!3d48.1579884!4d17.1632736",
          img: vybehTomasikova,
          position: {
            lat: 48.157981,
            lng: 17.163274,
          },
        },
        {
          id: 14,
          rating: 5,
          name: "Výbeh pre psov Prievoz - Syslia",
          desc: "Výber - Ružinov",
          address: "Syslia, 821 05 Ružinov",
          gmapAddress:
            "https://www.google.com/maps/place/V%C3%BDbeh+pre+psov+Prievoz/@48.1429734,17.1689761,20.45z/data=!4m13!1m7!3m6!1s0x476c88cf73eefc23:0x677248922183d48!2sSyslia+2831%2F8,+821+05+Bratislava!3b1!8m2!3d48.1429312!4d17.1695402!3m4!1s0x476c89df90e8e68f:0x19b58680bd7eb3bc!8m2!3d48.1429675!4d17.1692191",
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
          address: "Astronomická, 821 02 Ružinov",
          gmapAddress:
            "https://www.google.com/maps/place/V%C3%BDbeh+pre+psy+-+Astronomick%C3%A1/@48.1605693,17.177533,19.16z/data=!4m5!3m4!1s0x476c8fb2101b1951:0xbee2a31cc4aa0d14!8m2!3d48.1604387!4d17.1778101",
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
          address: "Hany Meličkovej, 841 05 Karlova Ves",
          gmapAddress:
            "https://www.google.com/maps/place/48%C2%B008'56.5%22N+17%C2%B003'06.5%22E/@48.149037,17.0512488,19z/data=!3m1!4b1!4m14!1m7!3m6!1s0x476c8ba2a900775d:0xa2405c493a25b457!2sHany+Meli%C4%8Dkovej+3448%2F33,+841+05+Karlova+Ves!3b1!8m2!3d48.1495245!4d17.0521597!3m5!1s0x0:0x0!7e2!8m2!3d48.1490374!4d17.0517957",
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
          address: "Malokarpatské námestie, 841 03 Bratislava",
          gmapAddress:
            "https://www.google.com/maps/place/48%C2%B011'39.2%22N+17%C2%B003'18.9%22E/@48.194228,17.0547058,19z/data=!3m1!4b1!4m14!1m7!3m6!1s0x476c8cf3cabd558d:0x608f5411818f442a!2sStudenohorsk%C3%A1+4629%2F2A,+841+03+Bratislava!3b1!8m2!3d48.1940548!4d17.0549343!3m5!1s0x0:0x0!7e2!8m2!3d48.1942277!4d17.0552529",
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
          address: "Vrakunská 9937/23, 821 06 Bratislava",
          gmapAddress:
            "https://www.google.com/maps/place/Ps%C3%AD+Park+Podunajsk%C3%A9+Biskupice/@48.1373445,17.1998537,18.89z/data=!4m5!3m4!1s0x476c88a8a0077d0b:0xe6fe4062adccb0ae!8m2!3d48.1372578!4d17.200086",
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
    replaceSrc() {
      const cluster = document.querySelectorAll(".cluster");
      console.log(cluster + 1);
      console.log(1);
    },
    created() {
      this.replaceSrc();
    },
    mounted() {
      this.replaceSrc();
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
      background: #1f3052;
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
    a {
      padding: 0.75rem 1rem;
      border-radius: 12px;
      width: 100%;
      text-align: center;
      color: white;
      text-decoration: none;
      background: #463ade;
      display: block;
        transition: all ease 250ms;
      &:hover{
        opacity: .9;
        transition: all ease 250ms;
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

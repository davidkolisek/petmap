<template>
  <div class="weather-widget">
    <div class="temp">
      <div>
        <img
          v-if="currIcon"
          :src="'http://openweathermap.org/img/wn/' + currIcon + '@2x.png'"
          alt=""
        />
        <!-- <img :src="'http://openweathermap.org/img/wn/' + currIcon && currIcon + '@2x.png'" alt=""> -->
      </div>
      <div>
        <h3>{{ currTemp && currTemp.toFixed() + '°' }}</h3>
      </div>
    </div>
    <p>
      <span>  Aktuálne počasie</span> <strong>{{ currCity && currCity }}</strong>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Posts",
  props: {},
  data() {
    return {
      currTemp: "",
      currCity: "",
      currIcon: "",
    };
  },
  methods: {
    async fetchData() {
      try {
        // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=48.148598&lon=17.107748&exclude=current&appid=4b7e9e61547608dc12e808ba8937da8f`;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Bratislava&units=metric&appid=4b7e9e61547608dc12e808ba8937da8f`;
        const response = await axios.get(url);
        const currIcon = response.data.weather[0].icon;
        const currTemp = response.data.main.temp;
        const currCity = response.data.name;
        this.currTemp = currTemp;
        this.currCity = currCity;
        this.currIcon = currIcon;
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          console.log("Server Error:", err);
        } else if (err.request) {
          // client never received a response, or request never left
          console.log("Network Error:", err);
        } else {
          console.log("Client Error:", err);
        }
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.weather-widget {
  text-align: right;
  .temp {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  h3 {
    font-size: 1.25rem;
    margin: 0;
    font-weight: 500;
      @media(max-width: 768px){
        font-size: 1rem;
      }
  }
  p {
    margin: 0;
      @media(max-width: 768px){
        font-size: .8rem;
      }
    span {
      @media(max-width: 768px){
        display: none;
      }
    }
    strong {
      font-weight: bold;
    }
  }
  img {
      width: 35px;
      height: auto;
      @media(max-width: 768px){
        width: 20px;
      }
      }
}
</style>

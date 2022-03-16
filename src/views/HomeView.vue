<template>
  <div class="home">
    <h2>Cities</h2>
    <div class="container">
      <ul>
        <li v-for="city in cities" :key="city.id">
          {{ city.name }}, {{ city.county }}, {{ city.country }}
          <router-link class="btn" :to="{ path: `/cities/${city.id}` }"
            >Edit
          </router-link>
          <button @click="deleteCity(city.id)">delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import citiesColRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  data() {
    return {
      cities: [],
      selectedDoc: null,
    };
  },
  methods: {
    async fetchCities() {
      let citiesSnapShot = await getDocs(citiesColRef);
      let cities = [];
      citiesSnapShot.forEach((city) => {
        let cityData = city.data();
        cityData.id = city.id;
        cities.push(cityData);
      });
      console.log(cities);
      this.cities = cities;
    },
    async deleteCity(cityId) {
      let cityRef = doc(citiesColRef, cityId);
      await deleteDoc(cityRef);
      alert("City deleted successully!");
      this.$router.go();
    },
  },

  created() {
    this.fetchCities();
  },
};
</script>

<style></style>

<template>
  <section class="grey-section">
    <div class="search-container">
      <h2 class="favorites-text">Collect your favourites</h2>
      <div class="input-wrapper">
        <span class="search-icon">
          <img src="/src/assets/icons/Search White.svg" alt="icon" />
        </span>
        <input
          type="text"
          placeholder="Search title and add to grid"
          v-model="searchQuery"
          @input="searchMovies(searchQuery)"
        />
      </div>
    </div>

    <!-- Search Results -->
    <div v-if="searchResults.length" class="search-results">
      <h3>Search Results</h3>
      <div class="image-gallery">
        <div
          class="image-box"
          v-for="(result, index) in searchResults"
          :key="result.id"
        >
          <img
            :src="result.image?.medium || '/src/assets/images/default.jpg'"
            :alt="result.name"
          />
          <p class="movie-name">{{ result.name }}</p>
          <button @click="addMovie(result)">Add</button>
        </div>
      </div>
    </div>

    <hr class="custom-hr" />

    <!-- Favorite Movies -->
    <div>
      <div class="image-gallery">
        <div class="image-box" v-for="(movie, index) in movies" :key="movie.id">
          <img
            :src="movie.image?.medium || '/src/assets/images/default.jpg'"
            :alt="movie.name"
          />
          <p class="movie-name">{{ movie.name }}</p>
          <p class="movie-summary" v-html="movie.summary"></p>
          <img
            class="close-icon"
            src="/src/assets/icons/Close Grey.svg"
            alt="close"
            @click="removeMovie(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import "../styles/hero.css";
import useMovies from "../composables/useMovies";

const {
  movies,
  searchQuery,
  searchResults,
  searchMovies,
  addMovie,
  removeMovie,
} = useMovies();
</script>

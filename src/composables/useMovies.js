import { ref, onMounted } from "vue";

export default function useMovies() {
  const movies = ref([]);
  const searchQuery = ref("");
  const searchResults = ref([]);

  onMounted(() => {
    fetchPopularShows();
  });

  async function fetchPopularShows() {
    try {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      //Adding only 3 shows
      movies.value = data.slice(0, 3);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  async function searchMovies(query) {
    if (!query.trim()) {
      searchResults.value = [];
      return;
    }

    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      searchResults.value = data.map((result) => result.show);
    } catch (error) {
      console.error("Search error:", error);
    }
  }

  function addMovie(movie) {
    const exists = movies.value.find((m) => m.id === movie.id);
    if (!exists) {
      movies.value.push(movie);
      searchQuery.value = "";
      searchResults.value = [];
    } else {
      alert("Movie already added to favorites!");
    }
  }

  function removeMovie(index) {
    movies.value.splice(index, 1);
  }

  return {
    movies,
    searchQuery,
    searchResults,
    searchMovies,
    addMovie,
    removeMovie,
  };
}

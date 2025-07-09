```vue
<script setup>
import { ref } from "vue";
import "../styles/nav.css";

const currentPage = ref("home");
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="navbar">
    <div class="logo">
      <img src="/src/assets/logos/Logo White.svg" alt="Logo" />
    </div>
    <nav class="nav-links" :class="{ 'menu-open': isMenuOpen }">
      <ul>
        <li
          @click="
            currentPage = 'home';
            isMenuOpen = false;
          "
          :class="{ active: currentPage === 'home' }"
        >
          HOME
        </li>
        <li
          @click="
            currentPage = 'screens';
            isMenuOpen = false;
          "
          :class="{ active: currentPage === 'screens' }"
        >
          OUR SCREENS
        </li>
        <li
          @click="
            currentPage = 'schedule';
            isMenuOpen = false;
          "
          :class="{ active: currentPage === 'schedule' }"
        >
          SCHEDULE
        </li>
        <li
          @click="
            currentPage = 'movieLibary';
            isMenuOpen = false;
          "
          :class="{ active: currentPage === 'movieLibary' }"
        >
          MOVIE LIBRARY
        </li>
        <li
          @click="
            currentPage = 'location';
            isMenuOpen = false;
          "
          :class="{ active: currentPage === 'location' }"
        >
          LOCATION & CONTACT
        </li>
      </ul>
    </nav>
    <div class="hamburger" @click="toggleMenu">
      <img
        class="menu-icon"
        src="/src/assets/icons/Menu White.svg"
        alt="Hamburger"
      />
    </div>
  </div>
</template>
```

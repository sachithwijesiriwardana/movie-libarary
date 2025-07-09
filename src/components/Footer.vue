<script setup>
import "../styles/footer.css";
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>
<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-branding">
        <h1>Amadeus IT Group</h1>
      </div>
      <div class="social-icons">
        <h2>Follow us on</h2>
        <img src="/src/assets/icons/Twitter White.svg" alt="Twitter Icon" />
        <img src="/src/assets/icons/Youtube White.svg" alt="Youtube Icon" />
      </div>
    </div>
    <div class="footer-address">
      <p>
        C. Salvador de Madariaga, 1 <br />
        28027 Madrid<br />Spain
      </p>
      <hr class="custom-hr2" />
    </div>

    <div class="footer-legal">
      <p>Copyright © {{ currentYear }} Amadeus Hotels. All rights reserved.</p>
      <p>
        Photos by <span class="underline">Felix Mooneeram</span> &
        <span class="underline">Serge Kutuzov</span> on
        <span class="underline">Unsplash</span>
      </p>
    </div>
  </footer>
</template>

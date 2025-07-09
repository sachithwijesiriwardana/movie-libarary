<script setup>
import "../styles/contact.css";
import useFormValidation from "../composables/useFormValidation";

const { form, errors, handleSubmit } = useFormValidation();
</script>

<template>
  <section class="contact-section">
    <div class="contact-wrapper">
      <form class="contact-form" @submit="handleSubmit">
        <div class="contact-header">
          <h1>How to reach us</h1>
          <p>Lorem ipsum dolor sit amet, consetetur.</p>
        </div>

        <div class="name-row">
          <div class="form-group">
            <label for="first-name">First Name *</label>
            <input
              type="text"
              id="first-name"
              v-model="form.firstName"
              :class="{ error: errors.firstName }"
            />
            <p v-if="errors.firstName" class="error-text">
              {{ errors.firstName }}
            </p>
          </div>
          <div class="form-group">
            <label for="last-name">Last Name *</label>
            <input
              type="text"
              id="last-name"
              v-model="form.lastName"
              :class="{ error: errors.lastName }"
            />
            <p v-if="errors.lastName" class="error-text">
              {{ errors.lastName }}
            </p>
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email *</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            :class="{ error: errors.email }"
          />
          <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
        </div>

        <div class="form-group">
          <label for="telephone">Telephone</label>
          <input type="tel" id="telephone" v-model="form.telephone" />
        </div>

        <div class="form-group">
          <label for="message">Message *</label>
          <textarea
            id="message"
            v-model="form.message"
            :class="{ error: errors.message }"
          ></textarea>
          <p v-if="errors.message" class="error-text">{{ errors.message }}</p>
        </div>

        <p class="required-text">* required fields</p>

        <div class="form-group">
          <label for="terms">
            <input type="checkbox" id="terms" v-model="form.terms" />
            I agree to the Terms & Conditions
          </label>
          <p v-if="errors.terms" class="error-text">{{ errors.terms }}</p>
        </div>

        <button type="submit">SUBMIT</button>
      </form>

      <iframe
        class="contact-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.272627139197!2d-3.566289684609278!3d40.45011197936084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f9a7d7b5b7b%3A0x3b3b3b3b3b3b3b3b!2sAmadeus%20IT%20Group%20SA!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<!-- <template>
  <div class="bg-gray-900 flex justify-between items-center px-4 py-2 h-20">
    <div class="text-neutral-500 font-light text-xs md:text-base whitespace-nowrap">
      © 2024 Jemark. All rights reserved.
    </div>
    <div class="flex">
      <a class="text-neutral-500 font-light cursor-pointer dark:text-white" href="https://instagram.com/daitignz" target="_blank">
        <font-awesome-icon
          class="fa-lg md:fa-2xl f-blue"
          :icon="['fab', 'instagram']"
        />
      </a>
      <a class="text-neutral-500 font-light cursor-pointer dark:text-white" href="https://github.com/daitign" target="_blank">
        <font-awesome-icon
          class="fa-lg md:fa-2xl f-blue"
          :icon="['fab', 'github']" 
        />
      </a>
      <a class="text-neutral-500 font-light cursor-pointer dark:text-white" href="https://t.me/stxngn" target="_blank">
        <font-awesome-icon
          class="fa-lg md:fa-2xl f-blue"
          :icon="['fab', 'telegram']" 
        />
      </a>
    </div>
  </div>
</template> -->
<template>
  <div class="bg-gray-900 flex justify-between items-center px-4 py-2 h-20">
    <div class="text-neutral-500 font-light text-xs md:text-base whitespace-nowrap">
  ©     <span id="currentYear">2024</span>
        <strong>
          <span style="color: #9A5299;"> Je</span>
          <span style="color: #CC65A9;">ma</span>
          <span style="color: #E687B8;">rk</span>
        </strong> All rights reserved.
    </div>
    <div class="flex space-x-5">
      <a class="text-neutral-500 font-light cursor-pointer dark:text-white" href="https://instagram.com/daitignz" target="_blank">
        <font-awesome-icon
          class="fa-lg md:fa-2xl f-blue"
          :icon="['fab', 'instagram']"
        />
      </a>
      <a class="text-neutral-500 font-light cursor-pointer dark:text-white" href="https://github.com/daitign" target="_blank">
        <font-awesome-icon
          class="fa-lg md:fa-2xl f-blue"
          :icon="['fab', 'github']" 
        />
      </a>
      <a class="text-neutral-500 font-light cursor-pointer dark:text-white" href="https://www.linkedin.com/in/daitign/" target="_blank">
        <font-awesome-icon
          class="fa-lg md:fa-2xl f-blue"
          :icon="['fab', 'linkedin']" 
        />
      </a>
      <a class="text-neutral-500 font-light cursor-pointer dark:text-white" href="https://t.me/stxngn" target="_blank">
        <font-awesome-icon
          class="fa-lg md:fa-2xl f-blue"
          :icon="['fab', 'telegram']" 
        />
      </a>
      <a class="text-neutral-500 font-light cursor-pointer dark:text-white" href="https://facebook/taktae.pro" target="_blank">
        <font-awesome-icon
          class="fa-lg md:fa-2xl f-blue"
          :icon="['fab', 'facebook']" 
        />
      </a>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram, faTelegram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faInstagram, faTelegram, faFacebook, faLinkedin);

export default {
  components: {
    FontAwesomeIcon,
  },
};
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  });
</script>

<style scoped>
</style>

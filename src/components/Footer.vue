<template>
  <footer
    class="w-full border-t border-slate-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-[#050608] transition-colors py-10 sm:py-14"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8"
      >
        <!-- Brand & Copyright -->
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div class="flex items-center gap-2.5 mb-1">
            <img
              :src="logoDvDark"
              alt="DV"
              class="h-4 sm:h-4.5 w-auto object-contain dark:hidden opacity-90"
            />
            <img
              :src="logoDvWhite"
              alt="DV"
              class="h-4 sm:h-4.5 w-auto object-contain hidden dark:block opacity-90"
            />
            <span
              class="font-extrabold tracking-[0.2em] text-sm uppercase text-slate-900 dark:text-white"
            >
              DAITIGN<span class="text-emerald-500 dark:text-emerald-400">.</span>
            </span>
            <span class="text-xs text-slate-400">•</span>
            <span class="text-xs text-slate-500 font-medium">Jemark Daite</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 font-normal">
            © {{ currentYear }} All rights reserved. Crafted with architectural
            discipline.
          </p>
        </div>

        <!-- Social Media Luxury Links -->
        <div class="flex items-center gap-2.5 sm:gap-3">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/10 hover:border-emerald-400/50 hover:text-emerald-500 dark:hover:text-emerald-400 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
            :aria-label="social.name"
          >
            <font-awesome-icon :icon="['fab', social.icon]" class="text-base" />
          </a>
        </div>

        <!-- Back to Top Button -->
        <div class="flex items-center">
          <button
            type="button"
            @click="scrollToTop"
            class="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-emerald-400/40 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300 cursor-pointer"
          >
            <span>Back to Top</span>
            <font-awesome-icon
              :icon="['fas', 'arrow-up']"
              class="text-[10px] group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logoDvWhite from "@/assets/img/logo_dv_white.png";
import logoDvDark from "@/assets/img/logo_dv_dark.png";

const currentYear = ref(new Date().getFullYear());

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/iamdaitign",
    icon: "instagram",
  },
  {
    name: "GitHub",
    url: "https://github.com/daitign",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/daitign/",
    icon: "linkedin",
  },
  {
    name: "Telegram",
    url: "https://t.me/stxngn",
    icon: "telegram",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/taktae.pro",
    icon: "facebook",
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<style scoped></style>

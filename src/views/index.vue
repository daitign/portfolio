<script setup lang="ts">
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";
import Qualification from "@/components/Qualification.vue";
import Portfolio from "@/components/Portfolio.vue";
import Footer from "@/components/Footer.vue";
import ContactMe from "@/components/ContactMe.vue";

import LuxuryBackground from "@/components/LuxuryBackground.vue";

import { ref, onMounted, nextTick } from "vue";
import AOS from "aos";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
    nextTick(() => {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
      });
      AOS.refresh();
    });
  }, 1600);
});
</script>

<template>
  <main
    class="min-h-screen bg-slate-50 dark:bg-[#07080c] text-slate-900 dark:text-slate-100 transition-colors duration-500 relative overflow-x-clip"
  >
    <!-- Luxury Subtle Glowing Connected Geometry Background -->
    <LuxuryBackground />

    <!-- Luxury Loading Overlay -->
    <Transition name="loader-fade">
      <div class="loader-overlay" v-if="loading">
        <div class="ui-abstergo">
          <div class="abstergo-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="ui-brand">
            <span
              class="tracking-[0.3em] -mr-[0.3em] uppercase text-xs font-semibold text-emerald-500/90 dark:text-emerald-400/90 text-center"
              >DAITIGN // ARCHITECTURE</span
            >
            <div class="ui-text">
              <span>INITIALIZING</span>
              <span class="ui-dots">
                <span class="ui-dot"></span>
                <span class="ui-dot"></span>
                <span class="ui-dot"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Main Content Flow -->
    <div class="relative z-10 flex flex-col min-h-screen">
      <Header />
      <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <section id="hero">
          <Hero />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="qualification">
          <Qualification />
        </section>

        <section id="contact">
          <ContactMe />
        </section>
      </div>
      <Footer />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.loader-fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.loader-fade-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

.loader-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: #07080c;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ui-abstergo {
  --primary: #10b981;
  --secondary: rgba(16, 185, 129, 0.35);
  --shadow-blur: 8px;
  --text-shadow-blur: 5px;
  --animation-duration: 2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 28px;
}

.ui-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.ui-abstergo .ui-text {
  color: #f1f5f9;
  font-family: "Space Grotesk", "Plus Jakarta Sans", monospace;
  font-size: 0.82rem;
  letter-spacing: 0.22em;
  margin-right: -0.22em;
  display: flex;
  align-items: center;
  column-gap: 5px;
}

.ui-dots {
  display: inline-flex;
  align-items: center;
  gap: 3.5px;
  margin-left: 2px;
}

.ui-abstergo .ui-dot {
  display: block;
  width: 3.5px;
  height: 3.5px;
  border-radius: 50%;
  animation: dots var(--animation-duration) infinite linear;
  background-color: var(--primary);
}

.ui-abstergo .ui-dot:nth-child(1) {
  animation-delay: 0.4s;
}

.ui-abstergo .ui-dot:nth-child(2) {
  animation-delay: 0.8s;
}

.ui-abstergo .ui-dot:nth-child(3) {
  animation-delay: 1.2s;
}

.abstergo-loader * {
  box-sizing: content-box;
}

.abstergo-loader {
  width: 103px;
  height: 90px;
  position: relative;
}

.abstergo-loader div {
  width: 50px;
  border-right: 12px solid transparent;
  border-left: 12px solid transparent;
  border-top: 21px solid var(--primary);
  position: absolute;
  filter: drop-shadow(0 0 var(--shadow-blur) var(--secondary));
}

.abstergo-loader div:nth-child(1) {
  top: 27px;
  left: 7px;
  rotate: -60deg;
  animation: line1 var(--animation-duration) linear infinite alternate;
}

.abstergo-loader div:nth-child(2) {
  bottom: 2px;
  left: 0;
  rotate: 180deg;
  animation: line2 var(--animation-duration) linear infinite alternate;
}

.abstergo-loader div:nth-child(3) {
  bottom: 16px;
  right: -9px;
  rotate: 60deg;
  animation: line3 var(--animation-duration) linear infinite alternate;
}

@keyframes line1 {
  0%,
  40% {
    top: 27px;
    left: 7px;
    rotate: -60deg;
  }
  60%,
  100% {
    top: 22px;
    left: 14px;
    rotate: 60deg;
  }
}

@keyframes line2 {
  0%,
  40% {
    bottom: 2px;
    left: 0;
    rotate: 180deg;
  }
  60%,
  100% {
    bottom: 5px;
    left: -8px;
    rotate: 300deg;
  }
}

@keyframes line3 {
  0%,
  40% {
    bottom: 16px;
    right: -9px;
    rotate: 60deg;
  }
  60%,
  100% {
    bottom: 7px;
    right: -11px;
    rotate: 180deg;
  }
}

@keyframes dots {
  0% {
    opacity: 0.3;
  }
  30% {
    opacity: 1;
  }
  70%,
  100% {
    opacity: 0.3;
  }
}
</style>

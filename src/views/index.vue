<script setup lang="ts">
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";
import Qualification from "@/components/Qualification.vue";
import Portfolio from "@/components/Portfolio.vue";
import Footer from "@/components/Footer.vue";
import ContactMe from "@/components/ContactMe.vue";

import { ref, onMounted } from "vue";
import AOS from "aos";

const loading = ref(true);

onMounted(() => {
  AOS.init({});
  setTimeout(() => {
    loading.value = false;
  }, 5000);
});
</script>

<template>
  <main class="dark:bg-black main">
    <div class="loader-wrapper" v-if="loading">
      <div class="ui-abstergo">
      <div class="abstergo-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="ui-text">
        Loading
        <div class="ui-dot"></div>
        <div class="ui-dot"></div>
        <div class="ui-dot"></div>
      </div>
    </div>
    </div>
    <div
      class="md:px-20 p-5 lg:px-5"
      style="max-width: 1280px; margin: auto"
      v-else
    >
      <Header />
      <Hero />
      <Portfolio />
      <AboutMe />
      <Skills />
      <Qualification />
      <ContactMe />
    </div>
    <Footer v-if="!loading" />
  </main>
</template>

<style lang="scss" scoped>
.loader-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader {
    --path: #2f3545;
    --dot: #5628ee;
    --duration: 3s;
    width: 44px;
    height: 44px;
    position: relative;

    &::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      position: absolute;
      display: block;
      background: var(--dot);
      top: 37px;
      left: 19px;
      transform: translate(-18px, -18px);
      animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
        infinite;
    }
  }
}

.loader svg {
  display: block;
  width: 100%;
  height: 100%;
}

.loader svg rect,
.loader svg polygon,
.loader svg circle {
  fill: none;
  stroke: var(--path);
  stroke-width: 10px;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.loader svg polygon {
  stroke-dasharray: 145 76 145 76;
  stroke-dashoffset: 0;
  animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
    infinite;
}

.loader svg rect {
  stroke-dasharray: 192 64 192 64;
  stroke-dashoffset: 0;
  animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
}

.loader svg circle {
  stroke-dasharray: 150 50 150 50;
  stroke-dashoffset: 75;
  animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
    infinite;
}

.loader.triangle {
  width: 48px;
}

.loader.triangle:before {
  left: 21px;
  transform: translate(-10px, -18px);
  animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86)
    infinite;
}

@keyframes pathTriangle {
  33% {
    stroke-dashoffset: 74;
  }

  66% {
    stroke-dashoffset: 147;
  }

  100% {
    stroke-dashoffset: 221;
  }
}

@keyframes dotTriangle {
  33% {
    transform: translate(0, 0);
  }

  66% {
    transform: translate(10px, -18px);
  }

  100% {
    transform: translate(-10px, -18px);
  }
}

@keyframes pathRect {
  25% {
    stroke-dashoffset: 64;
  }

  50% {
    stroke-dashoffset: 128;
  }

  75% {
    stroke-dashoffset: 192;
  }

  100% {
    stroke-dashoffset: 256;
  }
}

@keyframes dotRect {
  25% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(18px, -18px);
  }

  75% {
    transform: translate(0, -36px);
  }

  100% {
    transform: translate(-18px, -18px);
  }
}

@keyframes pathCircle {
  25% {
    stroke-dashoffset: 125;
  }

  50% {
    stroke-dashoffset: 175;
  }

  75% {
    stroke-dashoffset: 225;
  }

  100% {
    stroke-dashoffset: 275;
  }
}

.loader {
  display: inline-block;
  margin: 0 16px;
}
.ui-abstergo {
  --primary: #111827;
  --secondary: rgba(255, 255, 255, 0.3);
  --shadow-blur: 3px;
  --text-shadow-blur: 3px;
  --animation-duration: 2s;
  --size: 1;
}

.abstergo-loader * {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.ui-abstergo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  row-gap: 30px;
  scale: var(--size);
}

.ui-abstergo .ui-text {
  color: var(--primary);
  text-shadow: 0 0 var(--text-shadow-blur) var(--secondary);
  font-family: Menlo, sans-serif;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  -webkit-column-gap: 3px;
  -moz-column-gap: 3px;
  column-gap: 3px;
}

.ui-abstergo .ui-dot {
  content: "";
  display: block;
  width: 3px;
  height: 3px;
  -webkit-animation: dots var(--animation-duration) infinite linear;
  animation: dots var(--animation-duration) infinite linear;
  -webkit-animation-delay: .4s;
  animation-delay: .4s;
  background-color: var(--primary);
}

.ui-abstergo .ui-dot:nth-child(2) {
  -webkit-animation-delay: .8s;
  animation-delay: .8s;
}

.ui-abstergo .ui-dot:nth-child(3) {
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
}

.ui-abstergo .ui-dot+.ui-dot {
  margin-left: 3px;
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
  -webkit-filter: drop-shadow(0 0 var(--shadow-blur) var(--secondary));
  filter: drop-shadow(0 0 var(--shadow-blur) var(--secondary));
}

.abstergo-loader div:nth-child(1) {
  top: 27px;
  left: 7px;
  rotate: -60deg;
  -webkit-animation: line1 var(--animation-duration) linear infinite alternate;
  animation: line1 var(--animation-duration) linear infinite alternate;
}

.abstergo-loader div:nth-child(2) {
  bottom: 2px;
  left: 0;
  rotate: 180deg;
  -webkit-animation: line2 var(--animation-duration) linear infinite alternate;
  animation: line2 var(--animation-duration) linear infinite alternate;
}

.abstergo-loader div:nth-child(3) {
  bottom: 16px;
  right: -9px;
  rotate: 60deg;
  -webkit-animation: line3 var(--animation-duration) linear infinite alternate;
  animation: line3 var(--animation-duration) linear infinite alternate;
}

.abstergo-loader:hover div:nth-child(1) {
  top: 21px;
  left: 14px;
  rotate: 60deg;
}

.abstergo-loader:hover div:nth-child(2) {
  bottom: 5px;
  left: -8px;
  rotate: 300deg;
}

.abstergo-loader:hover div:nth-child(3) {
  bottom: 7px;
  right: -11px;
  rotate: 180deg;
}

@-webkit-keyframes line1 {
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

@-webkit-keyframes line2 {
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

@-webkit-keyframes line3 {
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

@-webkit-keyframes dots {
  0% {
    background-color: var(--secondary);
  }

  30% {
    background-color: var(--primary);
  }

  70%, 100% {
    background-color: var(--secondary);
  }
}

@keyframes dots {
  0% {
    background-color: var(--secondary);
  }

  30% {
    background-color: var(--primary);
  }

  70%, 100% {
    background-color: var(--secondary);
  }
}
</style>

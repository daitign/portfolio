<template>
  <div
    class="hero-section py-8 sm:py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14"
  >
    <!-- Left Column: Executive Introduction -->
    <div
      class="info flex flex-col items-start w-full lg:max-w-xl xl:max-w-2xl text-left"
    >
      <!-- Status Badge -->
      <div
        data-aos="fade-down"
        data-aos-duration="600"
        class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-400/[0.07] text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-5 sm:mb-6 shadow-sm"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
          ></span>
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
          ></span>
        </span>
        <span class="text-[11px] sm:text-xs"
          >Available for Select Commissions</span
        >
      </div>

      <!-- Main Heading with Typewriter -->
      <h1
        data-aos="fade-right"
        data-aos-delay="150"
        data-aos-duration="700"
        class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-3"
      >
        Hi, I'm
        <span
          class="typewriter-text text-emerald-600 dark:text-emerald-400 font-black"
          >Jemark</span
        >
        <span class="inline-block wave ml-2">👋</span>
      </h1>

      <!-- Executive Specializations -->
      <div
        data-aos="fade-right"
        data-aos-delay="250"
        data-aos-duration="700"
        class="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-5 sm:mb-6"
      >
        <span
          class="px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-300 border border-rose-500/20"
        >
          Video Editor
        </span>
        <span class="text-slate-400 dark:text-slate-600 hidden sm:inline"
          >•</span
        >
        <span
          class="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20"
        >
          Web Developer
        </span>
        <span class="text-slate-400 dark:text-slate-600 hidden sm:inline"
          >•</span
        >
        <span
          class="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20"
        >
          Graphic Designer
        </span>
      </div>

      <!-- Narrative Bio -->
      <p
        data-aos="fade-right"
        data-aos-delay="350"
        data-aos-duration="700"
        class="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-8 font-normal"
      >
        Transforming complex challenges into distinguished visual identities and
        scalable digital systems. With a rigorous foundation in Information
        Technology and multi-disciplinary creative direction, I craft digital
        experiences with precision, aesthetic poise, and high-performance code.
      </p>

      <!-- Action CTAs -->
      <div
        data-aos="fade-right"
        data-aos-delay="450"
        data-aos-duration="700"
        class="flex flex-wrap items-center gap-4 w-full sm:w-auto"
      >
        <button
          type="button"
          @click="openContactModal"
          class="btn-luxury-emerald w-full sm:w-auto text-center cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Initiate Collaboration</span>
          <font-awesome-icon class="text-xs" :icon="['fas', 'paper-plane']" />
        </button>

        <a
          href="#portfolio"
          class="btn-luxury-glass w-full sm:w-auto text-center text-slate-800 dark:text-white"
        >
          <span>Explore Works</span>
          <font-awesome-icon
            class="ml-2 text-xs"
            :icon="['fas', 'arrow-down']"
          />
        </a>
      </div>

      <!-- Quick Proof Highlights -->
      <div
        data-aos="fade-up"
        data-aos-delay="550"
        data-aos-duration="700"
        class="grid grid-cols-3 gap-3 sm:gap-6 pt-8 mt-8 border-t border-slate-200/80 dark:border-white/[0.08] w-full max-w-lg"
      >
        <div>
          <div
            class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
          >
            04+ <span class="text-emerald-600 dark:text-emerald-400 text-sm">YRS</span>
          </div>
          <div
            class="text-[11px] sm:text-xs tracking-wider uppercase text-slate-500 dark:text-slate-400"
          >
            Industry Exp
          </div>
        </div>
        <div>
          <div
            class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
          >
            09+ <span class="text-emerald-600 dark:text-emerald-400 text-sm">PROJ</span>
          </div>
          <div
            class="text-[11px] sm:text-xs tracking-wider uppercase text-slate-500 dark:text-slate-400"
          >
            Shipped Works
          </div>
        </div>
        <div>
          <div
            class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
          >
            BSIT <span class="text-emerald-600 dark:text-emerald-400 text-sm">DEG</span>
          </div>
          <div
            class="text-[11px] sm:text-xs tracking-wider uppercase text-slate-500 dark:text-slate-400"
          >
            Certified Grad
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Luxury Responsive Triptych Gallery -->
    <div
      class="gallery-container w-full lg:w-auto flex justify-center items-center relative lg:flex-1 pt-4 lg:pt-0"
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="800"
    >
      <!-- Subtle Decorative Aura -->
      <div
        class="absolute inset-0 max-w-[420px] max-h-[420px] m-auto rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-transparent blur-2xl pointer-events-none"
      ></div>

      <!-- The 3-Slice Montage with Luxury Framing -->
      <div class="triptych-wrapper relative flex items-center justify-center">
        <!-- Left Sliced Image (Traditional Barong Tagalog) -->
        <div class="triptych-card card-left">
          <img
            src="/src/assets/img/barong.jpg"
            alt="Jemark in traditional Barong Tagalog"
            class="triptych-img object-top"
            loading="eager"
          />
          <div class="triptych-border"></div>
        </div>

        <!-- Center Dominant Sliced Image -->
        <div class="triptych-card card-center">
          <img
            src="/src/assets/img/talikod.png"
            alt="Jemark focal portrait"
            class="triptych-img"
            loading="eager"
          />
          <div class="triptych-border center-glow"></div>
        </div>

        <!-- Right Sliced Image (With Sunglasses) -->
        <div class="triptych-card card-right">
          <img
            src="/src/assets/img/tennis_glasses.jpg"
            alt="Jemark portrait with glasses"
            class="triptych-img object-top"
            loading="eager"
          />
          <div class="triptych-border"></div>
        </div>

        <!-- Floating Luxury Badge -->
        <div
          class="floating-badge hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <div
            class="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs"
          >
            <font-awesome-icon :icon="['fas', 'shield-halved']" />
          </div>
          <div class="flex flex-col text-left">
            <span class="text-xs font-bold text-slate-900 dark:text-white"
              >Bespoke Precision</span
            >
            <span class="text-[10px] uppercase tracking-wider text-slate-400"
              >Design & Architecture</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDark } from "@vueuse/core";
import { useContactModal } from "@/composables/useContactModal";

useDark();
const { openModal } = useContactModal();

const openContactModal = () => {
  openModal(
    "Executive Collaboration Inquiry — Jemark Daite",
    "Hi Jemark,\n\nI would like to collaborate on a project with you."
  );
};
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  width: 100%;
}

/* Smooth Typewriter cursor */
.typewriter-text {
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: inline-block;
    width: 3px;
    height: 1em;
    background-color: #10b981;
    margin-left: 4px;
    vertical-align: middle;
    animation: blink 1.1s infinite step-start;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.wave {
  display: inline-block;
  animation: wave-animation 2.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

/* Triptych Gallery Construction */
.gallery-container {
  perspective: 1000px;
}

.triptych-wrapper {
  width: 100%;
  max-width: 460px;
  height: clamp(280px, 58vw, 420px);
  position: relative;
}

.triptych-card {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;

  .triptych-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(20%);
    transition: filter 0.4s ease, transform 0.4s ease;
  }

  .triptych-border {
    position: absolute;
    inset: 0;
    border-radius: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
    pointer-events: none;
    transition: border-color 0.4s ease;
  }

  &:hover {
    z-index: 30;
    transform: translateY(-54%) scale(1.03);

    .triptych-img {
      filter: grayscale(0%);
      transform: scale(1.05);
    }

    .triptych-border {
      border-color: rgba(16, 185, 129, 0.75);
      box-shadow: 0 0 25px rgba(16, 185, 129, 0.35);
    }
  }
}

.card-left {
  left: 2%;
  width: 38%;
  height: 82%;
  z-index: 10;
  transform: translateY(-50%) rotate(-3deg);

  &:hover {
    transform: translateY(-54%) rotate(0deg) scale(1.04);
  }
}

.card-center {
  left: 50%;
  width: 44%;
  height: 96%;
  z-index: 20;
  transform: translate(-50%, -50%);

  .center-glow {
    border-color: rgba(16, 185, 129, 0.5);
    box-shadow: 0 0 30px rgba(16, 185, 129, 0.2);
  }

  &:hover {
    transform: translate(-50%, -54%) scale(1.04);
  }
}

.card-right {
  right: 2%;
  width: 38%;
  height: 82%;
  z-index: 10;
  transform: translateY(-50%) rotate(3deg);

  &:hover {
    transform: translateY(-54%) rotate(0deg) scale(1.04);
  }
}

.floating-badge {
  position: absolute;
  bottom: -15px;
  right: -10px;
  z-index: 35;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

/* Responsiveness: Small Mobile (≤ 420px) */
@media (max-width: 420px) {
  .triptych-wrapper {
    max-width: 320px;
    height: 250px;
  }

  .card-left {
    width: 36%;
    height: 80%;
  }

  .card-center {
    width: 42%;
    height: 95%;
  }

  .card-right {
    width: 36%;
    height: 80%;
  }
}
</style>

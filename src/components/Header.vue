<template>
  <header
    class="luxury-header sticky top-0 z-50 w-full bg-white/90 dark:bg-obsidian-900/95 border-b border-slate-200/80 dark:border-white/[0.08] backdrop-blur-xl transition-all duration-300"
    :class="{ 'shadow-lg shadow-black/25': isScrolled }"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between"
    >
      <!-- Brand Monogram & Wordmark -->
      <a
        href="#hero"
        class="group flex items-center gap-2.5 sm:gap-3 text-slate-900 dark:text-white transition-transform duration-300 active:scale-95"
      >
        <div class="relative h-7 sm:h-8 flex items-center justify-center">
          <img
            :src="logoDvDark"
            alt="DAITIGN Logo"
            class="h-6 sm:h-7.5 w-auto object-contain dark:hidden group-hover:scale-105 transition-transform duration-300"
          />
          <img
            :src="logoDvWhite"
            alt="DAITIGN Logo"
            class="h-6 sm:h-7.5 w-auto object-contain hidden dark:block group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <span
          class="font-extrabold tracking-[0.18em] text-sm sm:text-base uppercase text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors flex items-center"
        >
          DAITIGN<span class="text-emerald-500 dark:text-emerald-400">.</span>
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-2">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="px-3.5 py-2 rounded-full text-xs lg:text-sm font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 dark:hover:bg-white/[0.08] transition-all duration-200"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Right Controls: Theme Toggle & CTA -->
      <div class="flex items-center gap-3 sm:gap-4">
        <!-- Luxury Mode Toggle -->
        <button
          type="button"
          @click="toggleMode"
          class="relative w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 border border-slate-300/80 dark:border-white/20 bg-slate-200/80 dark:bg-slate-900 shadow-inner cursor-pointer"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <div
            class="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform duration-300 shadow-md"
            :class="
              isDark
                ? 'translate-x-6 bg-emerald-400 text-black'
                : 'translate-x-0 bg-white text-emerald-600'
            "
          >
            <font-awesome-icon :icon="['fas', isDark ? 'moon' : 'sun']" />
          </div>
        </button>

        <!-- Executive Inquiry CTA Button (Desktop) -->
        <a
          href="#contact"
          class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/50 text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-black transition-all duration-300 shadow-sm hover:shadow-emerald-500/25"
        >
          <span>Get in Touch</span>
          <font-awesome-icon
            :icon="['fas', 'arrow-right']"
            class="text-[10px]"
          />
        </a>

        <!-- Mobile Menu Toggle Button -->
        <button
          type="button"
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.04] active:scale-95 transition-all"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <font-awesome-icon
            :icon="['fas', mobileMenuOpen ? 'xmark' : 'bars']"
            class="text-base"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <Transition name="drawer">
      <div
        v-if="mobileMenuOpen"
        class="luxury-drawer md:hidden px-4 pt-3 pb-6 space-y-1 bg-white/98 dark:bg-obsidian-950/98 border-t border-slate-200/80 dark:border-white/[0.08] shadow-2xl backdrop-blur-2xl"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="mobileMenuOpen = false"
          class="block px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-500/10 dark:hover:bg-white/[0.08] transition-colors"
        >
          {{ link.label }}
        </a>
        <div class="pt-2">
          <a
            href="#contact"
            @click="mobileMenuOpen = false"
            class="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold tracking-wider uppercase text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25"
          >
            <span>Inquire Now</span>
            <font-awesome-icon :icon="['fas', 'paper-plane']" class="text-xs" />
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import logoDvWhite from "@/assets/img/logo_dv_white.png";
import logoDvDark from "@/assets/img/logo_dv_dark.png";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const toggleMode = () => {
  toggleDark();
};

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const navLinks = [
  { label: "Works", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#qualification" },
  { label: "Contact", href: "#contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.h-18 {
  height: 4.5rem;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.25s ease-out;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

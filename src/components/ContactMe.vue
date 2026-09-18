<template>
  <div class="max-w-4xl mx-auto py-16 sm:py-24">
    <!-- Luxury Section Header -->
    <div
      class="text-center pb-10 sm:pb-14"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="700"
    >
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3"
      >
        <span>✦ Direct Channels</span>
      </div>
      <h2
        class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3"
      >
        Let's Initiate a Dialogue
      </h2>
      <p
        class="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto font-normal"
      >
        Whether you are commissioning a visual design system, engineering a web
        platform, or exploring executive collaborations.
      </p>
    </div>

    <!-- Luxury Executive Contact Box -->
    <div
      class="luxury-card p-6 sm:p-10 text-center relative overflow-hidden group"
      data-aos="fade-up"
      data-aos-delay="250"
      data-aos-duration="700"
    >
      <!-- Ambient Glow Behind Box -->
      <div
        class="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
      ></div>

      <!-- Icon Header -->
      <button
        type="button"
        @click="openContactModal"
        class="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-2xl mx-auto mb-6 border border-emerald-500/20 shadow-inner hover:scale-110 hover:bg-emerald-500/20 transition-all duration-300 group cursor-pointer"
        title="Compose email directly"
      >
        <font-awesome-icon :icon="['fas', 'envelope-open-text']" />
      </button>

      <button
        type="button"
        @click="openContactModal"
        class="inline-block text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors cursor-pointer"
      >
        daitejmrk@gmail.com
      </button>
      <p
        class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 font-normal"
      >
        My inbox is continuously monitored for serious creative commissions,
        software architecture consulting, and career inquiries.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <!-- Direct Mail Button -->
        <button
          type="button"
          @click="openContactModal"
          class="btn-luxury-emerald w-full sm:w-auto text-center cursor-pointer flex items-center justify-center gap-2"
        >
          <span>Send Message</span>
          <font-awesome-icon class="text-xs" :icon="['fas', 'paper-plane']" />
        </button>

        <!-- Copy Email Address -->
        <button
          type="button"
          @click="copyEmail"
          class="btn-luxury-glass w-full sm:w-auto text-center cursor-pointer text-slate-800 dark:text-white flex items-center justify-center gap-2"
        >
          <font-awesome-icon
            :icon="['fas', copied ? 'check' : 'copy']"
            class="text-xs text-emerald-500"
          />
          <span>{{
            copied ? "Copied to Clipboard!" : "Copy Email Address"
          }}</span>
        </button>
      </div>

      <!-- SLA & Location Trust Indicators -->
      <div
        class="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8 mt-8 border-t border-slate-200/60 dark:border-white/[0.06] text-xs text-slate-400"
      >
        <div class="flex items-center gap-2">
          <span
            class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
          ></span>
          <span
            >Response Turnaround:
            <strong class="text-slate-700 dark:text-slate-200 font-semibold"
              >&lt; 24 Hours</strong
            ></span
          >
        </div>
        <div class="flex items-center gap-2">
          <font-awesome-icon
            :icon="['fas', 'clock']"
            class="text-emerald-500/80"
          />
          <span
            >Timezone:
            <strong class="text-slate-700 dark:text-slate-200 font-semibold"
              >UTC+8 (Davao Region)</strong
            ></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useContactModal } from "@/composables/useContactModal";

const { openModal } = useContactModal();
const copied = ref(false);

const openContactModal = () => {
  openModal(
    "Project Inquiry — Jemark Daite",
    "Hello Jemark,\n\nI am reaching out to discuss a potential project or collaboration."
  );
};

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("daitejmrk@gmail.com");
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2500);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = "daitejmrk@gmail.com";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2500);
  }
};
</script>

<style scoped></style>

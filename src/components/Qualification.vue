<template>
  <div class="max-w-7xl mx-auto py-16 sm:py-24">
    <!-- Luxury Header -->
    <div
      class="text-center pb-12 sm:pb-16"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="700"
    >
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3"
      >
        <span>✦ Career Milestones</span>
      </div>
      <h2
        class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3"
      >
        Professional Journey
      </h2>
      <p
        class="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-normal"
      >
        A timeline of industry roles, corporate appointments, and academic
        achievements.
      </p>

      <!-- Luxury Segmented Control -->
      <div class="flex justify-center mt-8 sm:mt-10">
        <div
          class="inline-flex p-1.5 rounded-full bg-slate-200/80 dark:bg-white/[0.05] border border-slate-300/70 dark:border-white/10 backdrop-blur-md shadow-inner"
        >
          <button
            type="button"
            @click="active = 'work'"
            class="flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
            :class="
              active === 'work'
                ? 'bg-emerald-600 text-white dark:bg-emerald-400 dark:text-black shadow-md shadow-emerald-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            "
          >
            <font-awesome-icon :icon="['fas', 'briefcase']" class="text-xs" />
            <span>Work History</span>
          </button>

          <button
            type="button"
            @click="active = 'education'"
            class="flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
            :class="
              active === 'education'
                ? 'bg-emerald-600 text-white dark:bg-emerald-400 dark:text-black shadow-md shadow-emerald-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            "
          >
            <font-awesome-icon
              :icon="['fas', 'graduation-cap']"
              class="text-xs"
            />
            <span>Academic Background</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Dynamic Timeline View -->
    <div class="timeline-wrapper">
      <Transition name="fade" mode="out-in">
        <Work v-if="active === 'work'" />
        <Education v-else />
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Work from "@/components/Work.vue";
import Education from "@/components/Education.vue";

const active = ref<"work" | "education">("work");
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>

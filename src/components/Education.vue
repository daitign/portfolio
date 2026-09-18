<template>
  <div class="relative max-w-4xl mx-auto px-4 sm:px-6">
    <!-- Center Line for Desktop / Left Line for Mobile -->
    <div
      class="absolute top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-400 via-teal-500/50 to-slate-300 dark:to-white/10 left-6 md:left-1/2 -translate-x-1/2"
    ></div>

    <!-- Timeline Nodes -->
    <div class="space-y-8 sm:space-y-12">
      <div
        v-for="(item, index) in educationHistory"
        :key="item.institution"
        class="relative flex flex-col md:flex-row items-start group"
        :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
        data-aos-duration="600"
      >
        <!-- Timeline Node Circle -->
        <div
          class="absolute left-6 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-50 dark:bg-[#07080c] border-2 flex items-center justify-center z-20 shadow-md group-hover:scale-125 transition-transform duration-300"
          :class="
            item.isCurrent
              ? 'border-emerald-400 shadow-emerald-500/40'
              : 'border-slate-300 dark:border-white/20 group-hover:border-emerald-400'
          "
        >
          <span
            class="w-2.5 h-2.5 rounded-full"
            :class="
              item.isCurrent
                ? 'bg-emerald-400 animate-pulse'
                : 'bg-slate-400 dark:bg-white/40 group-hover:bg-emerald-400'
            "
          ></span>
        </div>

        <!-- Content Card: Full width on mobile, half on desktop -->
        <div
          class="pl-14 md:pl-0 w-full md:w-1/2"
          :class="
            index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'
          "
        >
          <div
            class="luxury-card p-5 sm:p-6 group-hover:border-emerald-400/40 transition-all duration-300"
          >
            <!-- Period Badge -->
            <div
              class="flex items-center gap-2 mb-2"
              :class="index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'"
            >
              <span
                class="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                :class="
                  item.isCurrent
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                    : 'bg-slate-100 dark:bg-white/[0.05] text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-white/10'
                "
              >
                <span
                  v-if="item.isCurrent"
                  class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"
                ></span>
                {{ item.period }}
              </span>
            </div>

            <!-- Degree & Institution -->
            <h3
              class="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors"
            >
              {{ item.degree }}
            </h3>
            <div
              class="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-300/90 mb-2"
            >
              {{ item.institution }}
            </div>

            <!-- Narrative -->
            <p
              class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal"
            >
              {{ item.location }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const educationHistory = [
  {
    degree: "Master in Information Technology",
    institution: "Holy Cross of Davao College",
    period: "Ongoing",
    isCurrent: true,
    location: "Sta. Ana Avenue, Davao City, Philippines",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Davao del Norte State College",
    period: "2019 – 2023",
    isCurrent: false,
    location: "New Visayas, Panabo City, Davao del Norte, Philippines",
  },
  {
    degree: "High School Diploma",
    institution: "Maragusan National High School",
    period: "2014 – 2019",
    isCurrent: false,
    location: "Poblacion Maragusan, Davao De Oro, Philippines",
  },
];
</script>

<style scoped></style>

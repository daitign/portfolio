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
        <span>✦ Technical & Creative Ecosystem</span>
      </div>
      <h2
        class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3"
      >
        Capabilities & Tooling
      </h2>
      <p
        class="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-normal"
      >
        From brand identity and cinematic video post-production to full-stack
        web platforms and cloud deployments.
      </p>
    </div>

    <!-- 3 Luxury Pillars Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <!-- Pillar 1: Creative Direction & Visual Design -->
      <div
        class="luxury-card p-6 sm:p-8 flex flex-col justify-between"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="700"
      >
        <div>
          <!-- Card Header -->
          <div
            class="flex items-center gap-4 pb-6 border-b border-slate-200/70 dark:border-white/[0.08]"
          >
            <div
              class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shadow-inner border border-emerald-500/20"
            >
              <font-awesome-icon :icon="['fas', 'photo-film']" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                Creative Direction
              </h3>
              <span
                class="text-xs uppercase tracking-wider font-semibold text-slate-400"
                >Graphic Design & Video Editing</span
              >
            </div>
          </div>

          <!-- Description -->
          <p
            class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 py-4 leading-relaxed font-normal"
          >
            Brand identity design, cinematic video editing, motion graphics, and
            high-impact digital content creation.
          </p>

          <!-- Skill Badges Grid -->
          <div class="grid grid-cols-3 gap-2.5 pt-2">
            <div
              v-for="(tool, idx) in creativeTools"
              :key="tool.name"
              class="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] hover:border-emerald-400/40 hover:scale-105 transition-all duration-300 group"
              :class="{ 'col-start-2': idx === 6 }"
            >
              <div
                class="w-7 h-7 sm:w-8 sm:h-8 mb-1.5 flex items-center justify-center"
              >
                <TechIcon :name="tool.icon" class="w-full h-full" />
              </div>
              <span
                class="text-[11px] font-semibold text-slate-700 dark:text-slate-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors text-center leading-tight"
              >
                {{ tool.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pillar 2: Backend Architecture & Cloud -->
      <div
        class="luxury-card p-6 sm:p-8 flex flex-col justify-between"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="700"
      >
        <div>
          <!-- Card Header -->
          <div
            class="flex items-center gap-4 pb-6 border-b border-slate-200/70 dark:border-white/[0.08]"
          >
            <div
              class="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-xl shadow-inner border border-blue-500/20"
            >
              <font-awesome-icon :icon="['fas', 'server']" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                Backend Engineering
              </h3>
              <span
                class="text-xs uppercase tracking-wider font-semibold text-slate-400"
                >Architecture & Data</span
              >
            </div>
          </div>

          <!-- Description -->
          <p
            class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 py-4 leading-relaxed font-normal"
          >
            Robust RESTful API development, relational database modeling with
            MySQL, secure authentication, and cloud server deployment.
          </p>

          <!-- Skill Badges Grid -->
          <div class="grid grid-cols-3 gap-2.5 pt-2">
            <div
              v-for="tool in backendTools"
              :key="tool.name"
              class="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] hover:border-blue-400/40 hover:scale-105 transition-all duration-300 group"
            >
              <div
                class="w-7 h-7 sm:w-8 sm:h-8 mb-1.5 flex items-center justify-center"
              >
                <TechIcon :name="tool.icon" class="w-full h-full" />
              </div>
              <span
                class="text-[11px] font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-center"
              >
                {{ tool.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Pillar 3: Frontend & Interactive Systems -->
      <div
        class="luxury-card p-6 sm:p-8 flex flex-col justify-between md:col-span-2 lg:col-span-1"
        data-aos="fade-up"
        data-aos-delay="450"
        data-aos-duration="700"
      >
        <div>
          <!-- Card Header -->
          <div
            class="flex items-center gap-4 pb-6 border-b border-slate-200/70 dark:border-white/[0.08]"
          >
            <div
              class="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-xl shadow-inner border border-indigo-500/20"
            >
              <font-awesome-icon :icon="['fas', 'code']" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                Frontend Architecture
              </h3>
              <span
                class="text-xs uppercase tracking-wider font-semibold text-slate-400"
                >Interactive Systems</span
              >
            </div>
          </div>

          <!-- Description -->
          <p
            class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 py-4 leading-relaxed font-normal"
          >
            Responsive web applications, component-driven UI architecture, fluid
            interactive interfaces, and cross-device design systems.
          </p>

          <!-- Skill Badges Grid -->
          <div class="grid grid-cols-3 gap-2.5 pt-2">
            <div
              v-for="tool in frontendTools"
              :key="tool.name"
              class="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] hover:border-indigo-400/40 hover:scale-105 transition-all duration-300 group"
            >
              <div
                class="w-7 h-7 sm:w-8 sm:h-8 mb-1.5 flex items-center justify-center"
              >
                <TechIcon :name="tool.icon" class="w-full h-full" />
              </div>
              <span
                class="text-[11px] font-semibold text-slate-700 dark:text-slate-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors text-center"
              >
                {{ tool.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TechIcon from "@/components/TechIcon.vue";

const creativeTools = [
  { name: "Photoshop", icon: "photoshop" },
  { name: "Illustrator", icon: "illustrator" },
  { name: "Canva", icon: "canva" },
  { name: "Premiere", icon: "premiere" },
  { name: "After Effects", icon: "aftereffects" },
  { name: "DaVinci Resolve", icon: "davinci" },
  { name: "CapCut", icon: "capcut" },
];

const backendTools = [
  { name: "Laravel", icon: "laravel" },
  { name: "PHP", icon: "php" },
  { name: "MySQL", icon: "mysql" },
  { name: "CodeIgniter", icon: "codeigniter" },
  { name: "AWS Cloud", icon: "aws" },
  { name: "REST APIs", icon: "code" },
];

const frontendTools = [
  { name: "Vue.js", icon: "vue" },
  { name: "React", icon: "react" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "JavaScript", icon: "javascript" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
];
</script>

<style scoped></style>

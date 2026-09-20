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
        <span>✦ Biography & Vision</span>
      </div>
      <h2
        class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3"
      >
        Cinematic Direction & Digital Craft
      </h2>
      <p
        class="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-normal"
      >
        The convergence of cinematic video editing, visual design, and modern
        web development.
      </p>
    </div>

    <!-- Editorial 2-Column Split: Horizontally Aligned Top & Bottom -->
    <div
      class="flex flex-col lg:flex-row lg:items-stretch justify-between gap-8 lg:gap-12"
    >
      <!-- Left: Cinematic Studio & Programming Landscape with Luxury Bezel Frame & Swipe Gallery -->
      <div
        class="w-full lg:w-1/2 flex flex-col"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="700"
      >
        <div class="relative group w-full h-full flex flex-col">
          <!-- Subtle Glow Aura -->
          <div
            class="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/15 to-transparent blur-xl opacity-80 group-hover:opacity-100 transition-opacity"
          ></div>

          <div
            class="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-2xl bg-slate-900 w-full lg:h-full flex flex-col"
          >
            <div
              class="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full overflow-hidden select-none cursor-grab active:cursor-grabbing"
              @touchstart="onTouchStart"
              @touchmove="onTouchMove"
              @touchend="onTouchEnd"
              @mousedown="onMouseDown"
              @mousemove="onMouseMove"
              @mouseup="onMouseUp"
              @mouseleave="onMouseUp"
              @dragstart.prevent
            >
              <!-- Sliding Track -->
              <div
                class="flex w-full h-full"
                :class="{
                  'transition-transform duration-500 ease-out': !isDragging,
                }"
                :style="{
                  transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`,
                }"
              >
                <!-- Slide 1: Video Editor Studio -->
                <div class="w-full h-full shrink-0 relative">
                  <img
                    class="w-full h-full object-cover object-center filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 pointer-events-none"
                    :src="jemarkStudioImg"
                    alt="Jemark Daite in editing studio workspace"
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 pointer-events-none"
                  ></div>
                </div>

                <!-- Slide 2: Programmer Workspace -->
                <div class="w-full h-full shrink-0 relative">
                  <img
                    class="w-full h-full object-cover object-center filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 pointer-events-none"
                    :src="jemarkProgrammerImg"
                    alt="Jemark Daite in programming workspace"
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 pointer-events-none"
                  ></div>
                </div>
              </div>

              <!-- Top Bar Controls (Dynamic Role Pill + Navigation Dots & Arrows) -->
              <div
                class="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 z-20 flex items-center justify-between pointer-events-auto"
              >
                <!-- Role Pill (Changes based on current active slide) -->
                <div
                  class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl backdrop-blur-xl bg-[#0a100d]/85 border border-emerald-500/30 text-white shadow-lg select-none"
                >
                  <font-awesome-icon
                    :icon="['fas', currentSlide === 0 ? 'video' : 'code']"
                    class="text-emerald-400 text-xs transition-transform duration-300"
                  />
                  <span class="text-white text-[11px] sm:text-xs font-semibold">
                    {{ currentSlide === 0 ? "Video Editor" : "Programmer" }}
                  </span>
                </div>

                <!-- Navigation Controls Capsule -->
                <div
                  class="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-xl backdrop-blur-xl bg-[#0a100d]/85 border border-white/10 text-white shadow-lg select-none"
                >
                  <button
                    type="button"
                    @click.stop="prevSlide"
                    class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-slate-300 transition-all active:scale-90 cursor-pointer"
                    aria-label="Previous Image"
                    title="Previous Image"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'arrow-left']"
                      class="text-[9px] sm:text-[10px]"
                    />
                  </button>

                  <!-- 2 Indicator Dots -->
                  <div class="flex items-center gap-1 px-1">
                    <button
                      v-for="idx in 2"
                      :key="idx"
                      type="button"
                      @click.stop="goToSlide(idx - 1)"
                      class="transition-all duration-300 rounded-full cursor-pointer"
                      :class="
                        currentSlide === idx - 1
                          ? 'w-5 sm:w-6 h-1.5 bg-emerald-400 shadow-sm shadow-emerald-400/50'
                          : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                      "
                      :aria-label="`Go to image ${idx}`"
                    ></button>
                  </div>

                  <button
                    type="button"
                    @click.stop="nextSlide"
                    class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-slate-300 transition-all active:scale-90 cursor-pointer"
                    aria-label="Next Image"
                    title="Next Image"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'arrow-right']"
                      class="text-[9px] sm:text-[10px]"
                    />
                  </button>
                </div>
              </div>

              <!-- Desktop Side Chevrons (Show smoothly on hover) -->
              <div
                class="hidden md:flex absolute inset-y-0 left-2 items-center z-20 pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <button
                  type="button"
                  @click.stop="prevSlide"
                  class="w-8 h-8 rounded-full bg-black/75 hover:bg-emerald-500 hover:text-white text-white/90 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl transition-all active:scale-95 cursor-pointer"
                  aria-label="Previous Image"
                >
                  <font-awesome-icon
                    :icon="['fas', 'arrow-left']"
                    class="text-xs"
                  />
                </button>
              </div>

              <div
                class="hidden md:flex absolute inset-y-0 right-2 items-center z-20 pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <button
                  type="button"
                  @click.stop="nextSlide"
                  class="w-8 h-8 rounded-full bg-black/75 hover:bg-emerald-500 hover:text-white text-white/90 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl transition-all active:scale-95 cursor-pointer"
                  aria-label="Next Image"
                >
                  <font-awesome-icon
                    :icon="['fas', 'arrow-right']"
                    class="text-xs"
                  />
                </button>
              </div>

              <!-- Bottom Corner Pill Badge (Location & Name) -->
              <div
                class="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 p-2 sm:p-2.5 md:p-3 rounded-xl backdrop-blur-xl bg-[#0a100d]/85 border border-emerald-500/25 text-white flex items-center gap-2.5 sm:gap-3 shadow-[0_12px_32px_rgba(0,0,0,0.85),0_0_20px_rgba(16,185,129,0.18)] pointer-events-none max-w-[calc(100%-90px)]"
              >
                <div class="min-w-0">
                  <div
                    class="text-xs font-bold tracking-wide text-emerald-400 truncate"
                  >
                    Jemark Daite
                  </div>
                  <div
                    class="text-[9px] sm:text-[10px] text-slate-300 uppercase tracking-wider truncate"
                  >
                    Davao, Philippines • Worldwide
                  </div>
                </div>
                <div
                  class="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/10 flex items-center justify-center text-emerald-400 text-[10px] sm:text-xs shrink-0"
                >
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                </div>
              </div>

              <!-- Bottom Right Subtle Swipe Hint / Counter -->
              <div
                class="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 px-2.5 py-1.5 rounded-xl backdrop-blur-xl bg-[#0a100d]/85 border border-white/10 text-slate-400 text-[9px] sm:text-[10px] font-mono pointer-events-none flex items-center gap-1.5 shadow-lg"
              >
                <span class="tracking-wide">Swipe</span>
                <span class="text-emerald-400 font-bold">
                  0{{ currentSlide + 1 }}/02
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Narrative & Experience Metrics (Flush Top & Bottom with Image) -->
      <div
        class="w-full lg:w-1/2 flex flex-col justify-between text-left"
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="700"
      >
        <!-- Top: Balanced Executive Narrative (Video Editing & Web Development) -->
        <div
          class="space-y-2.5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal mb-5 lg:mb-0"
        >
          <p>
            My creative journey is driven by visual storytelling where cinematic
            pacing, color grading, and dynamic motion meet digital technology.
            From cutting high retention video content to designing cohesive
            brand identities, I transform ideas into compelling visual
            experiences.
          </p>
          <p>
            Holding a BSIT degree, pursuing Master's studies in IT, and backed
            by over four years of industry experience, I operate seamlessly
            across video editing and web development crafting broadcast-quality
            video productions alongside responsive, scalable web platforms.
          </p>
        </div>

        <!-- Middle: Compact & Refined 3-Column Metric Cards -->
        <div
          class="grid grid-cols-3 gap-2 sm:gap-3 w-full my-4 sm:my-5 lg:my-0"
        >
          <div
            class="luxury-card py-2 px-1.5 sm:py-2.5 sm:px-3 text-center !rounded-xl sm:!rounded-2xl"
          >
            <div
              class="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 dark:text-white leading-none mb-1"
            >
              04<span class="text-emerald-500 font-bold">+</span>
            </div>
            <div
              class="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 leading-tight"
            >
              Years Experience
            </div>
          </div>

          <div
            class="luxury-card py-2 px-1.5 sm:py-2.5 sm:px-3 text-center !rounded-xl sm:!rounded-2xl"
          >
            <div
              class="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 dark:text-white leading-none mb-1"
            >
              132<span class="text-emerald-500 font-bold">+</span>
            </div>
            <div
              class="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 leading-tight"
            >
              Shipped Projects
            </div>
          </div>

          <div
            class="luxury-card py-2 px-1.5 sm:py-2.5 sm:px-3 text-center !rounded-xl sm:!rounded-2xl"
          >
            <div
              class="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 dark:text-white leading-none mb-1"
            >
              04<span class="text-emerald-500 font-bold">+</span>
            </div>
            <div
              class="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400 leading-tight"
            >
              Companies Served
            </div>
          </div>
        </div>

        <!-- Bottom: Refined Action Button with Comfortable Breathing Room -->
        <div class="pt-2 lg:pt-0 w-full sm:w-auto">
          <button
            type="button"
            @click="openResume"
            class="btn-luxury-emerald !py-2 sm:!py-2.5 !px-5 text-xs sm:text-sm font-semibold w-full sm:w-auto text-center cursor-pointer flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            <span>Download Resume</span>
            <font-awesome-icon
              class="text-xs sm:text-sm"
              :icon="['fas', 'circle-arrow-down']"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useResumeModal } from "@/composables/useResumeModal";
import jemarkStudioImg from "@/assets/img/jemark_studio.jpg";
import jemarkProgrammerImg from "@/assets/img/jemark_programmer.jpg";

const { openResume } = useResumeModal();

const currentSlide = ref(0);
const isDragging = ref(false);
const dragStartX = ref(0);
const dragOffset = ref(0);

const goToSlide = (idx: number) => {
  currentSlide.value = idx;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 2;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + 2) % 2;
};

// Touch Handlers for mobile swiping
const onTouchStart = (e: TouchEvent) => {
  isDragging.value = true;
  dragStartX.value = e.touches[0].clientX;
  dragOffset.value = 0;
};

const onTouchMove = (e: TouchEvent) => {
  if (!isDragging.value) return;
  const currentX = e.touches[0].clientX;
  dragOffset.value = currentX - dragStartX.value;
};

const onTouchEnd = () => {
  if (!isDragging.value) return;
  finishSwipe();
};

// Mouse Drag Handlers for desktop swiping
const onMouseDown = (e: MouseEvent) => {
  isDragging.value = true;
  dragStartX.value = e.clientX;
  dragOffset.value = 0;
};

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return;
  const currentX = e.clientX;
  dragOffset.value = currentX - dragStartX.value;
};

const onMouseUp = () => {
  if (!isDragging.value) return;
  finishSwipe();
};

const finishSwipe = () => {
  isDragging.value = false;
  const threshold = 40; // 40px threshold to trigger slide change
  if (dragOffset.value < -threshold) {
    nextSlide();
  } else if (dragOffset.value > threshold) {
    prevSlide();
  }
  dragOffset.value = 0;
};
</script>

<style scoped></style>

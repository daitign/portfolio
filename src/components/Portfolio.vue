<template>
  <div class="max-w-7xl mx-auto py-16 sm:py-24">
    <!-- Luxury Section Header -->
    <div
      class="text-center pb-10 sm:pb-12"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="700"
    >
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3"
      >
        <span
          >✦
          {{
            activeCategory === "programmer"
              ? "Software & Web Systems"
              : "Cinematic Video & Motion"
          }}</span
        >
      </div>
      <h2
        class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3"
      >
        Selected Works & Productions
      </h2>
      <p
        class="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-normal transition-all duration-300 min-h-[44px] flex items-center justify-center"
      >
        {{
          activeCategory === "programmer"
            ? "A distinguished collection of production web platforms, cloud architecture, and interactive full-stack systems."
            : "Cinematic commercial edits, high-retention video post-production, dynamic motion graphics, and narrative color grading."
        }}
      </p>

      <!-- Luxury Segmented Control (Programmer vs Video Editor) -->
      <div class="flex justify-center mt-8 sm:mt-10">
        <div
          class="inline-flex p-1.5 rounded-full bg-slate-200/80 dark:bg-white/[0.05] border border-slate-300/70 dark:border-white/10 backdrop-blur-md shadow-inner"
        >
          <button
            type="button"
            @click="activeCategory = 'programmer'"
            class="flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
            :class="
              activeCategory === 'programmer'
                ? 'bg-emerald-600 text-white dark:bg-emerald-400 dark:text-black shadow-md shadow-emerald-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            "
          >
            <font-awesome-icon :icon="['fas', 'code']" class="text-xs" />
            <span>Programmer</span>
          </button>

          <button
            type="button"
            @click="activeCategory = 'video'"
            class="flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
            :class="
              activeCategory === 'video'
                ? 'bg-emerald-600 text-white dark:bg-emerald-400 dark:text-black shadow-md shadow-emerald-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            "
          >
            <font-awesome-icon :icon="['fas', 'video']" class="text-xs" />
            <span>Video Editor</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Featured 3D Cylindrical Portrait Video Showcase (Active when Video Editor is selected) -->
    <Transition name="fade-slide">
      <div
        v-if="activeCategory === 'video'"
        id="video-theater"
        class="px-2 sm:px-6 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <!-- Showcase Header / Subtitle (Clean & Unboxed, floating on luxury background) -->
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 mb-2.5 px-2"
        >
          <div class="flex items-center gap-2">
            <span class="relative flex h-2.5 w-2.5">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"
              ></span>
            </span>
            <span
              class="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Featured 3D Video Reel Showcase
            </span>
          </div>

          <p
            class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium text-center sm:text-right"
          >
            Swipe or drag cylinder to rotate • Tap card to play
          </p>
        </div>

        <!-- 3D Cylindrical Circle Swipe Carousel Stage -->
        <div
          ref="carouselStageRef"
          class="carousel-stage my-2 sm:my-4"
          @mousedown="onDragStart"
          @mousemove="onDragMove"
          @mouseup="onDragEnd"
          @mouseleave="onDragEnd"
          @touchstart="onDragStart"
          @touchmove="onDragMove"
          @touchend="onDragEnd"
        >
          <div
            class="carousel-cylinder"
            :class="{ 'is-dragging': isDragging }"
            :style="{
              transform: `rotateX(1deg) rotateY(${carouselRotation}deg)`,
            }"
          >
            <div
              v-for="(item, idx) in ringItems"
              :key="idx"
              class="carousel-card select-none"
              :class="{
                'is-active': isCardActive(idx),
                'is-playing': isCardActive(idx) && isPlayingReel,
              }"
              :style="getCardStyle(idx)"
              @click="handleCardClick(idx)"
            >
              <!-- Active Inline 9:16 Video Player (Plays directly in the card) -->
              <template v-if="isCardActive(idx) && isPlayingReel">
                <div class="video-crop-container">
                  <iframe
                    :src="item.embedUrl"
                    class="video-cropped-iframe"
                    scrolling="no"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowfullscreen
                    title="Video Reel Player"
                  ></iframe>
                </div>

                <!-- Controls Overlay (Fullscreen/Theater button and Close button in top-right) -->
                <div
                  class="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 z-30 flex items-center gap-1 sm:gap-1.5 pointer-events-auto select-none"
                >
                  <!-- Fullscreen / Theater Button (Opens modal when clicked) -->
                  <button
                    type="button"
                    @click.stop="openTheater(item)"
                    class="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-black/85 hover:bg-emerald-500 text-white flex items-center justify-center border border-white/20 transition-all active:scale-95 shadow-xl cursor-pointer"
                    title="Fullscreen Theater Mode"
                    aria-label="Expand to Fullscreen Theater"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'expand']"
                      class="text-[8px] sm:text-xs"
                    />
                  </button>
                  <!-- Close button (Stops inline playback) -->
                  <button
                    type="button"
                    @click.stop="stopReelPlayback"
                    class="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-black/85 hover:bg-rose-500 text-white flex items-center justify-center border border-white/20 transition-all active:scale-95 shadow-xl cursor-pointer"
                    title="Close Preview"
                    aria-label="Close Preview"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'xmark']"
                      class="text-[8px] sm:text-xs"
                    />
                  </button>
                </div>
              </template>

              <!-- First Frame Thumbnail Poster (Default Clean Preview) -->
              <div
                v-else
                class="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 bg-cover bg-center cursor-pointer group/card"
                :style="{ backgroundImage: `url(${item.thumb})` }"
              >
                <!-- Subtle Cinematic Gradient Overlay -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none"
                ></div>

                <!-- Top Action Bar (Fullscreen/Theater button in top-right) -->
                <div class="relative z-10 flex items-center justify-end">
                  <button
                    type="button"
                    @click.stop="openTheater(item)"
                    class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/75 hover:bg-emerald-500 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-xl cursor-pointer"
                    title="Fullscreen Theater Mode"
                    aria-label="Open Fullscreen Theater Mode"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'expand']"
                      class="text-[9px] sm:text-xs"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3D Carousel Controls (Prev / Next & Indicator Pills) -->
        <div
          class="relative flex flex-col lg:flex-row items-center justify-between gap-4 pt-4 px-2 min-h-[52px]"
        >
          <!-- Left: 4K HDR specs badge (Order 2 on mobile, Order 1 on desktop) -->
          <div
            class="order-2 lg:order-1 flex items-center justify-center lg:justify-start"
          >
            <span
              class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1 shrink-0"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
              ></span>
              4K HDR • 60 FPS
            </span>
          </div>

          <!-- Central Navigation Arrows & Dots (Order 1 on mobile, dead-centered on desktop) -->
          <div
            class="order-1 lg:order-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center gap-4"
          >
            <button
              type="button"
              @click="prevReel"
              class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100/90 dark:bg-white/10 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-black border border-slate-300/80 dark:border-white/15 flex items-center justify-center text-slate-800 dark:text-white transition-all active:scale-95 shadow-md backdrop-blur-md cursor-pointer"
              aria-label="Previous Reel"
            >
              <font-awesome-icon
                :icon="['fas', 'arrow-left']"
                class="text-xs sm:text-sm"
              />
            </button>

            <div
              class="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-100/90 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 backdrop-blur-md shadow-sm"
            >
              <button
                v-for="(_, rIdx) in showcaseReels"
                :key="rIdx"
                type="button"
                @click="goToReelIndex(rIdx)"
                class="transition-all duration-300 rounded-full cursor-pointer"
                :class="
                  ((activeSlot % 3) + 3) % 3 === rIdx
                    ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-emerald-400 shadow-md shadow-emerald-400/50'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-slate-300 dark:bg-white/25 hover:bg-slate-400 dark:hover:bg-white/40'
                "
                :aria-label="`Select Reel ${rIdx + 1}`"
              ></button>
            </div>

            <button
              type="button"
              @click="nextReel"
              class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100/90 dark:bg-white/10 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-black border border-slate-300/80 dark:border-white/15 flex items-center justify-center text-slate-800 dark:text-white transition-all active:scale-95 shadow-md backdrop-blur-md cursor-pointer"
              aria-label="Next Reel"
            >
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                class="text-xs sm:text-sm"
              />
            </button>
          </div>

          <!-- Reel Counter Pill (Order 3) -->
          <div
            class="order-3 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono shrink-0"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Reel 0{{ ((activeSlot % 3) + 3) % 3 + 1 }} / 03</span>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Responsive Luxury Swiper Showroom (Programmer Projects) -->
    <div
      v-if="activeCategory === 'programmer'"
      class="details px-2 sm:px-4"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="700"
    >
      <swiper
        :key="activeCategory"
        :slidesPerView="1"
        :spaceBetween="20"
        :pagination="{ clickable: true }"
        :modules="modules"
        :breakpoints="{
          '640': {
            slidesPerView: 1.4,
            spaceBetween: 24,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide v-for="(project, key) in currentProjects" :key="key">
          <div
            class="luxury-card p-6 h-full flex flex-col justify-between group min-h-[460px]"
          >
            <div>
              <!-- Traffic Light macOS Dots & Category Pill -->
              <div
                class="flex items-center justify-between pb-5 border-b border-slate-200/60 dark:border-white/[0.06]"
              >
                <div class="flex items-center gap-1.5">
                  <span
                    class="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"
                  ></span>
                  <span
                    class="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block"
                  ></span>
                  <span
                    class="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block"
                  ></span>
                </div>
                <span
                  class="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/10"
                >
                  {{ project.category }}
                </span>
              </div>

              <!-- Tech Icon & Identity Header -->
              <div class="flex items-center gap-4 pt-5 pb-3">
                <div
                  class="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 p-2.5 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 group-hover:border-emerald-500/40 transition-all duration-300"
                >
                  <TechIcon :name="project.tech" custom-class="w-full h-full" />
                </div>
                <div>
                  <h3
                    class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors"
                  >
                    {{ project.name }}
                  </h3>
                  <span
                    class="text-xs text-slate-400 font-medium tracking-wide"
                  >
                    {{ project.subtitle }}
                  </span>
                </div>
              </div>

              <!-- Project Narrative Description -->
              <p
                class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal pt-2 pb-4"
              >
                {{ project.description }}
              </p>

              <!-- Technology / Software Tags -->
              <div class="flex flex-wrap gap-1.5 pt-1 pb-4">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-white/[0.06]"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Luxury Action Link -->
            <div
              class="pt-4 border-t border-slate-200/60 dark:border-white/[0.06]"
            >
              <a
                :href="project.project_link"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase bg-slate-900 text-white dark:bg-white dark:text-black hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-black transition-all duration-300 shadow-sm active:scale-98"
              >
                <span>{{
                  activeCategory === "programmer"
                    ? "Explore Project"
                    : "Watch Reel"
                }}</span>
                <font-awesome-icon
                  :icon="
                    activeCategory === 'programmer'
                      ? ['fas', 'arrow-up-right-from-square']
                      : ['fas', 'play']
                  "
                  class="text-[10px]"
                />
              </a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 4K Portrait Theater Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isTheaterOpen && theaterItem"
          class="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          @click="closeTheater"
        >
          <div
            ref="theaterModalRef"
            class="theater-modal relative w-full max-w-[420px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/15 border border-emerald-500/30 flex flex-col"
            @click.stop
          >
            <!-- Theater Header Overlay (Close button top-right) -->
            <div
              class="absolute top-4 right-4 z-20 flex items-center pointer-events-auto"
            >
              <button
                type="button"
                @click="closeTheater"
                class="w-8 h-8 rounded-full bg-black/80 hover:bg-rose-500 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer shadow-xl"
                aria-label="Close Theater"
              >
                <font-awesome-icon :icon="['fas', 'xmark']" class="text-sm" />
              </button>
            </div>

            <!-- Cropped Clean Video Player in Theater -->
            <div class="video-crop-container">
              <iframe
                :src="theaterItem.embedUrl"
                class="video-cropped-iframe"
                :style="theaterIframeStyle"
                scrolling="no"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowfullscreen
                title="Theater Reel Player"
              ></iframe>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import TechIcon from "@/components/TechIcon.vue";
import reel1Thumb from "@/assets/img/reels/reel_master_thumb.png";
import reel2Thumb from "@/assets/img/reels/reel_2_thumb.jpg";
import reel3Thumb from "@/assets/img/reels/reel_3_thumb.jpg";

const modules = [Pagination];

const activeCategory = ref<"programmer" | "video">("programmer");

const programmerProjects = [
  {
    name: "DaitignVault",
    subtitle: "Digital Software & License Store",
    category: "Digital Storefront",
    tech: "daitignvault",
    project_link: "https://daitignvault.vercel.app/",
    tags: ["Vue 3", "Tailwind CSS", "Digital Goods", "Vite"],
    description:
      "Bespoke digital software commerce platform offering premium developer tools, software keys, AI subscriptions, and integrated Netflix session utilities.",
  },
  {
    name: "Daiflix",
    subtitle: "DAITIGN Stream Media Engine",
    category: "Media Streaming",
    tech: "daiflix",
    project_link: "https://daiflix.vercel.app/",
    tags: ["React 19", "TMDB API", "Cinematic UI", "Tailwind"],
    description:
      "Interactive entertainment streaming web application featuring responsive catalog browsing, real-time movie/show search, and immersive video trailer previews.",
  },
  {
    name: "Caffeine Jitters & Co.",
    subtitle: "Modern Artisanal Café Platform",
    category: "Food & Beverage",
    tech: "cafe",
    project_link: "https://daitigncafe.vercel.app/",
    tags: ["Next.js 15", "React 19", "E-Commerce", "Turbopack"],
    description:
      "Refined digital ordering experience for an artisanal coffeehouse and bakery, featuring real-time menu customization, interactive size selectors, and PWA capabilities.",
  },
  {
    name: "MNHS LMS",
    subtitle: "Academic Performance Portal",
    category: "Academic System",
    tech: "codeigniter",
    project_link: "https://mnhs.daitign.org/",
    tags: ["CodeIgniter", "PHP", "MySQL"],
    description:
      "Centralized Learning Management portal providing thousands of students and faculty with secure, real-time academic grading and progress auditing.",
  },
  {
    name: "DNSC-QMS",
    subtitle: "Document Accreditation Architecture",
    category: "Enterprise System",
    tech: "dnsc",
    project_link: "https://www.daitign.com/",
    tags: ["Laravel", "PostgreSQL", "Enterprise"],
    description:
      "Enterprise institutional quality management suite engineered for Davao del Norte State College to orchestrate compliance records and document tracking.",
  },
  {
    name: "M5 Pharmacy",
    subtitle: "Pharmaceutical Logistics",
    category: "Web Platform",
    tech: "pharmacy",
    project_link: "https://github.com/daitign/M5-Pharmacy",
    tags: ["Laravel", "PHP", "Inventory"],
    description:
      "Cloud management architecture for retail pharmacies, optimizing prescription processing, batch tracking, point-of-sale, and stock alerts.",
  },
];

const featuredReelUrl =
  "https://drive.google.com/file/d/1YLNH79I6sANsnKQAKJCOh2fKslHvZAkY/view?t=3.349";

interface ShowcaseReel {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  duration: string;
  tech: string;
  thumb: string;
  driveUrl: string;
  embedUrl: string;
  tags: string[];
}

const showcaseReels: ShowcaseReel[] = [
  {
    id: 1,
    title: "Master Commercial & Motion Showreel",
    subtitle: "High-Retention Commercial Pacing, Cuts & Sound Design",
    category: "Commercial & Product Reel",
    badge: "4K HDR",
    duration: "0:32",
    tech: "Premiere Pro",
    thumb: reel1Thumb,
    driveUrl:
      "https://drive.google.com/file/d/1YLNH79I6sANsnKQAKJCOh2fKslHvZAkY/view?t=3.349",
    embedUrl:
      "https://drive.google.com/file/d/1YLNH79I6sANsnKQAKJCOh2fKslHvZAkY/preview",
    tags: ["Premiere Pro", "Sound Design", "4K HDR", "Kinetic Pacing"],
  },
  {
    id: 2,
    title: "Julius Caesar & The Fall of Rome",
    subtitle: "Historical Narrative, 3D Motion Graphics & Kinetic Typography",
    category: "Historical & Motion Graphics",
    badge: "1080p 9:16",
    duration: "0:16",
    tech: "After Effects",
    thumb: reel2Thumb,
    driveUrl:
      "https://drive.google.com/file/d/18LvaJ2Lb1_IrSQmy6jPH3Yh3Yh5JhgyC/view?t=6.035",
    embedUrl:
      "https://drive.google.com/file/d/18LvaJ2Lb1_IrSQmy6jPH3Yh3Yh5JhgyC/preview",
    tags: [
      "After Effects",
      "3D Compositing",
      "Historical Narrative",
      "Kinetic Typography",
    ],
  },
  {
    id: 3,
    title: "Viral Short-Form & Narrative Look Dev",
    subtitle: "Hook-Driven TikTok, IG Reels & Kinetic Typography",
    category: "Short-Form Creative",
    badge: "1080p 9:16",
    duration: "0:28",
    tech: "CapCut & DaVinci",
    thumb: reel3Thumb,
    driveUrl:
      "https://drive.google.com/drive/folders/1qhNWddFhGx-YepHr-gypIy7gDWXgm6Mp",
    embedUrl:
      "https://drive.google.com/file/d/1YLNH79I6sANsnKQAKJCOh2fKslHvZAkY/preview",
    tags: ["CapCut", "Kinetic Typography", "Mobile 9:16", "Sound Synthesis"],
  },
];

// 9 items on ring (alternating reels 1, 2, 3 three times for infinite circular rotation)
const ringItems = computed(() => [
  ...showcaseReels,
  ...showcaseReels,
  ...showcaseReels,
]);

const angleStep = 40; // 360 / 9 = 40 deg
const cylinderRadius = ref(360);
const carouselRotation = ref(0);
const activeSlot = ref(0);
const isDragging = ref(false);
const isPlayingReel = ref(false);
const isTheaterOpen = ref(false);
const theaterItem = ref<any>(null);
const theaterModalRef = ref<HTMLElement | null>(null);
const theaterModalWidth = ref(420);

const updateTheaterModalWidth = () => {
  if (theaterModalRef.value && theaterModalRef.value.clientWidth > 0) {
    theaterModalWidth.value = theaterModalRef.value.clientWidth;
    return;
  }
  if (typeof window !== "undefined") {
    theaterModalWidth.value = Math.min(420, window.innerWidth - 32);
  }
};

const theaterIframeStyle = computed(() => {
  // Google Drive's embedded player checks viewport/iframe width:
  // At < 480px it enables bloated mobile touch controls (giant pause button in center,
  // floating thick scrubber cutting across text, cut-off bottom bar).
  // At >= 600px, it switches to its sleek desktop layout with a razor-thin scrubber bar
  // pinned at the bottom and a single row of compact controls.
  const virtualWidth = 600;
  // 600 * 16 / 9 = 1066.67px. Google Drive title bar at 600px width is 48px.
  // Virtual height = 1067 + 48 = 1115px.
  const virtualHeight = 1115;
  const topCrop = 48;

  const currentWidth = theaterModalWidth.value || 420;
  const scale = currentWidth / virtualWidth;

  return {
    position: "absolute" as const,
    top: `${-topCrop * scale}px`,
    left: "0px",
    width: `${virtualWidth}px`,
    height: `${virtualHeight}px`,
    transform: `scale(${scale})`,
    transformOrigin: "top left",
    border: "0",
  };
});

const activeReel = computed(() => {
  const norm = ((activeSlot.value % 3) + 3) % 3;
  return showcaseReels[norm];
});

const openTheater = (item: any) => {
  theaterItem.value = item;
  isTheaterOpen.value = true;
  updateTheaterModalWidth();
  nextTick(() => {
    updateTheaterModalWidth();
  });
};

const closeTheater = () => {
  isTheaterOpen.value = false;
  theaterItem.value = null;
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    if (isTheaterOpen.value) {
      closeTheater();
    } else if (isPlayingReel.value) {
      stopReelPlayback();
    }
  }
};

const updateCylinderRadius = () => {
  if (typeof window === "undefined") return;
  const w = window.innerWidth;
  if (w < 480) {
    cylinderRadius.value = 218;
  } else if (w < 640) {
    cylinderRadius.value = 226;
  } else if (w < 1024) {
    cylinderRadius.value = 295;
  } else {
    cylinderRadius.value = 360;
  }
};

const onResize = () => {
  updateCylinderRadius();
  updateTheaterModalWidth();
};

onMounted(() => {
  updateCylinderRadius();
  updateTheaterModalWidth();
  window.addEventListener("resize", onResize);
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("resize", onResize);
  window.removeEventListener("keydown", handleKeyDown);
});

const nextReel = () => {
  stopReelPlayback();
  activeSlot.value++;
  carouselRotation.value -= angleStep;
};

const prevReel = () => {
  stopReelPlayback();
  activeSlot.value--;
  carouselRotation.value += angleStep;
};

const goToReelIndex = (reelIndex: number) => {
  stopReelPlayback();
  const currentReelIndex = ((activeSlot.value % 3) + 3) % 3;
  let delta = reelIndex - currentReelIndex;
  if (delta > 1) delta -= 3;
  if (delta < -1) delta += 3;
  activeSlot.value += delta;
  carouselRotation.value -= delta * angleStep;
};

const getCardStyle = (idx: number) => {
  const angle = idx * angleStep;
  return {
    transform: `rotateY(${angle}deg) translateZ(${cylinderRadius.value}px)`,
  };
};

const isCardActive = (idx: number) => {
  let diff = (idx * angleStep + carouselRotation.value) % 360;
  if (diff < 0) diff += 360;
  if (diff > 180) diff -= 360;
  return Math.abs(diff) < 18;
};

const startInlinePlayback = (_item?: any) => {
  isPlayingReel.value = true;
};

const handleCardClick = (idx: number) => {
  if (hasDragged || isDragging.value) return;
  if (isCardActive(idx)) {
    startInlinePlayback(activeReel.value);
  } else {
    stopReelPlayback();
    activeSlot.value = idx;
    carouselRotation.value = -idx * angleStep;
  }
};

const togglePlayReel = () => {
  isPlayingReel.value = !isPlayingReel.value;
};

const stopReelPlayback = () => {
  isPlayingReel.value = false;
};

// Pointer & Touch Drag Handlers
let startX = 0;
let dragStartRotation = 0;
let hasDragged = false;

const onDragStart = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true;
  hasDragged = false;
  startX = "touches" in e ? e.touches[0].pageX : e.pageX;
  dragStartRotation = carouselRotation.value;
};

const onDragMove = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return;
  const currentX = "touches" in e ? e.touches[0].pageX : e.pageX;
  const deltaX = currentX - startX;
  if (Math.abs(deltaX) > 6) {
    hasDragged = true;
  }
  carouselRotation.value = dragStartRotation + deltaX * 0.28;
};

const onDragEnd = () => {
  if (!isDragging.value) return;
  isDragging.value = false;
  const targetSlot = Math.round(-carouselRotation.value / angleStep);
  activeSlot.value = targetSlot;
  carouselRotation.value = -targetSlot * angleStep;
  if (hasDragged) {
    setTimeout(() => {
      hasDragged = false;
    }, 150);
  }
};

const videoProjects = [
  {
    name: "Upperhand Creative Reels",
    subtitle: "High-Retention Commercial Ads",
    category: "Commercial Post-Production",
    tech: "premiere",
    project_link: featuredReelUrl,
    tags: ["Premiere Pro", "Pacing & Cuts", "Sound Design", "4K HDR"],
    description:
      "High-conversion commercial campaign edits, cinematic product reels, dynamic typography, and pacing engineered to maximize audience retention across digital channels.",
  },
  {
    name: "Pentwater Brand Showcase",
    subtitle: "Corporate Highlights & Motion",
    category: "Corporate Media",
    tech: "aftereffects",
    project_link: featuredReelUrl,
    tags: ["After Effects", "Motion Graphics", "Color Grading", "VFX"],
    description:
      "Broadcast-quality corporate showcase videos, investor pitch presentations, animated lower thirds, seamless transitions, and brand identity showreels.",
  },
  {
    name: "Viral Short-Form Suite",
    subtitle: "Reels, TikTok & Shorts Direction",
    category: "Short-Form Creative",
    tech: "capcut",
    project_link: featuredReelUrl,
    tags: ["CapCut", "Sound Synthesis", "Kinetic Typography", "Mobile 9:16"],
    description:
      "Fast-paced, high-retention short-form video productions with custom sound design, hook-driven pacing, kinetic captioning, and dynamic visual hooks.",
  },
  {
    name: "Cinematic Color Studio",
    subtitle: "Visual Look Dev & Harmony",
    category: "Color Grading",
    tech: "davinci",
    project_link: featuredReelUrl,
    tags: ["DaVinci Resolve", "LUTs & Look Dev", "Color Harmony", "ACES"],
    description:
      "Intentional cinematic color science, film emulation, dynamic range balancing, skin tone preservation, and moody grading profiles for narrative and commercial scenes.",
  },
  {
    name: "Certified Commercial Campaigns",
    subtitle: "Brand Narrative & Drone Cuts",
    category: "Promotional Media",
    tech: "premiere",
    project_link: featuredReelUrl,
    tags: ["Premiere Pro", "Drone B-Roll", "Audio Mastering", "4K"],
    description:
      "Promotional commercial video campaigns combining cinematic drone footage, dynamic pacing, client testimonials, and crisp sound mastering.",
  },
  {
    name: "Visual Identity Motion",
    subtitle: "3D Mockups & Animated Identity",
    category: "Motion & Identity",
    tech: "photoshop",
    project_link:
      "https://drive.google.com/drive/folders/1qhNWddFhGx-YepHr-gypIy7gDWXgm6Mp",
    tags: ["Photoshop", "Illustrator", "Packaging 3D", "Brand Systems"],
    description:
      "Comprehensive visual packaging design, animated logo reveals, 3D product mockups, and cohesive commercial marketing collateral.",
  },
];

const currentProjects = computed(() => {
  return activeCategory.value === "programmer"
    ? programmerProjects
    : videoProjects;
});
</script>

<style scoped>
.mySwiper {
  width: 100%;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.35s ease-out;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 3D Cylinder Swipe Carousel */
.carousel-stage {
  perspective: 1800px;
  perspective-origin: 50% 50%;
  width: 100%;
  height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;
  touch-action: pan-y;
  overflow: visible;
  padding: 20px 0;
}

.carousel-cylinder {
  width: 242px;
  height: 430px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
}

.carousel-cylinder.is-dragging {
  transition: none;
}

.carousel-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 242px;
  height: 430px;
  border-radius: 22px;
  overflow: hidden;
  background: #090d16;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.85);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: filter 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease,
    opacity 0.4s ease;
  cursor: pointer;
}

.carousel-card.is-active {
  border-color: rgba(16, 185, 129, 0.28);
  box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.9),
    0 0 28px rgba(16, 185, 129, 0.22);
  filter: brightness(1.05) contrast(1.02);
  opacity: 1;
  z-index: 50;
}

.carousel-card:not(.is-active) {
  filter: brightness(0.62) contrast(0.95);
  opacity: 0.82;
}

.carousel-card:not(.is-active):hover {
  filter: brightness(0.88) contrast(1);
  opacity: 1;
}

.carousel-card.is-playing {
  border-color: rgba(16, 185, 129, 0.35);
  box-shadow: 0 25px 55px -10px rgba(0, 0, 0, 0.95),
    0 0 32px rgba(16, 185, 129, 0.28);
  z-index: 60;
}

/* Video Crop Container: Hides Google Drive 48px top bar & fits 9:16 cleanly */
.video-crop-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 22px;
  background: #000;
}

/* In-place cylinder card iframe: rendered at desktop resolution (540px) to force sleek compact controls at bottom */
.carousel-card .video-cropped-iframe {
  position: absolute;
  top: -22px;
  left: -6px;
  width: 540px;
  height: 970px;
  transform: scale(0.471);
  transform-origin: top left;
  border: 0;
}

/* Theater modal iframe: styled dynamically via :style="theaterIframeStyle" to enforce sleek desktop player controls */
.theater-modal .video-cropped-iframe {
  position: absolute;
  border: 0;
}

@media (max-width: 640px) {
  .carousel-stage {
    perspective: 1000px;
    perspective-origin: 50% 50%;
    height: 380px;
    padding: 10px 0;
  }
  .carousel-cylinder {
    width: 150px;
    height: 266px;
  }
  .carousel-card {
    width: 150px;
    height: 266px;
    border-radius: 18px;
  }
  .carousel-card .video-cropped-iframe {
    top: -14px;
    left: -4px;
    width: 540px;
    height: 970px;
    transform: scale(0.291);
    transform-origin: top left;
    border: 0;
  }
  .video-crop-container {
    border-radius: 18px;
  }
}
</style>

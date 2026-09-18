<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isResumeOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          @click="closeResume"
        ></div>

        <!-- Modal Wrapper -->
        <div
          class="relative w-full max-w-5xl rounded-3xl bg-slate-900 border border-white/10 shadow-2xl flex flex-col max-h-[94vh] z-10 overflow-hidden"
          @click.stop
        >
          <!-- Top Sticky Action Bar -->
          <div
            class="px-3 py-2.5 sm:px-6 sm:py-3.5 bg-slate-950/90 border-b border-white/10 backdrop-blur-xl flex flex-wrap items-center justify-between gap-2 sm:gap-3 shrink-0"
          >
            <!-- Left: Title & Candidate Name (with mobile close button on top right) -->
            <div
              class="flex items-center justify-between w-full sm:w-auto gap-2.5 sm:gap-3"
            >
              <div class="flex items-center gap-2 sm:gap-3">
                <span
                  class="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] sm:text-xs font-bold tracking-widest uppercase flex items-center gap-1.5"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                  ></span>
                  RESUME
                </span>
                <span
                  class="text-xs sm:text-sm font-semibold text-white hidden md:inline"
                >
                  Jemark S. Daite
                </span>
              </div>

              <!-- Mobile-only Close Button (aligned to top-right on phones) -->
              <button
                type="button"
                @click="closeResume"
                class="sm:hidden w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Resume Modal"
              >
                <font-awesome-icon :icon="['fas', 'xmark']" class="text-xs" />
              </button>
            </div>

            <!-- Center: Zoom Mode Controls (Fit to Screen vs 100% Actual Size) -->
            <div
              class="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 shadow-inner"
            >
              <!-- Fit to Screen (Full View) Button -->
              <button
                type="button"
                @click="setZoomMode('fit')"
                :class="[
                  'px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 cursor-pointer',
                  zoomMode === 'fit'
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                    : 'text-slate-300 hover:text-white hover:bg-white/10',
                ]"
                title="Fit full resume into screen without scrolling (Full View)"
              >
                <font-awesome-icon
                  :icon="['fas', 'expand']"
                  class="text-[11px]"
                />
                <span>Fit Page</span>
              </button>

              <!-- 100% Size Button -->
              <button
                type="button"
                @click="setZoomMode('100')"
                :class="[
                  'px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 cursor-pointer',
                  zoomMode === '100'
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                    : 'text-slate-300 hover:text-white hover:bg-white/10',
                ]"
                title="View at 100% Actual Size"
              >
                <font-awesome-icon
                  :icon="['fas', 'magnifying-glass-plus']"
                  class="text-[11px]"
                />
                <span>100%</span>
              </button>
            </div>

            <!-- Right: Action Buttons (PDF, PNG, Print, Desktop Close) -->
            <div class="flex items-center gap-1.5 sm:gap-2">
              <!-- Download PDF Button -->
              <button
                type="button"
                @click="downloadPDF"
                :disabled="isExporting"
                class="px-3 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-black flex items-center gap-1.5 transition-all duration-300 shadow-md active:scale-95 disabled:opacity-50 cursor-pointer"
                title="Download as high-resolution PDF document"
              >
                <font-awesome-icon
                  :icon="['fas', isExportingPdf ? 'clock' : 'file-pdf']"
                  :class="{ 'animate-spin': isExportingPdf }"
                />
                <span>{{ isExportingPdf ? "Generating..." : "PDF" }}</span>
              </button>

              <!-- Download PNG Button -->
              <button
                type="button"
                @click="downloadPNG"
                :disabled="isExporting"
                class="px-3 sm:px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/10 flex items-center gap-1.5 transition-all duration-300 active:scale-95 disabled:opacity-50 cursor-pointer"
                title="Download as 2x HD PNG Image"
              >
                <font-awesome-icon
                  :icon="['fas', isExportingPng ? 'clock' : 'image']"
                  :class="{ 'animate-spin': isExportingPng }"
                />
                <span>{{ isExportingPng ? "Generating..." : "PNG" }}</span>
              </button>

              <!-- Desktop-only Close Button -->
              <button
                type="button"
                @click="closeResume"
                class="hidden sm:flex w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white items-center justify-center transition-colors cursor-pointer ml-1"
                aria-label="Close Resume Modal"
              >
                <font-awesome-icon :icon="['fas', 'xmark']" />
              </button>
            </div>
          </div>

          <!-- Document Viewer Container with smooth scrolling -->
          <div
            ref="viewerRef"
            class="flex-1 overflow-auto p-2 sm:p-4 md:p-6 flex bg-slate-900/60 transition-all select-none"
          >
            <!-- Scaler Layout Box: Matches exact scaled bounding box so centering & scrollbars work 100% -->
            <div
              class="relative m-auto transition-all duration-200 ease-out origin-top shrink-0"
              :style="{
                width: zoomMode === 'fit' ? `${800 * currentScale}px` : '800px',
                height:
                  zoomMode === 'fit'
                    ? `${sheetHeight * currentScale}px`
                    : `${sheetHeight}px`,
                minWidth:
                  zoomMode === 'fit' ? `${800 * currentScale}px` : '800px',
                minHeight:
                  zoomMode === 'fit'
                    ? `${sheetHeight * currentScale}px`
                    : `${sheetHeight}px`,
              }"
            >
              <!-- Printable/Exportable Resume Sheet (A4 Dimensions: 800px × ~1131px) -->
              <div
                ref="resumeRef"
                id="resume-paper"
                class="w-[800px] min-w-[800px] max-w-[800px] text-slate-900 shadow-2xl flex flex-row overflow-hidden relative select-text rounded-sm origin-top-left"
                :style="{
                  transform:
                    zoomMode === 'fit' ? `scale(${currentScale})` : 'scale(1)',
                  transformOrigin: 'top left',
                  fontFamily: `'Plus Jakarta Sans', Arial, sans-serif`,
                  background:
                    'linear-gradient(to right, #343842 272px, #ffffff 272px)',
                }"
              >
                <!-- LEFT COLUMN: Dark Charcoal (#343842) -->
                <div
                  id="resume-sidebar"
                  class="w-[272px] min-w-[272px] max-w-[272px] bg-[#343842] text-white p-5 sm:p-6 flex flex-col justify-between shrink-0 self-stretch min-h-full"
                >
                  <div class="space-y-4 sm:space-y-5">
                    <!-- Photo Container -->
                    <div class="w-full flex justify-center pb-1">
                      <div
                        id="resume-photo-box"
                        class="w-[176px] h-[220px] rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg bg-[#272a31]"
                      >
                        <img
                          id="resume-photo-img"
                          :src="jemarkSuitImg"
                          alt="Jemark S. Daite"
                          width="176"
                          height="220"
                          class="w-full h-full object-cover"
                          crossorigin="anonymous"
                        />
                      </div>
                    </div>

                    <!-- MY CONTACT -->
                    <div>
                      <h3
                        class="text-base font-extrabold uppercase tracking-wider text-white pb-2 mb-3 border-b border-white/20"
                      >
                        My Contact
                      </h3>
                      <div class="space-y-3 text-xs leading-snug">
                        <div>
                          <div class="font-bold text-white text-xs">Phone</div>
                          <div class="text-slate-300 font-normal">
                            +639812770533
                          </div>
                        </div>
                        <div>
                          <div class="font-bold text-white text-xs">Email</div>
                          <div class="text-slate-300 font-normal">
                            daitejmrk@gmail.com
                          </div>
                        </div>
                        <div>
                          <div class="font-bold text-white text-xs">
                            Address
                          </div>
                          <div class="text-slate-300 font-normal">
                            Maragusan, Davao de Oro, Philippines
                          </div>
                        </div>
                        <div>
                          <div class="font-bold text-white text-xs">
                            Portfolio
                          </div>
                          <a
                            href="https://daitign.github.io/portfolio/"
                            target="_blank"
                            class="text-emerald-400 hover:underline font-medium break-all"
                          >
                            daitign.github.io/portfolio/
                          </a>
                        </div>
                      </div>
                    </div>

                    <!-- EXPERTISE -->
                    <div>
                      <h3
                        class="text-base font-extrabold uppercase tracking-wider text-white pb-2 mb-3 border-b border-white/20"
                      >
                        Expertise
                      </h3>
                      <ul class="space-y-1.5 text-xs text-slate-200">
                        <li class="flex items-center gap-2">
                          <span
                            class="w-1.5 h-1.5 rounded-full bg-emerald-400"
                          ></span>
                          <span>Video Editor</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span
                            class="w-1.5 h-1.5 rounded-full bg-emerald-400"
                          ></span>
                          <span>Graphic Design</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span
                            class="w-1.5 h-1.5 rounded-full bg-emerald-400"
                          ></span>
                          <span>Web Developer</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span
                            class="w-1.5 h-1.5 rounded-full bg-emerald-400"
                          ></span>
                          <span>UI/UX Design</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span
                            class="w-1.5 h-1.5 rounded-full bg-emerald-400"
                          ></span>
                          <span>Product Design</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span
                            class="w-1.5 h-1.5 rounded-full bg-emerald-400"
                          ></span>
                          <span>Technical Support</span>
                        </li>
                        <li class="flex items-center gap-2">
                          <span
                            class="w-1.5 h-1.5 rounded-full bg-emerald-400"
                          ></span>
                          <span>Chat Support</span>
                        </li>
                      </ul>
                    </div>

                    <!-- REFERENCES -->
                    <div>
                      <h3
                        class="text-base font-extrabold uppercase tracking-wider text-white pb-2 mb-3 border-b border-white/20"
                      >
                        References
                      </h3>
                      <div class="space-y-3.5 text-xs">
                        <div>
                          <div
                            class="font-bold text-white text-[13px] leading-tight"
                          >
                            MARK VAN BULADACO, DBMIS
                          </div>
                          <div class="text-slate-300 text-[11px]">
                            Dean, Institute of Computing
                          </div>
                          <div
                            class="text-emerald-400/90 font-medium text-[11px] mt-0.5"
                          >
                            Phone: +639617108849
                          </div>
                        </div>
                        <div>
                          <div
                            class="font-bold text-white text-[13px] leading-tight"
                          >
                            JOVITO P. BOLACOY
                          </div>
                          <div class="text-slate-300 text-[11px]">
                            Instructor, Institute of Computing
                          </div>
                          <div
                            class="text-emerald-400/90 font-medium text-[11px] mt-0.5"
                          >
                            Phone: +639812770533
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- RIGHT MAIN COLUMN: Crisp White (#ffffff) -->
                <div
                  id="resume-main"
                  class="w-[528px] min-w-[528px] max-w-[528px] bg-white p-5 sm:p-6 md:p-7 flex flex-col justify-between relative overflow-hidden text-slate-800 shrink-0 self-stretch min-h-full"
                >
                  <div class="space-y-3.5 sm:space-y-4 relative z-10">
                    <!-- Header: Name & Specializations -->
                    <div class="pb-2.5 sm:pb-3 border-b-2 border-slate-300">
                      <h1
                        class="text-3xl sm:text-4xl font-extrabold text-[#2a2d34] tracking-tight uppercase"
                        style="font-family: 'Space Grotesk', sans-serif"
                      >
                        Jemark S. Daite
                      </h1>
                      <div
                        class="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest pt-1"
                      >
                        Graphic Designer &bull; Video Editor &bull; Web
                        Developer
                      </div>
                    </div>

                    <!-- ABOUT MYSELF -->
                    <div>
                      <div
                        class="flex items-center gap-2 pb-1 mb-1.5 sm:mb-2 border-b border-slate-200"
                      >
                        <span
                          class="w-1.5 h-1.5 rounded-full bg-emerald-500"
                        ></span>
                        <h2
                          class="text-xs font-black uppercase tracking-widest text-[#2a2d34]"
                          style="font-family: 'Space Grotesk', sans-serif"
                        >
                          About Myself
                        </h2>
                      </div>
                      <p
                        class="text-xs leading-relaxed text-slate-600 text-justify"
                      >
                        I aim to use and impart the capabilities I gained to
                        facilitate and provide the necessary learning required
                        to develop and compete in today’s society. I am strongly
                        interested in all areas of work, especially information
                        technology. I am passionately committed to promoting a
                        positive and dynamic environment in doing my job.
                      </p>
                    </div>

                    <!-- EXPERIENCE (Updated to Current Portfolio Journey) -->
                    <div>
                      <div
                        class="flex items-center gap-2 pb-1 mb-2 border-b border-slate-200"
                      >
                        <span
                          class="w-1.5 h-1.5 rounded-full bg-emerald-500"
                        ></span>
                        <h2
                          class="text-xs font-black uppercase tracking-widest text-[#2a2d34]"
                          style="font-family: 'Space Grotesk', sans-serif"
                        >
                          Experience
                        </h2>
                      </div>
                      <div class="space-y-2.5 text-xs">
                        <!-- Role 1: Upperhand Creatives -->
                        <div>
                          <div
                            class="flex items-center justify-between gap-2 w-full"
                          >
                            <span
                              class="font-bold text-slate-900 text-xs flex-1 min-w-0 pr-2"
                            >
                              Content Specialist | Upperhand Creatives
                            </span>
                            <span
                              class="inline-flex items-center justify-center gap-1.5 w-[114px] min-w-[114px] h-[22px] rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 text-[10px] font-bold tracking-normal whitespace-nowrap shrink-0 ml-auto leading-none text-center"
                            >
                              <span
                                class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                              ></span>
                              <span class="leading-none resume-date-text"
                                >2024 – Present</span
                              >
                            </span>
                          </div>
                          <ul
                            class="text-slate-600 mt-1 space-y-0.5 text-[11px]"
                          >
                            <li class="flex items-start gap-1.5">
                              <span
                                class="w-1 h-1 rounded-full bg-emerald-500/80 mt-1.5 shrink-0"
                              ></span>
                              <span
                                >Collaborate with writers, graphic designers,
                                and creative directors.</span
                              >
                            </li>
                            <li class="flex items-start gap-1.5">
                              <span
                                class="w-1 h-1 rounded-full bg-emerald-500/80 mt-1.5 shrink-0"
                              ></span>
                              <span
                                >Responsible for creating and editing
                                high-impact video content.</span
                              >
                            </li>
                          </ul>
                        </div>

                        <!-- Role 2: Certified Roofing -->
                        <div>
                          <div
                            class="flex items-start justify-between gap-2 w-full"
                          >
                            <span
                              class="font-bold text-slate-900 text-xs flex-1 min-w-0 pr-2"
                            >
                              Social Media Specialist / Web Developer |
                              Certified Roofing
                            </span>
                            <span
                              class="inline-flex items-center justify-center w-[114px] min-w-[114px] h-[22px] rounded-md bg-slate-100 text-slate-600 border border-slate-200/80 text-[10px] font-semibold tracking-normal whitespace-nowrap shrink-0 ml-auto leading-none text-center"
                            >
                              <span class="leading-none resume-date-text"
                                >2023 – 2024</span
                              >
                            </span>
                          </div>
                          <ul
                            class="text-slate-600 mt-1 space-y-0.5 text-[11px]"
                          >
                            <li class="flex items-start gap-1.5">
                              <span
                                class="w-1 h-1 rounded-full bg-emerald-500/80 mt-1.5 shrink-0"
                              ></span>
                              <span
                                >Managed and developed company web platforms and
                                lead capture funnels.</span
                              >
                            </li>
                            <li class="flex items-start gap-1.5">
                              <span
                                class="w-1 h-1 rounded-full bg-emerald-500/80 mt-1.5 shrink-0"
                              ></span>
                              <span
                                >Spearheaded high-engagement social media
                                campaigns and visual growth assets.</span
                              >
                            </li>
                          </ul>
                        </div>

                        <!-- Role 3: Pentwater Connect -->
                        <div>
                          <div
                            class="flex items-start justify-between gap-2 w-full"
                          >
                            <span
                              class="font-bold text-slate-900 text-xs flex-1 min-w-0 pr-2"
                            >
                              Video Editor / Graphic Designer | Pentwater
                              Connect
                            </span>
                            <span
                              class="inline-flex items-center justify-center w-[114px] min-w-[114px] h-[22px] rounded-md bg-slate-100 text-slate-600 border border-slate-200/80 text-[10px] font-semibold tracking-normal whitespace-nowrap shrink-0 ml-auto leading-none text-center"
                            >
                              <span class="leading-none resume-date-text"
                                >2022 – 2023</span
                              >
                            </span>
                          </div>
                          <ul
                            class="text-slate-600 mt-1 space-y-0.5 text-[11px]"
                          >
                            <li class="flex items-start gap-1.5">
                              <span
                                class="w-1 h-1 rounded-full bg-emerald-500/80 mt-1.5 shrink-0"
                              ></span>
                              <span
                                >Produced commercial video edits, motion
                                graphics, and corporate presentations.</span
                              >
                            </li>
                            <li class="flex items-start gap-1.5">
                              <span
                                class="w-1 h-1 rounded-full bg-emerald-500/80 mt-1.5 shrink-0"
                              ></span>
                              <span
                                >Responsible for designing graphic content,
                                illustrations, infographics, and print
                                projects.</span
                              >
                            </li>
                          </ul>
                        </div>

                        <!-- Role 4: ER Design -->
                        <div>
                          <div
                            class="flex items-center justify-between gap-2 w-full"
                          >
                            <span
                              class="font-bold text-slate-900 text-xs flex-1 min-w-0 pr-2"
                            >
                              Graphic Designer | ER Design
                            </span>
                            <span
                              class="inline-flex items-center justify-center w-[114px] min-w-[114px] h-[22px] rounded-md bg-slate-100 text-slate-600 border border-slate-200/80 text-[10px] font-semibold tracking-normal whitespace-nowrap shrink-0 ml-auto leading-none text-center"
                            >
                              <span class="leading-none resume-date-text"
                                >2020 – 2021</span
                              >
                            </span>
                          </div>
                          <ul
                            class="text-slate-600 mt-1 space-y-0.5 text-[11px]"
                          >
                            <li class="flex items-start gap-1.5">
                              <span
                                class="w-1 h-1 rounded-full bg-emerald-500/80 mt-1.5 shrink-0"
                              ></span>
                              <span
                                >Work with graphics and other designers;
                                generated fresh creative concepts.</span
                              >
                            </li>
                            <li class="flex items-start gap-1.5">
                              <span
                                class="w-1 h-1 rounded-full bg-emerald-500/80 mt-1.5 shrink-0"
                              ></span>
                              <span
                                >Delivered brand identity systems, product
                                packaging prototypes, and digital
                                illustrations.</span
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <!-- CERTIFICATES -->
                    <div>
                      <div
                        class="flex items-center gap-2 pb-1 mb-1.5 border-b border-slate-200"
                      >
                        <span
                          class="w-1.5 h-1.5 rounded-full bg-emerald-500"
                        ></span>
                        <h2
                          class="text-xs font-black uppercase tracking-widest text-[#2a2d34]"
                          style="font-family: 'Space Grotesk', sans-serif"
                        >
                          Certificates
                        </h2>
                      </div>
                      <div class="space-y-1 text-xs text-slate-700">
                        <div
                          class="flex items-center justify-between text-[11px] pb-1 border-b border-slate-100 w-full"
                        >
                          <div
                            class="flex items-center gap-2 flex-1 min-w-0 pr-2"
                          >
                            <span
                              class="w-1 h-1 rounded-full bg-emerald-500/70 shrink-0"
                            ></span>
                            <span class="font-medium text-slate-800"
                              >Cyber Security Essentials</span
                            >
                          </div>
                          <span
                            class="inline-flex items-center justify-center w-[114px] min-w-[114px] h-[22px] rounded text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-200/60 shrink-0 ml-auto text-center leading-none whitespace-nowrap"
                          >
                            <span class="leading-none resume-date-text"
                              >December 2022</span
                            >
                          </span>
                        </div>
                        <div
                          class="flex items-center justify-between text-[11px] pb-1 border-b border-slate-100 w-full"
                        >
                          <div
                            class="flex items-center gap-2 flex-1 min-w-0 pr-2"
                          >
                            <span
                              class="w-1 h-1 rounded-full bg-emerald-500/70 shrink-0"
                            ></span>
                            <span class="font-medium text-slate-800"
                              >Cisco Networking Academy</span
                            >
                          </div>
                          <span
                            class="inline-flex items-center justify-center w-[114px] min-w-[114px] h-[22px] rounded text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-200/60 shrink-0 ml-auto text-center leading-none whitespace-nowrap"
                          >
                            <span class="leading-none resume-date-text"
                              >February 2021</span
                            >
                          </span>
                        </div>
                        <div
                          class="flex items-center justify-between text-[11px] pb-1 border-b border-slate-100 w-full"
                        >
                          <div
                            class="flex items-center gap-2 flex-1 min-w-0 pr-2"
                          >
                            <span
                              class="w-1 h-1 rounded-full bg-emerald-500/70 shrink-0"
                            ></span>
                            <span class="font-medium text-slate-800"
                              >CCNAv7 Networks</span
                            >
                          </div>
                          <span
                            class="inline-flex items-center justify-center w-[114px] min-w-[114px] h-[22px] rounded text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-200/60 shrink-0 ml-auto text-center leading-none whitespace-nowrap"
                          >
                            <span class="leading-none resume-date-text"
                              >July 2021</span
                            >
                          </span>
                        </div>
                        <div
                          class="flex items-center justify-between text-[11px] pb-1 border-b border-slate-100 w-full"
                        >
                          <div
                            class="flex items-center gap-2 flex-1 min-w-0 pr-2"
                          >
                            <span
                              class="w-1 h-1 rounded-full bg-emerald-500/70 shrink-0"
                            ></span>
                            <span class="font-medium text-slate-800"
                              >Visual Graphics Design NC III Passer</span
                            >
                          </div>
                          <span
                            class="inline-flex items-center justify-center w-[114px] min-w-[114px] h-[22px] rounded text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-200/60 shrink-0 ml-auto text-center leading-none whitespace-nowrap"
                          >
                            <span class="leading-none resume-date-text"
                              >June 2019</span
                            >
                          </span>
                        </div>
                        <div
                          class="flex items-center justify-between text-[11px] w-full"
                        >
                          <div
                            class="flex items-center gap-2 flex-1 min-w-0 pr-2"
                          >
                            <span
                              class="w-1 h-1 rounded-full bg-emerald-500/70 shrink-0"
                            ></span>
                            <span class="font-medium text-slate-800"
                              >Computer System Servicing NC II Passer</span
                            >
                          </div>
                          <span
                            class="inline-flex items-center justify-center w-[114px] min-w-[114px] h-[22px] rounded text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-200/60 shrink-0 ml-auto text-center leading-none whitespace-nowrap"
                          >
                            <span class="leading-none resume-date-text"
                              >November 2019</span
                            >
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- EDUCATION (Updated with Ongoing Master's Degree) -->
                    <div>
                      <div
                        class="flex items-center gap-2 pb-1 mb-1.5 border-b border-slate-200"
                      >
                        <span
                          class="w-1.5 h-1.5 rounded-full bg-emerald-500"
                        ></span>
                        <h2
                          class="text-xs font-black uppercase tracking-widest text-[#2a2d34]"
                          style="font-family: 'Space Grotesk', sans-serif"
                        >
                          Education
                        </h2>
                      </div>
                      <div
                        class="space-y-2 text-xs text-slate-700 relative z-10"
                      >
                        <!-- Master's Degree -->
                        <div class="flex flex-col">
                          <div
                            class="flex items-center justify-between gap-2 w-full"
                          >
                            <span
                              class="font-bold text-slate-900 text-xs flex-1 min-w-0 pr-2"
                            >
                              Master in Information Technology (Ongoing)
                            </span>
                            <span
                              class="inline-flex items-center justify-center gap-1.5 w-[114px] min-w-[114px] h-[22px] rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 text-[10px] font-bold tracking-normal whitespace-nowrap shrink-0 ml-auto leading-none text-center"
                            >
                              <span
                                class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                              ></span>
                              <span class="leading-none resume-date-text"
                                >2024 – Present</span
                              >
                            </span>
                          </div>
                          <div class="text-[11px] text-slate-500 mt-0.5">
                            Holy Cross of Davao College &bull; Sta. Ana Avenue,
                            Davao City, Philippines
                          </div>
                        </div>

                        <!-- Tertiary Level -->
                        <div class="flex flex-col">
                          <div
                            class="flex items-center justify-between gap-2 w-full"
                          >
                            <span
                              class="font-bold text-slate-900 text-xs flex-1 min-w-0 pr-2"
                            >
                              Bachelor of Science in Information Technology
                            </span>
                            <span
                              class="inline-flex items-center justify-center w-[114px] min-w-[114px] h-[22px] rounded-md bg-slate-100 text-slate-600 border border-slate-200/80 text-[10px] font-semibold tracking-normal whitespace-nowrap shrink-0 ml-auto leading-none text-center"
                            >
                              <span class="leading-none resume-date-text"
                                >2019 – 2023</span
                              >
                            </span>
                          </div>
                          <div class="text-[11px] text-slate-500 mt-0.5">
                            Davao del Norte State College &bull; New Visayas,
                            Panabo City, Davao del Norte
                          </div>
                        </div>

                        <!-- Secondary Level -->
                        <div class="flex flex-col">
                          <div
                            class="flex items-center justify-between gap-2 w-full"
                          >
                            <span
                              class="font-bold text-slate-900 text-xs flex-1 min-w-0 pr-2"
                            >
                              Secondary Level (High School Diploma)
                            </span>
                            <span
                              class="inline-flex items-center justify-center w-[114px] min-w-[114px] h-[22px] rounded-md bg-slate-100 text-slate-600 border border-slate-200/80 text-[10px] font-semibold tracking-normal whitespace-nowrap shrink-0 ml-auto leading-none text-center"
                            >
                              <span class="leading-none resume-date-text"
                                >2014 – 2019</span
                              >
                            </span>
                          </div>
                          <div class="text-[11px] text-slate-500 mt-0.5">
                            Maragusan National High School &bull; Poblacion
                            Maragusan, Davao De Oro
                          </div>
                        </div>

                        <!-- Primary Level -->
                        <div class="flex flex-col">
                          <div
                            class="flex items-center justify-between gap-2 w-full"
                          >
                            <span
                              class="font-bold text-slate-900 text-xs flex-1 min-w-0 pr-2"
                            >
                              Primary Level
                            </span>
                            <span
                              class="inline-flex items-center justify-center w-[114px] min-w-[114px] h-[22px] rounded-md bg-slate-100 text-slate-600 border border-slate-200/80 text-[10px] font-semibold tracking-normal whitespace-nowrap shrink-0 ml-auto leading-none text-center"
                            >
                              <span class="leading-none resume-date-text"
                                >2007 – 2013</span
                              >
                            </span>
                          </div>
                          <div class="text-[11px] text-slate-500 mt-0.5">
                            Maragusan Central Elementary School &bull; Poblacion
                            Maragusan, Davao De Oro
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Subtle Decorative Wave Geometry at bottom-right (Authentic design touch) -->
                  <div
                    class="absolute bottom-0 right-0 w-36 h-14 pointer-events-none opacity-15 z-0"
                  >
                    <svg
                      viewBox="0 0 200 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-full h-full"
                    >
                      <path
                        d="M0 100C60 40 140 30 200 60V100H0Z"
                        fill="#CBD5E1"
                      />
                      <path
                        d="M40 100C90 60 160 55 200 80V100H40Z"
                        fill="#94A3B8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from "vue";
import { useResumeModal } from "@/composables/useResumeModal";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import jemarkSuitImg from "@/assets/img/jemark_suit.jpg";

const { isResumeOpen, closeResume } = useResumeModal();

const viewerRef = ref<HTMLElement | null>(null);
const resumeRef = ref<HTMLElement | null>(null);
const isExporting = ref(false);
const isExportingPdf = ref(false);
const isExportingPng = ref(false);

const zoomMode = ref<"fit" | "100">("fit");
const currentScale = ref(1);
const sheetHeight = ref(1131);

let resizeObserver: ResizeObserver | null = null;

// Recalculate scale so entire resume fits perfectly within screen bounds
const updateScale = () => {
  if (!viewerRef.value || !resumeRef.value) return;

  const naturalHeight = resumeRef.value.scrollHeight || 1131;
  sheetHeight.value = Math.max(naturalHeight, 1050);

  if (zoomMode.value === "100") {
    currentScale.value = 1;
    return;
  }

  const containerW = viewerRef.value.clientWidth;
  const containerH = viewerRef.value.clientHeight;

  if (containerW <= 0 || containerH <= 0) return;

  // Comfortable padding margins inside viewer container
  const padX = containerW < 640 ? 16 : 32;
  const padY = containerH < 640 ? 16 : 32;

  const availW = Math.max(containerW - padX, 200);
  const availH = Math.max(containerH - padY, 200);

  const scaleW = availW / 800;
  const scaleH = availH / sheetHeight.value;

  // Fit to screen so neither width nor height is clipped
  const fit = Math.min(scaleW, scaleH);
  currentScale.value = Math.min(Math.max(Number(fit.toFixed(3)), 0.25), 1.0);
};

const setZoomMode = (mode: "fit" | "100") => {
  zoomMode.value = mode;
  if (viewerRef.value) {
    viewerRef.value.scrollTop = 0;
    viewerRef.value.scrollLeft = 0;
  }
  nextTick(() => {
    updateScale();
  });
};

// Recompute scale whenever modal opens
watch(isResumeOpen, (open) => {
  if (open) {
    zoomMode.value = "fit";
    nextTick(() => {
      setTimeout(() => {
        updateScale();
        if (
          viewerRef.value &&
          !resizeObserver &&
          typeof ResizeObserver !== "undefined"
        ) {
          resizeObserver = new ResizeObserver(() => {
            updateScale();
          });
          resizeObserver.observe(viewerRef.value);
        }
      }, 80);
    });
  } else {
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
  }
});

// Close on Escape key
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isResumeOpen.value) {
    closeResume();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("resize", updateScale);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
  window.removeEventListener("resize", updateScale);
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
});

// Helper: Ensure images inside the target are completely loaded before capturing
const ensureImagesLoaded = async (root: HTMLElement) => {
  const images = Array.from(root.querySelectorAll("img"));
  await Promise.all(
    images.map((img) => {
      if (img.complete && img.naturalWidth !== 0) return Promise.resolve();
      return new Promise<void>((resolve) => {
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    })
  );
};

// Unified Export Handler (A4 High-DPI & Proportional Accuracy across all devices)
const exportResume = async (format: "pdf" | "png") => {
  if (!resumeRef.value || isExporting.value) return;
  isExporting.value = true;
  if (format === "pdf") isExportingPdf.value = true;
  if (format === "png") isExportingPng.value = true;

  // Clone the resume sheet into a dedicated root-level container on document.body.
  // This completely eliminates:
  // 1. Ancestor scroll offsets (container scrollTop)
  // 2. Ancestor overflow-clipping (modal overflow-y-auto and h-[92vh])
  // 3. Mobile responsive layout collapse (guarantees desktop 2-column A4 format)
  const sourceEl = resumeRef.value;
  const clone = sourceEl.cloneNode(true) as HTMLElement;

  clone.id = "resume-export-container";
  clone.style.position = "fixed";
  clone.style.top = "0";
  clone.style.left = "0";
  clone.style.width = "800px";
  clone.style.minWidth = "800px";
  clone.style.maxWidth = "800px";
  clone.style.minHeight = "1131px";
  clone.style.height = "auto";
  clone.style.display = "flex";
  clone.style.flexDirection = "row";
  clone.style.alignItems = "stretch";
  clone.style.boxSizing = "border-box";
  clone.style.background =
    "linear-gradient(to right, #343842 272px, #ffffff 272px)";
  clone.style.margin = "0";
  clone.style.padding = "0";
  clone.style.zIndex = "-9999";
  clone.style.pointerEvents = "none";
  clone.style.opacity = "1";
  clone.style.visibility = "visible";
  clone.style.transform = "none";
  clone.style.transformOrigin = "top left";

  const cloneSidebar = clone.querySelector(
    "#resume-sidebar"
  ) as HTMLElement | null;
  if (cloneSidebar) {
    cloneSidebar.style.width = "272px";
    cloneSidebar.style.minWidth = "272px";
    cloneSidebar.style.maxWidth = "272px";
    cloneSidebar.style.minHeight = "1131px";
    cloneSidebar.style.height = "auto";
    cloneSidebar.style.display = "flex";
    cloneSidebar.style.flexDirection = "column";
    cloneSidebar.style.justifyContent = "space-between";
    cloneSidebar.style.boxSizing = "border-box";
    cloneSidebar.style.flexShrink = "0";
    cloneSidebar.style.backgroundColor = "#343842";
    cloneSidebar.style.color = "#ffffff";
  }

  const cloneMain = clone.querySelector("#resume-main") as HTMLElement | null;
  if (cloneMain) {
    cloneMain.style.width = "528px";
    cloneMain.style.minWidth = "528px";
    cloneMain.style.maxWidth = "528px";
    cloneMain.style.minHeight = "1131px";
    cloneMain.style.height = "auto";
    cloneMain.style.overflow = "visible";
    cloneMain.style.display = "flex";
    cloneMain.style.flexDirection = "column";
    cloneMain.style.justifyContent = "space-between";
    cloneMain.style.boxSizing = "border-box";
    cloneMain.style.flexShrink = "0";
    cloneMain.style.backgroundColor = "#ffffff";
  }

  const clonePhotoBox = clone.querySelector(
    "#resume-photo-box"
  ) as HTMLElement | null;
  if (clonePhotoBox) {
    clonePhotoBox.style.width = "176px";
    clonePhotoBox.style.height = "220px";
    clonePhotoBox.style.minWidth = "176px";
    clonePhotoBox.style.minHeight = "220px";
    clonePhotoBox.style.maxWidth = "176px";
    clonePhotoBox.style.maxHeight = "220px";
  }

  const clonePhotoImg = clone.querySelector(
    "#resume-photo-img"
  ) as HTMLImageElement | null;
  if (clonePhotoImg) {
    clonePhotoImg.style.width = "176px";
    clonePhotoImg.style.height = "220px";
    clonePhotoImg.style.objectFit = "cover";
  }

  document.body.appendChild(clone);

  try {
    await ensureImagesLoaded(clone);
    if (document.fonts) {
      await document.fonts.ready;
    }

    // Give browser layout engine a brief moment to render clone
    await new Promise((resolve) => setTimeout(resolve, 80));

    // Calculate natural height to ensure 100% of all content is rendered without clipping
    const naturalHeight = Math.max(
      clone.scrollHeight,
      clone.offsetHeight,
      cloneMain ? cloneMain.scrollHeight : 0,
      cloneSidebar ? cloneSidebar.scrollHeight : 0,
      1131
    );

    clone.style.height = `${naturalHeight}px`;
    if (cloneSidebar) cloneSidebar.style.height = `${naturalHeight}px`;
    if (cloneMain) {
      cloneMain.style.height = `${naturalHeight}px`;
      cloneMain.style.overflow = "visible";
    }

    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      width: 800,
      height: naturalHeight,
      windowWidth: 1280,
      windowHeight: Math.max(naturalHeight + 400, 1600),
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
      onclone: (clonedDoc) => {
        // In the isolated iframe document, hide everything except our export clone
        Array.from(clonedDoc.body.children).forEach((child) => {
          const el = child as HTMLElement;
          if (el.id !== "resume-export-container") {
            el.style.display = "none";
          }
        });

        const target = clonedDoc.getElementById("resume-export-container");
        if (target) {
          target.style.position = "static";
          target.style.display = "flex";
          target.style.flexDirection = "row";
          target.style.alignItems = "stretch";
          target.style.width = "800px";
          target.style.minWidth = "800px";
          target.style.maxWidth = "800px";
          target.style.height = `${naturalHeight}px`;
          target.style.background =
            "linear-gradient(to right, #343842 272px, #ffffff 272px)";
          target.style.margin = "0";
          target.style.padding = "0";
          target.style.visibility = "visible";
          target.style.opacity = "1";
          target.style.transform = "none";
          target.style.transformOrigin = "top left";

          const side = target.querySelector(
            "#resume-sidebar"
          ) as HTMLElement | null;
          if (side) {
            side.style.width = "272px";
            side.style.minWidth = "272px";
            side.style.maxWidth = "272px";
            side.style.height = `${naturalHeight}px`;
            side.style.backgroundColor = "#343842";
          }

          const m = target.querySelector("#resume-main") as HTMLElement | null;
          if (m) {
            m.style.width = "528px";
            m.style.minWidth = "528px";
            m.style.maxWidth = "528px";
            m.style.height = `${naturalHeight}px`;
            m.style.overflow = "visible";
            m.style.backgroundColor = "#ffffff";
          }

          // Add style rule to cloned document to lift date text by exactly 3.5px for html2canvas
          const styleEl = clonedDoc.createElement("style");
          styleEl.textContent = `
            .resume-date-text {
              display: inline-block !important;
              position: relative !important;
              top: -3.5px !important;
              line-height: 1 !important;
            }
          `;
          clonedDoc.head.appendChild(styleEl);

          // Bulletproof vertical text centering in badges for html2canvas
          target
            .querySelectorAll<HTMLElement>(".w-\\[114px\\]")
            .forEach((badge) => {
              badge.style.height = "22px";
              badge.style.minHeight = "22px";
              badge.style.maxHeight = "22px";
              badge.style.boxSizing = "border-box";
              badge.style.display = "inline-flex";
              badge.style.alignItems = "center";
              badge.style.justifyContent = "center";
              badge.style.paddingTop = "0px";
              badge.style.paddingBottom = "0px";

              const textSpan =
                badge.querySelector<HTMLElement>(".resume-date-text") ||
                Array.from(badge.querySelectorAll<HTMLElement>("span")).pop();
              if (textSpan) {
                textSpan.style.display = "inline-block";
                textSpan.style.position = "relative";
                textSpan.style.top = "-3.5px";
                textSpan.style.lineHeight = "1";
              }
            });
        }
      },
    });

    if (format === "png") {
      const link = document.createElement("a");
      link.download = "Jemark_S_Daite_Resume.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } else {
      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = 210;
      const pageHeight = 297;
      const imgHeightInMm = (canvas.height * pageWidth) / canvas.width;

      if (imgHeightInMm > pageHeight) {
        // Fit proportionally inside single A4 page without clipping anything
        const fitWidth = (canvas.width * pageHeight) / canvas.height;
        const marginX = (pageWidth - fitWidth) / 2;
        pdf.addImage(imgData, "JPEG", marginX, 0, fitWidth, pageHeight);
      } else {
        pdf.addImage(imgData, "JPEG", 0, 0, pageWidth, imgHeightInMm);
      }

      pdf.save("Jemark_S_Daite_Resume.pdf");
    }
  } catch (error) {
    console.error(`Failed to generate ${format.toUpperCase()}:`, error);
  } finally {
    if (document.body.contains(clone)) {
      document.body.removeChild(clone);
    }
    isExporting.value = false;
    isExportingPdf.value = false;
    isExportingPng.value = false;
  }
};

// 1. Export as High-Resolution PNG (2x DPI)
const downloadPNG = () => exportResume("png");

// 2. Export as Standard A4 PDF
const downloadPDF = () => exportResume("pdf");
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.97);
}

#resume-paper {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  backface-visibility: hidden;
}

/* Custom sleek scrollbar for viewer */
.overflow-auto::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.overflow-auto::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.6);
}
.overflow-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
.overflow-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(245, 158, 11, 0.5);
}

/* Print Stylesheet for clean native A4 printing */
@media print {
  body * {
    visibility: hidden;
  }

  #resume-paper,
  #resume-paper * {
    visibility: visible;
  }

  #resume-paper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw !important;
    max-width: 100vw !important;
    box-shadow: none !important;
    border: none !important;
    margin: 0 !important;
    padding: 0 !important;
    display: flex !important;
    flex-direction: row !important;
  }

  #resume-sidebar {
    width: 34% !important;
    min-width: 34% !important;
  }

  #resume-main {
    width: 66% !important;
    min-width: 66% !important;
  }
}
</style>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
          @click="closeModal"
        ></div>

        <!-- Modal Card Container -->
        <div
          class="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0e1017] border border-slate-200 dark:border-white/10 shadow-2xl shadow-black/40 overflow-hidden transform transition-all z-10 my-8"
          @click.stop
        >
          <!-- Ambient Emerald Glow -->
          <div
            class="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
          ></div>

          <!-- Modal Header -->
          <div
            class="relative px-6 pt-6 pb-4 sm:px-8 sm:pt-8 border-b border-slate-100 dark:border-white/[0.06] flex items-center justify-between"
          >
            <div>
              <div
                class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-1.5"
              >
                <span>✦ DIRECT CONTACT</span>
              </div>
              <h3
                id="contact-modal-title"
                class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight"
              >
                Initiate Collaboration
              </h3>
            </div>

            <!-- Close Button -->
            <button
              type="button"
              @click="closeModal"
              class="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <font-awesome-icon :icon="['fas', 'xmark']" class="text-base" />
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            <!-- Email Display & 1-Click Copy -->
            <div
              class="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg border border-emerald-500/20"
                >
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </div>
                <div>
                  <div
                    class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider"
                  >
                    Official Email
                  </div>
                  <div
                    class="text-sm sm:text-base font-bold text-slate-900 dark:text-white"
                  >
                    daitejmrk@gmail.com
                  </div>
                </div>
              </div>

              <button
                type="button"
                @click="copyEmail"
                class="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                :class="
                  copied
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-200 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-400 dark:hover:text-black'
                "
              >
                <font-awesome-icon
                  :icon="['fas', copied ? 'check' : 'copy']"
                  class="text-xs"
                />
                <span>{{ copied ? "Copied!" : "Copy Email" }}</span>
              </button>
            </div>

            <!-- Choose Preferred Method -->
            <div>
              <label
                class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3"
              >
                Choose How to Send:
              </label>

              <div class="space-y-2.5">
                <!-- Option 1: Gmail Web (Fastest, zero setup needed) -->
                <button
                  type="button"
                  @click="openGmail"
                  class="w-full p-3.5 rounded-2xl bg-gradient-to-r from-red-500/10 to-red-600/5 hover:from-red-500/20 hover:to-red-600/10 border border-red-500/20 dark:border-red-500/30 flex items-center justify-between transition-all duration-300 group cursor-pointer text-left"
                >
                  <div class="flex items-center gap-3.5">
                    <div
                      class="w-10 h-10 rounded-xl bg-red-500/15 text-red-500 flex items-center justify-center text-lg shadow-sm border border-red-500/30 group-hover:scale-105 transition-transform"
                    >
                      <font-awesome-icon :icon="['fab', 'google']" />
                    </div>
                    <div>
                      <div
                        class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2"
                      >
                        <span>Open in Gmail (Browser)</span>
                        <span
                          class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-red-500/15 text-red-600 dark:text-red-400"
                        >
                          Recommended
                        </span>
                      </div>
                      <div
                        class="text-xs text-slate-500 dark:text-slate-400 font-normal"
                      >
                        Works on Mac, Windows, Chrome, Safari, and Mobile
                      </div>
                    </div>
                  </div>
                  <font-awesome-icon
                    :icon="['fas', 'arrow-up-right-from-square']"
                    class="text-xs text-slate-400 group-hover:text-red-500 transition-colors mr-2"
                  />
                </button>

                <!-- Option 2: Default System Mail App -->
                <button
                  type="button"
                  @click="openDefaultMail"
                  class="w-full p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-slate-200/80 dark:border-white/[0.06] hover:border-emerald-400/40 flex items-center justify-between transition-all duration-300 group cursor-pointer text-left"
                >
                  <div class="flex items-center gap-3.5">
                    <div
                      class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg shadow-sm border border-emerald-500/20 group-hover:scale-105 transition-transform"
                    >
                      <font-awesome-icon
                        :icon="['fas', 'envelope-open-text']"
                      />
                    </div>
                    <div>
                      <div
                        class="text-sm font-bold text-slate-900 dark:text-white"
                      >
                        Default Mail App
                      </div>
                      <div
                        class="text-xs text-slate-500 dark:text-slate-400 font-normal"
                      >
                        Apple Mail, Outlook, iOS Mail, Android Mail
                      </div>
                    </div>
                  </div>
                  <font-awesome-icon
                    :icon="['fas', 'paper-plane']"
                    class="text-xs text-slate-400 group-hover:text-emerald-500 transition-colors mr-2"
                  />
                </button>

                <!-- Option 3: Outlook Web -->
                <button
                  type="button"
                  @click="openOutlook"
                  class="w-full p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.06] border border-slate-200/80 dark:border-white/[0.06] hover:border-blue-400/40 flex items-center justify-between transition-all duration-300 group cursor-pointer text-left"
                >
                  <div class="flex items-center gap-3.5">
                    <div
                      class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-lg shadow-sm border border-blue-500/20 group-hover:scale-105 transition-transform"
                    >
                      <font-awesome-icon :icon="['fab', 'microsoft']" />
                    </div>
                    <div>
                      <div
                        class="text-sm font-bold text-slate-900 dark:text-white"
                      >
                        Outlook / Live Web
                      </div>
                      <div
                        class="text-xs text-slate-500 dark:text-slate-400 font-normal"
                      >
                        Microsoft 365, Hotmail, and Outlook.com
                      </div>
                    </div>
                  </div>
                  <font-awesome-icon
                    :icon="['fas', 'arrow-up-right-from-square']"
                    class="text-xs text-slate-400 group-hover:text-blue-500 transition-colors mr-2"
                  />
                </button>
              </div>
            </div>

            <!-- Optional: Message Customizer -->
            <div
              class="pt-2 border-t border-slate-100 dark:border-white/[0.06]"
            >
              <div class="flex items-center justify-between mb-2">
                <span
                  class="text-xs font-bold uppercase tracking-wider text-slate-400"
                >
                  Custom Message (Optional)
                </span>
                <span class="text-[11px] text-slate-400"
                  >Auto-filled in composer</span
                >
              </div>
              <textarea
                v-model="messageBody"
                rows="3"
                placeholder="Write brief project details or inquiries..."
                class="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-emerald-400 transition-colors resize-none font-normal"
              ></textarea>
            </div>
          </div>

          <!-- Modal Footer -->
          <div
            class="px-6 py-4 sm:px-8 bg-slate-50/80 dark:bg-white/[0.02] border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs text-slate-400"
          >
            <div class="flex items-center gap-2">
              <span
                class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
              ></span>
              <span>Turnaround: <strong>&lt; 24h</strong></span>
            </div>
            <span>Davao, Philippines (UTC+8)</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useContactModal } from "@/composables/useContactModal";

const { isOpen, currentSubject, currentBody, closeModal } = useContactModal();

const copied = ref(false);
const messageBody = ref("");

// Keep messageBody synced with currentBody when opened
watch(
  () => isOpen.value,
  (val) => {
    if (val) {
      messageBody.value = currentBody.value;
      copied.value = false;
    }
  }
);

// Close on Escape key
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isOpen.value) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
});

const getCleanSubject = () => {
  return currentSubject.value.replace(/—/g, "-");
};

const getCleanBody = () => {
  return messageBody.value || currentBody.value;
};

// 1. Open in Gmail Web (100% works on Mac, Windows, iOS, Android)
const openGmail = () => {
  const su = encodeURIComponent(getCleanSubject());
  const body = encodeURIComponent(getCleanBody());
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=daitejmrk@gmail.com&su=${su}&body=${body}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

// 2. Open in Default Mail App (Apple Mail, Outlook Desktop, Phone Mail)
const openDefaultMail = () => {
  const su = encodeURIComponent(getCleanSubject());
  const body = encodeURIComponent(getCleanBody());
  const mailtoUrl = `mailto:daitejmrk@gmail.com?subject=${su}&body=${body}`;
  window.location.href = mailtoUrl;
};

// 3. Open in Outlook Web
const openOutlook = () => {
  const su = encodeURIComponent(getCleanSubject());
  const body = encodeURIComponent(getCleanBody());
  const url = `https://outlook.live.com/mail/0/deeplink/compose?to=daitejmrk@gmail.com&subject=${su}&body=${body}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

// 4. Copy Email Address
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("daitejmrk@gmail.com");
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2500);
  } catch {
    // Fallback for older browsers
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

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>

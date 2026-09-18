import { ref } from "vue";

const isResumeOpen = ref(false);

export function useResumeModal() {
  const openResume = () => {
    isResumeOpen.value = true;
  };

  const closeResume = () => {
    isResumeOpen.value = false;
  };

  return {
    isResumeOpen,
    openResume,
    closeResume,
  };
}

import { ref } from "vue";

const isOpen = ref(false);
const defaultSubject = "Project Inquiry — Jemark Daite";
const defaultBody =
  "Hello Jemark,\n\nI am reaching out regarding a project collaboration...";

const currentSubject = ref(defaultSubject);
const currentBody = ref(defaultBody);

export function useContactModal() {
  const openModal = (subject?: string, body?: string) => {
    currentSubject.value = subject || defaultSubject;
    currentBody.value = body || defaultBody;
    isOpen.value = true;
  };

  const closeModal = () => {
    isOpen.value = false;
  };

  return {
    isOpen,
    currentSubject,
    currentBody,
    openModal,
    closeModal,
  };
}

<script setup lang="ts">
import { RouterView } from "vue-router";
import ContactModal from "@/components/ContactModal.vue";
import ResumeModal from "@/components/ResumeModal.vue";
</script>

<template>
  <RouterView />
  <ContactModal />
  <ResumeModal />
</template>

<template>
  <li class="dropdown-item">
    <button @click="emit('go-to-name', name)">
      {{ name }}
    </button>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();

const emit = defineEmits<{
  (e: 'go-to-name', name: string): void,
}>();
</script>

<style scoped>
button {
  border: none;
  width: 100%;
  height: fit-content;
  background-color: var(--dropdown-bg);
  color: var(--color-text);
  font-size: 16px;
  padding: 8px;
  transition: background-color 0.35s linear;
}

button:hover {
  background-color: var(--dropdown-btn-hover);
  color: var(--dropdown-text-hover);
}

button:active {
  background-color: var(--dropdown-btn-active);
}

li {
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>
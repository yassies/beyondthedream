<template>
  <div class="dropdown">
    <button
      class="dropdown-btn"
      @click="toggleShow(!show)"
      ref="ignore"
    >
      <slot name="dropdown-name" />
    </button>
    <ul v-show="show" ref="clickAway">
      <slot />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const show = ref(false);
const clickAway = ref(null);
const ignore = ref(null);

function toggleShow(value: boolean) {
  console.log('toggle');
  show.value = value;
}

onClickOutside(clickAway, () => toggleShow(false), {ignore: [ignore]});
</script>

<style scoped>
.dropdown-btn {
  width: fit-content;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  background-color: var(--dropdown-bg);
  border: none;
  border-radius: 8px;
  color: var(--color-text);
  transition: background-color 0.35s linear;
  font-family: 'Ubuntu', sans-serif;
}

.dropdown-btn:hover {
  background-color: var(--dropdown-btn-hover);
  color: var(--dropdown-text-hover);
}

.dropdown-btn:active {
  background-color: var(--dropdown-btn-active);
}

.dropdown {
  position: relative;
  display: inline-block;
}

ul {
  position: absolute;
  right: 0;
  list-style-type: none;
  background-color: var(--dropdown-bg);
  border-radius: 16px;
  margin-top: 8px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  padding: 8px 0;
}
</style>
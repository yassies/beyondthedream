<template>
  <div :id="name">
    <h2
      v-motion
      :initial="initialRight"
      :visibleOnce="visibleRight"
    >
      {{ name }}:
    </h2>
    <p
      v-motion
      :initial="initialLeft"
      :visibleOnce="visibleLeft"
    >
      {{ message }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  message: string;
}>();

const initialRight = {
  opacity: 0,
  x: 100,
};

const visibleRight = {
  opacity: 1,
  x: 0,
  transition: {
    duration: 1000,
    type: 'keyframes',
    ease: 'easeInOut',
  },
};

const initialLeft = {
  opacity: 0,
  x: -100,
};

const visibleLeft = {
  opacity: 1,
  x: 0,
  transition: {
    duration: 1000,
    type: 'keyframes',
    ease: 'easeInOut',
  },
};
</script>

<style scoped>
div {
  font-family: Ubuntu;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 70%;
  font-size: 20px;

  h2 {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 750px) {
	div {
		max-width: 90%;
	}
}
</style>

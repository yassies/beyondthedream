<template>
  <hr
    v-motion
    :initial="{ width: 0 }"
    :visibleOnce="{ width: 200,
      transition: {
        duration: 1000,
        type: 'keyframes',
        ease: 'easeOut',
      },
    }"
  />
</template>
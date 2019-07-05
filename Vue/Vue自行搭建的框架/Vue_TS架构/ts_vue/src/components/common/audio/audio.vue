<template>
  <div @click="play" class="audio-wrap">
   <audio ref="audio"><source :src="audioUrl" type="audio/mpeg" /></audio>
  </div>
</template>

<style lang="sass" scoped>@import './audio.scss';</style>

<script lang="ts" src="./audio.ts"></script>

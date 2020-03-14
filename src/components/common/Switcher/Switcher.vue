<template>
  <div>
    <b-button 
      v-for="(option, index) in options"
      :key="option.value"
      :variant="index == 0 ? 'danger' : 'secondary'"
    >
      {{ option.label }}
    </b-button>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

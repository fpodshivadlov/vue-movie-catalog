<template>
 <div class="switcher">
    <b-button-group size="sm">
      <b-button
        class="switcher__button"
        v-for="(option, index) in options"
        :key="option.value"
        :variant="index == 0 ? 'danger' : 'secondary'"
      >
        {{ option.label }}
      </b-button>
    </b-button-group>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

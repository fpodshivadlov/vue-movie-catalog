<template>
 <div class="switcher">
    <b-button-group size="sm">
      <b-button
        class="switcher__button"
        v-for="(option) in options"
        :key="option.value"
        :variant="option.value === selectedValue ? 'danger' : 'secondary'"
        @click="setValue(option.value)"
      >
        {{ option.label }}
      </b-button>
    </b-button-group>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

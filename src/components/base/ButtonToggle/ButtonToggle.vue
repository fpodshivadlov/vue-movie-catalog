<template>
  <div class="button-toggle d-flex flex-row">
    <div v-if="label">{{ label }}</div>
    <b-button-group size="sm" class="px-3">
      <b-button
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

<template>
  <div class="button-toggle d-flex align-items-center m-n2">
    <div v-if="label" class="p-2">{{ label }}</div>
    <b-button-group size="sm" class="p-2">
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

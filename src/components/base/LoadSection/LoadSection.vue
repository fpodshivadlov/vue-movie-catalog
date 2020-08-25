<template>
  <div class="load-section">
    <slot v-if="status === LoadStatus.Loaded || status === LoadStatus.NotLoaded" />
    <slot v-else-if="status === LoadStatus.Loading" name="loading" >
      <div class="text-center p-6">
          <b-spinner classlabel="Spinning" />
      </div>
    </slot>
    <slot v-else-if="status === LoadStatus.Error" name="error">
      <div class="text-center p-6">
        <div class="p-4">
          <b-icon icon="x-circle" variant="danger" scale="5" />
        </div>
        <b-button @click="refreshClick" size="sm" class="m-3">
          <b-icon icon="arrow-clockwise" /> Reload
        </b-button>
      </div>
    </slot>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

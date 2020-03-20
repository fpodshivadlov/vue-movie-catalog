<template>
  <div class="sub-header-block bg-bg px-5 py-3">
    <b-container>
      <b-row align-v="center" align-h="between">
        <b-col sm="auto">
          <slot />
        </b-col>
        <b-col sm="auto">
          <slot name="center" />
        </b-col>
        <b-col sm="auto">
          <slot name="right" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

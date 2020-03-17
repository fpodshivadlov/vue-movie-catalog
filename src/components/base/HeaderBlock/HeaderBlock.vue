<template>
  <div class="header-block">
    <div class="header-block__right-top">
      <slot name="right-top" />
    </div>
    <div class="header-block__main">
      <slot />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

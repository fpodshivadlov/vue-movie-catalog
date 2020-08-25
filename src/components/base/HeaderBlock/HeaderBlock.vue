<template>
  <div class="header-block bg-dark p-5">
    <div class="float-right">
      <slot name="right-top" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

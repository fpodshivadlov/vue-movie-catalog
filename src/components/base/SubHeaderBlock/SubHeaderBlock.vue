<template>
  <b-container class="sub-header-block">
    <b-row align-v="center">
      <b-col cols="4">
        <slot></slot>
      </b-col>
      <b-col cols="4">
        <slot name="center"></slot>
      </b-col>
      <b-col cols="4">
        <slot name="right"></slot>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

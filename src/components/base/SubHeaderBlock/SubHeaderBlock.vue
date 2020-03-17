<template>
  <b-container class="sub-header-block">
    <b-row>
      <b-col cols="6">
        <slot></slot>
      </b-col>
      <b-col cols="6">
        <slot name="right"></slot>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

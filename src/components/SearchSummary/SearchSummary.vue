<template>
  <SubHeaderBlock class="search-summary bg-bg">
    <div v-if="totalFound">
      <span data-cy="total-found">{{ totalFound }}</span> movie(s) found
    </div>
    <template #center>
      <slot />
    </template>
    <template #right>
      <ButtonToggle
        label="Sort by"
        v-model="sortBySynced"
        :options="sortByOptions"
      />
    </template>
  </SubHeaderBlock>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

<template>
  <SubHeaderBlock class="search-summary">
    <div v-if="totalFound">
      <span data-cy="total-found">{{ totalFound }}</span> movie(s) found
    </div>
    <template v-slot:right>
      <ButtonToggle class="px-3"
        label="Sort by"
        v-model="sortBySynced"
        :options="sortByOptions"
      />
    </template>
  </SubHeaderBlock>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

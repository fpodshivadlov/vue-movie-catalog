<template>
  <b-container>
    <b-row class="search-summary">
      <b-col cols="6" class="search-summary__count">
        <div v-if="totalFound">{{ totalFound }} movie(s) found</div>
      </b-col>
      <ButtonToggle class="px-3"
        label="Sort by"
        v-model="sortBySynced"
        :options="sortByOptions"
      />
    </b-row>
  </b-container>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

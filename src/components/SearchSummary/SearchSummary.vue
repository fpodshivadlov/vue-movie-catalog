<template>
  <b-container>
    <b-row class="search-summary">
      <b-col cols="6" class="search-summary__count">
        <div v-if="totalFound">{{ totalFound }} movie(s) found</div>
      </b-col>
      <b-col class="search-summary__sort d-flex flex-row">
        <div>Sort by</div>
        <Switcher class="px-3"
          v-model="sortBySynced"
          :options="sortByOptions"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

<template>
  <div class="search-page">
    <SearchForm />
    <SearchSummary :totalFound="result.total" />
    <SearchResult :resultItems="result.items" />
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

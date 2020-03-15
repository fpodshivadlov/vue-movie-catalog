<template>
  <div class="search-page">
    <SearchForm />
    <SearchSummary />
    <SearchResult :resultItems="movies" />
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

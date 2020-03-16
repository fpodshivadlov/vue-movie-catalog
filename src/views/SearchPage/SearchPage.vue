<template>
  <div class="search-page">
    <SearchForm
      :searchText="searchText"
      @update:searchText="searchText = $event"
      @search-action="search"
    />
    <SearchSummary 
      :totalFound="result.total"
    />
    <SearchResult
      v-if="status === LoadStatus.Loaded"
      :resultItems="result.items"
    />
    <div v-if="status === LoadStatus.Loading" class="text-center p-5">
      <b-spinner classlabel="Spinning" />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

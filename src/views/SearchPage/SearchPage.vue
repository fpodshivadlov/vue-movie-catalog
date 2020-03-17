<template>
  <div class="search-page">
    <SearchForm
      :searchText="searchText"
      @update:searchText="searchText = $event"
      :searchByOptions="searchByOptions"
      :searchBy="searchByValue"
      @update:searchBy="searchByValue = $event; search()"
      @search-action="search"
    />
    <SearchSummary 
      :totalFound="result.total"
      :sortByOptions="sortByOptions"
      :sortBy="sortByValue"
      @update:sortBy="sortByValue = $event; search()"
    />
    <MovieList
      v-if="status === LoadStatus.Loaded"
      :items="result.items"
      :getLocation="(id) => ({ name: 'details', params: { id: id }})"
    />
    <div v-if="status === LoadStatus.Loading" class="text-center p-5">
      <b-spinner classlabel="Spinning" />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

<template>
  <div class="search-page">
    <SearchForm
      :searchText.sync="searchText"
      :searchByOptions="searchByOptions"
      :searchBy.sync="searchByValue"
      @update:searchBy="search"
      @search-action="search"
    />
    <SearchSummary
      :totalFound="result.total"
      :sortByOptions="sortByOptions"
      :sortBy.sync="sortByValue"
      @update:sortBy="search"
    >
      <Pagination
        v-if="totalPages"
        :total="totalPages"
        :current.sync="currentPage"
        @update:current="searchNoResetPagination"
      />
    </SearchSummary>
    <MovieList
      v-if="status === LoadStatus.Loaded"
      :items="result.items"
    >
      <template #item-link="{ item }">
        <router-link
          class="stretched-link"
          :to="{ name: 'details', params: { id: item.id }}"
        />
      </template>
    </MovieList>
    <div v-if="status === LoadStatus.Loading" class="text-center p-5">
      <b-spinner classlabel="Spinning" />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

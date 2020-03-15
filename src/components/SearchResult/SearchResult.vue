<template>
  <b-container class="search-result">
    <b-row v-if="resultItems.length" class="search-result__list py-3">
      <b-col
        v-for="item in resultItems"
        :key="item.key"
        class="search-result__item"
        cols="4"
      >
        <img :src="item.poster_path" />
        <div class="d-flex justify-content-between py-1">
          <div>
            <div><h4>{{ item.title }}</h4></div>
            <div><small>{{ item.genres.join(", ") }}</small></div>
          </div>
          <div class="search-result__year py-2">
            <span class="border p-1">{{ item.release_date | year }}</span>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row v-else class="search-result__not-found">
      <b-col class="text-center">
        <h2>No movies found</h2>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

<template>
  <div class="search-result">
    <div class="search-form__summary">
      <p v-if="resultItems.length">
        {{ resultItems.length }} movie(s) found
      </p>
      <p>Sort by</p>
      <Switcher
        :options="[
          { value: 'date', label: 'Release Date' },
          { value: 'rating', label: 'Rating' },
        ]"
      />
    </div>
    <div v-if="resultItems.length" class="search-form__list">
      <div
        class="search-form__item"
        v-for="(item, index) in resultItems"
        :key="index"
      >
        <img :src="item.imageUrl"/>
        <h3>{{ item.name }}</h3>
        <p>{{ item.year }}</p>
        <p>{{ item.genres.join(", ") }}</p>
      </div>
    </div>
    <div v-else class="search-form__list">
      No movies found
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

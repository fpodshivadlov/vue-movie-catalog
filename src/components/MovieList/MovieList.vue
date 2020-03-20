<template>
  <div class="movie-list">
    <b-container class="py-4">
      <b-row v-if="items.length">
        <b-col
          v-for="item in items"
          :key="item.key"
          cols="4"
          class="py-3"
        >
          <MovieListItem :item="item">
            <slot name="item-link" :item="item"></slot>
          </MovieListItem>
        </b-col>
      </b-row>
      <b-row v-else class="movie-list__not-found">
        <b-col class="text-center">
          <h2>No movies found</h2>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

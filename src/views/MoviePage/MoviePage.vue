<template>
  <div class="movie-page">
    <div v-if="movieItemStatus === LoadStatus.Loading" class="text-center p-5">
      <b-spinner classlabel="Spinning" />
    </div>
    <MovieOverview
      v-if="movieItemStatus === LoadStatus.Loaded"
      :item="movieItem"
    >
      <template #right-top>
        <router-link :to="{ name: 'home' }">
          <b-icon-search variant="danger" font-scale="1.5" />
        </router-link>
      </template>
    </MovieOverview>

    <div v-for="(genre, index) in genres" :key="index">
      <SubHeaderBlock v-if="genre.items">
        <b>See also best movies of {{ genre.name }}</b>
      </SubHeaderBlock>
      <MovieList :items="genre.items">
        <template #item-link="{ item }">
          <router-link
            class="stretched-link"
            :to="{ name: 'details', params: { id: item.id }}"
          />
        </template>
      </MovieList>
    </div>

    <div v-if="genresStatus === LoadStatus.Loading" class="text-center p-5">
      <div class="spinner-grow text-light spinner-grow-sm" role="status" />
      <div class="spinner-grow text-light spinner-grow-sm" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-light spinner-grow-sm" role="status" />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

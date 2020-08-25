<template>
  <div class="movie-page">
    <LoadSection :status="movieItemStatus">
      <MovieOverview :item="movieItem">
        <template #right-top>
          <router-link :to="{ name: 'home' }">
            <b-icon-search variant="danger" font-scale="1.5" />
          </router-link>
        </template>
      </MovieOverview>
    </LoadSection>

    <LoadSection :status="genresStatus">
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
      <template #loading>
        <div v-if="genresStatus === LoadStatus.Loading" class="text-center p-6">
          <div class="spinner-grow text-light spinner-grow-sm" role="status" />
          <div class="spinner-grow text-light spinner-grow-sm" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          <div class="spinner-grow text-light spinner-grow-sm" role="status" />
        </div>
      </template>
    </LoadSection>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

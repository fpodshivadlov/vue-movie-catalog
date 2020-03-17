<template>
  <div class="movie-page">
    <div v-if="status === LoadStatus.Loading" class="text-center p-5">
      <b-spinner classlabel="Spinning" />
    </div>

    <MovieOverview
      v-if="status === LoadStatus.Loaded"
      :item="movieItem"
    >
      <template v-slot:right-top>
        <router-link :to="{ name: 'home' }">
          <b-icon-search variant="danger" font-scale="1.5" />
        </router-link>
      </template>
    </MovieOverview>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

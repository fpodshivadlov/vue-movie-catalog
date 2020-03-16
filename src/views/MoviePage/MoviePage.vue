<template>
  <div class="movie-page">
    <div v-if="status === LoadStatus.Loading" class="text-center p-5">
      <b-spinner classlabel="Spinning" />
    </div>

    <MovieOverview
      v-if="status === LoadStatus.Loaded"
      :item="movieItem"
    />
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

<template>
  <div class="movie-overview">
    <div class="movie-overview__image">
      <img :src="item.poster_path"/>
    </div>
    <div class="movie-overview__details">
      <h1>{{ item.title }}</h1>
      <p>Rating: {{ item.vote_average }}</p>
      <p>Year: {{ item.release_date | year }}</p>
      <p>Duration: {{ item.runtime }} minutes</p>    
      <p>{{ item.overview }}</p>
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

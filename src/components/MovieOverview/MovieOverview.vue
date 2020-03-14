<template>
  <div class="movie-overview">
    <div class="movie-overview__image">
      <img :src="item.imageUrl"/>
    </div>
    <div class="movie-overview__details">
      <h1>{{ item.name }}</h1>
      <p>Rating: {{ item.rating }}</p>
      <p>Year: {{ item.year }}</p>
      <p>Duration: {{ item.durationMinutes }} minutes</p>    
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

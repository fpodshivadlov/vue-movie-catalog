<template>
  <b-container class="movie-overview">
    <b-row>
      <b-col cols="4" class="movie-overview__image">
        <img :src="item.poster_path" class="img-fluid" />
      </b-col>
      <b-col cols="8" class="movie-overview__details align-self-center">
        <div class="d-flex align-items-center">
          <h1>{{ item.title }}</h1>
          <div class="movie-overview__rating mx-2 p-2 border border-white rounded-circle text-center">
            <span class="align-middle text-success">
              {{ item.vote_average }} 
            </span>
          </div>
        </div>
        <div class="py-1">
          <small>{{ item.tagline }}</small>
        </div>
        <div class="d-flex py-3 m-n3 h5 text-danger">
          <strong class="p-3">{{ item.release_date | year }}</strong>
          <strong class="p-3">{{ item.runtime }} min</strong> 
        </div>
        <div class="h6 py-2">
          {{ item.overview }}
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

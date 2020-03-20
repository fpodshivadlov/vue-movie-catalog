<template>
  <HeaderBlock class="movie-overview">
    <template #right-top>
      <slot name="right-top" />
    </template>
    <b-container v-if="item">
      <b-row align-v="center">
        <b-col cols="4">
          <img :src="item.poster_path" class="img-fluid" />
        </b-col>
        <b-col cols="8">
          <div class="d-flex align-items-center m-n2">
            <h1 class="p-2">{{ item.title }}</h1>
            <div
              v-if="item.vote_average"
              class="movie-overview__rating p-2">
                <div class="border rounded-circle border-white text-center text-success p-2">
                  {{ item.vote_average }}
                </div>
            </div>
          </div>
          <div class="py-1">
            <small>{{ item.tagline }}</small>
          </div>
          <div class="d-flex py-3 m-n3 h5 text-danger">
            <strong v-if="item.release_date" class="p-3">
              {{ item.release_date | year }}
            </strong>
            <strong v-if="item.runtime" class="p-3">
              {{ item.runtime }} min
            </strong>
          </div>
          <div class="h6 py-2">
            {{ item.overview }}
          </div>
          <div class="py-1">
            <small>{{ item.genres.join(', ') }}</small>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </HeaderBlock>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

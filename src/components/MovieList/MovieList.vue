<template>
  <div class="search-result">
    <b-container class="py-4">
      <b-row v-if="items.length" class="search-result__list">
        <b-col
          v-for="item in items"
          :key="item.key"
          class="search-result__item py-3"
          cols="4"
        >
          <router-link :to="getLocation(item.id)">
            <img :src="item.poster_path" />
          </router-link>
          <div class="d-flex justify-content-between py-1">
            <div>
              <div><h4>{{ item.title }}</h4></div>
              <div><small>{{ item.genres.join(", ") }}</small></div>
            </div>
            <div class="search-result__year py-2">
              <span class="border p-1">{{ item.release_date | year }}</span>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row v-else class="search-result__not-found">
        <b-col class="text-center">
          <h2>No movies found</h2>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

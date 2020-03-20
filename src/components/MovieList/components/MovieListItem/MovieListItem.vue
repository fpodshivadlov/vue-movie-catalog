<template>
  <div class="movie-list-item" v-if="item">
    <b-img-lazy
      class="movie-list-item__image"
      :src="item.poster_path"
      :alt="item.title"
    />
    <div class="d-flex justify-content-between py-1">
      <div>
        <div data-cy="movie-title">
          <h4>{{ item.title }}</h4>
        </div>
        <div><small>{{ item.genres.join(", ") }}</small></div>
      </div>
      <div class="py-2">
        <span class="border p-1">{{ item.release_date | year }}</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

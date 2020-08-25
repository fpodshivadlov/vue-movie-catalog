<template>
  <div class="movie-list-item" v-if="item">
    <b-img-lazy
      class="img-fluid"
      :src="item.poster_path"
      :alt="item.title"
    />
    <div class="d-flex-inline py-2">
      <div class="float-right">
        <div class="border p-1">
            {{ item.release_date | year }}
        </div>
      </div>
      <div data-cy="movie-title">
        <h4>{{ item.title }}</h4>
      </div>
      <div>
        <small>{{ item.genres.join(", ") }}</small>
      </div>
      <slot />
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

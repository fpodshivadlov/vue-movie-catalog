<template>
  <b-container class="search-form">
    <b-row class="search-form__title">
      <b-col cols="auto">
        <h1>Find your movie</h1>
      </b-col>
    </b-row>
    <b-row class="search-form__input-group">
      <b-col md="9">
        <b-form-input
          class="search-form__text-input"
          size="lg"
          v-model="searchTextSynced"
          placeholder="Search..."
          @keydown.enter.native="inputKeydown" 
        />
      </b-col>
      <b-col md="3">
        <b-button
          class="search-form__submit-button"
          type="submit"
          size="lg"
          :block="true"
          variant="danger"
          @click="searchAction"
        >
          Search
        </b-button>
      </b-col>
    </b-row>
    <b-row class="search-form__options">
      <b-col cols="auto">
        <div>Search by</div>
      </b-col>
      <b-col cols="auto">
        <Switcher
          class="search-form__switcher"
          :options="[
            { value: 'title', label: 'Title' },
            { value: 'genre', label: 'Genre' },
          ]"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

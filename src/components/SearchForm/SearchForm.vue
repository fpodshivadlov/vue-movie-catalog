<template>
  <div class="search-form">
    <b-form>
      <div class="search-form__title">
        <h1>Find your movie</h1>
      </div>
      <div class="search-form__text">
        <b-form-input
            v-model="form.searchText"
            required
            placeholder="Search..."
        />
      </div>
      <div class="search-form__submit">
        <b-button :pressed="false" type="submit" variant="success">Search</b-button>
      </div>
      <div class="search-form__options">
        <p>Search by</p>
        <Switcher
          :options="[
            { value: 'title', label: 'Title' },
            { value: 'genre', label: 'Genre' },
          ]"
        />
      </div>
    </b-form>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

<template>
  <HeaderBlock>
    <b-container class="search-form">
      <b-row class="text-uppercase py-3">
        <b-col cols="auto">
          <h1>Find your movie</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="9">
          <b-form-input
            size="lg"
            v-model="searchTextSynced"
            placeholder="Search..."
            @keydown.enter.native="inputKeydown"
            data-cy='search-text'
          />
        </b-col>
        <b-col md="3">
          <b-button
            class="text-uppercase"
            type="submit"
            size="lg"
            :block="true"
            variant="danger"
            @click="searchAction"
            data-cy='search-button'
          >
            Search
          </b-button>
        </b-col>
      </b-row>
      <b-row class="py-3">
        <b-col cols="auto">
          <ButtonToggle
            label="Search by"
            v-model="searchBySynced"
            :options="searchByOptions"
          />
        </b-col>
      </b-row>
    </b-container>
  </HeaderBlock>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

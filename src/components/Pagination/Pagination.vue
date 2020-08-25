<template>
  <nav aria-label="Pagination">
    <b-button-group size="sm">
      <PaginationButton :value="currentSynced - 1" :total="total" :current.sync="currentSynced">
        Previous
      </PaginationButton>
      <PaginationButton
        v-for="number in getDisplayingNumbers()"
        :key="number"
        :value="number"
        :total="total"
        :current.sync="currentSynced"
      >
        {{ number }}
        <span v-if="number === currentSynced" class="sr-only">(current)</span>
      </PaginationButton>
      <PaginationButton :value="currentSynced + 1" :total="total" :current.sync="currentSynced">
        Next
      </PaginationButton>
    </b-button-group>
  </nav>
</template>

<script src="./component.ts" lang="ts" />
<style src="./styles.scss" scoped lang="scss" />

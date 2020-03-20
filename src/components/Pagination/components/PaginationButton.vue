<template>
  <li
    class="page-item"
    :class="{ disabled: (value < 1 || value > total), active: (value === current) }"
  >
    <span v-if="value < 1 || value > total || value === current" class="page-link">
      <slot></slot>
    </span>
    <a v-else @click.prevent="$emit('update:current', value)" class="page-link" href="#">
      <slot></slot>
    </a>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

type Props = {
  value: number;
  total: number;
  current: number;
}

export default Vue.extend({
  props: {
    value: { type: Number, required: true },
    total: { type: Number, required: true },
    current: { type: Number },
  },
});

</script>

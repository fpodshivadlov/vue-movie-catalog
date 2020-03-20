<template>
  <b-button
    :variant="active ? 'danger' : 'secondary'"
    :disabled="!valid"
    :class="{ active: active }"
    @click.prevent="valid && !active && $emit('update:current', value)"
  >
    <slot></slot>
  </b-button>

  <!-- <li
    class="page-item"
    :class="{ disabled: (value < 1 || value > total), active: (value === current) }"
  >
    <span v-if="value < 1 || value > total || value === current" class="page-link">
      <slot></slot>
    </span>
    <a v-else @click.prevent="$emit('update:current', value)" class="page-link" href="#">
      <slot></slot>
    </a>
  </li> -->
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
  computed: {
    valid() {
      return this.value >= 1 && this.value <= this.total;
    },
    active() {
      return this.value === this.current;
    },
  },
});

</script>

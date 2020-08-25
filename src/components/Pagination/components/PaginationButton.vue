<template>
  <b-button
    :variant="active ? 'danger' : 'secondary'"
    :disabled="!valid"
    :class="{ active: active }"
    @click.prevent="valid && !active && $emit('update:current', value)"
  >
    <slot />
  </b-button>
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

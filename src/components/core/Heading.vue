<template>
  <v-col :cols="cols">
    <h2
      :class="$vuetify.display.mdAndUp ? 'text-h3' : 'text-h2'"
      class="font-weight-bold text-accent mb-4"
    >
      <slot />
    </h2>
  </v-col>
</template>

<script setup lang="ts">
  interface Props {
    cols?: string
  }
  withDefaults(defineProps<Props>(), {
    cols: '12',
  })
</script>

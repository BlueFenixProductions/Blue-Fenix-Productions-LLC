<template>
  <section id="hero">
    <v-img
      height="100vh"
      src="/assets/hero.png"
      cover
    >
      <v-row
        :justify="$vuetify.display.mdAndUp ? 'end' : undefined"
        align="end"
        class="fill-height text-right pa-md-5 pa-3 mx-0"
      >
        <div>
          <div
            :class="$vuetify.display.mdAndUp ? 'text-h2' : 'text-h4'"
            class="text-uppercase"
          >{{ schema.basics.name }}</div>

          <h1
            :class="$vuetify.display.mdAndUp ? 'text-h1' : 'text-h3'"
            class="text-primary text-uppercase"
          >{{ schema.basics.label }}</h1>
        </div>
      </v-row>
    </v-img>
  </section>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'
  const { schema } = useAppStore()
</script>

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

          <!-- Headline -->
          <div
            :class="$vuetify.display.mdAndUp ? 'text-h2' : 'text-h4'"
            
          >
            Senior-Level Tech Without the Full-Time Hire
          </div>

          <!-- Subheadline -->
          <div
            :class="$vuetify.display.mdAndUp ? 'text-h6' : 'text-subtitle-1'"
            class="mt-3"
          >
            Blue Fenix helps small businesses, law firms, and agencies stay ahead with affordable
            development, IT, and AI solutions. No long contracts. No overhead. Just reliable results.
          </div>

          <!-- CTAs -->
          <div class="mt-5 d-flex ga-3 justify-end">
            <!-- <v-btn
              color="primary"
              class="font-weight-bold"
              variant="elevated"
              size="large"
              href="#what-i-can-do-for-you"
            >
              See Packages
            </v-btn> -->
            <v-btn
              color="secondary"
              variant="outlined"
              size="large"
              href="#lets-talk"
            >
              Book a Free Call
            </v-btn>
          </div>
        </div>
      </v-row>
    </v-img>
  </section>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'
  const { schema } = useAppStore()
</script>

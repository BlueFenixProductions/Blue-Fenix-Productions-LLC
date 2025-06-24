<template>
  <Section id="who-i-am">
    <Abstract1 />

    <Heading>Who I am.</Heading>

    <v-col
      cols="12"
      md="7"
    >
      <v-row justify="space-between">
        <v-col
          cols="12"
          md="7"
        >
          <Text class="mb-0">
            <p>{{ schema.basics.summary }}</p>
            <div>
              <v-img
                :cover="false"
                class="ml-auto"
                src="/assets/chris_pelatari_signature.png"
                width="150"
              />
            </div>
          </Text>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-row align="center">
            <v-col
              class="text-uppercase text-primary font-weight-medium"
              cols="6"
            >
              <div
                class="mb-3"
              >Location</div>
              <div
                class="mb-3"
              >Email</div>
              <div
                class="mb-3"
              >Phone</div>
            </v-col>
            <v-col
              class="text-no-wrap"
              cols="6"
            >
              <div
                class="mb-3"
              >United States</div>
              <div
                class="mb-3 text-truncate"
              >{{ schema.basics.email }}</div>
              <div
                class="mb-3"
              >{{ schema.basics.phone }}</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      class="hidden-sm-and-down text-right "
      cols="5"
    >
      <div
        class="text-h4 text-uppercase"
      >{{ schema.basics.label }}</div>

      <span
        class="text-primary text-h5 font-weight-light text-uppercase"
      >{{ schema.basics.name }}</span>

      <v-img
        class="pointer-none"
        min-height="600"
        max-width="385"
        width="70%"
        src="/assets/chrispelatari.png"
        style="right: 0; position: absolute; top: 300px; "
        cover
      />
    </v-col>
  </Section>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'

  const { schema } = useAppStore()
</script>

<style lang="sass">
  .v-expansion-panels > li
    border-top: 1px solid rgba(#fff, .12) !important
</style>

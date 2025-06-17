<template>
  <div class="mb-6">
    <h4
      class="text-uppercase mb-3 text-primary"
    >{{ value.name }}</h4>

    <div class="pl-md-4">
      <v-row
        v-for="(skill, i) in value.keywords"
        :key="i"
        align="center"
        class="mx-0"
      >
        <v-col cols="4">
          <h5>{{ skill }}</h5>
        </v-col>
        <v-col cols="8">
          <v-rating
            :model-value="value.level"
            active-color="primary"
            color="grey-darken-4"
            density="compact"
            empty-icon="mdi-record"
            full-icon="mdi-record"
            length="6"
            readonly
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    value: {
      name: string
      level: number
      keywords: any
    }
  }
  withDefaults(defineProps<Props>(), {
    value: () => ({
      name: '',
      level: 0,
      keywords: () => [],
    }),
  })
</script>

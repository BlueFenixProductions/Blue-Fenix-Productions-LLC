<template>
  <v-sheet
    class="py-md-5"
    color="transparent"
    height="100%"
  >
    <div class="text-center mb-5">
      <Subheading
        class="mb-1"
      >{{ value.name }}</Subheading>
      <span>{{ value.category }}</span>
    </div>
    <v-row>
      <v-col cols="12" md="6">
        <div
          class="mb-3"
          style="max-width: 500px;"
        >
          <Subheading class="mb-3">
            Project Details
          </Subheading>
          <Text>
            <div v-html="value.description || 'default project description'"></div>
          </Text>
        </div>
      </v-col>
      <v-col
        v-if="value.src"
        class="align-self-center"
        cols="12"
        md="6"
      >
        <v-img
          :src="`/assets/projects/${value.src}`"
          class="mx-auto mt-6"
          width="500"
          cover
          rounded
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
  interface Props {
    value: {
      name: string
      category: string
      description?: string
      src: any
    }
  }

  withDefaults(defineProps<Props>(), {
    value: () => ({
      name: '',
      category: '',
      src: undefined,
    }),
  })

</script>

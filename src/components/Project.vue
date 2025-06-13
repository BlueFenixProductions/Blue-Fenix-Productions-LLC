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
            In ac felis quis tortor malesuada pretium. Phasellus dolor. Fusce fermentum odio nec arcu. Integer tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac felis quis tortor malesuada pretium. Phasellus dolor. Fusce fermentum odio nec arcu. Integer tincidunt.
          </Text>

          <Subheading>
            Project Info
          </Subheading>
          <v-list class="bg-transparent">
            <v-list-item>
              <template #prepend>
                <v-icon color="primary">
                  mdi-account
                </v-icon>
              </template>
              <v-list-item-title class="mr-2">
                Client Name
              </v-list-item-title>
              <template #append>
                <v-list-item-title class="caption text-grey-lighten-1 hidden-sm-and-down">
                  the clients name
                </v-list-item-title>
              </template>
            </v-list-item>
            <v-list-item>
              <template #prepend>
                <v-icon color="primary">
                  mdi-calendar
                </v-icon>
              </template>
              <v-list-item-title class="mr-2">
                Project Dates
              </v-list-item-title>
              <template #append>
                <v-list-item-title class="caption text-grey-lighten-1 hidden-sm-and-down">
                  date, date
                </v-list-item-title>
              </template>
            </v-list-item>
            <v-list-item>
              <template #prepend>
                <v-icon color="primary">
                  mdi-tag
                </v-icon>
              </template>
              <v-list-item-title class="mr-2">
                Project Category
              </v-list-item-title>
              <template #append>
                <v-list-item-title class="caption text-grey-lighten-1 hidden-sm-and-down">
                  category, category, category
                </v-list-item-title>
              </template>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col
        v-if="value.src"
        class="hidden-sm-and-down align-self-center"
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

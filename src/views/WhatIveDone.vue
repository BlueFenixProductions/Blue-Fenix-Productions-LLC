<template>
  <Section id="what-ive-done">
    <Abstract3 />

    <Heading>What I've done</Heading>

    <v-col cols="12">
      <v-carousel
        :cycle="false"
        :height="650"
        show-arrows="hover"
        hide-delimiters
      >
        <v-carousel-item
          v-for="(project, i) in projects"
          :key="i"
        >
          <Project :value="project" />
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </Section>
</template>

<script setup lang="ts">
  const projects = ref([
    {
      name: 'Classic Cafe Rebrand',
      category: 'Logo Design',
      src: 'classic-cafe.png',
    },
    {
      name: 'Flagship',
      category: 'Digital Design',
      src: 'flagship.jpg',
    },
    {
      name: 'Biere Craft Beer',
      category: 'Marketing and Graphic Design',
      src: 'biere.jpg',
    },
  ])
</script>

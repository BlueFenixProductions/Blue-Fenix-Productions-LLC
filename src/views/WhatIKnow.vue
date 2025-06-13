<template>
  <Section id="what-i-know">
    <Abstract2 />

    <v-col cols="12">
      <v-row justify="space-between">
        <Heading cols="auto">
          What I know.
        </Heading>

        <v-col cols="auto">
          <blockquote style="max-width: 230px;">
            <p class="font-weight-light font-italic">
              I have been a Core Contributor to the Vuetify opensource project for 2 years and counting...
            </p>
            <footer class="text-center mt-4">
              <v-btn color="primary">
                <p class="text-white">download cv</p>
              </v-btn>
            </footer>
          </blockquote>
        </v-col>
      </v-row>
    </v-col>
    <h3 class="text-h5 font-weight-medium mb-8 text-primary">
      My Skills
    </h3>
    <v-col cols="12">
      <v-row justify="space-around">
          <Skill
            v-for="(skill, i) in schema.skills"
            :key="i"
            :value="skill"
          />
      </v-row>
    </v-col>
  </Section>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'

  const { schema } = useAppStore()
</script>

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
                My GitHub profile goes back to 2009. Over the years, I've refined my craft through countless projects and contributions, consistently pushing the boundaries of innovation.
            </p>
            <footer class="text-center mt-4">
              <v-btn color="primary" to="https://chris-jekyll.pelatari.com/Chris_Pelatari_Resume_.docx" target="_blank" class="text-all-uppercase font-weight-bold">
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

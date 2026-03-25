<template>
  <Section id="why-blue-fenix">
    <Abstract4 />

    <Heading>Why Blue Fenix.</Heading>

    <v-col
      v-for="(stat, i) in stats"
      :key="`stat-${i}`"
      cols="12"
      md="4"
    >
      <div class="text-center pa-6">
        <div class="text-h2 font-weight-bold text-primary mb-2">
          {{ stat.value }}
        </div>
        <div class="text-h6 font-weight-medium mb-2">
          {{ stat.label }}
        </div>
        <div class="text-body-2 text-medium-emphasis" style="max-width: 280px; margin: 0 auto;">
          {{ stat.description }}
        </div>
      </div>
    </v-col>

    <v-col cols="12" class="text-center mt-8">
      <p class="text-h6 font-weight-light text-medium-emphasis mb-6" style="max-width: 600px; margin: 0 auto;">
        No junior devs. No layers of project managers. You work directly with a senior engineer who owns your project from first commit to production deploy.
      </p>
      <v-btn
        color="primary"
        size="x-large"
        :href="`mailto:chris@bluefenix.net?subject=Project%20Inquiry`"
        class="text-all-uppercase font-weight-bold"
      >
        <p class="text-white">Start a Conversation</p>
      </v-btn>
    </v-col>
  </Section>
</template>

<script setup lang="ts">
  const stats = ref([
    {
      value: '25+',
      label: 'Years in Production',
      description: 'Building software professionally since the first .NET beta in 2001. From startups to Fortune 15 enterprises.'
    },
    {
      value: '50+',
      label: 'Projects Delivered',
      description: 'Web applications, cloud migrations, CRM platforms, e-commerce sites, and custom business tools across every industry.'
    },
    {
      value: 'CTO',
      label: 'Executive Experience',
      description: 'Former CTO with 22 years at a single company. Former Microsoft MVP. I bring architecture-level thinking to every engagement.'
    },
  ])
</script>

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
      name: 'Velocity Databank, Inc.',
      category: 'ASP.NET MVC, SQL Server, Azure',
      src: 'vdb.png',
      description: 'A custom CRM and order management system for a family owned oil and gas exploration company. Full scale ASP.NET MVC Application backed by Sql Server and hosted on Azure <img src="/assets/svgs/brands/10261-icon-service-Azure-DevOps.svg" class="inline-block w-6 h-6">'
    },
    {
      name: 'VelSys',
      category: 'ASP.NET MVC, SQL Server, Azure',
      src: 'velsys.png',
      description: 'Secure web application for oil and gas exploration data management and reporting.'
    },
    {
      name: 'Blue Fenix Productions',
      category: 'Vue.js, Vuetify, Vite',
      src: 'blue_fenix_productions.png',
      description: 'Over 60% of web browsing is now done on mobile phones. We will build a responsive site for you which works and looks great on the desktop and mobile.'
    },
    {
      name: 'Blue Fenix Weblog',
      category: 'Vue.js, VitePress, Vite',
      src: 'chris_pelatari_com_dark.png',
    },
    {
      name: 'Blue Fenix Weblog (light)',
      category: 'Vue.js, VitePress, Vite',
      src: 'chris_pelatari_com_light.png',
    },
    {
      name: 'Done Deal Designs',
      category: 'Small Business Website',
      src: 'donedeal.png',
    },
    {
      name: 'Ned Yousef',
      category: 'Actors Reel Website',
      src: 'nedyousef_com.png',
    },
    {
      name: 'The Skull and Crown',
      category: 'Band Website',
      src: 'theskullandcrown2.png',
    },
    {
      name: 'Tuning Model',
      category: 'C#, ASP.NET Core, MVC, SQL Server',
      src: 'tuningmodel.png',
    },
    {
      name: 'Cancer Couture',
      category: 'Small Business Website',
      src: 'cancercouture.png',
    },
    {
      name: 'AJI Roofing TX',
      category: 'Small Business Website',
      src: 'ajiroofingtx_com_dark.png',
    },
    {
      name: 'AJI Roofing TX (light)',
      category: 'Small Business Website',
      src: 'ajiroofingtx_com_light.png',
    }
  ])
</script>

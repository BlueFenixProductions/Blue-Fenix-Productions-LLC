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
      link: 'https://velocitydatabank.com',
      src: 'vdb.png',
      description: 'A custom CRM and order management system for a family owned oil and gas exploration company. Full scale ASP.NET MVC Application backed by Sql Server and hosted on Azure.'
    },
    {
      name: 'VelSys',
      category: 'ASP.NET MVC, SQL Server, Azure',
      link: 'https://velsys.velocitydatabank.com',
      src: 'velsys.png',
      description: 'Secure web application for oil and gas exploration data management and reporting.'
    },
    {
      name: 'Blue Fenix Productions',
      category: 'Vue.js, Vuetify, Vite',
      link: 'https://bluefenix.net',
      src: 'blue_fenix_productions.png',
      description: 'Over 60% of web browsing is now done on mobile phones. We will build a responsive site for you which works and looks great on the desktop and mobile.'
    },
    {
      name: 'Blue Fenix Weblog',
      category: 'Vue.js, VitePress, Vite',
      link: 'https://chris.pelatari.com',
      src: 'chris_pelatari_com_dark.png',
      description: 'A personal blog built with Vue.js and VitePress, showcasing articles on web development, technology, and more.'
    },
    {
      name: 'Blue Fenix Weblog (light)',
      category: 'Vue.js, VitePress, Vite',
      link: 'https://chris.pelatari.com',
      src: 'chris_pelatari_com_light.png',
      description: 'A personal blog built with Vue.js and VitePress, showcasing articles on web development, technology, and more.'
    },
    {
      name: 'Done Deal Designs',
      category: 'Small Business Website',
      link: 'https://donedealdesigns.com',
      src: 'donedeal.png',
      description: 'A small business website for a custom landscape designer and pool builder, showcasing their products and services.'
    },
    {
      name: 'Ned Yousef',
      category: 'Actors Reel Website',
      link: 'https://nedyousef.com',
      src: 'nedyousef_com.png',
      description: 'A personal website for an actor, featuring a portfolio of work, biography, and contact information.'
    },
    {
      name: 'The Skull and Crown',
      category: 'Retail Website',
      link: 'https://theskullandcrown.com',
      src: 'theskullandcrown2.png',
      description: 'A retail website for The Skull and Crown, featuring badass gear for badass biker chicks.'
    },
    {
      name: 'Tuning Model',
      category: 'C#, ASP.NET Core, MVC, SQL Server',
      link: 'https://velocitydatabank.com/tuningmodel',
      src: 'tuningmodel.png',
      description: 'A custom web application for managing and tuning seismic information, built with C#, ASP.NET Core, and SQL Server.'
    },
    {
      name: 'Cancer Couture',
      category: 'Small Business Website',
      link: 'https://cancer-couture.com',
      src: 'cancercouture.png',
      description: 'A small business website for Cancer Couture, a company that creates custom experiences for cancer patients.'
    },
    {
      name: 'AJI Roofing TX',
      category: 'Small Business Website',
      link: 'https://ajiroofingtx.com',
      src: 'ajiroofingtx_com_dark.png',
      description: 'A small business website for AJI Roofing TX, showcasing their services and expertise in roofing.'
    },
    {
      name: 'AJI Roofing TX (light)',
      category: 'Small Business Website',
      link: 'https://ajiroofingtx.com',
      src: 'ajiroofingtx_com_light.png',
      description: 'A small business website for AJI Roofing TX, showcasing their services and expertise in roofing.'
    }
  ])
</script>

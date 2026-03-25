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
      description: 'Custom CRM and order management platform built for a 22-year oil and gas exploration company. Handles thousands of records, complex reporting workflows, and multi-user access—all on ASP.NET MVC, SQL Server, and Azure.'
    },
    {
      name: 'VelSys',
      category: 'ASP.NET MVC, SQL Server, Azure',
      link: 'https://velsys.velocitydatabank.com',
      src: 'velsys.png',
      description: 'Secure data management portal for seismic exploration data. Role-based access, audit trails, and real-time reporting for field teams and executives—built to handle sensitive industry data at scale.'
    },
    {
      name: 'Blue Fenix Productions',
      category: 'Vue.js, Vuetify, Vite',
      link: 'https://bluefenix.net',
      src: 'blue_fenix_productions.png',
      description: 'The site you\'re looking at right now. Built with Vue.js, Vuetify, and Vite—fully responsive, automated CI/CD via GitHub Actions, and deployed to GitHub Pages. A showcase of modern frontend engineering.'
    },
    {
      name: 'Blue Fenix Weblog',
      category: 'Vue.js, VitePress, Vite',
      link: 'https://chris.pelatari.com',
      src: 'chris_pelatari_com_dark.png',
      description: 'Technical blog covering web development, cloud architecture, and lessons learned from 25 years in the industry. Built with VitePress for lightning-fast static generation and automatic dark/light theming.'
    },
    {
      name: 'Blue Fenix Weblog (light)',
      category: 'Vue.js, VitePress, Vite',
      link: 'https://chris.pelatari.com',
      src: 'chris_pelatari_com_light.png',
      description: 'Technical blog covering web development, cloud architecture, and lessons learned from 25 years in the industry. Built with VitePress for lightning-fast static generation and automatic dark/light theming.'
    },
    {
      name: 'Done Deal Designs',
      category: 'Small Business Website',
      link: 'https://donedealdesigns.com',
      src: 'donedeal.png',
      description: 'Clean, conversion-focused website for a custom landscape designer and pool builder. Designed to turn visitors into leads with clear service showcases and easy contact flow.'
    },
    {
      name: 'Ned Yousef',
      category: 'Actors Reel Website',
      link: 'https://nedyousef.com',
      src: 'nedyousef_com.png',
      description: 'Professional portfolio for a working actor—demo reel integration, credits showcase, and casting-friendly layout designed to make a strong first impression with industry contacts.'
    },
    {
      name: 'The Skull and Crown',
      category: 'Retail Website',
      link: 'https://theskullandcrown.com',
      src: 'theskullandcrown2.png',
      description: 'E-commerce site for a bold motorcycle lifestyle brand. Built to match the brand\'s edge—dark aesthetic, mobile-first shopping experience, and seamless product browsing.'
    },
    {
      name: 'Tuning Model',
      category: 'C#, ASP.NET Core, MVC, SQL Server',
      link: 'https://velocitydatabank.com/tuningmodel',
      src: 'tuningmodel.png',
      description: 'Specialized tool for seismic data analysis and parameter tuning. Complex domain logic made accessible through an intuitive interface—built with C#, ASP.NET Core, and SQL Server for the oil and gas industry.'
    },
    {
      name: 'Cancer Couture',
      category: 'Small Business Website',
      link: 'https://cancer-couture.com',
      src: 'cancercouture.png',
      description: 'Purpose-driven website for a company creating empowering experiences for cancer patients. Warm, accessible design that reflects the brand\'s mission while making it easy for families to connect and engage.'
    },
    {
      name: 'AJI Roofing TX',
      category: 'Small Business Website',
      link: 'https://ajiroofingtx.com',
      src: 'ajiroofingtx_com_dark.png',
      description: 'Lead-generating website for a Texas roofing contractor. Service area targeting, project galleries, and a streamlined quote request flow—designed to convert local search traffic into booked jobs.'
    },
    {
      name: 'AJI Roofing TX (light)',
      category: 'Small Business Website',
      link: 'https://ajiroofingtx.com',
      src: 'ajiroofingtx_com_light.png',
      description: 'Lead-generating website for a Texas roofing contractor. Service area targeting, project galleries, and a streamlined quote request flow—designed to convert local search traffic into booked jobs.'
    }
  ])
</script>

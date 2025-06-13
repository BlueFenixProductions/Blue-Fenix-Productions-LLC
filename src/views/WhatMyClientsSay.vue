<template>
  <Section id="what-my-clients-say">
    <Abstract4 />

    <Heading>What my clients say.</Heading>

    <v-col
      v-for="(client, i) in clients"
      :key="`quote-${i}`"
      cols="12"
      md="4"
    >
      <Client :value="client" />
    </v-col>

    <template v-if="logos.length">
      <v-col
        v-for="(logo, i) in logos"
        :key="`logo-${i}`"
        class="py-6"
        cols="12"
        md="3"
      >
        <v-img
          :cover="false"
          :src="`/assets/logos/${logo}`"
          height="75"
        />
      </v-col>
    </template>
  </Section>
</template>

<script setup lang="ts">
  const clients = ref([
    {
      quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
      name: 'J. Williams',
      company: 'Motion',
      avatar: 'Client1.png',
    },
    {
      quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
      name: 'A. Long',
      company: 'Classic Cafe',
      avatar: 'Client2.png',
    },
    {
      quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
      name: 'M. Hernandez',
      company: 'Flagship',
      avatar: 'Client3.png',
    },
    {
      quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
      name: 'L. McCannon',
      company: 'Motion',
      avatar: 'Client4.png',
    },
    {
      quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
      name: 'A. Mah',
      company: 'Classic Cafe',
      avatar: 'Client5.png',
    },
    {
      quote: 'Aliquam sit amet eros id lorem posuere lobortis ut id enim. Proin ullamcorper fringilla risus et lacinia.Aliquam eget lacus a libero.',
      name: 'H. Russo',
      company: 'Flagship',
      avatar: 'Client6.png',
    },
  ])
  const logos = ref([
    'motion.png',
    'cafe.png',
    'flagship.png',
    'biere.png',
  ])

</script>

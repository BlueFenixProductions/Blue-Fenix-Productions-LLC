<template>
  <v-navigation-drawer
    v-if="$vuetify.display.mdAndUp"
    class="text-center fill-height"
    color="#181818"
  >
    <v-row
      align="center"
      class="flex-column fill-height pt-8 mx-0"
      justify="center"
    >
      <v-avatar
        class="mb-4"
        size="128"
        rounded="0"
        image="/assets/apple-touch-icon.png"/>
      <h2
        class="text-h2 font-weight-black text-accent mb-2"
      >{{ initials }}</h2>
      <div
        class="text-h4 mb-2"
      >{{ schema.basics.name }}</div>
      <span
        class="text-h6 font-weight-light mb-5"
      >{{ schema.basics.label }}</span>
      <div
        v-for="(item, i) in items"
        :key="i"
      >
        <v-btn
          class="text-capitalize font-weight-light mb-3"
          variant="text"
          @click="goTo(item.to)"
        >
          <span>{{ item.text }}</span>
        </v-btn>
      </div>
      <div class="mt-auto">
        <SocialContacts />
      </div>
    </v-row>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'
  import { useGoTo } from 'vuetify'

  const { initials, schema } = useAppStore()
  const goTo = useGoTo()

  const items = ref([
    {
      text: 'About Me',
      to: '#who-i-am',
    },
    {
      text: 'Services',
      to: '#what-i-can-do-for-you',
    },
    {
      text: 'Experience',
      to: '#where-ive-been',
    },
    {
      text: 'Skills',
      to: '#what-i-know',
    },
    {
      text: 'Portfolio',
      to: '#what-ive-done',
    },
    {
      text: 'Contact',
      to: '#lets-talk',
    },
  ])
</script>

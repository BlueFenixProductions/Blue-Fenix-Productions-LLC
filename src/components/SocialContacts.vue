<template>
  <div class="my-4">
    <a
      v-for="(social, i) in socials"
      :key="i"
      :href="social.url"
      :title="`${social.network} profile`"
      class="mx-2"
    >
      <v-icon :icon="social.icon" color="white" />
    </a>
  </div>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'

  const { schema } = useAppStore()

  const iconMap = ref({
    github: 'mdi-github',
    linkedin: 'mdi-linkedin',
    blog: 'mdi-rss',
  })

  const socials = computed(() => {
    return schema.basics.profiles.map((social: any) => {
      const key: 'github'| 'linkedin' | 'blog' = social.network.toLowerCase()
      const _social = {
        ...social,
        icon: iconMap.value[key] || 'mdi-account',
      }
      console.log('social:', _social)
      return _social
    })
  })
</script>

<style scoped>
  a {
    text-decoration: none;
  }
</style>

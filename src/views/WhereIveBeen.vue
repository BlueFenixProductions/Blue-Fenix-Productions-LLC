<template>
  <Section id="where-ive-been">
    <Heading>Where I've been</Heading>

    <v-col
      class="mx-auto px-0"
      cols="12"
      md="9"
    >
      <v-timeline
        :side="$vuetify.display.smAndDown? 'end' : undefined"
        theme="dark"
      >
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          v-bind="getAttrs()"
          dot-color="primary"
        >
          <template #opposite>
            {{ item.startDate.slice(0, 4) }}
          </template>

          <v-card class="pa-3 bg-grey-darken-3">
            <h3 class="font-weight-bold">{{ item.company }}</h3>
            <div>{{ item.summary }}</div>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </Section>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'

  const { schema } = useAppStore()

  const items = computed(() => {
    return schema.work
  })

  const getAttrs = () => {
    const attrs: any = {}

    console.log('random:', random.value)

    if (random.value) attrs.fillDot = true
    if (random.value) attrs.largeDot = true

    return attrs
  }

  const random = computed(() => {
    return Boolean(Math.round(Math.random()))
  })

</script>

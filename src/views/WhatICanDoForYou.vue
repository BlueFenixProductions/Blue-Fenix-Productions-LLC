<template>
  <Section id="what-i-can-do-for-you">
    <Heading>What I can do for you.</Heading>

    <v-col
      cols="12"
      md="8"
    >
    <PricingTable class="mb-6"/>
      <v-expansion-panels
        v-model="expansion"
        style="z-index: 2;"
        variant="popout"
      >
        <v-expansion-panel
          v-for="(item,i) in items"
          :key="i"
        >
          <v-expansion-panel-title color="secondary" class="text-h6 font-weight-light">
            <div>{{ item.name }}</div>
          </v-expansion-panel-title>

          <v-expansion-panel-text :class="expansion !== i ? 'transparent' : ''">
            <div>
              <v-card
                color="transparent"
                flat
              >
                <v-card-text color="secondary" class="text-subtitle-1 font-weight-light">
                  <div
                    v-for="(text, j) in item.keywords"
                    :key="j"
                    v-html="text"></div>
                </v-card-text>
              </v-card>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </Section>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app'
  import PricingTable from '@/components/PricingTable.vue'

  const { schema } = useAppStore()
  const expansion = ref(0)
  const items = computed(() => {
    return schema.interests
  })
</script>

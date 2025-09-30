<template>
  <v-container>
    <v-row align="center">
      <v-col
        v-for="(plan, i) in plans"
        :key="i"
        cols="12"
        sm="9"
        md="9"
        lg="4"
        class="pa-lg-0"
      >
        <v-card
          :class="plan.current && 'py-16'"
          :color="plan.current ? 'primary' : 'secondary'"
          :rounded="mdAndUp && (i === 0 ? 's-lg e-0' : i === 1 ? 'lg' : 's-0 e-lg')"
          :elevation="plan.current ? 10 : 4"
          class="py-9"
        >
          <div class="text-center">
            <v-icon
              :icon="plan.logo"
              :height="60"
              class="mx-auto mb-8"
            />

            <div class="d-flex justify-center align-center mb-4">
              <h1 class="text-h4 font-weight-bold">
                {{ plan.free ? '' : '$' }}
                {{ plan.monthlyPrice }}
              </h1>

              <sub class="text-sm font-weight-medium ms-1 mt-2">{{ plan.free ? '' : '/mon' }}</sub>
            </div>

            <h5 class="text-h5 font-weight-medium">
              {{ plan.name }}
            </h5>
          </div>

          <div class="text-center my-8 mx-2">
            <div
              v-for="feature in plan.features"
              :key="feature"
              class="mb-3 text-subtitle-1 font-weight-light"
            >
              {{ feature }}
            </div>
          </div>

          <div class="text-center">
            <v-btn
              :color="plan.current ? 'secondary' : 'primary'"
              size="x-large"
              text="Get Started"
              variant="flat"
              @click="plan.action"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
// Utilities
import { useDisplay } from 'vuetify'

const { mdAndUp } = useDisplay()

const plans = [
    {
    name: 'Managed AI & IT Bundle',
    logo: 'mdi-robot',
    monthlyPrice: 250,
    current: false,
    free: false,
    action: () => {
      window.location.href = 'mailto:chris@bluefenix.net?subject=Managed%20AI%20%26%20IT%20Bundle%20Inquiry';
    },
    features: [
      'AI chatbot for your site (trained on your docs)',
      'Microsoft 365 or Google Workspace management',
      'Includes $500 one-time setup'
    ]
  },
  {
    name: 'Fractional Dev / CTO',
    logo: 'mdi-account-cog-outline',
    monthlyPrice: 1500,
    current: true,
    free: false,
    action: () => {
      window.location.href = 'mailto:chris@bluefenix.net?subject=Fractional%20Dev%20%2F%20CTO%20Inquiry';
    },
    features: [
      '10 hours / month (coding, bug fixes, scoping)',
      'Code reviews & technical guidance',
      'Priority async support (Slack / email / Zoom)'
    ]
  },
  {
    name: 'Digital Kits & Templates',
    logo: 'mdi-package-variant-closed',
    monthlyPrice: 99,
    current: false,
    free: false,
    action: () => {
      window.location.href = 'mailto:chris@bluefenix.net?subject=Digital%20Kits%20%26%20Templates%20Inquiry';
    },
    features: [
      'Docker-Compose AI Server Kit for Law Firms — $99',
      'Oil & Gas Risk Dashboard Template — $149',
      '.NET 8 + Vue 3 Starter Pack — $79'
    ]
  }
]
</script>

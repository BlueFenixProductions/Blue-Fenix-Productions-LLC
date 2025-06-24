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
    name: 'Project Quote',
    logo: 'mdi-comment-quote-outline',
    monthlyPrice: 'Free',
    current: false,
    free: true,
    action: () => {
      window.location.href = 'mailto:support@bluefenix.net?subject=Project%20Quote%20Request&body=Please%20provide%20details%20about%20your%20project%20so%20we%20can%20give%20you%20a%20quote.';
    },
    features: [
      'Custom Project Estimates',
      'Expert Tech Solutions, Tailored for You.',
      'We turn your ideas into clear, robust digital solutions.'
    ]
  },
  {
    name: 'On-Call IT Support: Premium Package',
    logo: 'mdi-server-security',
    monthlyPrice: 2250,
    current: true,
    action: () => {
      window.location.href = 'https://buy.stripe.com/eVq8wR8Neai77Hw3GM8Zq01';
    },
    features: [
      '24/7 Availability',
      'Remote Assistance',
      'Proactive Monitoring',
      'Priority Response SLA'
    ]
  },
  {
    name: 'On-Call IT Support: Basic Package',
    logo: 'mdi-application-brackets-outline',
    monthlyPrice: 800,
    current: false,
    action: () => {
      window.location.href = 'https://buy.stripe.com/5kQ5kF5B29e38LA1yE8Zq00';
    },
    features: [
      'Business Hours Support',
      'Email and Phone Support',
      'Basic Troubleshooting',
      'Quick Response SLA'
    ]
  }
]
</script>

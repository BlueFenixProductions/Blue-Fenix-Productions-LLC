<template>
  <Section id="lets-talk">
    <Heading>Let's talk.</Heading>

    <v-col
      class="mb-4 pr-md-5"
      cols="12"
      md="5"
    >
      <Subheading class="text-uppercase">
        What can I do for you?
      </Subheading>

      <Text class="mb-5">
        Our expertise spans web development, design, and digital marketing, offering comprehensive solutions tailored to your business needs. We warmly invite you to reach out and discover how we can help bring your vision to life.
      </Text>

      <Subheading class="text-uppercase mb-3">
        Send me a Message
      </Subheading>

      <v-form ref="form" @submit.prevent="generateMailtoLink">
        <v-text-field 
          v-model="form.name"
          required
          outlined
          density="compact"
          label="Name"
          variant="solo-inverted"
          flat
        />

        <v-text-field
          v-model="form.email"
          required
          density="compact"
          label="Email"
          variant="solo-inverted"
          flat
        />

        <v-text-field
          v-model="form.subject"
          density="compact"
          label="Subject"
          variant="solo-inverted"
          flat
        />

        <v-textarea
          v-model="form.message"
          required
          density="compact"
          label="Message"
          variant="solo-inverted"
          flat
        />

        <v-btn
          class="ma-0"
          color="primary"
          type="submit"
          prepend-icon="mdi-email-outline"
        >
          Contact Me
        </v-btn>
      </v-form>
    </v-col>

    <v-col
      class="text-left"
      cols="12"
      md="4"
    >
      <Subheading class="text-uppercase">
        Social Contacts
      </Subheading>

      <SocialContacts />

      <v-list
        class="bg-transparent"
        lines="two"
      >
        <v-list-item>
          <template #prepend>
            <v-icon
              color="primary"
              icon="mdi-map-marker"
              size="48"
            />
          </template>
          <v-list-item-title class="text-primary">
            Location 
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ schema.basics.location.address }}<br>
            {{ schema.basics.location.city }}, {{ schema.basics.location.postalCode }}
          </v-list-item-subtitle>

        </v-list-item>
        <v-list-item>
          <template #prepend>
            <v-icon
              color="primary"
              icon="mdi-email"
              size="48"
            />
          </template>
          <v-list-item-title class="text-primary">
            Email
          </v-list-item-title>
          <v-list-item-subtitle>{{ schema.basics.email }}</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <template #prepend>
            <v-icon
              color="primary"
              icon="mdi-phone"
              size="48"
            />
          </template>
          <v-list-item-title class="text-primary">
            Phone
          </v-list-item-title>
          <v-list-item-subtitle>{{ schema.basics.phone }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-col>
    <v-img
      max-height="100%"
      max-width="20vw"
      src="/assets/apple-touch-icon.png"
      style="bottom: 0; right: 0; position: absolute; display: flex; align-items: end;"
      width="100%"
    />
  </Section>
</template>

<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/stores/app'
const { schema } = useAppStore()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const generateMailtoLink = () => {
  const subject = encodeURIComponent(`Contact Form Submission from ${form.value.name}`);
  const body = encodeURIComponent(
    `Name: ${form.value.name}\nEmail: ${form.value.email}\nMessage:\n${form.value.message}`
  );
  const mailtoLink = `mailto:chris@bluefenix.net?subject=${form.value.subject}&body=${body}`;
  window.location.href = mailtoLink;
};
</script>

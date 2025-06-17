<template>
  <v-sheet
    :class="$vuetify.display.mdAndUp && 'ma-5'"
    color="transparent"
  >
    <v-row class="mx-0">
      <v-icon
        class="align-self-start mr-2"
        color="primary"
        size="48"
      >
        mdi-pause
      </v-icon>

      <div class="pt-3 font-italic">
        <p
          class="font-weight-light pb-6"
        >{{ value.quote }} </p>

        <v-row
          align="center"
          justify="end"
        >
          <span
            class="text-primary"
          >{{ value.name }}</span>&nbsp;|&nbsp;
          <span
            class="text-grey"
          >{{ value.company }}</span>
          <v-avatar
            v-if="value.avatar"
            class="ml-4"
          >
            <v-img :src="`/assets/clients/${value.avatar}`" />
          </v-avatar>
        </v-row>
      </div>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">

  interface Props {
    value: {
      quote: string
      name: string
      company: string
      avatar: any
    }
  }

  withDefaults(defineProps<Props>(), {
    value: () => ({
      quote: '',
      name: '',
      company: '',
      avatar: undefined,
    }),
  })

</script>

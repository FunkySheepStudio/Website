<template>
  <v-container>
    <p
      class="text-center text-h3"
    >
      Step by step
    </p>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          Prerequisites
        </v-stepper-step>
        <v-divider />
        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          Install the server
        </v-stepper-step>
        <v-divider />
        <v-stepper-step
          :complete="e1 > 3"
          step="3"
        >
          Install the client
        </v-stepper-step>
        <v-divider />
        <v-stepper-step step="4">
          Connect everything
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card
            class="mb-12"
            height="200px"
          >
            <v-card-title>
              Prerequisites
            </v-card-title>
          </v-card>

          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            Next
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            height="200px"
          >
            <v-card-title>
              Install the server
            </v-card-title>
          </v-card>

          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            Next
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            height="200px"
          >
            <v-card-title>
              Install the client
            </v-card-title>
          </v-card>

          <v-btn
            color="primary"
            @click="e1 = 4"
          >
            Next
          </v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-card
            class="mb-12"
            height="200px"
          >
            <v-card-title>
              Connect everything
            </v-card-title>
          </v-card>

          <v-btn
            color="primary"
            @click="e1 = 1"
          >
            Baby one more time...
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      e1: 1
    }
  }
}
</script>

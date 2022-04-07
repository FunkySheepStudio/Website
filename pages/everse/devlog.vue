<template>
  <v-container>
    <p
      class="text-center text-h3"
    >
      Devlog
    </p>
    <v-timeline
      :reverse="!$vuetify.breakpoint.mobile"
      :dense="$vuetify.breakpoint.mobile"
    >
      <v-timeline-item
        v-for="(item,i) in timeLineItems"
        :key="i"
        :icon="item.icon"
      >
        <v-card
          shaped
          elevation="10"
          color="rgb(0, 0, 0, 0.3)"
        >
          <v-card-title>
            {{ item.title_en }}
          </v-card-title>
          <v-card-text>
            {{ item.en }}
          </v-card-text>
          <iframe
            style="position: absolute; width: 100%; border: none"
            src="https://www.youtube.com/embed/Jo8g9yXakUU"
            title="Unity Earth Streaming Tech Demo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      timeLineItems: [
        {
          title_en: 'Devlog #1',
          title_fr: 'Devlog #1',
          icon: 'mdi-numeric-1-box',
          en: 'For the first devlog, we demonstrate the earth streaming tech. Bonus: you can see green items locating the POI.',
          fr: 'Pour notre premier devlog, nous vous présentons la démo du stream de la planête. En bonus: vous pouvez appercevoir les icones des centres d\'intérêt.',
          image: '/img/everse/earth.png'
        }
      ]
    }
  }
}
</script>

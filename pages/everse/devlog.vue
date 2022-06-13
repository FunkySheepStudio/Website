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
            <br>
            <br>
             <iframe
              style="height:350px; width: 100%; border: none"
              :src="item.video"
              :title="item.title_en"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </v-card-text>
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
          image: '/img/everse/earth.png',
          video: 'https://www.youtube.com/embed/Jo8g9yXakUU'
        },
        {
          title_en: 'Devlog #2',
          title_fr: 'Devlog #2',
          icon: 'mdi-road',
          en: 'For the second devlog, we added road integration. Real road datas are in the game. Speeding the player.',
          fr: 'Pour second, nous avons intégré les routes. La vitesse du joueur est augmentée..',
          image: '/img/everse/earth.png',
          video: 'https://www.youtube.com/embed/FP3SIayiy1o'
        },
        {
          title_en: 'Devlog #3',
          title_fr: 'Devlog #3',
          icon: 'mdi-server',
          en: 'This devlog is dedicated to the backend. Based on Nodejs, NuxtJS and FeathersJS, realtime communication with Unity3D using websockets.',
          fr: 'Ce devlog est dédié au backend. Basé sur NodeJs, les communications en temps réél avec Unity3D utilisent les websockets.',
          image: '/img/everse/earth.png',
          video: 'https://www.youtube.com/embed/vBuI6tPqmmg'
        },
        {
          title_en: 'Devlog #4',
          title_fr: 'Devlog #4',
          icon: 'mdi-white-balance-sunny',
          en: 'Today we integrated day and night transition using a procedral skybox created with Shader Graph.',
          fr: 'Aujourd\'hui nous avons intégré les transition de jour et nuit. Utilisant une skybox procédural basée sur Shader Graph.',
          image: '/img/everse/earth.png',
          video: 'https://www.youtube.com/embed/Ahd_hLtg4lc'
        }
      ]
    }
  }
}
</script>

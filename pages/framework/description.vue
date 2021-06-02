<template>
  <v-container>
    <p
      class="text-center text-h3"
    >
      The framework
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
          <v-img
            height="300"
            :src="item.image"
          />
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
          title_en: 'Network',
          title_fr: 'Réseau',
          icon: 'mdi-lan',
          en: 'Our framwork for Unity 3D connect to the NuxtJS server to manage realtime messaging, communication and database. It use web socket en FeathersJS to quickly transmit the game messages to all the clients',
          fr: 'Notre framework pour Unity 3D se connect à un serveur NuxtJS to gérer la messagerie en temps réél. Il utilise les websockets pour transmettre rapidement les messages du jeu à l\'ensemble des clients',
          image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
          title_en: 'Frontend',
          title_fr: 'Frontend',
          icon: 'mdi-web',
          en: 'Check in realtime all the game state and connected players on the backoffice server . Customize all your views with VueJS files with a minimum code.',
          fr: 'Vérifiez en temps réél sur le serveur backoffice l\'état des jeux et joueurs connectés, modifiez vos vue avec des fichiers VueJS et un minimum de code',
          image: 'https://images.pexels.com/photos/374559/pexels-photo-374559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
          title_en: 'Flow',
          title_fr: 'Flux',
          icon: 'mdi-transit-connection-variant',
          en: 'Manage all your application flow easily with FeatherJS hooks, Extend default classes to add more logic to our application server',
          fr: 'Gérez tous vos flux d\'application facilement avec les hooks FeatherJS. Etendez les classes par défaut pour ajouter plus de logique à notre serveur d\'application',
          image: 'https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?cs=srgb&dl=pexels-christina-morillo-1181346.jpg&fm=jpg'
        }
      ]
    }
  }
}
</script>

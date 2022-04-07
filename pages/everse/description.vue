<template>
  <v-container>
    <p
      class="text-center text-h3"
    >
      The game
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
          title_en: 'The world',
          title_fr: 'Le monde',
          icon: 'mdi-earth',
          en: 'Everse game is based on our earth. Streaming the entire planet allows use to anchor the game where the player is located.',
          fr: 'Everse est basé sur notre planete. Cette fonctionnalité nous permet d\'ancrer le joueur dans son univers physique.',
          image: '/img/everse/earth.png'
        },
        {
          title_en: 'The gamers',
          title_fr: 'Les joueurs',
          icon: 'mdi-account-multiple',
          en: 'Everyone can participate. You can just play, enhance the world, sell your products, create players experiences. Our world is yours',
          fr: 'Tout le monde peut participer. Vous pouvez simplement jouer, améliorer le monde, vendre vos produits, créer des experiences pour les joueurs. Notre monde est le votre.',
          image: 'https://images.pexels.com/photos/7915440/pexels-photo-7915440.jpeg?cs=srgb&dl=pexels-rodnae-productions-7915440.jpg&fm=jpg'
        },
        {
          title_en: 'The future',
          title_fr: 'Le future',
          icon: 'mdi-clock-outline',
          en: 'Now that our tech stack and prototype is in beta, we are looking for developpers, game studios and everyone that want to take the game to the next level.',
          fr: 'Maintenant que notre prototype est fonctionnel, nous chercher des developpeurs, studios de developpement ou n\'importe qui voulant participer à la prochaine étape.',
          image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        }
      ]
    }
  }
}
</script>

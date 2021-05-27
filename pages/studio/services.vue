<template>
  <v-container>
    <p
      class="text-center text-h3"
    >
      Our services
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
          title_en: 'Developpements',
          title_fr: 'Developpements',
          icon: 'mdi-code-tags',
          en: 'The FunkySheep studio is able to help you in the development of your software. Whether in the field of real-time 3d, integration with your existing tools or even the development of a complete solution responding to your own flows.',
          fr: 'Le studio FunkySheep est capacle de vous aider dans le développement de vos logiciels. Que ce soit dans le domaine de la 3d temps réélle, l\'intégration à vos outils existant ou même le developpement d\'une solution complête répondant à vos propres flux.',
          image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
          title_en: 'Integration',
          title_fr: 'Integration',
          icon: 'mdi-graph',
          en: 'We support you in the integration and implementation of your work procedures thanks to DevOps techniques allowing a scaling up of your systems in real time. We can operate your solutions, maintenance and upgrades as needed.',
          fr: 'Nous vous accompagnons dans l\'integration et la mise en place de vos procédures de travail grace aux techniques DevOps permettant une montée en charge de vos systèmes en temps réél. Nous allons jusqu\'a l\'exploitation de vos solutions, leurs maintenance et leurs évolutions au besoin.',
          image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg'
        },
        {
          title_en: 'Training',
          title_fr: 'Formation',
          icon: 'mdi-school',
          en: 'We train your team to be autonomous on the solutions we implement.',
          fr: 'Nous pouvons former vos équipes pour que vous soyez maître de toutes les solutions que nous mettons en place que que vous soyez completement autonome sur l\'ensemble de votre système.',
          image: 'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?cs=srgb&dl=pexels-%E7%A5%9D-%E9%B9%A4%E6%A7%90-716276.jpg&fm=jpg'
        }
      ]
    }
  }
}
</script>

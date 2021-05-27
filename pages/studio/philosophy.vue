<template>
  <v-container>
    <p
      class="text-center text-h3"
    >
      Our philosophy
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
          title_en: 'People first',
          title_fr: 'L\'humanité',
          icon: 'mdi-account-multiple',
          en: 'In an increasingly technological world, we want to put people back at the center of our concerns. Our team does not contain leaders but specialists. Everyone has the same decision-making power. This for a single purpose: to satisfy our customers.',
          fr: 'Parce que dans un monde de plus en plus technologique, nous souhaitons remettre l\'humain au centre de nos préoccupations. Notre équipe ne contient pas de leaders mais des spécialistes. Chacun à le même pouvoir de décision au seins de notre société pour définir les orientations à donner à nos projets. Ceci dans un unique but: satisfaire nos clients.',
          image: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg'
        },
        {
          title_en: 'Openness',
          title_fr: 'L\'ouverture',
          icon: 'mdi-open-source-initiative',
          en: 'For too long, few have possessed too much. We chose openness. Our framework comes without limit of use and without restriction. The sources are available on our Github page. What makes in our strength is our talented specialists, not a closed technology.',
          fr: 'Parce que depuis trop longtemps, peu ont possédé beaucoup. Nous avons choisi l\'ouverture. Notre framework est à disposition de tout le monde sans limite d\'utilisation et sans restriction. Les sources sont disponibles sur notre page Github. Car ce qui fait à notre sens la force d\'une grande société n\'est pas la rétention d\'informations mais la qualité des personnes qui la compose.',
          image: 'https://images.pexels.com/photos/6205759/pexels-photo-6205759.jpeg?cs=srgb&dl=pexels-tim-douglas-6205759.jpg&fm=jpg'
        },
        {
          title_en: 'No surrender!',
          title_fr: 'Tenacité',
          icon: 'mdi-cart',
          en: 'We want to be proud of each project we lead. We strive to provide an exemplary rendering, respecting our customers constraints.',
          fr: 'Parce que nous voulons être fier de chaque projet que nous menons, nous nous attachons à founir à nos clients un rendu exemplaire, dans le respect de leurs contraintes et en échangeant régulièrement avec eux sur les changements d\'orientations qu\'ils désirent tout au long de notre accompagnement.',
          image: 'https://images.pexels.com/photos/792668/pexels-photo-792668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
      ]
    }
  }
}
</script>

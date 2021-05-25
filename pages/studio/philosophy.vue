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
          title_en: 'Humanity',
          title_fr: 'L\'humanité',
          icon: 'mdi-account-multiple',
          en: 'Because in an increasingly technological world, we want to put people back at the center of our concerns. Our team does not contain leaders but specialists. Everyone has the same decision-making power within our company to define the orientations to be given to our projects. This for a single purpose: to satisfy our customers.',
          fr: 'Parce que dans un monde de plus en plus technologique, nous souhaitons remettre l\'humain au centre de nos préoccupations. Notre équipe ne contient pas de leaders mais des spécialistes. Chacun à le même pouvoir de décision au seins de notre société pour définir les orientations à donner à nos projets. Ceci dans un unique but: satisfaire nos clients.',
          image: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-min-an-853168.jpg&fm=jpg'
        },
        {
          title_en: 'Openness',
          title_fr: 'L\'ouverture',
          icon: 'mdi-open-source-initiative',
          en: 'Because for too long, have possessed much.. We chose openness. Our framework is available to everyone without limit of use and without restriction. The sources are available on our Github page. Because what makes in our opinion the strength of a large company is not the retention of information but the quality of the people who compose it.',
          fr: 'Parce que depuis trop longtemps, peu ont possédé beaucoup. Nous avons choisi l\'ouverture. Notre framework est à disposition de tout le monde sans limite d\'utilisation et sans restriction. Les sources sont disponibles sur notre page Github. Car ce qui fait à notre sens la force d\'une grande société n\'est pas la rétention d\'informations mais la qualité des personnes qui la compose.',
          image: 'https://images.pexels.com/photos/6205759/pexels-photo-6205759.jpeg?cs=srgb&dl=pexels-tim-douglas-6205759.jpg&fm=jpg'
        },
        {
          title_en: 'Tenacity',
          title_fr: 'Tenacité',
          icon: 'mdi-cart',
          en: 'Because we want to be proud of each project we lead, we strive to provide our clients with an exemplary rendering, while respecting their constraints and by regularly exchanging with them on the changes in direction they desire throughout. of our support.',
          fr: 'Parce que nous voulons être fier de chaque projet que nous menons, nous nous attachons à founir à nos clients un rendu exemplaire, dans le respect de leurs contraintes et en échangeant régulièrement avec eux sur les changements d\'orientations qu\'ils désirent tout au long de notre accompagnement.',
          image: 'https://images.pexels.com/photos/792668/pexels-photo-792668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
      ]
    }
  }
}
</script>

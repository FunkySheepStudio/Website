<template>
  <section>
    <v-carousel
      cycle
      interval="5000"
      :height="$vuetify.breakpoint.height / 2"
      :show-arrows="!$vuetify.breakpoint.mobile"
    >
      <v-carousel-item
        v-for="(item,i) in carousselItems"
        :key="i"
        :src="item.src"
        :href="item.href"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-card
            max-width="800"
            shaped
            color="rgb(0, 0, 0, 0.6)"
          >
            <v-card-title
              class="text-h6 text-lg-h3"
            >
              {{ item.title_en }}
            </v-card-title>
            <v-card-text>
              {{ item.en }}
            </v-card-text>
          </v-card>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <v-container>
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
  </section>
</template>

<script>
export default {
  data () {
    return {
      carousselItems: [
        {
          title_en: 'Our framework is available!',
          title_fr: 'Notre framework est disponible!',
          en: 'We are delighted to announce the release of the alpha version of our framework. The community now has free access to a Unity-based framework to accelerate the network development of network projects. Do not hesitate to visit our examples page to discover the possibilities of the framework. All sources are available on our github page.',
          fr: 'Nous sommes ravies de vous annoncer la sortie de la version alpha de notre framework. La communauté à désormais accés gratuitement à un framework basé sur Unity pour accélérer le développement réseau de projets réseaux. N\'hésitez pas à aller visiter notre page d\'examples pour découvrir les possibilité du framework. L\'ensemble des sources est disponible sur notre page github.',
          btnText: 'Discover',
          href: '/framework/description',
          src: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?cs=srgb&dl=pexels-markus-spiske-2004161.jpg&fm=jpg'
        },
        {
          title_en: 'Keep in touch',
          title_fr: 'Gardez le contact',
          en: 'Contact our team on discord. Collaborate with us on Github. Watch our tutorials on youtube or send us your bitcoins to help us develop the framework ;) ...',
          fr: 'Contactez notre équipe sur discord. Collaborez avec nous sur Github. Visionnez no tutos sur youtube ou envoyez nous vos bitcoins pour  nous aider au dévloppement du framwork ;)...',
          href: '/studio/contact',
          src: 'https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?cs=srgb&dl=pexels-fauxels-3184424.jpg&fm=jpg'
        }
      ],
      timeLineItems: [
        {
          title_en: 'The studio',
          title_fr: 'Le studio',
          icon: 'mdi-account-multiple',
          en: 'Our goal is to help companies implement graphics solutions for their customers. For each project we surround ourselves with specialists to best meet your needs.',
          fr: 'FunkySheep Studio est une société dont le but est de d\'aider les entreprises à implémenter des solutions graphiques à destination de leurs clients. Pour chaque projet nous nous entourons de spécialistes pour satisfaire au mieux vos besoins.',
          image: 'https://images.pexels.com/photos/792051/pexels-photo-792051.jpeg?cs=srgb&dl=pexels-othmar-vigl-792051.jpg&fm=jpg'
        },
        {
          title_en: 'The framework',
          title_fr: 'Le framework',
          icon: 'mdi-axis-arrow-info',
          en: 'Built on NuxtJs, our open source framework allows everyone to integrate a powerful tool into their Unity 3D pipeline. It quickly and efficiently manages network messages, database integration and frontend.',
          fr: 'Construit sur NuxtJs, notre framework open source permet à chacun d\'intégrer un outil puissant à son pipeline Unity 3D. Il gère les messages réseaux, l\'intégration à la base de donnée et le frontend rapidement et efficacement.',
          image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg'
        },
        {
          title_en: 'Our services',
          title_fr: 'Nos services',
          icon: 'mdi-cart',
          en: 'Our time is yours. Our team is available to meet the challenges of your projects. We can help you integrate and use our framework, teach your teams how to use it or create your games or content in real time. Our only limit is your imagination...',
          fr: 'Notre temps est le votre. Toute notre équipe est disponible pour relever les challenge de vos projets. Nous pouvons vous aider à intégrer et utiliser notre framework, apprendre à vos équipes la prise en main de ce dernier ou même créer vos jeux ou contenus en temps réél. Notre seul limite est votre imagination...',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?cs=srgb&dl=pexels-fauxels-3184465.jpg&fm=jpg'
        }
      ]
    }
  }
}
</script>

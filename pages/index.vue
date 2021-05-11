<template>
  <section>
    <v-carousel
      cycle
      interval="5000"
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
            shaped
            color="rgb(0, 0, 0, 0.6)"
          >
            <v-card-title
              class="text-h4"
            >
              {{ item.title }}
            </v-card-title>
            <v-card-text>
              {{ item.text }}
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
              {{ item.title }}
            </v-card-title>
            <v-card-text>
              {{ item.text }}
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
          title: 'Framework is Out!',
          text: 'We are pleased to announce the first public version of our framework. It\'s time for us to release this tool to the community. Go check the documentation and examples to be able to download, use and contribute!',
          btnText: 'Discover',
          href: '/framework/description',
          src: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?cs=srgb&dl=pexels-markus-spiske-2004161.jpg&fm=jpg'
        },
        {
          title: 'Stay in touch',
          text: 'Stay in touch with the team, github, discord etc...',
          href: '/studio/contact',
          src: 'https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?cs=srgb&dl=pexels-fauxels-3184424.jpg&fm=jpg'
        }
      ],
      timeLineItems: [
        {
          title: 'The studio',
          icon: 'mdi-account-multiple',
          text: 'Funky Sheep Studio aim to provide a place for game developper to participate freely to inovative games. No leader, everyone evolved will be part of the entire projects.',
          image: 'https://images.pexels.com/photos/792051/pexels-photo-792051.jpeg?cs=srgb&dl=pexels-othmar-vigl-792051.jpg&fm=jpg'
        },
        {
          title: 'The framework',
          icon: 'mdi-axis-arrow-info',
          text: 'Build on NuxtJs, our open source framework allow anyone to integrate a powerfull tool to the unity developpement pipeline. It manage the network messaging, database integration and frontend quickly and efficiently.',
          image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-546819.jpg&fm=jpg'
        },
        {
          title: 'Our services',
          icon: 'mdi-cart',
          text: 'Our time is yours. Everynone in our team is available to help you to integrate our framework to your pipeline, train you team or even create your game depending on your needs.',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?cs=srgb&dl=pexels-fauxels-3184465.jpg&fm=jpg'
        }
      ]
    }
  }
}
</script>

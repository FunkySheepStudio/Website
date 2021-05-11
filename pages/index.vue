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
          <div>
            <v-sheet
              color="rgb(0, 0, 0, 0.7)"
              tile
              class="display-1"
              align="center"
              justify="center"
            >
              {{ item.title }}
            </v-sheet>
            <v-sheet
              color="rgb(0, 0, 0, 0.3)"
              tile
              align="center"
              justify="center"
            >
              {{ item.text }}
            </v-sheet>
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  data () {
    return {
      carousselItems: [
        {
          title: 'Framework Alpha is Out!',
          text: 'We are pleased to annouce the first public version of our framework',
          btnText: 'Discover',
          href: '/framework/description',
          src: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?cs=srgb&dl=pexels-markus-spiske-2004161.jpg&fm=jpg'
        },
        {
          title: 'Get in touch',
          text: 'Stay in touch with the team, github, discord etc...',
          href: 'Contact us',
          src: 'https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?cs=srgb&dl=pexels-fauxels-3184424.jpg&fm=jpg'
        }
      ]
    }
  }
}
</script>

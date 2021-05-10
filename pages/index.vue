<template>
  <section>
    <v-carousel
      cycle
      interval="5000"
      width="100%"
    >
      <v-carousel-item
        v-for="(item,i) in carousselItems"
        :key="i"
        :src="item.src"
        :href="item.href"
      >
        <v-sheet
          color="rgb(0, 0, 0, 0.3)"
          height="100%"
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
                height="60"
                align="center"
                class="display-2"
              >
                {{ item.title }}
              </v-sheet>
              <v-sheet
                color="rgb(0, 0, 0, 0.3)"
                min-height="200"
                tile
                align="center"
              >
                {{ item.text }}
              </v-sheet>
            </div>
          </v-row>
        </v-sheet>
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
          href: 'http://localhost:3000/framework/description',
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

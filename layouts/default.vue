<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <funkysheep-logo
        src="/img/Logo-Head-Mini.png"
      />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <MenuItem
        v-for="(menu, i) in menus"
        :key="i"
        :menu="menu"
        :hidden="$vuetify.breakpoint.mobile"
      />
      <v-divider
        class="mx-4"
        vertical
        :hidden="$vuetify.breakpoint.mobile"
      />
      <v-btn
        fab
        elevation="0"
        x-small
        color="primary"
        href="https://github.com/FunkySheepStudio/"
        target="_blank"
        :hidden="$vuetify.breakpoint.mobile"
      >
        <v-icon dark>
          mdi-github
        </v-icon>
      </v-btn>
      <v-btn
        :hidden="!$vuetify.breakpoint.mobile"
        fab
        elevation="0"
        x-small
        color="primary"
        @click="mobileMenu = !mobileMenu"
      >
        <v-icon dark>
          mdi-menu
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="mobileMenu"
      :right="right"
      temporary
      fixed
      @mouseout="showMobileMenu = false"
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import MenuItem from '~/components/MenuItem.vue'
export default {
  components: {
    MenuItem
  },
  data () {
    return {
      menus: [
        {
          icon: 'mdi-apps',
          title: 'Studio',
          items: [
            {
              title: 'About Us',
              to: '/'
            },
            {
              title: 'News',
              to: '/news'
            }
          ]
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Framework',
          items: [
            {
              title: 'Description',
              to: '/framework/description'
            },
            {
              title: 'Examples',
              to: '/framework/examples'
            },
            {
              title: 'Documentation',
              to: '/framework/documentation'
            }
          ]
        }
      ],
      miniVariant: false,
      right: true,
      mobileMenu: false,
      title: 'Funky Sheep Studio'
    }
  },
  computed: {}
}
</script>

<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <funkysheep-logo
        src="/img/Logo-Head-Mini.png"
      />
      <v-toolbar-title
        v-if="$vuetify.breakpoint.name != 'xs'"
        v-text="title"
      />
      <v-spacer />
      <funkysheep-menu-item
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
      <funkysheep-social
        :hidden="$vuetify.breakpoint.mobile"
      />
      <div
        :hidden="!$vuetify.breakpoint.mobile"
      >
        <v-btn
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
      </div>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="mobileMenu"
      right
      temporary
      fixed
      :hidden="!$vuetify.breakpoint.mobile"
      @mouseout="showMobileMenu = false"
    >
      <v-list>
        <funkysheep-menu-mobile-item
          v-for="(menu, i) in menus"
          :key="i"
          :menu="menu"
        />
        <v-list-item>
          <funkysheep-social />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      color="primary"
      height="auto"
    >
      <v-layout
        justify-center
        align-center
      >
        <v-divider
          class="mx-2"
          vertical
        />
        Funky Sheep Studio &copy; {{ new Date().getFullYear() }}
        <v-divider
          class="mx-2"
          vertical
        />
        <funkysheep-social
          :hidden="$vuetify.breakpoint.mobile"
        />
        <v-divider
          class="mx-2"
          vertical
        />
        <a
          style="color:#000000;"
          href="https://github.com/FunkySheepStudio/Website"
          target="_blank"
        >
        Fix me
        </a>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      menus: [
        {
          icon: 'mdi-apps',
          title: 'Studio',
          items: [
            {
              title: 'Philosophy',
              to: '/studio/philosophy'
            },
            {
              title: 'Services',
              to: '/studio/services'
            },
            {
              title: 'Contact',
              to: '/studio/contact'
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
              title: 'First steps',
              to: '/framework/firststeps'
            }
          ]
        },
        {
          icon: 'mdi-gamepad',
          title: 'Everse',
          items: [
            {
              title: 'The Game',
              to: '/everse/description'
            },
            {
              title: 'Devlog',
              to: '/everse/devlog'
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

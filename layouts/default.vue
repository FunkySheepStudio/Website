<template>
  <v-app dark>
    <v-app-bar
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
      <funkysheep-social
        :hidden="$vuetify.breakpoint.mobile"
      />
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
      <nuxt />
    </v-main>
    <v-navigation-drawer
      v-model="mobileMenu"
      :right="right"
      temporary
      fixed
      @mouseout="showMobileMenu = false"
    >
      <v-list>
        <MenuItemMobile
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
      app
    >
      <span>Funky Sheep Studio &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import MenuItem from '~/components/MenuItem.vue'
import MenuItemMobile from '~/components/MenuItemMobile.vue'
export default {
  components: {
    MenuItem,
    MenuItemMobile
  },
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

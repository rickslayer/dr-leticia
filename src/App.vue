<template>
  <v-app>
    <v-app-bar
      app
      color="#9f7f6a"
      dark
    >
     <v-app-bar-nav-icon 
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-btn
        href="https://facebook.com"
        target="_blank"
        text
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="text--accent-4"
        >
          <v-list-item>
            <v-list-item-title 
              href="#" 
              @click="drawer = !drawer"
              >
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <Home/>
    <Footer/>
  </v-app>
</template>

<script>
import Home from './components/Home';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Home,
    Footer,
  },

  data: () => ({
    drawer: false,
  }),
};
</script>

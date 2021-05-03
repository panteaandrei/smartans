<template>
  <v-app>

      <v-navigation-drawer app :mobile-breakpoint="0">
          <!-- -->
          <v-list-item>
              <v-list-item-content>
                  <v-list-item-title class="title">
                      Application
                  </v-list-item-title>
                  <v-list-item-subtitle>
                      subtext
                  </v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
              dense
              nav
          >
              <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  link
              >
                  <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
          </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
          <!-- -->
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>

          <!-- Provides the application the proper gutter -->
          <v-container fluid>

              <!-- If using vue-router -->
              <router-view></router-view>
          </v-container>
      </v-main>

      <v-footer app>
          <!-- -->
      </v-footer>
  </v-app>
</template>

<script>
// import About from "@/views/About";
// import Home from "@/views/Home";

export default {
  name: 'App',

  components: {
      // Home,
      // About,
  },

  data: () => ({
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
      ],
      right: null,
  }),
};
</script>

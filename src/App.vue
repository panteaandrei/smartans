<template>
  <v-app>

      <v-card
          height="400"
          width="256"
          class="mx-auto"
      >
          <v-navigation-drawer permanent>
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
                          <v-btn :to="item.to">{{ item.title }}</v-btn>
                      </v-list-item-content>
                  </v-list-item>
              </v-list>
          </v-navigation-drawer>
      </v-card>
    <v-main>
        <v-container fluid>
            <router-view>
                <Home/>
                <About/>
            </router-view>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
import About from "@/views/About";
import Home from "@/views/Home";

export default {
  name: 'App',

  components: {
      Home,
      About,
  },

  data: () => ({
      items: [
          { title: 'Home', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'About', icon: 'mdi-image', to: '/about' },
      ],
  }),
};
</script>

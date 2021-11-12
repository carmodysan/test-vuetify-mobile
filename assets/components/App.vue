<template>
    <v-app v-cloak>
        <v-app-bar short clipped-left app >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Mon site perso</v-toolbar-title>
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
export default {
    name: 'App'
}
</script>

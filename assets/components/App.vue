<template>
    <v-app v-cloak>
        <v-app-bar short app >Symfony + Vuetify</v-app-bar>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped>

</style>

<script>
export default {
    name: 'App'
}
</script>

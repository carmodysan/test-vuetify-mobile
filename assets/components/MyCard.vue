<template>
  <v-container>
    <v-card elevation="2" outlined>
      <v-card-title>Mon super titre</v-card-title>
      <v-card-text>Plein de textes !!!!</v-card-text>
      <v-card-action>
        <v-btn>Bouton</v-btn>
      </v-card-action>
    </v-card>
    <v-btn color="success">Envoyer</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  props: {},
  data: () => ({
    message: "Hello Symfony + Vue.js!",
  }),
};
</script>

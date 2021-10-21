<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex v-for="n in 6" :key="n" xl4 lg4 md4 sm6 xs12>
        <v-card width="100%" height="400px" color="#26c6da">
          <v-btn
            color="#26c6da"
            class="body-1"
            width="100%"
            height="100%"
            fill-height
            v-bind:style="{
              'background-image':
                'url(' + require('../assets/ojingeGame.png') + ')',
              backgroundSize: 'cover',
            }"
            >Inquire Item</v-btn
          >
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>

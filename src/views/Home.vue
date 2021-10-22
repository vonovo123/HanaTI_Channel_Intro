<template>
  <v-layout row wrap class="pa-4">
    <v-flex v-for="n in 6" :key="n" xl4 lg4 md4 sm6 xs12 class="gameBox pa-2">
      <div class="tag">tag</div>
      <v-card width="100%" height="300px">
        <v-btn
          class="homeBtn"
          width="100%"
          height="100%"
          fill-height
          v-bind:style="{
            //'background-image':
            //'url(https://i.pinimg.com/originals/ea/37/df/ea37df8d51c2c4bcc27c1708fff6c9d6.jpg)',
            //'url(' + require('../assets/ojingeGame.png') + ')',
          }"
        ></v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>

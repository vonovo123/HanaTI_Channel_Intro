<template>
  <v-layout row wrap class="home pa-4">
    <v-flex
      v-for="(developer, idx) in developers"
      :key="idx"
      xl4
      lg4
      md4
      sm6
      xs12
      class="box pa-2"
    >
      <div class="tag">{{ developer.name }}</div>
      <v-card width="100%" height="300px" color="#f5f5f5">
        <v-card-title>{{ developer.projectName }}</v-card-title>
        <v-btn
          class="homeBtn"
          width="100%"
          height="80%"
          fill-height
          v-bind:style="{
            //'background-image':
            //'url(https://i.pinimg.com/originals/ea/37/df/ea37df8d51c2c4bcc27c1708fff6c9d6.jpg)',
            //'url(' + require('../assets/ojingeGame.png') + ')',
          }"
          @click="btnClick(developer.routerName)"
        ></v-btn>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components: {},
  computed: { ...mapState(['developers']) },
  methods: {
    btnClick(routerName) {
      if (routerName === '') {
        alert('store/index.js에서 라우터 이름을 지정하고 화면생성해주세요');
        return;
      }
      this.$store.dispatch('moveToBoardGame', routerName);
    },
  },
};
</script>

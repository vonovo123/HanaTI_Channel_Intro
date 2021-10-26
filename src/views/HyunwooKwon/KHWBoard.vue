<template>
  <v-layout row wrap class="home pa-4" maxHeight="1200px">
    <v-row align="center" justify="center">
      <v-card class="box ma-5" width="100%" height="630px">{{
        hyunwooStore.name
      }}</v-card>
    </v-row>
  </v-layout>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'HyunwooKwon',
  components: {},
  computed: { ...mapState(['hyunwooStore']) },
  methods: {
    btnClick() {
      this.$store.dispatch('moveToBoardGame');
    },
  },
};
</script>

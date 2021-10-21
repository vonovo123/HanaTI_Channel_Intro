<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <v-app>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>
<style src="./css/style.css"></style>

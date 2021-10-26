<template>
  <div>
    <v-app>
      <div class="header">
        <div class="board-title">
          <router-link to="/" class="headRouter">게임보드</router-link>
        </div>
        <div class="about-title">
          <!--  |
          <router-link to="/about">About</router-link> -->
          <router-link to="/about" class="headRouter">어바웃어스</router-link>
        </div>
      </div>
      <div class="body">
        <v-content>
          <v-container fluid grid-list-md>
            <router-view></router-view>
          </v-container>
        </v-content>
      </div>
    </v-app>
  </div>
</template>
<style src="./css/style.css"></style>

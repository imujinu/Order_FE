<template>
  <v-btn href="/practice/route2">일반라우팅</v-btn>
  <v-btn @click="hrefRouting()">일반라우팅(함수)</v-btn>
  <v-btn to="/practice/route2">SPA 경로기반 라우팅</v-btn>
  <v-btn @click="spaRouting1()">SPA 경로기반 라우팅(함수)</v-btn>
  <v-btn :to="{ name: 'RouteComponent2' }">SPA 이름 기반 라우팅</v-btn>
  <v-btn @click="spaRouting1()">SPA 이름 기반 라우팅(함수)</v-btn>
</template>
<script>
export default {
  methods: {
    hrefRouting() {
      // 화면 전체 새로고침이 발생하여 사용자 경험이 떨어질 수 있음.
      window.location.href = "/practice/route2";
    },
    spaRouting1() {
      //spa : single page application : 새로고침 없이 페이지가 로드 된다.
      this.$router.push("/practice/route2");
    },
    spaRouting2() {
      //spa : single page application : 새로고침 없이 페이지가 로드 된다.
      this.$router.push({ name: "RouteComponent2" });
    },
  },
};
</script>

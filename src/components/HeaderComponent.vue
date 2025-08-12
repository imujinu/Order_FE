<template>
  <v-app-bar>
    <v-container>
      <v-row>
        <!-- justify-start 왼쪽 기준 정렬 -->
        <v-col class="d-flex justify-start">
          <div v-if="userRole === 'ADMIN'">
            <v-btn :to="'/member/list'">회원관리</v-btn>
            <v-btn :to="'/product/manage'">상품관리</v-btn>
            <v-btn :to="'/order/list'">실시간 주문 건수</v-btn>
          </div>
        </v-col>
        <v-col class="text-center">
          <v-btn :to="`/`">java shop</v-btn>
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn v-if="isLogined">장바구니</v-btn>
          <v-btn :to="'/product/list'">상품목록</v-btn>
          <v-btn v-if="isLogined" :to="`/member/mypage`">마이페이지</v-btn>
          <v-btn v-if="!isLogined" :to="`/member/create`">회원가입</v-btn>
          <v-btn v-if="!isLogined" :to="`/member/login`">로그인</v-btn>
          <v-btn v-if="isLogined" @click="doLogout()">로그아웃</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
import { jwtDecode } from "jwt-decode";

export default {
  data() {
    return {
      userRole: null,
      isLogined: false,
    };
  },
  methods: {
    doLogout() {
      localStorage.clear();
      this.isLogined = false;
      this.role = null;
      this.$router.push("/");
    },
  },
  created() {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const payload = jwtDecode(accessToken);
      console.log(payload);
      this.userRole = payload.role;
      this.isLogined = true;
    }
  },
};
</script>

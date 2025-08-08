import { createRouter, createWebHistory } from "vue-router";
import { practiceRouter } from "./practiceRouter";
import { memberRouter } from "./memberRouter";

// url 경로와 화면을 매핑
const routes = [...practiceRouter, ...memberRouter];

const router = createRouter({
  // 1) createWebHistory  : localhost:3000/member/create
  // 2) createWebHashHistory : /#/member/create
  history: createWebHistory(),
  routes,
});

// export된 router를 main.js에서 import 해줘야함
export default router;

import MemberCreate from "@/views/MemberCreate.vue";
import MemberLogin from "@/views/MemberLogin.vue";

export const memberRouter = [
  { path: "/member/create", name: "memberCreate", component: MemberCreate },
  { path: "/member/login", name: "memberLogin", component: MemberLogin },
];

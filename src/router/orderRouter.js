import OrderList from "@/views/OrderList.vue";

export const orderRouter = [
  {
    path: "/order/list",
    name: "orderList",
    component: OrderList,
    props: { isMyPage: false, pageTitle: "주문전체목록" },
  },
];

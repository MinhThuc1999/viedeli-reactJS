import HomePage from "~/pages";
import Contact from "~/pages/contact";
import Discount from "~/pages/discount";
import Introduct from "~/pages/introduct";
import News from "~/pages/news";
import Product from "~/pages/product";
import ServerAdd from "~/pages/serverAdd";

const publicRoutes = [
  {
    id: 1,
    path: "/",
    content: "",
    component: HomePage,
  },
  {
    id: 2,
    path: "/introduct",
    content: "GIỚI THIỆU",
    component: Introduct,
  },
  {
    id: 3,
    path: "/product",
    content: "SẢN PHẨM",
    component: Product,
  },
  {
    id: 4,
    path: "/server-Add",
    content: "ĐIỂM PHỤC VỤ",
    component: ServerAdd,
  },
  {
    id: 5,
    path: "/discount",
    content: "KHUYẾN MÃI",
    component: Discount,
  },
  {
    id: 6,
    path: "/news",
    content: "TIN TỨC",
    component: News,
  },
  {
    id: 7,
    path: "/contact",
    content: "LIÊN HỆ",
    component: Contact,
  },
];

export { publicRoutes };

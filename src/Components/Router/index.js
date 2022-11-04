import { HeaderOnly } from "../Layout";
import Home from "../Page/Home/Home";
import Cart from "../Page/Cart/Cart";

// user
import Login from "../Page/auth/Login/Login";
import Register from "../Page/auth/Register/Register";
import Contact from "../Page/Contact/Contact";
import Pay from "../Page/Pay/Pay";

// user ordered

import UserOrdered from "../Page/Cart/UserOrdered/UserOrdered";

// menu header bottom
import Fruit from "../Page/StylecategoryHeader/Fruit/Fruit";
import Meetegg from "../Page/StylecategoryHeader/Meategg/Meategg";
import Salad from "../Page/StylecategoryHeader/Salad/Salad";
import Milk from "../Page/StylecategoryHeader/Milk/Milk";
import Allergic from "../Page/StylecategoryHeader/Allergic/Allergic";
import Rice from "../Page/StylecategoryHeader/Rice/Rice";
import Foody from "../Page/StylecategoryHeader/Foody/Foody";
import Cake from "../Page/StylecategoryHeader/Cake/Cake";
import Mystore from "../Page/StylecategoryHeader/Mystore/Mystore";

// deal hot
import Dealhot from "~/Components/Page/Dealhot/Dealhot";

// Product detail page dealhot
import ProductDetail from "~/Components/Page/ProductDetail/ProductDetail";
import NotPage from "~/Components/Page/NotPage/NotPage";

// product detail page sugguestToday
import MytodayDetail from "~/Components/Page/Detail/MyToDay/MyToDayDetail";

export const publicRouters = [
	{ path: "/", component: Home },
	// stylecategory Header
	{ path: "/traicay", component: Fruit },
	{ path: "/thittrung", component: Meetegg },
	{ path: "/raucuqua", component: Salad },
	{ path: "/suabophomai", component: Milk },
	{ path: "/haisan", component: Allergic },
	{ path: "/gaomianlien", component: Rice },
	{ path: "/douongbiaruou", component: Foody },
	{ path: "/banhkeo", component: Cake },
	{ path: "/banhang", component: Mystore },

	// product
	// dealhot page detail
	{ path: "/productdetail/:id", component: ProductDetail },
	{ path: "*", component: NotPage },

	// suggest Todays detail page
	{ path: "/mytodaydetail/:id", component: MytodayDetail },

	// stylecategory Slider

	{ path: "/deal-hot", component: Dealhot },

	// contact
	{ path: "/lienhe", component: Contact, layout: HeaderOnly },

	// user
	{ path: "/giohang", component: Cart, layout: HeaderOnly },
	{ path: "/users/login", component: Login, layout: null },
	{ path: "/users/register", component: Register, layout: null },
	{ path: "/pay", component: Pay, layout: HeaderOnly },

	// user ordered UserOrdered
	{ path: "/ordered", component: UserOrdered, layout: HeaderOnly },
];

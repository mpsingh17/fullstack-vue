import Vue from "vue";
import VueRouter from "vue-router";
import CartList from "../components/cart/CartList";
import ProductList from "../components/product/ProductList";
import NotFound from "../components/NotFound";

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/products",
			component: ProductList
		},
		{
			path: "/cart",
			component: CartList
		},
		{
			path: "/",
			redirect: "/products"
		},
		{
			path: "*",
			component: NotFound
		}
	]
});

export const mainDealCoin = [
	{
		path: "/tradecoin",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/481px-Cat03.jpg",
	},
	{
		path: "/videotradecoin",
		video: "https://sand.tikicdn.com/ts/asavideo/19/0c/48/fdce6602418b5bd48113e4e7a7f10335.mp4",
	},
];

export const mainDeal = [
	{
		id: "m1",
		title: "Sửa rửa mặt",
		image: "https://salt.tikicdn.com/cache/280x280/ts/product/1c/19/58/0cbdc1921cfc99336453910dfe6507e2.png",
		price: 285,
		priceOld: 315,
		start: 5,
		description:
			"Sản phẩm dầu gội  chăm sóc tóc cao cấp giúp ngăn rụng tóc và phục hồi hư tổn từ gốc đến ngọn nhờ công nghệ thẩm thấu độc quyền của Shiseido, dưỡng chất hấp thu nhanh và sâu vào trong tóc qua cơ chế.",
		percent: "-53%",
		dealhot:
			"https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg",
		titleSell: "hàng vẫn còn",
		sell: 50,

		slug: "sua-rua-mat",
	},
	{
		id: "m2",
		title: "Bánh trung thu",
		image: "https://salt.tikicdn.com/cache/200x200/ts/product/63/08/5c/059d0de9076edddfe89fc3d7c103ec30.jpg.webp",
		price: 238,
		priceOld: 350,
		percent: "-15%",
		start: 5,
		dealhot:
			"https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg",
		titleSell: "hàng vẫn còn",
		sell: 30,
		slug: "banh-trung-thu",
	},
	{
		id: "m3",
		title: "Bánh trung thu",
		image: "https://salt.tikicdn.com/cache/200x200/ts/product/63/08/5c/059d0de9076edddfe89fc3d7c103ec30.jpg.webp",
		price: 238,
		priceOld: 350,
		percent: "-15%",
		start: 5,
		dealhot:
			"https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg",
		titleSell: "hàng vẫn còn",
		sell: 30,
		slug: "banh-trung-thu",
	},
	{
		id: "m4",
		title: "Bánh trung thu",
		image: "https://salt.tikicdn.com/cache/200x200/ts/product/63/08/5c/059d0de9076edddfe89fc3d7c103ec30.jpg.webp",
		price: 238,
		priceOld: 350,
		percent: "-15%",
		start: 5,
		dealhot:
			"https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg",
		titleSell: "hàng vẫn còn",
		sell: 30,
		slug: "banh-trung-thu",
	},
	{
		id: "m5",
		title: "Bánh trung thu",
		image: "https://salt.tikicdn.com/cache/200x200/ts/product/63/08/5c/059d0de9076edddfe89fc3d7c103ec30.jpg.webp",
		price: 238,
		priceOld: 350,
		percent: "-15%",
		start: 5,
		dealhot:
			"https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg",
		titleSell: "hàng vẫn còn",
		sell: 30,
		slug: "banh-trung-thu",
	},
	{
		id: "m6",
		title: "Bánh trung thu",
		image: "https://salt.tikicdn.com/cache/200x200/ts/product/63/08/5c/059d0de9076edddfe89fc3d7c103ec30.jpg.webp",
		price: 238,
		priceOld: 350,
		percent: "-15%",
		start: 5,
		dealhot:
			"https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg",
		titleSell: "hàng vẫn còn",
		sell: 30,
		slug: "banh-trung-thu",
	},
	{
		id: "m7",
		title: "Bánh trung thu",
		image: "https://salt.tikicdn.com/cache/200x200/ts/product/63/08/5c/059d0de9076edddfe89fc3d7c103ec30.jpg.webp",
		price: 238,
		priceOld: 350,
		percent: "-15%",
		start: 5,
		dealhot:
			"https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg",
		titleSell: "hàng vẫn còn",
		sell: 30,
		slug: "banh-trung-thu",
	},
	{
		id: "m8",
		title: "Bánh trung thu",
		image: "https://salt.tikicdn.com/cache/200x200/ts/product/63/08/5c/059d0de9076edddfe89fc3d7c103ec30.jpg.webp",
		price: 238,
		priceOld: 350,
		percent: "-15%",
		start: 5,
		dealhot:
			"https://frontend.tikicdn.com/_desktop-next/static/img/fire_icon.svg",
		titleSell: "hàng vẫn còn",
		sell: 30,
		slug: "banh-trung-thu",
	},
];

const getProductByslug = (slug) => mainDeal.find((e) => e.slug === slug);

const productData = {
	getProductByslug,
};

export default productData;

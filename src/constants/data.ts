
export const categories: CategoryType[] = [
    {
        id: 1,
        name: "Canned Goods",
    },
    {
        id: 2,
        name: "Grains and pasta",
    },
    {
        id: 3,
        name: "Frozen Food",
    },
    {
        id: 4,
        name: "Baby Product",
    },
    {
        id: 5,
        name: "canned Goods",
    },
];

export const products: ProductType[] = [
    {
        id: 1,
        price: 200.99,
        name: "Tomato Soup",
        category: [categories[0]],
        image: require("../../assets/images/product/1.jpg"),
    },
    {
        id: 2,
        price: 100.49,
        name: "Spaghetti",
        category: [categories[1]],
        image: require("../../assets/images/product/2.jpg"),
    },
    {
        id: 3,
        price: 500.99,
        name: "Frozen Pizza",
        category: [categories[2]],
        image: require("../../assets/images/product/3.jpg"),
    },
    {
        id: 4,
        price: 300.99,
        name: "Baby Wipes",
        category: [categories[3]],
        image: require("../../assets/images/product/4.jpg"),
    },
    {
        id: 5,
        price: 400.99,
        name: "Corned Beef",
        category: [categories[0], categories[4]],
        image: require("../../assets/images/product/5.jpg"),
    },
    {
        id: 6,
        price: 100.99,
        name: "Rice",
        category: [categories[1]],
        image: require("../../assets/images/product/6.jpg"),
    },
    {
        id: 7,
        price: 200.49,
        name: "Frozen Vegetables",
        category: [categories[2]],
        image: require("../../assets/images/product/7.jpg"),
    },
    {
        id: 8,
        price: 900.99,
        name: "Baby Formula",
        category: [categories[3]],
        image: require("../../assets/images/product/4.jpg"),
    },
    {
        id: 9,
        price: 100.99,
        name: "Baked Beans",
        category: [categories[0]],
        image: require("../../assets/images/product/7.jpg"),
    },
    {
        id: 10,
        price: 200.49,
        name: "Pasta",
        category: [categories[1]],
        image: require("../../assets/images/product/10.jpg"),
    },
];

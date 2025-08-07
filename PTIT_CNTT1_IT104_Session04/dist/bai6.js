const listProducts = [
    {
        id: "001",
        name: "ao so mi",
        price: 200,
        category: {
            id: "100",
            name: "thoi trang",
        },
    },
    {
        id: "002",
        name: "giap ho menh",
        price: 500,
        category: {
            id: "200",
            name: "do phong thu",
        },
        discount: 0.1
    },
    {
        id: "003",
        name: "liem doat menh",
        price: 400,
        category: {
            id: "300",
            name: "do tan cong",
        },
    }
];
const getFinalPrice = (product) => {
    if (product.discount) {
        return product.price - product.discount * product.price;
    }
    else {
        return product.price;
    }
};
const printProductInfo = (product) => {
    product.forEach((item) => {
        console.log(`Ten : ${item.name}`);
        console.log(`Gia goc: ${item.price} VND`);
        console.log(`Gia sau giam: ${getFinalPrice(item)} VND`);
        console.log(`Danh muc: ${item.category.name}`);
        console.log(`==================================`);
    });
};
printProductInfo(listProducts);
export {};
//# sourceMappingURL=bai6.js.map
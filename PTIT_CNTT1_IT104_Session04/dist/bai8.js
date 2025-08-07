const order1 = {
    orderId: "ORD001",
    customerName: "Dinh Dinh Thanh",
    items: [
        {
            product: {
                id: "348957",
                name: "Ao so mi",
                price: 500
            },
            quantity: 2,
        },
        {
            product: {
                id: "827312",
                name: "Quan jean",
                price: 400
            },
            quantity: 1,
        },
    ],
    note: "Giao sau 18h"
};
const calculateOrder = (order) => {
    let total = 0;
    const { items } = order;
    items.forEach(element => {
        total += element.quantity * element.product.price;
    });
    return total;
};
const printInvoice = (order) => {
    console.log(`Don hang : ${order.orderId} - ${order.customerName}`);
    console.log(`San pham:`);
    order.items.forEach(i => {
        const orderTotal = i.quantity * i.product.price;
        console.log(`- ${i.product.name} x${i.quantity} -> ${orderTotal}`);
    });
    console.log(`Tong cong: ${calculateOrder(order)}`);
    if (order.note) {
        console.log(`Ghi chu: ${order.note}`);
    }
};
printInvoice(order1);
export {};
//# sourceMappingURL=bai8.js.map
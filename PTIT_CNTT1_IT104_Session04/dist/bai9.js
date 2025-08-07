const currentInvoice = {
    invoiceId: "#INV001",
    orders: [],
    createdAt: new Date(),
};
currentInvoice.orders.push({
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
    deliveryAddress: "300 kim ma",
    isPaid: true,
});
currentInvoice.orders.push({
    orderId: "ORD002",
    customerName: "Tran Dang Viet",
    items: [{
            product: {
                id: "1273xs31",
                name: "Ao khoac ",
                price: 800
            },
            quantity: 2,
            note: "size M"
        },
        {
            product: {
                id: "ha18e4x0",
                name: "Ao giap kim cuong",
                price: 300
            },
            quantity: 4,
        },],
    deliveryAddress: "100, the bronx",
    isPaid: false,
});
const calculateInvoiceTotal = (invoice) => {
    let total = 0;
    const { orders } = currentInvoice;
    for (const order of orders) {
        for (const item of order.items) {
            total += item.quantity * item.product.price;
        }
    }
    return total;
};
const getUnpaidOrders = (invoice) => {
    let orders = [];
    invoice.orders.forEach(order => {
        if (!order.isPaid) {
            orders.push(order);
        }
    });
    console.log("Danh sach don hang chua thanh toan: ");
    return orders;
};
const printInvoice = (invoice) => {
    const createdAtStr = invoice.createdAt.toISOString().split("T")[0];
    console.log(`Hoa don: ${invoice.invoiceId} - Ngay tao: ${createdAtStr}`);
    console.log(("--------------------------------------------"));
    invoice.orders.forEach(order => {
        console.log(`Don hang : ${order.orderId} - ${order.customerName}`);
        let orderTotals = 0;
        order.items.forEach(item => {
            orderTotals += item.quantity * item.product.price;
            if (item.note) {
                console.log(`-${item.product.name} x${item.quantity} -> ${item.product.price}VND (${item.quantity}) -> ${item.note})`);
            }
            else {
                console.log(`-${item.product.name} x${item.quantity} -> ${item.product.price}VND`);
            }
        });
        console.log(`Trang thai: ${order.isPaid ? "Da thanh toan" : "chua thanh toan"}`);
        console.log(`Tong don : ${orderTotals} VND`);
    });
    console.log(("--------------------------------------------"));
    console.log("Tong hoa don: " + calculateInvoiceTotal(invoice) + " VND");
};
calculateInvoiceTotal(currentInvoice);
printInvoice(currentInvoice);
console.log(getUnpaidOrders(currentInvoice));
export {};
//# sourceMappingURL=bai9.js.map
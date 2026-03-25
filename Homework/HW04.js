
function summarizeOrders(orders) {
    // เงื่อนไขพิเศษ: ไม่มีข้อมูล
    if (!Array.isArray(orders) || orders.length === 0) {
        return [];
    }

    const result = {};

    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const counted = {};

        for (let j = 0; j < order.items.length; j++) {
            const item = order.items[j];
            const id = item.productId;

            if (!result[id]) {
                result[id] = {
                    productId: item.productId,
                    productName: item.productName,
                    totalQuantity: 0,
                    totalSales: 0,
                    orderCount: 0
                };
            }

            result[id].totalQuantity += item.quantity;
            result[id].totalSales += item.quantity * item.price;

            // นับ orderCount แค่ครั้งเดียวต่อออร์เดอร์
            if (!counted[id]) {
                result[id].orderCount += 1;
                counted[id] = true;
            }
        }
    }

    // แปลง Object เป็น Array
    const output = Object.values(result);

    // จัดเรียงตามเงื่อนไข
    output.sort(function (a, b) {
        if (b.totalSales !== a.totalSales) {
            return b.totalSales - a.totalSales;
        }
        return a.productName.localeCompare(b.productName);
    });

    return output;
}

// ========================================
//             Testing the Function
// ========================================

const sampleOrders = [
    {
        orderId: 1,
        orderDate: "2025-01-10",
        items: [
            { productId: "P001", productName: "Pen", quantity: 10, price: 5 },
            { productId: "P002", productName: "Book", quantity: 2, price: 50 }
        ]
    },
    {
        orderId: 2,
        orderDate: "2025-01-11",
        items: [
            { productId: "P001", productName: "Pen", quantity: 5, price: 5 },
            { productId: "P003", productName: "Pencil", quantity: 10, price: 2 }
        ]
    },
    {
        orderId: 3,
        orderDate: "2025-01-12",
        items: [
            { productId: "P002", productName: "Book", quantity: 5, price: 45 },
            { productId: "P004", productName: "Eraser", quantity: 1, price: 3 }
        ]
    },
    {
        orderId: 4,
        orderDate: "2025-01-12",
        items: [
            { productId: "P003", productName: "Pencil", quantity: 5, price: 2 },
            { productId: "P001", productName: "Pen", quantity: 3, price: 5 }
        ]
    }
];

const summaryResult = summarizeOrders(sampleOrders);
console.log(summaryResult);

/*
ตัวอย่างผลลัพธ์ (อาจต่างไปตามราคาที่กำหนดใน 'sampleOrders'):
 

[
    {
        productId: 'P002',
        productName: 'Book',
        totalQuantity: 7,
        totalSales: 325,
        orderCount: 2
    },
    {
        productId: 'P001',
        productName: 'Pen',
        totalQuantity: 18,
        totalSales: 90,
        orderCount: 3
    },
    {
        productId: 'P003',
        productName: 'Pencil',
        totalQuantity: 15,
        totalSales: 30,
        orderCount: 2
    },
    {
        productId: 'P004',
        productName: 'Eraser',
        totalQuantity: 1,
        totalSales: 3,
        orderCount: 1
    }
]

(เรียงตาม totalSales มาก -> น้อย,
    ถ้าเท่ากันแล้วจึงเรียงตาม productName)
*/

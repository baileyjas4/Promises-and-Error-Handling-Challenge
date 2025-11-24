import { NetworkError, DataError } from "./error.ts";

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
            { id: 3, name: "charger", price: 150}
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};

// Fetch reviews for a given product
export const fetchProductReviews = (
    productId: number
): Promise<{ reviewer: string; rating: number; comment: string }[]> => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (Math.random() < 0.75) {
                resolve([
                    { reviewer: "Alice", rating: 5, comment: "Excellent!" },
                    { reviewer: "Bob", rating: 4, comment: "Pretty good." }
                ]);
            } else {
                reject(new NetworkError(`Failed to fetch reviews for product ID ${productId}`));
            }

        }, 1500);
    });
};

// Fetch sales report
export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; avgPrice: number }> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (Math.random() < 0.85) {
                resolve({
                    totalSales: 450000,
                    unitsSold: 350,
                    avgPrice: 1285
                });
            } else {
                reject(new DataError("Failed to fetch sales report"));
            }

        }, 1000);
    });
};
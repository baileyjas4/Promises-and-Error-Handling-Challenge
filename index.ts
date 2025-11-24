// fetchProductCatalog()
// fetchProductReviews(productId)
// fetchSalesReport()

import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.ts";
import { NetworkError, DataError } from "./error.ts";

console.log("Welcome\n");

// Helper to print error types
function handleError(err: unknown) {
    if (err instanceof NetworkError) {
        console.error("Network issue:", err.message);
    } else if (err instanceof DataError) {
        console.error("Data problem:", err.message);
    } else {
        console.error("Unknown error:", err);
    }
}

// MAIN LOGIC USING PROMISE CHAINING
fetchProductCatalog()
    .then((products) => {
        console.log("Product Catalog:", products);

        // Fetch reviews for each product sequentially
        return products.reduce((chain, product) => {
            return chain.then(() =>
                fetchProductReviews(product.id).then((reviews) => {
                    console.log(`\nReviews for "${product.name}":`, reviews);
                })
            );
        }, Promise.resolve());
    })
    .then(() => {
        console.log("\nFetching sales report...");
        return fetchSalesReport();
    })
    .then((report) => {
        console.log("\nSales Report:", report);
    })
    .catch((err) => {
        handleError(err);
    })
    .finally(() => {
        console.log("\nAll API calls attempted.");
    });
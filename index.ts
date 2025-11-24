// fetchProductCatalog()
// fetchProductReviews(productId)
// fetchSalesReport()

import { fecthProductCatalog, fetchProductReviews, fetchSalesReport } from "./apiSimulator.ts";

fecthProductCatalog()
    .then((products) => {
        console.log("Success: Product Catalog Fetched");
        console.table(products) // -  print array as table 
         const reviewPromises = products.map((product) => 
    fetchProductReviews(product.id));

    return Promise.all(reviewPromises);
    })
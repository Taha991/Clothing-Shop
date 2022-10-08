import ProductContainer from "./ProductContainer";
import { PRODUCTS } from "../../data/products";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

export const ResultsContainer = ({ currPage, resultsPerPage }) => {
    const startIndex = (currPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;

    const router = useRouter()
    const { categories, colors, gender, price , searchText } = router.query;
    const [products, setProducts] = useState(PRODUCTS);
    const genderCodes = {
        "Female": "F",
        "Male": "M"
    }

    useEffect(() => {
        if (categories || colors || gender || price || searchText) {
            let updatedProducts = filterProducts(categories, colors, gender, price , searchText);
            setProducts(updatedProducts);
        }
    }, [categories, colors, gender, price , searchText])

    const filterProducts = (categories, colors, gender, price , searchText) => {
        let newProductsList = PRODUCTS;

        if (categories != undefined && JSON.parse(categories).length > 0) {
            newProductsList = newProductsList.filter(product => JSON.parse(categories).includes(product.category))
        }

        if (colors != undefined && JSON.parse(colors).length > 0) {
            newProductsList = newProductsList.filter(product => JSON.parse(colors).map((color) => color.toLowerCase()).includes(product.color))
        }

        if (gender != undefined && JSON.parse(gender).length > 0) {
            let genderByCode = genderCodes[JSON.parse(gender)];
            newProductsList = newProductsList.filter(product => product.gender == genderByCode)
        }

        if (price != undefined && JSON.parse(price).length > 0) {
            let minPrice = JSON.parse(price)[0];
            let maxPrice = JSON.parse(price)[1];
            newProductsList = newProductsList.filter(product => parseInt(product.price) < maxPrice && parseInt(product.price) > minPrice)
        }

        if (searchText != undefined && JSON.parse(searchText)){
          newProductsList =  newProductsList.filter(product => product.title.includes(JSON.parse(searchText)))
        }

        return newProductsList;
    }

    return (
        <div className="flex">
            <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-4 lg:grid lg:grid-cols-3">
                {
                    products.slice(startIndex, endIndex).map((product, index) => {
                        return (
                            <ProductContainer key={index} name={product.title} imageUrl={product.imgUrl} />
                        )
                    })
                }
            </div>
        </div>
    )
}
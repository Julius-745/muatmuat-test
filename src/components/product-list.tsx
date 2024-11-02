import { Product } from "@/constanst"
import { Card } from "./card"

export const productList = () => {
    return (
        Product.map((item, idx) => {
            <Card name={item.name} price={item.price} stock={item.stock} key={idx}/>
        })
    )
}
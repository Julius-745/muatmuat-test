import { IProduct, Product } from "@/constanst"
import { useState, useEffect } from "react"

export const useSearchData = () => {
    const [search, setSearch] = useState<string>("")
    const [data, setData] = useState<IProduct>()
    const [isLoading, setIsLoading] = useState<boolean>()

    useEffect(() => {
        try {
            setIsLoading(true)
            const findData = async () => {
                const finded = Product.find((item) => item.name.toLowerCase() === (search))
                setData(finded)
            }
            findData()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }

    },[search])

    return {
        setSearch,
        isLoading,
        data
    }
}
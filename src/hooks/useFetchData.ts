import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = () => {
    const endpoint = process.env.NEXT_PUBLIC_API;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any>()
    const [isLoading, setIsLoading] = useState<boolean>()

    const fetch = () => {
        try {
            setIsLoading(true)
            axios.get(endpoint+"/pokemon").then((response) => setData(response))
        } catch (error) {
            console.log("error", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetch()
    }, [])

    return {data, isLoading}
}
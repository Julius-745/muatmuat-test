import { IProduct } from "@/constanst"

export const Card = ({ name, price, stock, id} : IProduct ) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={`https://picsum.photos/300/200?random=${id ? id+1 : 1}`} alt="Dummy Product"/>
            <div className="px-6 py-4 bg-gray-500">
                <div className="font-bold text-xl mb-2 uppercase">{name}</div>
                <div className="text-xl mb-2"> Price: {price}</div>
                <div className="text-xl mb-2"> Qty: {stock}</div>
            </div>
        </div>
    )
}
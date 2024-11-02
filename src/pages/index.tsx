import { Layout  } from "@/components/"
import { Card, Search, Modal } from "@/components/ui";
import { Product } from "@/constanst";
import { useSearchData } from "@/hooks";

export default function Home() {
  const {data, isLoading, setSearch} = useSearchData();

  return (
    <Layout>
      <div className="flex flex-row justify-between">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
          List Product
        </h1>
        <div className="flex flex-row">
          <div className="justify-items-center">
            <Modal/>
          </div>
          <Search setSearch={setSearch}/>
        </div>
      </div>
      <div className="md:grid grid-cols-1 content-center lg:grid-cols-4 gap-5">
        {!isLoading ?
          data !== undefined ? 
          <Card name={data.name} price={data.price} stock={data.stock}/>
          : Product.map((item, idx) => (
          <Card name={item.name} price={item.price} stock={item.stock} id={idx} key={idx}/>
        ))
        : <p>Loading</p>
        }
      </div>
    </Layout>
  );
}

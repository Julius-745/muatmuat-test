import { Layout, Card  } from "@/components"
import { Product } from "@/constanst";

export default function Home() {
  return (
    <Layout>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        List Product
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 content-center">
        {Product.map((item, idx) => (
          <Card name={item.name} price={item.price} stock={item.stock} id={idx} key={idx}/>
        ))}
      </div>
    </Layout>
  );
}

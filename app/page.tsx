import LineGraph from "@/components/LineGraph";
import MatrixTable from "@/components/MatrixTable";
import GraphButtons from "@/components/GraphButtons";
import Product from "@/components/Product";
import ProductOptions from "@/components/ProductOptions";

export default function Home() {
  return (
    <>
      <section className="bg-gray-200 p-4 flex items-center justify-between gap-4">
        <Product />
        <ProductOptions />
      </section>
      <div className="bg-white p-4">
        <GraphButtons />
        <LineGraph />
        <MatrixTable />
      </div>
    </>
  );
}

import ProductCard from "../Product-Card/Product-Card"

function Catalog() {
  return (
    <div className="px-5 flex flex-row gap-5 pt-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}

export default Catalog
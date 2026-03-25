import { useState } from "react";


function FilterableProductTable({ products }){
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);


    return(
      <div>
        <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}
        />
         <ProductTable 
         products={products}
         filterText={filterText}
         inStockOnly={inStockOnly}
         />

      </div>
    )

}

function ProductCategoryRow({ category }){
  return(
    <tr>
      <th colSpan="2">
       {category}
      </th>
    </tr>
  )
}

function ProductRow({ product }){
  const name = product.stocked ? product.name :
  <span style ={{ color: 'red' }}>
    {product.name}
  </span>

return(
  <tr>
    <td>{name}</td>
    <td>{product.price}</td>
  </tr>
);


}




function ProductTable({ products, filterText, inStockOnly}) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
  if (
    product.name.toLowerCase().indexOf(
      filterText.toLowerCase()
    ) === -1
  ) {
    return;
  }
  if (inStockOnly && !product.stocked) {
    return;
  }
  if (product.category !== lastCategory){
    rows.push(
      <ProductRow
      product = {product}
      key = {product.name} />
    );
    lastCategory = product.category;
  }
  } )

return (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
)
}

function SearchBar({ filterText, inStockOnly }){
return (
  <form>
    <input type="text" value={filterText}  placeholder="Search..."/>
    <label>
    <input
    type="checkbox" checked={inStockOnly} />
    {' '}
    Only show products in stock
    </label>

  </form>
)
}

const PRODUCT = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "DragonFruit"},
  {category: "Fruits", price: "$1", stocked: false, name: "PassionFruit"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$1", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},


];





export default function App() {
  return <FilterableProductTable products={PRODUCT}/>
}

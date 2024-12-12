import { useState } from "react";
import Nav from "./Navigation/Nav";
import Product from "./product/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { AiFillStar } from 'react-icons/ai';
import products from "./db/data";
import Card from "./Components/Card";

function App() {
  const[selectedQuery,setSelectedQuery]=useState(null)
  const[query,setQuery]=useState("")
  /// input filter
  const handleInputChange=event=>
  {
    setQuery(event.target.value)
  }
  const filteredItems=products.filter((product)=>product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  ///radio filter
  const handleChange=(event)=>
  {
    setSelectedQuery(event.target.value);
  }
  ///button filter
  const handleClick=(event)=>
  {
    setSelectedQuery(event.target.value);
  }
 
  function filteredData(query,selected,products)
  {
    let filterProducts = products
    if(query)
    {
      filterProducts=filteredItems;
    }
    if(selected)
    {
      filterProducts=filterProducts.filter(
        ({
        category,color,company,newPrice,title
      })=>category===selected||
        color===selected||
        company===selected||
        newPrice===selected||
        title===selected
    );
    }
    return filterProducts.map(({img,star,title,prevPrice,newPrice,reviews}) =>
      <Card
      key={Math.random()}
      img ={img}
      title ={title}
      star ={star}
      reviews ={reviews}
      newPrice= {newPrice}
      prevPrice  = {prevPrice}
      />
    )
  }

  const result = filteredData(query,selectedQuery,products)

  return (
    <>
    <Sidebar
    handleChange = {handleChange}
    />
    <Nav 
    query={query}
    setQuery={setQuery}
    />
    <Recommended
    handleClick = {handleClick}
    /> 
    <Product 
    result={result}
    />
    </>
  )
}

export default App;

// import './App.css';
import { useState } from 'react';
import Nav from './Navigation/Nav'
import Product from './Products/Product'
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';

//database
import Productdata from './db/data'
import Card from './Components/Card';

function App() {

const [selectedCategory, setSelectedCategory] = useState(null)
const [query,setQuery] = useState("")

//input filter

const handleInputChange = (event) => {
  //console.log(event.target.value, 'event');
  setQuery(event.target.value)
}

const filteredItems = Productdata.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1
);


//Radio fliter
const handleChange = event => {
  setSelectedCategory(event.target.value)
}

//Button filter
const handleClick = (event) => {
  setSelectedCategory(event.target.value)
}

function filteredData(Productdata,selected,query){
  let filteredProducts = Productdata

  //Filtering input items
  if(query){
    filteredProducts = filteredItems
  }

  //selected filter
  if(selected){
    filteredProducts = filteredProducts.filter(({ category,color,company,newprice,title}) => 
    category === selected ||
    color === selected ||
    company === selected ||
    newprice === selected ||
    title=== selected
    );
  }

return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice}) => {
  return (
  <Card key={Math.random()}
  img={img}
  title={title}
  star={star}
  reviews={reviews}
  newPrice={newPrice}
  prevPrice={prevPrice}
  />
  );
}
);
}

const result = filteredData(Productdata, selectedCategory, query);

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Nav value={query} onChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </div>
  );
}

export default App;

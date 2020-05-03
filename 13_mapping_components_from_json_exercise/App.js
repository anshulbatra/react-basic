/* 
Given a list of products (as an array of objects, as seen in productsData.js)
render a <Product /> component (which you'll also need to create) for each
product in the list.

Make sure to use the array's `.map()` method to create these components, and 
don't forget to pass a `key` prop to it to avoid the warning.
*/

import React from "react"
import productsData from "./vschoolProducts"
import Product from "./Product.js"

const productList = productsData.map(item => <Product key={item.id} nam={item.name} pr={item.price} des={item.description}/>)

function App() {
  return (
    <div>
        {productList}
    </div>
  )
}

export default App
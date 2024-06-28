import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


function Productlist() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    getProducts()
  }, [])
  function getProducts() {

    fetch("http://localhost:3000/product")
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error()
        }
      })
      .then(data => {
        setProduct(data)
      })
      .catch(err => {
        alert("Unable to fetch product")
      })
  }



  return (
    <div>
      <button type="button" class="btn btn-primary">Add Product</button>
      <div>

      </div>
      <table className="table">
        <thead>
          <th>Id</th>
          <th>title</th>
          <th>Price</th>
        </thead>
        <tbody>
          {
            products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.comment}</td>
                  <td style={{width:'10px',whiteSpace:'nowrap'}}>
                  <button class="btn btn-sm btn-primary " type="delete" style={{marginRight:10}}>Edit</button>
                  <button class="btn btn-sm btn-primary " type="delete">Delete</button>
                  </td>
                  <td></td>
                </tr>

              )
            })
          }
        </tbody>
      </table>
    </div>

  )
}

export default Productlist

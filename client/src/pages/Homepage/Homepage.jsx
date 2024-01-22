import React, { useEffect, useState } from 'react'
import "./Homepage.scss"
import Layout from '../../components/Layouts/Layout'
import axios from 'axios'
import { Checkbox, Radio } from "antd";
import { Prices } from '../../components/Prices';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error)
    }
  }

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      //below line remove the checked filter which retern false
      all = all.filter(c => c !== id);
      //above code compare all the id in "all" array if any element is same it will remove from array
    }
    setChecked(all);
  }

  useEffect(() => {
    if (!checked.length || radio.length) getAllProducts();
  }, [checked.length, radio.length])

  const filterProducts = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filters`, { checked, radio });
      setProducts(data?.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (checked.length || radio.length) filterProducts();
  }, [checked, radio])
  return (
    <Layout>
      <div className='app__home'>
        <div className='app__home-filter'>
          <h3>Filter by Category</h3>
          <div className='app__home-filter-check'>
            {categories.map((c) => (
              <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>{c.name}</Checkbox>
            ))}
          </div>
          <h3>Filter by Price</h3>
          <div className='app__home-filter-check'>
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices.map(p => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
        </div>
        <div>
          {JSON.stringify(radio, null, 4)}
          <h1>All Products</h1>
          <div className='app__home-products-box'>
            {products?.map((p) => (
              <div style={{ width: "15.5rem" }}>
                <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} alt={p.name} style={{ width: "14rem" }} />
                <div>
                  <h5>{p.name}</h5>
                  <p>{p.description.substring(0,15)}...</p>
                  <p>Rs. {p.price}</p>
                  <button>More Details</button>
                  <button>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Homepage
const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req,res) => {
  const newProduct = products.map((product) => {
    const { id,name,image } = product;
    return { id,name,image}
  })
  res.json(newProduct)
})

app.get('/api/products/:productId', (req,res) => {
  const { productId } = req.params;
  
  const singleProduct = products.find((product) => {
    product.id === Number(productId)
  })

  if (!singleProduct) {
    return res.status(404).send('Product does not exist')
  }
})

app.get('/api/products/:productId/reviews/:reviewId', (req,res) => {
  console.log(req.params);
  res.send('Product Review Page')
})

app.get('/api/v1/query', (req,res) => {
  console.log(req.query);
  res.send('Query served')
})

//to handle a specific query from user
app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  //no specific search query, so return a json with success(as request is served) and empty data 
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ success: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
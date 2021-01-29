import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// Fetrch all products: GET /api/products (public)
const getProducts = asyncHandler(async (req, res) => {
<<<<<<< HEAD
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}
  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
=======
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const { location, minPrice, maxPrice, color, sort } = req.query;
  const price = minPrice && maxPrice ? { minPrice, maxPrice } : false;
    
  const sortItems = {     
    'BestRating': {'type': 'rating', 'order': -1},
    'HighestPrice': {'type': 'price', 'order': -1},
    'LowestPrice': {'type': 'price', 'order': 1},
    'Newest': {'type': 'createdAt', 'order': -1}
  };
  
  const sortType = (sort) ? [[sortItems[sort].type, sortItems[sort].order]] : '';

  const keyword =
    req.query.keyword && req.query.keyword.trim() !== ""
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
      
    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
  const filterObj = {
    ...keyword,
    ...(location && { location: location }),
    ...(color && { color: color }),
    ...(price && {
      price: { 
        $gte: price.minPrice,   
        $lte: price.maxPrice 
      } 
    })
  };

  const count = await Product.countDocuments(filterObj);
  const products = await Product.find(filterObj)
    .sort(sortType)
>>>>>>> 107c7a42bc5767bbb5ead8c4bce0d2db6dd3cf26
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

// Fetrch a single product: GET /api/products/:id (public)
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// Delete product: DELETE /api/products/:id (private/Admin)
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    await product.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// Create product: POST /api/products (private/Admin)
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStok: 0,
    numReviews: 0,
    description: 'Sample description',
  })
  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

// Update product: PUT /api/products/:id (private/Admin)
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.status(201).json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// Create new review: POST /api/products/:id/reviews (private)
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)
    product.numReviews = product.reviews.length
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// Get top rated products: GET /api/products/top (public)
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(6)
  res.json(products)
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
}

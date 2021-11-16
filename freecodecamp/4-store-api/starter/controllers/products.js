const Product = require('../models/product')

//adding a negative '-' before a property name, lists all the objects in
//descending order for that property 
//for eg: /api/v1/products?sort=-name, price  (i.e., name descending, price ascending order)
const getAllProductsStatic = async (req,res) => {
    const search = 'ab'
    
    //find({$gt:30, $lt:60}) - numeric filters
    const products = await Product.find({price: {$gt : 30}})
                                  .sort( 'price' )
                                  .select( 'name price' )

    //find().limit() template - limits the no.of output resources
    //skip(n) - skip n number of results
    // const products = await Product.find({}).select( 'name price' ).limit(4).skip(2)
    
    //find().select() template
    //const products = await Product.find({}).select( 'name price' )

    //find().sort() template
    //const products = await Product.find({}).sort( '-name price' )       //multiple properties with space seperator
    
    //find() template
    // const products = await Product.find({ 
    //     name: { $regex:search, $options:'i' },
    //     featured:true                           //find a property of the product
    // })

    // throw new Error('testing sync errors')
    return res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req,res) => {
    const { featured,company,name,sort,fields,numericFilters } = req.query
    const queryObject = {}
    
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex:name, $options:'i' }
    }

    let result = Product.find(queryObject)      //do not await here as query is still incomplete(sort function is not yet appended)
    if (sort) {
        const sortList = sort.split(',').join(' ')      //for multiple parameters in sort, ',' is not valid syntax; so replaced with space ' '
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }

    if (fields) {
        const fieldsList = fields.split(',').join(' ')      //for multiple parameters in sort, ',' is not valid syntax; so replaced with space ' '
        result = result.select(fieldsList)
    }

    if(numericFilters) {
        const operatorMap = {
            '>' : '$gt',
            '>=' : '$gte',
            '=' : '$eq',
            '<' : '$lt',
            '<=' : '$lte',
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(
          regEx,
          (match) => `-${operatorMap[match]}-`
        );
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
          const [field, operator, value] = item.split('-');
          if (options.includes(field)) {
            queryObject[field] = { [operator]: Number(value) };
          }
        });
      }
    console.log(filters);
    console.log(result)

     const page = Number(req.query.page) || 1
     const limit = Number(req.query.limit) || 10
     const skip = (page - 1) * limit         //logic for viewing result pagewise

     result = result.skip(skip).limit(limit)

    const products = await result       //set await once complete query is formed
    //console.log(queryObject)
    //const products = await Product.find(queryObject)
    return res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}
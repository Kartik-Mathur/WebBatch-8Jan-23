let products = [
    {
        name: "Dal",
        category: "veg",
        price: 100
    },
    {
        name: "Rice",
        category: "veg",
        price: 100
    },
    {
        name: "Chicken",
        category: "non-veg",
        price: 100
    },
    {
        name: "Biryani",
        category: "non-veg",
        price: 120
    }
]

// QUERY
db.products.aggregate( [
    {
       $group:
          {
             _id: "$category",
             totalPrice: { $sum: "$price" }
          }
    }
 ] )
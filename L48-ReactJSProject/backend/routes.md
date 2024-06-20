MAJOR 
    - LANDING PAGE
    - ADMIN: Restaurant CRUD, MENU CRUD, ZOMATO SALES DASHBOARD
    - RESTAURANT: MENU CRUD of its own, SALES DASHBOARD, LIVE VIDEO FEED, RATINGS
    - CUSTOMER: ORDER CRUD, REVIEW CRUD, CART CRUD, PAYMENT, SPEND DASHBOARD, CHAT 

<!-- OPEN SOURCE IS MUST -->
<!-- #SABSE PEHLE: MERN KE 3 PROJECTS READY -->
<!-- 1. Typescript: Overview -->
<!-- 2. NextJS -->
<!-- 3. System Design: Yeh toh hoga hi course ke baad -->
<!-- 4. VueJS -->
<!-- 5. Angular: Overview -->

<!-- EXTRA -->
<!-- 6. SPRINBOOT:(JAVA) -->
<!-- 7. FLUTTER: PYTHON -->

ADMIN Routes
    Mount: /admin
    Routes: 
    - POST /add-food: add a particular food item
        body: image, price, name, restaurant_id, cuisineName(Italian, Chinese), description
        
        # returns 
        {
            message: "Food added successfully",
            food: [
                {
                    cuisineName: String,
                    foodList: [
                        {
                            name: String,
                            price: Number,
                            description: String,
                            image: String,
                        }
                    ]
                }
            ]
        }
        
    - POST /add-restaurant
        body: image, name, location, rating([{ userId: String, userName: String, value: Number }]), food: []
    - POST /update-food
    - POST /update-restaurant
    - GET /get-foods
    - GET /get-restaurants
    - GET /get-food/:id
    - GET /get-restaurant/:id
    - DELETE /delete-food/:id
    - DELETE /delete-restaurant/:id
    - POST /add-order


USER Routers
    Mount: /user
        - /
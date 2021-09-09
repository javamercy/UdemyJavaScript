// Storage Controller

const StorageController = (function() {



})();



// product Controller

const ProductController = (function() {


    // Private
    class Product {
        constructor(id, name, price) {

            this.id = id;
            this.name = name;
            this.price = price;
        }
    }

    const data = {

        products: [],
        selectedProduct: null,
        totalPrice: 0

    }

    // Public


    return {

        getProducts: function() {

            return data.products;
        },

        getData: function() {

            return data;
        },

        getProductById: function(id) {

            let product = null;

            product = data.products.find(product => product.id == id);

            return product;
        },
        setCurrentProduct: function(product) {

            data.selectedProduct = product;
        },

        getCurrencyProduct: function() {

            return data.selectedProduct;
        },

        addProduct: function(name, price) {

            let id;

            if (data.products.length > 0) {

                id = data.products[data.products.length - 1].id + 1;
            } else {

                id = 0;
            }

            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);

            return newProduct;
        },

        getTotal: function() {

            let total = 0;

            data.products.forEach(product => {

                total += product.price;
                data.totalPrice = total;

            });

            return data.totalPrice;
        }


    }
})();




// UI Controller

const UIController = (function() {

    const Selectors = {

        productList: "#item-list",
        addButton: "#addBtn",
        productName: "#productName",
        productPrice: "#productPrice",
        productCard: "#productCard",
        totalTl: "#total-tl",
        totalDollar: "#total-dollar"
    }

    return {

        createProductList: function(products) {

            let html = "";

            products.forEach(product => {
                html += `
                
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="text-right">             
                    <i class="far fa-edit edit-product"></i>            
                </td>
            </tr>
                
                `;
            });

            document.querySelector(Selectors.productList).innerHTML = html;

        },

        getSelectors: function() {

            return Selectors;
        },

        addProduct: function(product) {

            document.querySelector(Selectors.productCard).style.display = "block";


            let item = `
            
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price} $</td>
                <td class="text-right">
                        <i class="far fa-edit edit-product"></i>
                </td>
            </tr>
                
            `;

            document.querySelector(Selectors.productList).innerHTML += item;
        },

        clearInputs: function() {

            document.querySelector(Selectors.productName).value = "";
            document.querySelector(Selectors.productPrice).value = "";
        },

        hideCard: function() {

            document.querySelector(Selectors.productCard).style.display = "none";
        },

        showTotal: function(total) {

            document.querySelector(Selectors.totalDollar).textContent = total;
            document.querySelector(Selectors.totalTl).textContent = total * 8.44;
        },

        addProductToForm: function() {

            const selectedProduct = ProductController.getCurrencyProduct();

            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        }
    }

})();





// App Controller

const AppController = (function(ProductController, UIController, StorageController) {

    const UISelectors = UIController.getSelectors();

    // Load Event Listeners

    const loadEventListeners = function() {

        // add product event
        document.querySelector(UISelectors.addButton).addEventListener("click", productAddSubmit);

        // edit product
        document.querySelector(UISelectors.productList).addEventListener("click", productEditSubmit);

    }

    const productAddSubmit = function(e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== "" && productPrice !== "") {

            // add product
            const newProduct = ProductController.addProduct(productName, productPrice);

            // add item to list
            UIController.addProduct(newProduct);

            // get total
            const total = ProductController.getTotal();

            // show total
            UIController.showTotal(total);

            // clear inputs
            UIController.clearInputs();

        } else {

        }

        e.preventDefault();
    }

    const productEditSubmit = function(e) {

        if (e.target.classList.contains("edit-product")) {

            const id = e.target.parentElement.parentElement.firstElementChild.textContent;


            // get selected product
            const product = ProductController.getProductById(id);

            // set current product
            ProductController.setCurrentProduct(product);

            // add product to UI
            UIController.addProductToForm();
        }

        e.preventDefault();
    }

    return {
        init: function() {

            console.log("Starting App...");
            const products = ProductController.getProducts();

            if (products.length == 0) {

                UIController.hideCard();
            } else {

                UIController.createProductList(products);
            }




            // load event listeners
            loadEventListeners();
        }
    }




})(ProductController, UIController, StorageController);

AppController.init();
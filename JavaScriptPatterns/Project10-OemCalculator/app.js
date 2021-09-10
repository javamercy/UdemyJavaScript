// Storage Controller

const StorageController = (function() {

    return {

        getProducts: function() {

            let products;

            if (localStorage.getItem("products") === null) {

                products = [];
            } else {

                products = JSON.parse(localStorage.getItem("products"));
            }
            return products;
        },

        storeProduct: function(product) {

            let products = StorageController.getProducts();

            products.push(product);

            localStorage.setItem("products", JSON.stringify(products));
        },

        updateProduct: function(product) {

            let products = StorageController.getProducts();

            products.forEach((prd, index) => {

                if (prd.id == product.id) {

                    products.splice(index, 1, product);
                }
            });

            localStorage.setItem("products", JSON.stringify(products));
        },

        deleteProduct: function(product) {

            let products = StorageController.getProducts();

            products.forEach((prd, index) => {

                if (prd.id == product.id) {

                    products.splice(index, 1);
                }
            });

            localStorage.setItem("products", JSON.stringify(products));
        }


    }


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

        products: StorageController.getProducts(),
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

        updateProduct: function(name, price) {

            let product = null;

            product = data.products.find(p => p.id == data.selectedProduct.id);

            product.name = name;
            product.price = parseFloat(price);

            return product;

        },

        deleteProduct: function(product) {

            const deletedProduct = data.products.find(p => p.id == product.id);
            const indexOfDeletedProduct = data.products.indexOf(deletedProduct);
            data.products.splice(indexOfDeletedProduct, 1);
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
        productListItems: "#item-list tr",
        addButton: "#addBtn",
        updateButton: "#updateBtn",
        cancelButton: "#cancelBtn",
        deleteButton: "#deleteBtn",
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

        updateProduct: function(product) {

            let updatedItem = null;

            let items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(item => {

                if (item.classList.contains("bg-info")) {

                    item.children[1].textContent = product.name;
                    item.children[2].textContent = product.price + "$";

                    updatedItem = item;
                }
            });

            return updatedItem;
        },


        clearInputs: function() {

            document.querySelector(Selectors.productName).value = "";
            document.querySelector(Selectors.productPrice).value = "";
        },

        clearInfosTexts: function() {

            const items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(item => {

                if (item.classList.contains("bg-info", "text-white")) {

                    item.classList.remove("bg-info", "text-white");

                }


            });
        },

        hideCard: function() {

            document.querySelector(Selectors.productCard).style.display = "none";
        },

        showTotal: function(total) {

            document.querySelector(Selectors.totalDollar).textContent = total;
            document.querySelector(Selectors.totalTl).textContent = (total * 8.44).toFixed(2);
        },

        addProductToForm: function() {

            const selectedProduct = ProductController.getCurrencyProduct();

            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },

        deleteProduct: function() {

            let items = document.querySelectorAll(Selectors.productListItems);

            items.forEach(item => {

                if (item.classList.contains("bg-info", "text-white")) {

                    item.remove();

                }
            });

        },

        addingState: function(item) {

            UIController.clearInfosTexts();
            UIController.clearInputs();

            document.querySelector(Selectors.addButton).style.display = "inline";
            document.querySelector(Selectors.updateButton).style.display = "none";
            document.querySelector(Selectors.cancelButton).style.display = "none";
            document.querySelector(Selectors.deleteButton).style.display = "none";


        },

        editState: function(tr) {


            tr.classList.add("bg-info", "text-white");

            document.querySelector(Selectors.addButton).style.display = "none";
            document.querySelector(Selectors.updateButton).style.display = "inline";
            document.querySelector(Selectors.cancelButton).style.display = "inline";
            document.querySelector(Selectors.deleteButton).style.display = "inline";
        },


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
        document.querySelector(UISelectors.productList).addEventListener("click", productEditClick);

        // edit product submit
        document.querySelector(UISelectors.updateButton).addEventListener("click", editProductSubmit);

        // cancel button click
        document.querySelector(UISelectors.cancelButton).addEventListener("click", cancelUpdate);

        document.querySelector(UISelectors.deleteButton).addEventListener("click", deleteProductSubmit);
    }

    const productAddSubmit = function(e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== "" && productPrice !== "") {

            // add product
            const newProduct = ProductController.addProduct(productName, productPrice);

            // add item to list
            UIController.addProduct(newProduct);

            // add product to local storage
            StorageController.storeProduct(newProduct);

            // get total
            const total = ProductController.getTotal();

            // show total
            UIController.showTotal(total);

            // clear inputs
            UIController.clearInputs();

        }



        e.preventDefault();
    }

    const productEditClick = function(e) {

        if (e.target.classList.contains("edit-product")) {

            const id = e.target.parentElement.parentElement.firstElementChild.textContent;


            // get selected product
            const product = ProductController.getProductById(id);

            // set current product
            ProductController.setCurrentProduct(product);

            UIController.clearInfosTexts();

            // add product to UI
            UIController.addProductToForm();

            console.log(e.target.parentElement.parentElement);

            UIController.editState(e.target.parentElement.parentElement);
        }

        e.preventDefault();
    }

    const editProductSubmit = function(e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== "" && productPrice !== "") {

            // update product
            const updatedProduct = ProductController.updateProduct(productName, productPrice);

            // update ui
            let item = UIController.updateProduct(updatedProduct);

            // get total
            const total = ProductController.getTotal();

            // show total
            UIController.showTotal(total);

            // update Storage
            StorageController.updateProduct(updatedProduct);

            UIController.addingState();
        }

        e.preventDefault();
    }

    const cancelUpdate = function(e) {


        UIController.addingState();
        UIController.clearInfosTexts();
        e.preventDefault();
    }

    const deleteProductSubmit = function(e) {

        // get selected product
        const deletedProduct = ProductController.getCurrencyProduct();

        // delete product
        ProductController.deleteProduct(deletedProduct);

        //delete  ui
        UIController.deleteProduct();

        // delete from storage
        StorageController.deleteProduct(deletedProduct);

        // get total
        const total = ProductController.getTotal();
        // show total
        UIController.showTotal(total);

        UIController.addingState();

        if (document.querySelector(".table").firstElementChild.children.length < 2) {

            UIController.hideCard();
        }

        e.preventDefault();
    }

    return {
        init: function() {

            console.log("Starting App...");

            UIController.addingState();
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
var Product = /** @class */ (function () {
    function Product(ProductId, ProductName, Category, Manufacturer, Description, Price) {
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.Category = Category;
        this.Manufacturer = Manufacturer;
        this.Description = Description;
        this.Price = Price;
    }
    return Product;
}());
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.products = new Array();
    }
    ProductService.prototype.getProducts = function () {
        this.products.push(new Product(101, 'Laptop', 'ECT', 'Lenovo', 'ThinkPad ', 120000));
        this.products.push(new Product(102, 'Laptop', 'ECT', 'Dell', 'Vostro ', 120000));
        this.products.push(new Product(103, 'Laptop', 'ECT', 'MSI', 'Gaming ', 120000));
        return this.products;
    };
    ProductService.prototype.addProduct = function (prd) {
        var data = this.products.filter(function (z) { return z.ProductId === prd.ProductId; });
        console.log('check uniqueness' + data.length);
        var isValidProduct = this.IsValidProduct(prd);
        if (data.length < 1 && isValidProduct) {
            this.products.push(prd);
        }
        else
            throw new Error("invalid product");
        return this.products;
    };
    ProductService.prototype.updateProduct = function (prd) {
        var product = this.products.filter(function (z) { return z.ProductId == prd.ProductId; })[0];
        var isValidProduct = this.IsValidProduct(prd);
        if (product !== null && isValidProduct) {
            product.ProductName = prd.ProductName;
            product.Category = prd.Category;
            product.Description = prd.Description;
            product.Price = prd.Price;
            product.Manufacturer = prd.Manufacturer;
        }
        else
            throw new Error("invalid product");
        return this.products;
    };
    ProductService.prototype.deleteProduct = function (prd) {
        var _this = this;
        this.products.forEach(function (item, index) {
            if (item.ProductId == prd.ProductId) {
                _this.products.splice(index, 1);
            }
        });
        return this.products;
    };
    ProductService.prototype.IsValidProduct = function (prd) {
        if (prd.Description.length > 100) {
            return false;
        }
        if (prd.Price < 0) {
            return false;
        }
        return true;
    };
    return ProductService;
}());
var service = new ProductService();
service.getProducts();
console.log("after adding product");
service.addProduct(new Product(105, 'Laptop', 'ECT', 'Acer', 'Acer I7', 13000)).forEach(function (p, i) {
    console.log(JSON.stringify(p));
});
console.log("After delete operation");
service.deleteProduct(new Product(105, 'Laptop', 'ECT', 'Acer', 'Acer I7', 13000)).forEach(function (p, i) {
    console.log(JSON.stringify(p));
});
//shall throw exception for adding invalid product with negative price
service.addProduct(new Product(105, 'Laptop', 'ECT', 'Acer', 'Acer I7', -190)).forEach(function (p, i) {
    console.log("after adding product");
    console.log(JSON.stringify(p));
});

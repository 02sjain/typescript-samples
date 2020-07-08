class Product {
    constructor(
        public ProductId: number,
        public ProductName: string,
        public Category: string,
        public Manufacturer: string,
        public Description: string,
        public Price: number
    ) { }
}

class ProductService {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>();
    }

    getProducts(): Array<Product> {
        this.products.push(new Product(101, 'Laptop', 'ECT', 'Lenovo', 'ThinkPad ', 120000));
        this.products.push(new Product(102, 'Laptop', 'ECT', 'Dell', 'Vostro ', 120000));
        this.products.push(new Product(103, 'Laptop', 'ECT', 'MSI', 'Gaming ', 120000));
        return this.products;
    }

    addProduct(prd: Product): Array<Product> {        
        let data = this.products.filter(z => z.ProductId === prd.ProductId);
        console.log('check uniqueness' + data.length);
        let isValidProduct: boolean = this.IsValidProduct(prd);
        if (data.length < 1 && isValidProduct) {
            this.products.push(prd);
        }
        else
            throw new Error("invalid product");
        return this.products;
    }

    updateProduct(prd: Product): Array<Product> {
        let product: Product = this.products.filter(z => z.ProductId == prd.ProductId)[0];
        let isValidProduct: boolean = this.IsValidProduct(prd);
        if (product !== null && isValidProduct) {
            product.ProductName = prd.ProductName;
            product.Category = prd.Category;
            product.Description = prd.Description;
            product.Price = prd.Price;
            product.Manufacturer = prd.Manufacturer;            
        } else
        throw new Error("invalid product");
        return this.products;
    }

    deleteProduct(prd: Product): Array<Product> {
          this.products.forEach((item, index) => {
              if(item.ProductId == prd.ProductId){
                  this.products.splice(index, 1);
              }
          });          
          return this.products;
    }

    IsValidProduct(prd: Product): boolean {
        if (prd.Description.length > 100) {
            return false;
        }
        if (prd.Price < 0) {
            return false;
        }
        return true;
    }
}

let service = new ProductService();
service.getProducts();
console.log("after adding product");
service.addProduct(new Product(105, 'Laptop', 'ECT', 'Acer', 'Acer I7', 13000)).forEach((p, i) => {
    console.log(JSON.stringify(p));
}); 

console.log( "After delete operation");
service.deleteProduct(new Product(105, 'Laptop', 'ECT', 'Acer', 'Acer I7', 13000)).forEach((p, i) => {
    console.log(JSON.stringify(p));
}); 


//shall throw exception for adding invalid product with negative price

service.addProduct(new Product(105, 'Laptop', 'ECT', 'Acer', 'Acer I7', -190)).forEach((p, i) => {
    console.log("after adding product");
    console.log(JSON.stringify(p));
}); 


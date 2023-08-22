import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/productservice';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  value:number = 12
  // products: any[]=[
  //   {
  //     code:'5454',
  //     name :'test',
  //     category:'12',
  //     quantity:'122',
  //   },
  //   {
  //     code:'5454',
  //     name :'test',
  //     category:'12',
  //     quantity:'122',
  //   }
  // ]
   list!:any[];

  products:Product[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
  },
  {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
  }, 
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
}, 
  {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'OUTOFSTOCK',
      rating: 4
  },
  {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
  },
  ];
  productse!: Product[];
  protected:any[]=[]
  rating!:any[];
  constructor(private productService: ProductService) {
    // this.productService.getProducts().then((data) => {
    //   this.productse = data.slice(0, 5)
    //    console.log(this.productse)
    //  });
    //   for(let rate of this.productse ){

    //   }
  }

  ngOnInit() {
     this.productService.getProducts().then((data) => {
      this.list = data
     this.productse = data.slice(0, 5)
      console.table(this.productse)
    });
     for(let rate of this.productse ){
         console.log(rate)
     }
}

  getSeverity (product: Product)  {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};



}


export interface Product {
  id?: string | null;
  code?: string | null;
  name?: string | null;
  description?: string;
  price?: number| null;
  quantity?: number| null;
  inventoryStatus?: string | null;
  category?: string | null;
  image?: string | null;
  rating?: number| null;
}

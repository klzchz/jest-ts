import ProducRepositoryInterface from "./constracts/product.interface";
export default class ProductController { 

  constructor(private readonly repository: ProducRepositoryInterface){

  }


  getAll() {
    return this.repository.findAll();
  }

  store(name: string, price:number)
  {
    return this.repository.save(name,price);
  }

}
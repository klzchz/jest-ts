import Product from "../product";
export default  interface ProducRepositoryInterface {

  findAll():Product[];
  save(name:string,price:number):Product;

}
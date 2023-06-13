import ProducRepositoryInterface from "./constracts/product.interface"
import ProductController from "./product.controller"

const makeSut = () => {
  const mockRepository: jest.Mocked<ProducRepositoryInterface> = {
      findAll: jest.fn(),
      save: jest.fn(),
  }

  const sut  = new ProductController(mockRepository)

  return  {
    sut,
    mockRepository
  }
}


describe('ProductController',()=>{
    it('Should Return all products',()=>{
      const {sut,mockRepository} = makeSut();
      sut.getAll()
      expect(mockRepository.findAll).toBeCalledTimes(1);


    })

    it('Should save Product',()=>{
      const {sut,mockRepository} = makeSut();
      const name  = 'prod1';
      const price = 12;

      sut.store(name,price)
      expect(mockRepository.save).toBeCalledTimes(1);
      expect(mockRepository.save).toBeCalledWith(name,price);


    })
})
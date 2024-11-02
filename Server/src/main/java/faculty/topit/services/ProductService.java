package faculty.topit.services;

import faculty.topit.dtos.ProductDto;
import faculty.topit.models.ProductModel;
import faculty.topit.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository repository){
        productRepository = repository;
    }
    public List<ProductDto> getAllProducts(){
        var products = productRepository.findAll();

        return products.stream().map(ProductDto::new).collect(Collectors.toList());
    }

    public ProductDto getProductById(Long id){
        var product=productRepository.getReferenceById(id);

        return new ProductDto(product);
    }

    public void deleteProductById(Long id){
        productRepository.deleteById(id);
    }

    public void addProduct(ProductDto productDto) {
        ProductModel product = new ProductModel();
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        product.setDescription(productDto.getDescription());
        product.setStock(productDto.getStock());
        product.setSpecification(productDto.getSpecification());

        productRepository.save(product);
    }

    public void updateProduct(ProductDto productDto, Long id ){
        var product = new ProductModel();
        product.setName(productDto.getName());
        product.setPrice(productDto.getPrice());
        product.setDescription(productDto.getDescription());
        product.setStock(productDto.getStock());
        product.setSpecification(productDto.getSpecification());

        productRepository.save(product);
    }
}

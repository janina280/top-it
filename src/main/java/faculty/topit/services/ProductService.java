package faculty.topit.services;

import faculty.topit.dtos.ProductDto;
import faculty.topit.models.ProductModel;
import faculty.topit.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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
        var result = products.stream().map(ProductDto::new).collect(Collectors.toList());

        return result;
    }

    public ProductDto getProductById(Long id){
        var product=productRepository.getReferenceById(id);
        var result = new ProductDto(product);

        return  result;
    }

    public void deleteProductById(Long id){
        productRepository.deleteById(id);
    }


}

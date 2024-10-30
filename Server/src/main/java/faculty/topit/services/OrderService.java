package faculty.topit.services;

import faculty.topit.dtos.ProductDto;
import faculty.topit.models.ProductModel;
import faculty.topit.repositories.OrderRepository;
import faculty.topit.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {
    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository repository){
        orderRepository = repository;
    }
    public List<ProductDto> getOrderProductsByUser(String username){
        var orders = orderRepository.findBy(username);

        return orders.stream().map(OrderDto::new).collect(Collectors.toList());
    }

    public ProductDto getProductById(Long id){
        var product=productRepository.getReferenceById(id);

        return new ProductDto(product);
    }

    public void deleteProductById(Long id){
        productRepository.deleteById(id);
    }

    public void addProduct(ProductDto productDto){
        productRepository.save(new ProductModel(productDto));
    }

    private bool

}

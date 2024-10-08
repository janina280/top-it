package faculty.topit.models;

import jakarta.persistence.Id;

public class ProductModel {
    @Id
    private String id;
    private String name;
    private String specification;
    private String description;
    private int stock;
    private double price;
}

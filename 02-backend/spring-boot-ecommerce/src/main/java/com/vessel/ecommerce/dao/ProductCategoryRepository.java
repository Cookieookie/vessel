package com.vessel.ecommerce.dao;

import com.vessel.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
@CrossOrigin("http://localhost:3000")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}

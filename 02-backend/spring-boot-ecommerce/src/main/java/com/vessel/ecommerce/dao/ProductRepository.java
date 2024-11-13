package com.vessel.ecommerce.dao;

import com.vessel.ecommerce.entity.Product;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.data.jpa.repository.JpaRepository;

@CrossOrigin("http://localhost:3000")
public interface ProductRepository extends JpaRepository<Product, Long> {
}

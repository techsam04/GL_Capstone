package com.capstone.dao;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capstone.model.Product;

@Repository

public interface ProductDao extends JpaRepository<Product, Integer>{

	@Query("select p from Product p where p.price > :price")
	public List<Product> getProductByPrice(@Param("price") float price);
	
	@Query(value = "SELECT product.pid, product.pname, orders.quantity, product.quantity FROM Orders INNER JOIN product ON Orders.ProductID=product.pid", nativeQuery = true)
	List<Product> totalStock();
	
	@Query("SELECT p FROM Product p WHERE CONCAT(p.pname, p.category, p.price) LIKE %?1%")
	public List<Product> search(String keyword);
	
	
//	@Query("select p from Product p where p.pid=id")
//	List<Product> findById(Long id);
	

}

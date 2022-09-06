package com.capstone.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.capstone.dao.ProductDao;
import com.capstone.model.Helper;
import com.capstone.model.Product;

@Service
public class ProductService {

	@Autowired
	ProductDao productDao;
	
	
	
	//get allproducts
	public List<Product> getAllProducts() {
		return productDao.findAll();
	}
	
//store
	public String storeProduct(Product product) {
		if (productDao.existsById(product.getPid())) {
			return "Product Id Should Be Unique";
		} else {
			productDao.save(product);
			return "Product Stored Successfully";
		}
	}
	
	//update
	public String updateProductPrice(Product product) {
		if (productDao.existsById(product.getPid())) {
			Product pp = productDao.getById(product.getPid());
			pp.setPrice(product.getPrice());
			productDao.saveAndFlush(pp);
			return "Product Price Updated Successfully";
			
		} else {
			return "No product Found";
		}
	}
	
	//delete
	public String deleteProduct(int pid) {
		if (!productDao.existsById(pid)) {
			return "Product  Details Not Present";
		} else {
			productDao.deleteById(pid);
			return "Product Deleted Successfully";
		}
	}
	
	public List<Product> findProductUsingPrice(float price) {
		return productDao.getProductByPrice(price);
	}
	
	public List<Product> totalStocks() {
		return productDao.totalStock();
	}
	
	public void save(MultipartFile file) {

        try {
            List<Product> products = Helper.convertExcelToListOfProduct(file.getInputStream());
            this.productDao.saveAll(products);
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
	public List<Product> getSearchProducts(String keyword) {
		return productDao.search(keyword);
}
}

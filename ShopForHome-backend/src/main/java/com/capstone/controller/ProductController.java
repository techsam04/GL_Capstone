package com.capstone.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.capstone.model.Helper;
import com.capstone.model.Product;
import com.capstone.model.ResponseMessage;
import com.capstone.service.ProductService;



	
	@RestController
	@RequestMapping("/product")
	@CrossOrigin(origins = "http://localhost:4200")
	public class ProductController {

		@Autowired
		ProductService productService;
		
		@GetMapping(value = "getAllProduct",
		produces = MediaType.APPLICATION_JSON_VALUE)
		public List<Product> getAllProductInfo() {
			return productService.getAllProducts();
		}
		@PostMapping(value = "storeProduct",
				consumes = MediaType.APPLICATION_JSON_VALUE)
		public String storeProduct(@RequestBody Product product) {
					return productService.storeProduct(product);
		}
		
		@DeleteMapping(value = "deleteProduct/{pid}")
		public String storeProductInfo(@PathVariable("pid") int pid) {
						return productService.deleteProduct(pid);
		}
		
		@PatchMapping(value = "updateProduct")
		public String updateProductPrice(@RequestBody Product product) {
						return productService.updateProductPrice(product);
		}
		
		@GetMapping(value = "findProdutByPrice/{price}")
		public List<Product> findProductByPrice(@PathVariable("price") float price) {
			return productService.findProductUsingPrice(price);
		}
		
//		@GetMapping(value = "findByTitle/{pname}")
//		public List<Product> findByTitle(@PathVariable("pname") String pname) {
//			System.out.println("bdccccccccccccccc");
//			return productService.findByTitle(pname);
//		}
		
		@GetMapping(value = "getStock")
//				produces = MediaType.APPLICATION_JSON_VALUE)
				public List<Product> getAllStocks() {
					return productService.totalStocks();
				}
		
		@PostMapping(value = "/upload",
			     consumes = {MediaType.MULTIPART_FORM_DATA_VALUE},
			     produces = {MediaType.APPLICATION_JSON_VALUE} )
	    public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file) {
	        if (Helper.checkExcelFormat(file)) {
	            //true

	            this.productService.save(file);

	            return ResponseEntity.ok(Map.of("message", "File is uploaded and data is saved to db"));


	        }
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload excel file ");
	    }
		
		@GetMapping(value = "findProduct/{search}")
		public List<Product> findProduct(@PathVariable("search") String search) {
		return productService.getSearchProducts(search);
		}
	}

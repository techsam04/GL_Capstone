package com.capstone.model;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com")
@EntityScan(basePackages = "com.capstone.model")							// Enable entity class 
@EnableJpaRepositories(basePackages = "com.capstone.dao")

public class ShopForHomeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopForHomeApplication.class, args);
	}

}
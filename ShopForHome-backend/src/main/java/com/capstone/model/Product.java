package com.capstone.model;

import javax.persistence.Entity;

import javax.persistence.Id;

@Entity
public class Product {
	@Id
	private int pid;
	private String pname;
	private float price;
	private String url;
	private int quantity;
	public String category;
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Product(int pid, String pname, float price, String url,int quantity,  String category) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.price = price;
		this.url = url;
		this.quantity = quantity;
		this.category = category;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getPname() {
		return pname;
	}

	public void setPname(String pname) {
		this.pname = pname;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	@Override
	public String toString() {
		return "Product [pid=" + pid + ", pname=" + pname + ", price=" + price + ", url=" + url + ", quantity=" + quantity + ", category="
				+ category + "]";
	}

}
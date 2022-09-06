package com.capstone.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {
	@Id
	private String email;
	private String username;
	private String password;
	private String phone;
	
	public Admin() {
	super();
	// TODO Auto-generated constructor stub
}
	
public Admin( String username, String email, String password, String phone) {
		super();
		
		this.username = username;
		this.email = email;
		this.password = password;
		this.phone = phone;
	}

public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getPhone() {
	return phone;
}

public void setPhone(String phone) {
	this.phone = phone;
}

@Override
public String toString() {
	return "Users [ username=" + username + ", email=" + email + ", password=" + password + ", phone="
			+ phone + "]";
}



}
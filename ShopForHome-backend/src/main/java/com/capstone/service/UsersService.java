package com.capstone.service;

import java.util.List;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.dao.UsersDao;
import com.capstone.model.Admin;
import com.capstone.model.Users;




@Service
public class UsersService {
	@Autowired
	UsersDao usersDao;
	
	//Store User Details
	public String storeUserDetails(Users user) {
		if(!usersDao.existsById(user.getEmail())) {
			usersDao.save(user);
			return "User Added Sucessfully";
		}else {
			return "User Already Exists!!!";
		}
	}
	
	//User login checking
	public String checkUserDetails(Users user) {
		   if(usersDao.existsById(user.getEmail())) {
			   Users u = usersDao.getById(user.getEmail());
			   if(u.getPassword().equals(user.getPassword())) {
				   return "true";
			   }else {
				   return "false";
			   }				   
		   }else {
			   return "no";
		   }   
	   }
	
	//User logout checking
		public String userLogout(String email) {
			   if(usersDao.existsById(email)) {
					   return "LogOut Sucessfully";
				   }else {
					   return "Please Enter Correct Details";
				   }				   	   
		   }
	
	//Update User Details ByEmail
	public String updateUserDetails(Users user) {
		if(usersDao.existsById(user.getEmail())) {
			Users u=usersDao.getById(user.getEmail());
			if(u.getPassword().equals(user.getPassword())) {
				return "You are giving old details";
			}else {
				u.setPassword(user.getPassword());
				usersDao.saveAndFlush(u);
				return "User Updated Sucessfully";
			}
		}else {
			return "User not Exists!!";			
		}						
	}
	
	//ToSee All Users Information
	public List<Users> getAllUsersDetails() {
		return usersDao.findAll();
	}

	//To delete a userBy Email
	public String deleteUserDetails(String email) {
		if(!usersDao.existsById(email)) {
			return "User not Exists!!";
		}else {
			usersDao.deleteById(email);
			return "User Deleted Sucessfully";
		}
	}

	
}

package com.capstone.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.dao.AdminDao;
import com.capstone.model.Admin;


@Service
public class AdminService {
	@Autowired
	AdminDao adminDao;
	
   public String adminRegistration(Admin adm) {
	   if(adminDao.existsById(adm.getEmail())) {
		   return "Your Details Already Present";
	   }else {
		   adminDao.save(adm);
		   return "Details Saved Sucessfully";
	   }	   
   }
   
   public String checkAdminDetails(Admin adm) {
	   if(adminDao.existsById(adm.getEmail())) {
		   Admin a=adminDao.getById(adm.getEmail());
		 
		   if(a.getPassword().equals(adm.getPassword())) {
			   return "true";
		   }else {
			   return "false";
		   }				   
	   }else {
		   return "no";
	   }
	   
   }
   
 //Admin logout checking
 		public String adminLogout(String email) {
 			   if(adminDao.existsById(email)) {
 					   return " Admin LogOut Sucessfully";
 				   }else {
 					   return "Please Enter Correct Details";
 				   }				   	   
 		   }

   public List<Admin> getAllAdminAvaliable(){
		return adminDao.findAll();
	}
   
   

   
   
}

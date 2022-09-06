package com.capstone.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.model.Admin;
import com.capstone.model.Users;
import com.capstone.service.UsersService;


@RestController
@RequestMapping(value="User")
@CrossOrigin(origins = "http://localhost:4200")
public class UsersController {
	@Autowired
	UsersService usersService;
	
	@PostMapping(value="register",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String storeUserInfo(@RequestBody Users user) {
		return usersService.storeUserDetails(user);	
	}
	
	@PostMapping(value="login")
	public String checkUserInfo(@RequestBody Users user) {
		return usersService.checkUserDetails(user);	
	}

	 @GetMapping(value = "logout/{email}")
		 public String userLogoutInfo(@PathVariable("email") String email) {
				//return "User LogOut Sucessfully";
		 return usersService.userLogout(email);
	}
	 
	@PatchMapping(value="updateUser")
	public String updateUserPassword(@RequestBody Users user) {
		return usersService.updateUserDetails(user);
	}
	
	@GetMapping(value="displayUser")
	public List<Users> getAllDetailsOfUsers(){
		return usersService.getAllUsersDetails();
	}
	
	@DeleteMapping(value="deleteUser/{email}")
	public String deleteUserDetails(@PathVariable("email") String email) {
		return usersService.deleteUserDetails(email);
	}
	
	
	
}

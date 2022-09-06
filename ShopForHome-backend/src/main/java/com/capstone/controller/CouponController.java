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
import com.capstone.model.Coupon;
import com.capstone.model.Product;
import com.capstone.model.Users;
import com.capstone.service.CouponService;
import com.capstone.service.UsersService;


@RestController
@RequestMapping(value="Coupon")
@CrossOrigin(origins = "http://localhost:4200")
public class CouponController {
	@Autowired
	CouponService couponService;
	
	@GetMapping(value = "displayCoupon",
			produces = MediaType.APPLICATION_JSON_VALUE)
			public List<Coupon> getAllCouponInfo() {
				return couponService.getAllCoupons();
			}
	
	@PostMapping(value="addCoupon",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String storeUserInfo(@RequestBody Coupon coupon) {
		return couponService.storeCouponDetails(coupon);	
	}
	

	 
	@PatchMapping(value="updateCoupon")
	public String updateUserPassword(@RequestBody Coupon coupon) {
		return couponService.updateCouponDetails(coupon);
	}
	
	
	
	@DeleteMapping(value="deleteCoupon/{id}")
	public String deleteUserDetails(@PathVariable("id") int id) {
		return couponService.deleteCouponDetails(id);
	}
	
	
	@GetMapping(value = "checkCoupon/{coupon}")
	public List<Coupon> findCoupon(@PathVariable("coupon") String coupon) {
	return couponService.getcouponDetails(coupon);
	}
	
}

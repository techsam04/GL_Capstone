package com.capstone.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capstone.dao.CouponDao;
import com.capstone.model.Coupon;
import com.capstone.model.Product;




@Service
public class CouponService {
	@Autowired
	CouponDao couponDao;
	
	public List<Coupon> getAllCoupons() {
		return couponDao.findAll();
	}
	
	//Store Coupon Details
	public String storeCouponDetails(Coupon coupon) {
		if(!couponDao.existsById(coupon.getId())) {
			couponDao.save(coupon);
			return "Coupon Added Sucessfully";
		}else {
			return "Coupon Already Exists!!!";
		}
	}
	
	
	//Update Coupon Details ById
	public String updateCouponDetails(Coupon coupon) {
		if (couponDao.existsById(coupon.getId())) {
			Coupon pp = couponDao.getById(coupon.getId());
			pp.setValue(coupon.getValue());
			couponDao.saveAndFlush(pp);
			return "Coupon Updated Successfully";
			
		} else {
			return "No Coupon Found";
		}
	}
	

	//To delete a userBy Email
	public String deleteCouponDetails(int id) {
		if(!couponDao.existsById(id)) {
			return "Coupon not Exists!!";
		}else {
			couponDao.deleteById(id);
			return "Coupon Deleted Sucessfully";
		}
	}
	
	public List<Coupon> getcouponDetails(String coupon) {
		return couponDao.checkCouponStatus(coupon);
}

	
}

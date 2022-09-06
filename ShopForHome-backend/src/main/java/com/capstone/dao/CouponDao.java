package com.capstone.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.capstone.model.Coupon;
import com.capstone.model.Product;
import com.capstone.model.Users;

@Repository
public interface CouponDao extends JpaRepository<Coupon, Integer> {

	
	@Query("SELECT p FROM Coupon p WHERE LOWER(p.name) = LOWER(:keyword)")
	public List<Coupon> checkCouponStatus(@Param("keyword")String keyword);
}

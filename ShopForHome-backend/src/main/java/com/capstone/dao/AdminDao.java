package com.capstone.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.model.Admin;




public interface AdminDao extends JpaRepository<Admin, String> {


}



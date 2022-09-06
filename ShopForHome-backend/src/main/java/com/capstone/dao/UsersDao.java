package com.capstone.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.capstone.model.Users;

@Repository
public interface UsersDao extends JpaRepository<Users, String> {

}

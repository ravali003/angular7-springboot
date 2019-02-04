package com.example.first.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.first.entities.User;

public interface UserRepository extends JpaRepository<User,Long>{

	
	//public User findOne(Long id);
	

}

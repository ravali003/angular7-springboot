package com.example.first.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.first.repositories.UserRepository;
import com.example.first.entities.User;



@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*") 
@RestController
//@RequestMapping("/api")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getUsers(){
		return userRepository.findAll();		
	}
	
	//@GetMapping("/user/{id}")
	//public User getUser(@PathVariable Long id){
	//   return userRepository.findOne(id);		
	//}
	
	@DeleteMapping("/user/{id}")
	public boolean deleteUser(@PathVariable Long id){
		userRepository.deleteById(id);
		return true;		
	}
	
	@PutMapping("/user")
	public User updateUser(@RequestBody User user){
		return userRepository.save(user);		
	}
	
	@PostMapping("/user")
	public User createUser(@RequestBody User user){
		return userRepository.save(user);		
	}
}

package com.example.first;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.first.entities.User;
import com.example.first.repositories.UserRepository;

@SpringBootApplication
public class FirstApplication implements CommandLineRunner{
	@Autowired
	private UserRepository userRepository;
	public static void main(String[] args) {
		SpringApplication.run(FirstApplication.class, args);
		System.out.println("hello...");
	}

	@Override
	public void run(String... args) throws Exception {
		userRepository.save(new User("one","one"));
		userRepository.save(new User("two","one"));
		userRepository.save(new User("three","one"));
		
	}

}


package com.quanpay.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.quanpay.model.User;
import com.quanpay.model.VerificationToken;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {

	VerificationToken findByToken(String token);

	VerificationToken findByUser(User user);
}

package com.quanpay.dto.response;

import com.quanpay.dto.response.UserInfo;
import lombok.Value;

@Value
public class JwtAuthenticationResponse {
	private String accessToken;
	private boolean authenticated;
	private UserInfo user;
}
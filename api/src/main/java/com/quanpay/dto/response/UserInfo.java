package com.quanpay.dto.response;

import java.util.List;

import lombok.Value;

@Value
public class UserInfo {
	private String id, displayName, email, username, about;
	private List<String> roles;
}
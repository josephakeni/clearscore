package com.jotonia.common.utils;

import org.apache.commons.lang3.RandomStringUtils;

public class GenerateData {
	
	public String generateRandomString(int length) {
		return RandomStringUtils.randomAlphabetic(length);
	}
	
	public String generateRandomNumber(int length) {
		return RandomStringUtils.randomNumeric(length);		
	}
	
	
}
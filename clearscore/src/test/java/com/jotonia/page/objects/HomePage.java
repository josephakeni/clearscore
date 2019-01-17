package com.jotonia.page.objects;

import java.util.Set;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
	

	WebDriver driver;

	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}	

	
	public void check_Cookie_Notification_Box_is_visible() {
		String message=driver.findElement(By.tagName("body")).getText();
		Assert.assertTrue("Text not visible", message.contains("We use cookies to improve your experience."));
	}
	
	@FindBy (how=How.XPATH, using="/html/body/div[3]/div[2]/div[2]/div/div[2]/p/span")
	public static WebElement NoProblem_Btn;
	
	
	public void click_NoProblem_Btn(){
		NoProblem_Btn.click();
		}
	
	public void check_that_Cookie_Notification_Box_is_not_visible(){
		Assert.assertFalse(NoProblem_Btn.isDisplayed());
//		At this point, if I assertTrue, then the test will fail 
//		because the cookie notification bar is not there anymore after being clicked off,
//		this indicates that the assertions are working correctly 
		}
		
	public void Check_that_appropriate_cookies_are_set() {
		
		Set<Cookie> cookies_content = driver.manage().getCookies();
		System.out.println("These are the set cookies parameters: " + cookies_content);
		Assert.assertFalse(cookies_content.isEmpty());
		cookies_content.clear();
		Assert.assertTrue(cookies_content.isEmpty());
		
	}
	
	 @FindBy (how = How.XPATH, using="/html/body/div[3]/div[2]/b/footer/div[2]/div/section[3]/ul/li[3]/a")
	 public  WebElement Savings_calculator_link;
	 }

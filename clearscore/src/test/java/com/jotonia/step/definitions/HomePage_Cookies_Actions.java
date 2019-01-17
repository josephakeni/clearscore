package com.jotonia.step.definitions;

import java.io.File;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import com.jotonia.common.utils.CommonUtil;
import com.jotonia.common.utils.WebDriverManager;
import com.jotonia.page.objects.HomePage;
import com.sun.enterprise.util.io.FileUtils;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePage_Cookies_Actions extends WebDriverManager {
	
	WebDriver driver=getDriver();
	HomePage hp=new HomePage(driver);
	File ssFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);

	
	@Given("^I am on the homepage$")
	public void i_am_on_the_homepage() throws Throwable {
		CommonUtil.launchBrowser(driver, "https://www.clearscore.com/savings-calculator");
		FileUtils.copyFile(((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE), 
				new File("C:\\SeleniunTest\\cucumber_Workspace\\fieldglass\\screenshots\\homePage.png"));
	}

	@Given("^I verify the cookies notification is present$")
	public void i_verify_the_cookies_notification_is_present() throws Throwable {
	    hp.check_Cookie_Notification_Box_is_visible();		
	}

	@When("^I click the /No Problem/ button on the cookies notification bar in order to dismiss the notification$")
	public void i_click_the_No_Problem_button_on_the_cookies_notification_bar_in_order_to_dismiss_the_notification() throws Throwable {
		hp.click_NoProblem_Btn();
	}

	@When("^I verify that the cookie notification bar doesnt reappear$")
	public void i_verify_that_the_cookie_notification_bar_doesnt_reappear() throws Throwable {
	    hp.check_that_Cookie_Notification_Box_is_not_visible();
	}

	@Then("^I know that the appropriate cookies are set$")
	public void i_know_that_the_appropriate_cookies_are_set() throws Throwable {
	    hp.Check_that_appropriate_cookies_are_set();
	}

  
	
}

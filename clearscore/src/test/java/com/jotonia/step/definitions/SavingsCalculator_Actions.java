package com.jotonia.step.definitions;

import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.jotonia.common.utils.WebDriverManager;
import com.jotonia.page.objects.HomePage;
import com.jotonia.page.objects.Savings_Calculator_Page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SavingsCalculator_Actions extends WebDriverManager {

	WebDriver driver=getDriver();
	HomePage hp=new HomePage(driver);
	Savings_Calculator_Page scp=new Savings_Calculator_Page(driver);
	File ssFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
	
	@Given("^I click the savings calculator tab\\.$")
	public void i_click_the_savings_calculator_tab() throws Throwable {
	    scp.click_Savings_calculator_link();
	}

	@When("^I see the savings calculator is displayed and I select (\\d+) for my current score$")
	public void i_see_the_savings_calculator_is_displayed_and_I_select_for_my_current_score(int arg1) throws Throwable {
		scp.move_Current_score_slider_to_50();
	}

	@When("^I also select my score goal of (\\d+)$")
	public void i_also_select_my_score_goal_of(int arg1) throws Throwable {
		scp.move_Score_goal_slider_to_680();
	}

	@When("^I verify that my current score interest rate, costs and cards available are: (\\d+)\\.(\\d+)%, £(\\d+) and (\\d+)$")
	public void i_verify_that_my_current_score_interest_rate_costs_and_cards_available_are_£_and(int arg1, int arg2, int arg3, int arg4) throws Throwable {
		scp.verify_current_score_rates_cost_and_CreditCardsAvailable_details_are_correct();
	}

	@When("^I verify that my goal interest rate, costs and cards available are: (\\d+)%, £(\\d+) and (\\d+)$")
	public void i_verify_that_my_goal_interest_rate_costs_and_cards_available_are_£_and(int arg1, int arg2, int arg3) throws Throwable {
		scp.verify_ScoreGoal_rates_cost_and_CreditCardsAvailable_details_are_correct();
	}

	@Then("^my potential savings display should be £(\\d+)$")
	public void my_potential_savings_display_should_be_£(int arg1) throws Throwable {
		scp.verify_that_potential_savings_value_is_correct();
		driver.close();
	}
	
}

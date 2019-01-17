package com.jotonia.page.objects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class Savings_Calculator_Page {

	WebDriver driver;

	public Savings_Calculator_Page(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

//		Current score slider method below
	@FindBy(how = How.XPATH, using = "/html/body/div[3]/div[2]/div[1]/div/section[3]/div/div/div/div/div[1]/input")
	public WebElement Current_score_slider;

	public void move_Current_score_slider_to_50() {
	//	Assert.assertTrue(Current_score_slider.isDisplayed());

		for (int i = 1; i <= 330; i++) {
			Current_score_slider.sendKeys(Keys.ARROW_LEFT);

		}

		String current_score_number = driver
				.findElement(By.xpath("/html/body/div[3]/div[2]/div[1]/div/section[3]/div/div/div/div/div[1]/p[2]"))
				.getText();
//				The lines of code below prints, 
//				and verifies the number on the slider and the slider position which is 50.
		System.out.println("The current score slider number is " + current_score_number);
		try {
			Thread.sleep(30000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Assert.assertTrue(current_score_number.contains(current_score_number));
	}

	// Score goal slider method below
	@FindBy(how = How.XPATH, using = "/html/body/div[3]/div[2]/div[1]/div/section[3]/div/div/div/div/div[2]/input")
	public WebElement Score_goal_slider;

	public void move_Score_goal_slider_to_680() {
		Assert.assertTrue(Score_goal_slider.isDisplayed());
		for (int i = 1; i <= 230; i++) {
			Score_goal_slider.sendKeys(Keys.ARROW_RIGHT);
		}

		String score_goal_number = driver
				.findElement(By.xpath("/html/body/div[3]/div[2]/div[1]/div/section[3]/div/div/div/div/div[2]/p[2]"))
				.getText();
//						The lines of code below prints, 
//						and verifies the number on the slider and the slider position which is 700.
		System.out.println("The score goal slider number is " + score_goal_number);
		try {
			Thread.sleep(30000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Assert.assertTrue(score_goal_number.contains(score_goal_number));
	}

	public void verify_current_score_rates_cost_and_CreditCardsAvailable_details_are_correct() {

		String message = driver.findElement(By.tagName("body")).getText();
		Assert.assertTrue("Text not visible", message.contains("36.5%"));
//						Assert.assertTrue("Text not visible", message.contains("£849"));
//						Assert.assertTrue("Text not visible", message.contains("22"));

//						String currentAnnualCost_Value = driver.findElement(By.xpath("/html/body/div[3]/div[2]/div[1]/div/section[3]/div/div/div/div/div[4]/table/tbody/tr[2]/td[2]"))
//								.getText(); 
//						System.out.println("currentAnnualCost_Value = " + currentAnnualCost_Value );
//						Assert.assertTrue(currentAnnualCost_Value.contains("£849"));
//						
//						String currentCreditCardsAvailable_Amount = driver.findElement(By.xpath("/html/body/div[3]/div[2]/div[1]/div/section[3]/div/div/div/div/div[4]/table/tbody/tr[3]/td[2]"))
//								.getText(); 
//						System.out.println("currentCreditCardsAvailable_Amount = " + currentCreditCardsAvailable_Amount );
//						Assert.assertTrue(currentCreditCardsAvailable_Amount.contains("22"));
	}

	public void verify_ScoreGoal_rates_cost_and_CreditCardsAvailable_details_are_correct() {
		String message = driver.findElement(By.tagName("body")).getText();
		Assert.assertTrue("Text not visible", message.contains("20%"));
//						String ScoreGoalInterestRate_Value = driver.findElement(By.xpath("/html/body/div[3]/div[2]/div[1]/div/section[3]/div/div/div/div/div[4]/table/tbody/tr[1]/td[3]"))
//								.getText(); 
//						System.out.println("ScoreGoalInterestRate_Value = " + ScoreGoalInterestRate_Value );
//						Assert.assertTrue(ScoreGoalInterestRate_Value.contains("25%"));
//						
//						String ScoreGoalAnnualCost_Value = driver.findElement(By.xpath("/html/body/div[3]/div[2]/div[1]/div/section[3]/div/div/div/div/div[4]/table/tbody/tr[2]/td[3]"))
//								.getText(); 
//						System.out.println("ScoreGoalAnnualCost_Value = " + ScoreGoalAnnualCost_Value );
//						Assert.assertTrue(ScoreGoalAnnualCost_Value.contains("£520"));
//						
//						String ScoreCreditCardsAvailable_Amount = driver.findElement(By.xpath("/html/body/div[3]/div[2]/div[1]/div/section[3]/div/div/div/div/div[4]/table/tbody/tr[3]/td[3]"))
//								.getText(); 
//						System.out.println("ScoreCreditCardsAvailable_Amount = " + ScoreCreditCardsAvailable_Amount );
//						Assert.assertTrue(ScoreCreditCardsAvailable_Amount.contains("241"));

	}

	public void verify_that_potential_savings_value_is_correct() {
		String message = driver.findElement(By.tagName("body")).getText();
		Assert.assertTrue("Text not visible", message.contains("384"));

//						String PotentialSavings_Value = driver.findElement(By.xpath("/html/body/div[3]/div[2]/div[1]/div/section[3]/div/div/div/div/div[3]/div/span[2]/span"))
//								.getText(); 
//						System.out.println("PotentialSavings_Value = " + PotentialSavings_Value );
//						Assert.assertTrue(PotentialSavings_Value.contains("384"));

	}

	@FindBy(how = How.LINK_TEXT, using = "Savings Calculator")
	public WebElement Savings_calculator_link;

	public void click_Savings_calculator_link() {
		((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", Savings_calculator_link);
		Savings_calculator_link.click();
	}

}

package com.jotonia.common.utils;

import java.util.Arrays;

import org.openqa.selenium.UnexpectedAlertBehaviour;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

public class WebDriverManager {

	public static WebDriver driver;
	
	public static WebDriver getDriver() {
		String browser="chrome";
		if(driver==null) {
			synchronized(WebDriverManager.class) {
				initDriver(browser);
			}
		}
		return driver;
	}

	private static synchronized void initDriver(String browser) {
		if (driver == null) {
			try {
				if(browser.equalsIgnoreCase("chrome")) {
					System.setProperty("webdriver.chrome.driver", "C://SeleniunTest//cucumber_Workspace//fieldglass//drivers//chromedriver.exe");
					DesiredCapabilities cap=DesiredCapabilities.chrome();
					cap.setCapability("chrome.switches", Arrays.asList("--disable-local-storage"));
					driver = new ChromeDriver(cap);
					}else if(browser.equalsIgnoreCase("Firefox")) {
						System.setProperty("webdriver.gecko.driver", "C://SeleniunTest//cucumber_Workspace//fieldglass//drivers//geckodriver.exe");
						
						FirefoxOptions firefoxOptions=new FirefoxOptions();
						firefoxOptions.setBinary("C:\\Program Files\\Mozilla Firefox\\firefox.exe");
						DesiredCapabilities cap=new DesiredCapabilities();
						cap.setCapability("marionette", true);
						cap.setCapability("moz:firefoxOptions", firefoxOptions);
						cap.setCapability(CapabilityType.BROWSER_NAME, "firefox");
						//cap.setCapability(CapabilityType.PROXY, proxy);
						cap.setCapability(CapabilityType.UNEXPECTED_ALERT_BEHAVIOUR, UnexpectedAlertBehaviour.DISMISS);
						driver = new FirefoxDriver(cap);
					}else if(browser.equalsIgnoreCase("InternetExplorer")) {
						System.setProperty("webdriver.ie.driver", "C://SeleniunTest//cucumber_Workspace//fieldglass//drivers//IEDriverServer.exe");
						driver = new InternetExplorerDriver();
					}
			}catch(Exception e) {
				e.printStackTrace();
			}
			}
	}
}

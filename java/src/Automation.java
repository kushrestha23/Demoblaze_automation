import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

@Test

public class Automation {

	public static void main(String[] args) throws InterruptedException, MalformedURLException {
	
		DesiredCapabilities caps = new DesiredCapabilities();
		caps.setBrowserName("firefox");
		
	    // RemoteWebdrive0r
	   RemoteWebDriver driver = new RemoteWebDriver(new URL("http://10.0.0.146:4444"), caps);
	   
	   
	    //Navigate to URL
	    driver.get("https://www.demoblaze.com/");
	    
	    //Maximize browser
	    driver.manage().window().maximize();
	    
	    // Click on the "Laptops" link
	    driver.findElement(By.linkText("Laptops")).click();
	    
	    //Delay of 3 seconds
	    Thread.sleep(3000);
	    
	    //Click on the MacBook air
	    driver.findElement(By.linkText("MacBook air")).click();
	    
	    Thread.sleep(3000);
	    
	    // Click on the "Add to cart" button
	    driver.findElement(By.linkText("Add to cart")).click();
	    
	    // Click on the "Cart" link
	    driver.findElement(By.id("cartur")).click();
	    
	    driver.quit();
	    
	}

}
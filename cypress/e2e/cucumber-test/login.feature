Feature: Login Feature
  
   Background: 
    Given Open a home page and click on sign in button

  Scenario: 1. successfull login
    When Enter username "df@fmsd.com"
    And Enter password "123456"
    And Click on green sign in button- loginbtn
    Then Successfully logged in

  Scenario: 2. successfull logout
    When Enter username "df@fmsd.com"
    And Enter password "123456"
    And Click on green sign in button- loginbtn
    And Click on sign out button
    Then Successfully logged out

  Scenario: 3. incorrect credentials
    And Enter wrong credentials in login boxes

      | username    | password          |
      | df@fmsd.com |            123456 |
      | df@fmsd.com | incorrectpassword |
    
    And Click on green sign in button- loginbtn
    Then Receive message "Authentication failed"
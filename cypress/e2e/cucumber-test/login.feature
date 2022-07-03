Feature: Login Feature

  Feature The feature is required user to log in.
  Background:
    Given A user openes a home page and click on sign in button

  Scenario: 1. success login
    When A user enters the username "df@fmsd.com"
    And A user enters the password "123456"
    And A user clicks on green sign in button- loginbtn
    Then A user will be successfully logged in
    Then A user will receive message "My account"

  Scenario: 2. success logout
    When A user enters the username "df@fmsd.com"
    And A user enters the password "123456"
    And A user clicks on green sign in button- loginbtn
    And A user clicks on sign out button
    Then A user will be successfully logged out

  Scenario: 3. failed login - inwalid password message
    Given A user openes a home page and click on sign in button
    When A user enters the username "df@fmsd.com"
    And  A user enters the wrongpassword "12345678"
    And A user clicks on green sign in button- loginbtn
    Then  A user will received message "Authentication failed"
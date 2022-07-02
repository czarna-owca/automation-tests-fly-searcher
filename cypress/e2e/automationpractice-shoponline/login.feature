Feature: Login Feature

  Feature The feature is required user to log in.

  Scenario: 1. success login
    Given A user openes a home page and click on sign in button
    When A user enter the username "<df@fmsd.com>"
    And  A user enter the password "<123456>"
    And A user clicks on green sign in button- loginbtn
    Then  A user will be successfully logged in

  Scenario: 2. failed login - inwalid password message
    Given A user openes a home page and click on sign in button
    When A user enters the username "<df@fmsd.com>"
    And  A user enters the password "<123456>"
    And A user clicks on green sign in button- loginbtn
    Then  A user will received message "<Invalid password>"

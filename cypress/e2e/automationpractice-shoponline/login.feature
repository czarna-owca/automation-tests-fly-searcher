//@tagPlaceholder1 @tagPlaceholder2
Feature: The feature is required user to log in.

  Scenario: 1. success login
    Given open home page and click on sign in button
     When enter the Email address 'df@fmsd.com'
     And  enter the password '123456'
     And click on sign in button
     Then  The user will be successfully logged in


  Scenario: 2. failed login - inwalid password message
    Given open home page and click on sign in button
     When enter the Email address 'df@fmsd.com'
     And  enter the password 'asdfgh'
     And click on sign in button
     Then  The user will received message 'Invalid password'
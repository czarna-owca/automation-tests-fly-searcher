@tagPlaceholder1 @tagPlaceholder2
Feature: The feature is required user to log in.

  Scenario: success login
    Given open home page and click on sign in button
     When enter the Email address 'df@fmsd.com'
     And  enter the password '123456'
     And click on sign in button
     Then  The user is successfully logged in


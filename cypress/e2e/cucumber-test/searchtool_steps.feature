Feature: searchtool Feature

  Background: 
    Given Home page is displayed

  Scenario: 1. success searching
    When Enter product name "dress" into search tool
    And Click on searchtool button
    Then Page shows only products with productName "dress"

  Scenario: 2. unsuccessfull searching
    When Enter "blabla" into search tool
    And Click on searchtool button
    Then Receive message: "No results were found for your search"
  
  # will not pass
  Scenario: 3  searching whitespace characters
    When Enter " " into search tool
    And Click on searchtool button
    Then Action not performed, searchtool button blocked

  Scenario: 4  empty search 
    When Click on searchtool button
    Then Show message "Please enter a search keyword"

# will not pass
  Scenario: 5 searching by category tree DRESSES
    When Enter "DRESSES" into search tool
    Then Page shows suggestions form category "DRESSES" under searchtool
    And Click on searchtool button
    Then Page shows all products from category "DRESSES"
 
#  will not pass   
  Scenario: 6 searching by category tree WOMEN
    When Enter "WOMEN" into search tool
    Then Page shows suggestions form category "WOMEN" under searchtool
    And Click on searchtool button
    Then Page shows all products from category "WOMEN"


  Scenario: 7 searching by category tree T-SHIRTS
    When Enter "T-SHIRTS" into search tool
    Then Page shows suggestions form category "T-SHIRTS" under searchtool
    And Click on searchtool button
    Then Page shows all products from category "T-SHIRTS"

# will not pass
  Scenario: 8 error tolerance (without - ) tshirt 
    When Enter "tshirt" into search tool
    And Click on searchtool button
    Then Page shows all products from category "T-SHIRTS"

 
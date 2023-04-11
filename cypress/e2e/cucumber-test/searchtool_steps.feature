Feature: searchtool Feature

  Background: 
    Given Home page is displayed

  Scenario: 1. success searching
    When Enter product name "dress" into search tool
    And Click on searchtool button
    Then Page shows product labeled as "dress"

  Scenario: 2. unsuccessfull searching
    When Enter "tshirt" into search tool
    And Click on searchtool button
    Then Receive message: "No results were found for your search"
  
  # Scenario: 3  searching whitespace characters
  #   When Enter " " into search tool
  #   And Click on searchtool button
  #   Then Action not performed, button blocked
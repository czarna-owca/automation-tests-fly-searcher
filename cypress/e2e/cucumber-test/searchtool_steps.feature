Feature: searchtool Feature

  Background: 
    Given Home page is displayed

  Scenario: 1. success searching
    When Enter product name "dress" into search tool
    And Click on searchtool button
    Then Page shows product labeled as "dress"
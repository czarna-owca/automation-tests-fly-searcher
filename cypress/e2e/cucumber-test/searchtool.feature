Feature: searchtool Feature

  Background: 
    Given Home page is displayed

  Scenario: 1. success searching
    When Enter product name "dress" into search tool and click enter
        Then Page shows all products labeled as "dress"
Feature: popup Feature

  Background: 
    Given Item is added to shopping cart

Scenario: 1. pop up contains 6 elements
    When  Pop up is displayed
    Then Pop up contains elements: message "Product successfully added to your shopping cart", productName "Dress", imagige, size "S", quantity: "1", price: "$50.99"




Feature: searchtool Feature

    Background:
        Given A user openes a home page

    Scenario: success searching - 't-shirt'
        When A user enters the product name "t-shirt" into search tool and clicks enter
        Then Page shows all products labeled as t-shirt
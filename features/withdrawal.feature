Feature: Withdrawal
    As a customer I can withdraw cash from my bank account

    Scenario: Cash withdrawn is below account balance
    Given I have Ksh. 1000 in my account
    When I withdraw Ksh. 700
    Then My balance is Ksh. 300

    Scenario: Cash withdrawn is above account balance
    Given I have Ksh. 1000 in my account
    When I withdraw Ksh. 1800
    Then My balance is Ksh. 1000
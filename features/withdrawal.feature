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

  Scenario: Cash withdrawn is above withdrawal limit
  Given I have Ksh. 100000 in my account
  When I withdraw Ksh. 50000
  Then My balance is Ksh. 100000

  Scenario: Cash withdrawn is below withdrawal limit
  Given I have Ksh. 1000 in my account
  When I withdraw Ksh. 100
  Then My balance is Ksh. 1000

  Scenario: Cash withdrawn
  Given I have Ksh. <startingBalance> in my account
  When I withdraw Ksh. <withdrawnAmount>
  Then My balance is Ksh. <finalBalance>

  Examples:
    | startingBalance | withdrawnAmount | finalBalance  |
    | 0               | 100             | 0             |
    | 100             | 100             | 100           |
    | 200             | 200             | 0             |
    | 5000            | -200            | 5000          |
    | 500000          | 600000          | 500000        |
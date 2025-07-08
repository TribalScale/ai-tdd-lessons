Feature: Bank Account

  Scenario: Deposit money into the account
    Given I have a bank account with a balance of 0
    When I deposit 100
    Then the balance should be 100

  Scenario: Withdraw money from the account
    Given I have a bank account with a balance of 100
    When I withdraw 40
    Then the balance should be 60

  Scenario: Withdraw more than the balance
    Given I have a bank account with a balance of 50
    When I withdraw 100
    Then the withdrawal should be denied

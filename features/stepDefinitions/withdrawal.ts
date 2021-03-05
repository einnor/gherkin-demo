import { Given, When, Then, setWorldConstructor } from '@cucumber/cucumber';
import assert from 'assert';

import BankAccount from '../../lib/BankAccount';

setWorldConstructor(BankAccount);

Given('I have Ksh. {int} in my account', function (this: BankAccount, amount: number) {
  this.setBalance(amount);
});

When('I withdraw Ksh. {int}', function (this: BankAccount, amount: number) {
  this.withdraw(amount);
});

Then('My balance is Ksh. {int}', function (this: BankAccount, amount: number) {
  assert.strictEqual(this.getBalance(), amount);
});

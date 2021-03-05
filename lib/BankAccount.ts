class BankAccount {
  balance: number = 0;

  setBalance (amount: number) {
    this.balance = amount;
  }

  getBalance () {
    return this.balance;
  }

  withdraw (amount: number) {
    this.balance = this.balance - amount;
  }
};

export default BankAccount;

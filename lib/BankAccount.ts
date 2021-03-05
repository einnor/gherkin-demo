class BankAccount {
  static MAXIMUM_WITHDRAWAL_LIMIT: number = 40000;
  static MINIMUM_WITHDRAWAL_LIMIT: number = 40000;

  balance: number = 0;

  setBalance (amount: number) {
    this.balance = amount;
  }

  getBalance () {
    return this.balance;
  }

  withdraw (amount: number) {
    if (!this._isOverdrawn(amount) && !this._isAboveMaximumWithdrawalLimit(amount) && !this._isBelowMinimumWithdrawalLimit(amount)) {
      this.balance = this.balance - amount;
    }
  }

  private _isOverdrawn(amount: number) {
    return amount > this.balance;
  }

  private _isAboveMaximumWithdrawalLimit (amount: number) {
    return amount > BankAccount.MAXIMUM_WITHDRAWAL_LIMIT;
  }

  private _isBelowMinimumWithdrawalLimit (amount: number) {
    return amount < BankAccount.MINIMUM_WITHDRAWAL_LIMIT;
  }
};

export default BankAccount;

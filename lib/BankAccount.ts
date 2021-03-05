class BankAccount {
  static WITHDRAWAL_LIMIT: number = 40000;

  balance: number = 0;

  setBalance (amount: number) {
    this.balance = amount;
  }

  getBalance () {
    return this.balance;
  }

  withdraw (amount: number) {
    if (!this._isOverdrawn(amount) && !this._hasExceededWithdrawalLimit(amount)) {
      this.balance = this.balance - amount;
    }
  }

  private _isOverdrawn(amount: number) {
    return amount > this.balance;
  }

  private _hasExceededWithdrawalLimit (amount: number) {
    return amount > BankAccount.WITHDRAWAL_LIMIT;
  }
};

export default BankAccount;

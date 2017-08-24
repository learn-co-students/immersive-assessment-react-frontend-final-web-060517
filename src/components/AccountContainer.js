import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: transactions
    }
  }

  handleChange() {
    ///idk
    this.state.transaction.category.filter(() => {
      return transactions.category.includes(checked.value)
    })
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(data => this.setState({
      transactions: data
    }))
  }

  render() {
    console.log(transactions)
    return (
      <div className="ui grid container">

        <CategorySelector handleChange={this.handleChange} />

        <TransactionsList transactions={this.state.transactions} />

      </div>
    )
  }
}

export default AccountContainer

import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import CategorySelector from './CategorySelector'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      selected: 'All'
    }
  }

  handleChange = (category) => {
    this.setState({
      selected: category
    })


  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(data => this.setState({
      data: data
    }))
  }

  render() {
    //console.log(transactions)
// what do you want me to do with each item from my array

    const transactions = this.state.selected == 'All' ? this.state.data : this.state.data.filter((ele) => {
      console.log(ele.category)
      return ele.category == this.state.selected
      // some truthy value
    })
    return (
      <div className="ui grid container">

        <CategorySelector handleSelect={this.handleChange} categorySelected={this.state.selected}/>

        <TransactionsList transactions={transactions}/>

      </div>
    )
  }
}

export default AccountContainer

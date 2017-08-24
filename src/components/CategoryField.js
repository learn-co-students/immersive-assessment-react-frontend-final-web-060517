import React from 'react'

const CategoryField = (props) => {

  const handleClick = () => {
    props.handleSelect(category)
  }

  const { category, checked } = props

  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">

        <input
          type="radio"
          name="category"
          onClick={handleClick}
          checked={ checked }
        />
        <label>{ category }</label>

      </div>
    </div>
  )
}

export default CategoryField

import React from 'react';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { handleFavourite } from './../actions'

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-right: 10px;
  }
  label {
    margin: 0;
  }
`

export default ({category}) => {
  const dispatch = useDispatch();
  const favourite = useSelector(state => state.favourite);

  const handleCheckbox = () => {
    const item = category === favourite ? null : category;
    dispatch(handleFavourite(item))
  }
  return (
    <CheckboxWrapper>
      <input type="checkbox" name="favourite" checked={category === favourite} onChange={handleCheckbox}/>
      <label name="favourite">Mark as favourite category</label>
    </CheckboxWrapper>
  )
}
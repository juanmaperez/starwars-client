import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Checkbox from './Checkbox'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() })

describe('<Checkbox />', () => {
  const initialState = { favourite: 'vehicles'}
  const mockStore = configureStore()
  let store

  it('matches the snapshot', () => {
    store = mockStore(initialState)
    const wrapper = shallow(<Provider  store={store}><Checkbox category={'vehicles'}/></Provider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders an input checkbox', () => {
    store = mockStore(initialState)
    const wrapper = mount(<Provider store={store}><Checkbox category={'vehicles'}/></Provider>)
    expect(wrapper.find('input').length).toBe(1)
  })

  it('input is checked if tab is favourite', () => {
    store = mockStore(initialState)
    const wrapper = mount(<Provider store={store}><Checkbox category={'vehicles'}/></Provider>)    
    expect(wrapper.find('input').props().checked).toBe(true)    
  })
})
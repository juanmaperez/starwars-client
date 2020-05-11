import React from 'react'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Home from './Home'
import Loading from './Loading'
import List from './List'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';


configure({ adapter: new Adapter() })

describe('<Home />', () => {
  const initialState = { roots: {payload: [] }, resources:{ isLoading: true}}
  const mockStore = configureStore([thunk])
  let store

  it('Home snapshot matches', () => {
    store = mockStore(initialState)
    const wrapper = shallow(<Provider store={store}><Home /></Provider>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Home renders Loading if loading', () => {
    store = mockStore(initialState)
    const wrapper = mount(<Provider store={store}><Home/></Provider>)
    expect(wrapper.find('.vader').length).toBe(1)

  })

  it('Home load cover if not loading and no tab', () =>{
    store = mockStore({roots: {payload: [] }, resources :{
      isLoading: false
    }}) 
    const wrapper = mount(<Provider store={store}><Home/></Provider>)
    expect(wrapper.find('.leia').length).toBe(1)
  })
})
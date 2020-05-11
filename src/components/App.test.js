import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import App from './App'

configure({ adapter: new Adapter() })

describe('<App/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App>
      <div className="test"></div>
    </App>)
  })
  it('matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the children passed', () => {
    expect(wrapper.find('.test').length).toBe(1)
  })
})
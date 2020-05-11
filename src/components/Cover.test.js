import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Cover from './Cover'

configure({ adapter: new Adapter() })

describe('<Cover />', () => {
  it('Cover snapshot matches', () => {
    const wrapper = shallow(<Cover/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
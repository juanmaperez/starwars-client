import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Loading from './Loading'


configure({ adapter: new Adapter() })

describe('<Loading />', () => {
  it('Loading snapshot matches', () => {
    const wrapper = shallow(<Loading />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
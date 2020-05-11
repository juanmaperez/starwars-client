import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import List from './List'
import Cover from './Cover'
import { TabContent } from 'reactstrap';

configure({ adapter: new Adapter() })

describe('<List />', () => {

  it('List snapshot matches', () => {
    const wrapper = shallow(<List resources={{ results: []}} keys={['item', 'item2']}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('If results, load the content', () => {
    const wrapper = shallow(<List resources={{ results: []}} keys={['item', 'item2']}/>)
    expect(wrapper.find(TabContent).length).toBe(1)
  })

  it('If not results, load the cover', () => {
    const wrapper = shallow(<List resources={{ results: null}} keys={['item', 'item2']}/>)
    expect(wrapper.find(Cover).length).toBe(1)
  })

})
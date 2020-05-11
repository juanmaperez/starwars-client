import React from 'react'
import styled from 'styled-components'
import { TabContent, TabPane } from 'reactstrap'
import Cover from './Cover'
import Checkbox from './Checkbox';

const Resource = styled.div`
  border-radius: 100px;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.09);
  padding: 10px 20px;
  margin: 10px;
  position: relative;
  cursor: pointer;
  .description {
    position: absolute;
    left: 0px;
    top: 50px;
    width: 300px;
    background: #fff;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.09);
    border-radius: 10px;
    padding: 10px;
    display: none;
    z-index: 10;
    span {
      display: block;
      width: 100%;
    }
  }
  &:hover {
    .description {
      display block;
    }
  }
`
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
`

export default ({ resources, tab, keys }) => {
  const { results } = resources;
  return results
    ? <TabContent className={tab + ' table'} activeTab={tab}>
        {keys.map(k => (
            <TabPane
              key={k}
              tabId={k}
            >
              <Flex>
              { results.map((item, i) => 
                <Resource key={i}>
                  <span>{ item.name || item.title }</span>
                  <div className="description">
                    {Object.keys(item).map(k => <span key={k}><strong>{ k.replace(/_/g, ' ') }: </strong>{ item[k] }</span>)}
                  </div>
                </Resource>)}
              </Flex>
            </TabPane>
        ))}
      <Checkbox category={tab}/>
      </TabContent>
    : <Cover />
}
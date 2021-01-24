import React from 'react'
import styled from 'styled-components'
import Ptag from './fonts'
import {connect} from 'react-redux'
import Tab from './tab'


const ScrollableTabs = ({tabs, selected}) =>{

    return (
        <TabsScroll>
            {
                tabs.map( (item) => 
                    <Tab 
                        key={item['id']}
                        id={item['id']}
                        title={item['title']}
                        selected={item['id'] === selected}
                    />
                )
            }
        </TabsScroll>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        tabs: state.tabs,
        selected: state.currentTab
    }
}


export default connect(mapStateToProps )(ScrollableTabs)



const TabsScroll = styled.div`
    display: flex;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`


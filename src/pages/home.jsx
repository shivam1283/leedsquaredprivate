import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import Icons from '../components/icons'
import plus from '../assets/plus.png'
import ScrollableTabs from '../components/scrollableTabs'


class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {addTab} = this.props
        return(
            <Root>
                <Header>
                    {`Demo Container`}
                </Header>
                <TabContainer>
                    <Icons width='8' icon='chevron_left'/>
                        <ScrollableTabs/>
                        
                    <AddIcon onClick={() => addTab()} src={plus} width='18px' height='18px'/>
                    <Icons width='8' icon='chevron_right'/>
                </TabContainer>

            </Root>
        )
        
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        tabs: state.tabs,
        selected: state.currentTab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTab : () => dispatch({type: 'ADD_TAB'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const Root = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #000;
    border-radius: 4px;
    height: 100%;
    
`

const Header = styled.header`
    padding: 12px;
    font-family: Roboto;
    font-size: 1.8rem;
    color: #000;
`

const TabContainer = styled.div`
    display: flex;
    background-color: #00000012;
    padding: 12px;
    align-items: center;
`

const AddIcon = styled.img`
    margin: 0 8px;
`

import React from 'react'
import styled from 'styled-components'
import Ptag from './fonts'
import {connect} from 'react-redux'
import {selectTab} from '../actions/selectTab'


const Tab = ({title, selected, selectTabCallback, id}) => {
    return (
        <Root selected={selected} onClick={() => selectTabCallback(id)}>
            <Ptag size='1.5rem' align='center'>
                {title}
            </Ptag>
        </Root>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectTabCallback: (id) => dispatch(selectTab(id))
    }
}

const mapstateToProps = (state,ownProps) => {
    return state
} 

export default connect(mapstateToProps, mapDispatchToProps)(Tab)

const Root= styled.button`
    display: flex;
    padding:0 12px;
    justify-content: center;
    min-width: 14rem;
    box-sizing: border-box;
    border: none;
    outline:none;
    border-bottom:${props => props.selected ? '2px solid blue' : 'none'} ;
`

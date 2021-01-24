import styled from 'styled-components'

const Ptag = styled.p`
    font-family: Roboto;
    font-size: ${props => props.size ? props.size : '1.2rem'};
    font-weight: ${props => props.weight ? props.weight : '500'};
    text-align: ${props => props.align ? props.align : 'left'};
`

export default Ptag
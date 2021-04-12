import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    border: solid 1px ${({theme}) => theme.border};
    border-radius: 8px;
    padding: 12px 16px;
    text-align: center;

    .title{
        margin-bottom: 6px;
        display: block;
    }

    .reach-goal{
        margin-left: 16px;
    }

`


export  default Wrapper;

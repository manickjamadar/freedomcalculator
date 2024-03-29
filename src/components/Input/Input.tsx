import styled from 'styled-components'
const Input = styled.input<{ error?: boolean }>`
    display: block;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #cdcdcd;
    padding: 12px 16px;
    border-radius: 4px;
    &:focus{
        outline:none;
        border: 1px solid dodgerblue;
    }
`;

export default Input

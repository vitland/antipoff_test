import styled from "styled-components"
export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 8px;
  position: relative;
  & > input {
    box-sizing: border-box;
    height: 48px;
    padding: 12px 8px 12px 16px;
    align-items: center;
    border: none;
    border-radius: 8px;
    background: #f8f8f8;
    font-size: 14px;
  }
  & > label {
    color: #151317;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 136.187%;
  }
  & > .icon {
    position: absolute;
    width: 24px;
    height: 24px;
    color: #808185;
    right: 9px;
    top: 41px;
  }
  & > .icon:hover {
    cursor: pointer;
  }
`

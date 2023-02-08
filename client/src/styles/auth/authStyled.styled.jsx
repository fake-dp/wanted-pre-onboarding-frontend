import styled from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #192a56;
  width: 450px;
  height: 470px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  > h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #fff;
  }
`;

export const AuthInputFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  > span {
    position: absolute;
    margin-left: 20px;
    right: 20px;
    color: #dcdde1;
    > svg {
      font-size: 25px;
    }
    &.active {
      color: #00b894;
    }
  }
`;

export const AuthInput = styled.input`
  /* padding: 10px 100px; */
  box-sizing: border-box;
  background-color: #fff;
  border: none;
  border-radius: 35px;
  color: #000000ff;
  font-family: inherit;
  font-size: inherit;
  height: 45px;
  outline: 0;
  padding-inline-end: 44px;
  padding-inline-start: 52px;
  width: 350px;
`;

export const SubmitButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 35px;
  color: grey;
  font-family: inherit;
  font-size: inherit;
  height: 45px;
  outline: 0;
  padding-inline-end: 44px;
  padding-inline-start: 52px;
  width: 350px;
  margin-top: 10px;
  &.active {
    cursor: pointer;
    color: #fff;
    background-color: #487eb0;
    &:hover {
      transform: scale(0.99);
    }
  }
`;

export const LinkText = styled.p`
  margin-top: 30px;
  cursor: pointer;
  border: 1px solid #fff;
  padding: 10px;
  border-radius: 15px;
  > a {
    color: #fff;
    text-decoration: none;
    outline: 0;
  }
  &:active {
    transform: scale(0.99);
  }
`;

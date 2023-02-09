import styled from "styled-components";

export const TodoWrapper = styled.div`
  display: flex;
  background-color: #192a56;
  flex-direction: column;
  padding: 30px;
  min-width: 600px;
  min-height: 800px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const TodoHeaderWrapper = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  > h1 {
    font-size: 24px;
    font-weight: 700;
  }
  > button {
    cursor: pointer;
    background-color: #f0f0f0;
    border: none;
    border-radius: 35px;
    color: grey;
    font-family: inherit;
    font-size: inherit;
    height: 35px;
    outline: 0;
    width: 150px;
    &:hover {
      color: #c23616;
      /* transition: 0.6s; */
      border: 1px solid #c23616;
    }
  }
`;

export const CreateTodoFormWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > input {
    box-sizing: border-box;
    background-color: #fff;
    border: none;
    border-radius: 15px;
    color: #000000ff;
    font-family: inherit;
    font-size: inherit;
    height: 55px;
    outline: 0;
    padding-inline-end: 44px;
    padding-inline-start: 52px;
    width: 500px;
  }
  > button {
    cursor: pointer;
    border: none;
    box-sizing: border-box;
    background-color: #00b894;
    color: #fff;
    font-weight: 700;
    border-radius: 15px;
    font-family: inherit;
    font-size: inherit;
    height: 55px;
    width: 60px;
    &:active {
      transform: scale(0.99);
    }
  }
`;

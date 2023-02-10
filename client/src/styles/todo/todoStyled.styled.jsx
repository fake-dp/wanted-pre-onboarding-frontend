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

export const TodoListWrapper = styled.div`
  background-color: #2d3436;
  padding: 10px;
  border-radius: 15px;
  height: 600px;
  overflow: auto;
`;

export const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #fff;
  border: none;
  border-radius: 15px;
  color: #000000ff;
  font-family: inherit;
  font-size: inherit;
  height: 45px;
  margin: 10px;
  outline: 0;
  padding-inline-end: 44px;
  padding-inline-start: 52px;
  /* width: 520px; */
  > li {
    /* background: red; */
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    > input {
      border: none;
      height: 35px;
      margin: 10px;
      width: 66%;
      &:focus {
        outline: none;
      }
    }
    > button:nth-child(2) {
      position: absolute;
      right: 70px;
      cursor: pointer;
      border: none;
      box-sizing: border-box;
      background-color: #0984e3;
      color: #fff;
      font-weight: 700;
      border-radius: 15px;
      font-family: inherit;
      font-size: inherit;
      height: 35px;
      width: 55px;
      &:active {
        transform: scale(0.99);
      }
    }
    > button:nth-child(3) {
      position: absolute;
      right: 0px;
      cursor: pointer;
      border: none;
      box-sizing: border-box;
      background-color: #e17055;
      color: #fff;
      font-weight: 700;
      border-radius: 15px;
      font-family: inherit;
      font-size: inherit;
      height: 35px;
      width: 55px;
      &:active {
        transform: scale(0.99);
      }
    }
    > label {
      display: flex;
      align-items: center;
      > input {
        appearance: none;
        border: 1.5px solid gainsboro;
        border-radius: 0.35rem;
        width: 1.5rem;
        height: 1.5rem;
        &:checked {
          border-color: transparent;
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
          background-size: 100% 100%;
          background-position: 50%;
          background-repeat: no-repeat;
          background-color: limegreen;
        }
      }
      > span {
        margin-left: 10px;
        &.check {
          text-decoration: line-through;
        }
      }
    }
  }
`;

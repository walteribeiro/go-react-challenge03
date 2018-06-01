import styled from 'styled-components';

export const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  opacity: 1;
  animation: show .5s ease;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    flex: 1;
    height: 40px;
    width: 216px;    
    padding: 0 20px;
    font-size: 15px;    
    border: 1px solid #EEE;
    border-radius: 3px;
    margin-bottom: 10px;
  }

  div {
    button {
      height: 40px;
      width: 100px;
      border-radius: 3px;
      border: 0;
      color: #FFF;
      padding: 0 10px;
      font-weight: bold;
      margin: 0 8px;
      cursor: pointer;
    }
  }

  #cancel {
    background: #BBB;
    &:hover {
      background: #929292;
    }
  }

  #save {
    background: #85c47c;
    &:hover {
      background: #4f8647;
    }
  }
`;

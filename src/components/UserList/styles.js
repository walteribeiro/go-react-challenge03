import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30%;
  
  p {     
    padding: 10px;
    font-size: 18px;
  }
`;

export const User = styled.div`
  display: flex;

  img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin: 0 10px;
  }

  #direction {
    align-self: center;
    margin-left: auto;
    color: #ccc;
  }

  #remove {
    align-self: center;
    margin-left: auto;
    color: #D45454;
    cursor: pointer;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  strong {
    font-size: 16px;
    color: #333;
  }

  small {
    font-size: 14px;
    color: #999;
  }
`;

export const Hr = styled.hr`
  color: #eee;
  margin: 15px 0
`;

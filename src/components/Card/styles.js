import styled from "styled-components";
import {AiFillHeart} from 'react-icons/ai'

export const Section = styled.div`
  padding: 0px 510px;
  margin-bottom: 25px;

`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(19, 19, 31, 0.05);
  border-radius: 5px;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #717171;
  font-size: 16px;
  font-weight: 400;
`

export const Icon = styled(AiFillHeart)`
  color: #717171;
  font-size: 20px;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    fill: #574AE8;
  }
`;

export const Title = styled.h3`
  color: #1A202C;
  font-weight: 400;
  font-size: 24px;
`

export const Desc = styled.p`
  color: #717171;
  font-weight: 400;
  font-size: 18px;
`
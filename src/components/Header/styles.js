import styled from "styled-components";

export const Section = styled.header`
  width: 100%;
  height: 250px;
  background: linear-gradient(88.27deg, #574AE8 0%, #3EA1DB 100%);
  color: #ffffff;
  margin-bottom: 100px;
`

export const Container = styled.div`
  padding: 40px 510px;

`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;
`

export const Logo = styled.p `
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
`

export const Blog = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 20px;
`

export const Input = styled.input`
  border: none;
  background: transparent;
  color: #ffffff;
  outline: none;
  font-size: 18px;
  ::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    opacity: 0.5;
    line-height: 21.78px;
  }
`
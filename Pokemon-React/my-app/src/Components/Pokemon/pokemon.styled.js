import styled from "styled-components";

export const Image = styled.img`
  flex: 1;
  expo: contain;
  width: 22%;
  transition: all cubic-bezier(0.4, 0, 1, 1) 200ms;
`;
export const Data = styled.div`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: bold;
`;
export const PokemonCard = styled.div`
  margin-top: 3%;
  margin-bottom: 2%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex: 33%;
  min-width: 300px;
  height: 300px;
  transition: all ease 200ms;
  &:hover {
    ${Image} {
      transform: translateY(-30px) scale(1.2);
    }
  }
`;

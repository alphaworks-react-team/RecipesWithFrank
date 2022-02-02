import styled from 'styled-components';

export const JumbotronText = styled.p`
  font-size: 26px;
  padding: 0;
  position: relative;
`;

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecipeContainer = styled.div`
  width: 1200px;
  padding: 20px;
  background-color: beige;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h1`
  width: 1030px;
  // padding: 20px;
`;

export const RecipeCard = styled.div`
  width: 500px;
  margin: 15px;
  background-color: pink;
  border-radius: 15px;
  display: inline-block;
  overflow: hidden;
`;

export const RecipeDetailsContainer = styled.div`
  padding: 10px 15px 15px 15px;
  display: flex;
  flex-direction: column;
`;

export const RecipeTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  color: grey;
`;

export const RecipeDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RecipeDetailGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 220px;
`;

export const RecipeDetailText = styled.p`
  font-size: 20px;
  margin: 0 5px;
  color: grey;
`;

export const ToolTipText = styled.span`
  visibility: hidden;
  position: absolute;
  z-index: 1;
  width: ${width => width};
  bottom: 27px;
  left: ${props => props.positionLeft};
  background-color: ${props => props.backgroundColor};
  color: white;
  padding: 5px;
  text-align: center;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 1.5s;
  font-style: italic;
  ::after {
    content: ' ';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: ${props => props.ml};
    border-width: 5px;
    border-style: solid;
    border-color: ${props => props.backgroundColor} transparent transparent
      transparent;
  }
`;

export const ToolTipBox = styled.div`
  position: relative;
  :hover {
    ${ToolTipText} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
`;

export const RecipeImage = styled.div`
  width: 500px;
  height: 300px;
  background-color: pink;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 12px 12px 0 0;
  transition: transform 0.5s;
  position: relative;
  &:hover {
    transform: scale(1.08);
  }
`;

import styled from "styled-components";

export const BodyWrapper = styled.div`
  color: #3e3d57;
  width: 80%;
  margin: 0 auto;
`;

export const DescriptionWrapper = styled.div`
  h1 {
    font-size: 22pt;
  }

  p {
    margin-left: 1rem;
    font-size: 16pt;
  }
`;
export const SpecialityWrapper = styled.div`
    display: flex;
    flex-direction: column;

 
    }
    h1 {
        font-size: 24pt;
    }
    
`;

export const SkillWrapper = styled.div`
  margin: 1rem 3rem;
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }
  h1 {
    font-size: 18pt;
  }
`;

export const ImgSkillWrapper = styled.div`
  @media (max-width: 960px) {
    width: 50%;
  }
  img {
    width: 150px;
    margin-right: 1.5rem;
  }
`;

export const Grid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 20px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  color: #3e3d57;
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: transform 1s;
  text-decoration: none;
  h1 {
    font-size: 18pt;
    text-align: center;
  }
  p {
    margin: 0 20px;
  }
  :hover {
    transform: scale(1.05);
  }
`;
export const Content = styled.div`
  padding: 1rem 0;
  min-height: 160px;
`;
export const Stats = styled.div`
  display: flex;
  align-items: center;

  svg {
    padding-left: 0.5rem;
  }
  p {
    padding-left: 0.25rem;
  }
`;

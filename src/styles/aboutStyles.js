import styled from "styled-components";

export const BodyWrapper = styled.div`
  color: #3e3d57;
  width: 80%;
  margin: 0 auto;
`;
export const AboutMeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ImgWrapper = styled.div`
  img {
    width: 300px;
    height: 200px;
  }
`;
export const TextWrapper = styled.div`
  h1 {
    font-size: 22pt;
  }
  p {
    padding-left: 1rem;
    font-size: 16pt;
  }
`;

export const ActivityWrapper = styled.div`
  h1 {
    font-size: 22pt;
  }
  h4 {
    font-size: 18pt;
  }
  p {
    font-size: 16pt;
    padding-left: 1rem;
  }
  a img {
    width: 64px;
    height: 59px;
    transition: transform 1s;
  }
  img:hover {
    transform: scale(1.1);
  }

  @media (max-width: 960px) {
    h1 {
      font-size: 18pt;
    }
    h4 {
      font-size: 14pt;
    }
    p {
      font-size: 12pt;
      padding-left: 1rem;
    }
  }
`;

export const ActivityItem = styled.div`
  margin: 0 2em;
  display: flex;
`;

export const ActivityDescription = styled.div`
  padding-left: 1em;
`;

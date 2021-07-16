import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  font-size: 22px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px 5%;

  h1 {
    font-size: 28px;
    color: #3e3d57;
  }
  li,
  a {
    color: #3e3d57;
    text-decoration: none;
    list-style: none;
  }

  img {
    height: 75%;
    width: 75%;
  }
`;

export const ListWrapper = styled.ul`
  display: flex;

  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

export const LinkWrapper = styled.li`
  background-color: ${(props) => props.color};
  margin: 0px 1rem;
  padding: 0.25rem 1rem;
  @media (max-width: 620px) {
    margin-bottom: 0.5rem;
  }

  :hover {
    opacity: 0.8;
  }
`;

export const ImageWrapper = styled.div`
    background-image = url("../../illustrations/link-backing.svg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  
`;

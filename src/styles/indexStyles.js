import styled from "styled-components";


export const BodyWrapper = styled.div`
    font-size: 24pt;
    color: #3E3D57;
    @media (max-width: 960px) {
        font-size: 14pt;
    }

    transition: font-size .1s ease-out;
`;
export const IntroWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;

    @media (max-width: 520px) {
        flex-direction: column;
    }
`;


export const TextWrapper = styled.div`
    margin-left: 3rem;
`;

export const BoldSub = styled.div`
    font-weight: 600;
`;

export const ItalicSub = styled.div`
    font-style: italic;
`;

export const ImgWrapper = styled.div`
    @media (max-width: 960px) {
        width: 100%;
    }

    img {
        width: 80%;
    }
`;

export const QuoteWrapper = styled.div`
    text-align: center;
    font-style: italic;
    margin: 5em 0;
`;
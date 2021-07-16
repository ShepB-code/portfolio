import styled from "styled-components"


export const Wrapper = styled.div`

    
    display: flex;
    font-size: 22px;
    justify-content: space-between;
    align-items: center;
    padding: 30px 5%;
    width: 90%;
    color: #3E3D57

    h1 {
        font-size: 28px;
    }
    

    img {
        height: 75%;
        width: 75%;
    }
`;

export const MadeByWrapper = styled.div`
    p {
        color: #3E3D57;
        font-size: 16pt;
        font-weight: 600;
    }
    a {    
        color: #3E3D57;
        text-decoration: none;
        transition: color 1s;
    }
    a:hover {
        color: #6C63FF;
    }
`;

export const ListWrapper = styled.ul`
    display: flex;
`;

export const LinkWrapper = styled.li`
    display: inline-block;
    color: #3E3D57;
    list-style: none;
    padding: 0px 10px;
    width: 50px;
    height: 50px;

    a {
        display: inline-block;
        text-decoration: none;
    }

    svg {
        height: 80%;
        width: 80%;
    }
    path {
        transition: fill 1s;
    }
    svg:hover {
        path {
            fill: #6C63FF;
        }
        
    }
`;
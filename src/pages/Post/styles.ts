import { Link } from "react-router-dom";
import styled from "styled-components";


export const PostContainer = styled.main`
    max-width: 864px;
    margin: 0 auto;
    padding: 0 0.5rem;
`;

export const PostInfo = styled.section`
    margin-top: -5.5rem;
    margin-bottom: 2.5rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: ${props => props.theme.base_profile};

    box-shadow: 0 0.125rem 1.75rem rgb(0,0,0,0.2);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.25rem;
    }

    h1  {
        color: ${props => props.theme.base_title};
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    
    footer {
        display: flex;
        gap: 2rem;
        color: ${props => props.theme.base_label};

        div {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            line-height: 0;
        }
    }

`;

export const PostGithubLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${props => props.theme.brand_blue};
    text-decoration: none;
    font-size: 0.75rem;

    border-bottom: 1px solid transparent;
    padding-bottom: 0.25rem;

    transition: border-bottom 0.3s;

    span {
        font-weight: bold;
        text-transform: uppercase;
        line-height: 0;
    }

    &:hover {
        border-bottom: 1px solid ${props => props.theme.brand_blue};
    }
`;

export const PostBackLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${props => props.theme.brand_blue};
    text-decoration: none;
    font-size: 0.75rem;

    border-bottom: 1px solid transparent;
    padding-bottom: 0.25rem;

    transition: border-bottom 0.3s;

    span {
        font-weight: bold;
        text-transform: uppercase;
        line-height: 0;
    }

    &:hover {
        border-bottom: 1px solid ${props => props.theme.brand_blue};
    }
`;

export const PostContent = styled.section`
    padding: 0 2rem;

    & > p {
        margin-bottom: 1.5rem;
    }

    h1, h2, h3 {
        color: ${props => props.theme.brand_blue};
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 0.25rem;
    }

    ol, ul {
        padding-left: 2rem;
        margin-bottom: 1.5rem;
    }

    li::marker {
        color: ${props => props.theme.brand_blue};
    }

    pre, blockquote {
        background-color: ${props => props.theme.base_post};
        padding: 1rem;
        border-radius: 2px;
        margin-bottom: 1.5rem;
    }

    blockquote {
        border-left: 2px solid ${props => props.theme.brand_blue};
    }

    code {
        font-family: 'Courier New', Courier, monospace;
    }

    a {
        color: ${props => props.theme.brand_blue};
        text-decoration: none;
        border-bottom: 1px solid transparent;
        padding-bottom: 0.25rem;
        transition: border-bottom 0.3s;

        &:hover {
            border-bottom: 1px solid ${props => props.theme.brand_blue};
        }

    }
`;
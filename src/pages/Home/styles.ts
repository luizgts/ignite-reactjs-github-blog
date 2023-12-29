import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.main`
    max-width: 864px;
    margin: 0 auto;
    padding: 0 0.5rem;
`;

export const Profile = styled.section`
    display: flex;
    align-items: center;
    gap: 2rem;

    margin-top: -5.5rem;
    margin-bottom: 4.5rem;
    padding: 2rem;
    border-radius: 10px;
    background-color: ${props => props.theme.base_profile};

    box-shadow: 0 0.125rem 1.75rem rgb(0,0,0,0.2);

    img {
        width: 9.25rem;
        height: 9.25rem;
        border-radius: 8px;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            color: ${props => props.theme.base_title};
            font-size: 1.5rem;
            font-weight: bold;
        }
    }
    
    p {
        margin-bottom: 1.5rem;
    }
    
    footer {
        display: flex;
        gap: 1.5rem;

        div {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            line-height: 0;

            span {
                color: ${props => props.theme.base_subtitle};
            }

            svg {
                color: ${props => props.theme.base_label};
            }
        }
    }

`;

export const ProfileGithubLink = styled(Link)`
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

export const Publications = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 0.75rem;

    h2 {
        font-size: 1.125rem;
        font-weight: bold;
        color: ${props => props.theme.base_subtitle};
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme.base_span};
    }
`;

export const SearchInput = styled.section`
    margin-bottom: 3rem;

    input {
        width: 100%;
        height: 3.125rem;
        padding: 0 1rem;

        border: 1px solid ${props => props.theme.base_border};
        border-radius: 6px;

        background-color: ${props => props.theme.base_input};
        color: ${props => props.theme.base_text};

        &::placeholder {
            color: ${props => props.theme.base_label};
        }

        &:focus {
            outline: none;
            border-color: ${props => props.theme.brand_blue};
        }
    }
`;

export const PostContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding-bottom: 2rem;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const Post = styled.article`
    border-radius: 10px;
    border: 2px solid transparent;
    padding: 2rem;
    height: 16.25rem;
    overflow: hidden;
    background-color: ${props => props.theme.base_post};
    cursor: pointer;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${props => props.theme.base_label}
    }

    header {
        display: flex;
        gap: 1rem;

        margin-bottom: 1.25rem;

        div {
            flex: 1;
            font-size: 1.25rem;
            font-weight: bold;
            color: ${props => props.theme.base_title};

            display: -webkit-box;
            overflow: hidden;

            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            white-space: pre-wrap;
        }

        span {
            font-size: 0.875rem;
            color: ${props => props.theme.base_span};
        }
    }

    p {
        display: -webkit-box;
        overflow: hidden;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        white-space: pre-wrap;
    }
`;
import { useParams } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faChevronLeft, 
    faArrowUpRightFromSquare,
    faCalendarDay,
    faComment
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { 
    PostContainer,
    PostInfo,
    PostBackLink,
    PostGithubLink,
    PostContent
} from "./styles";

import Markdown from "react-markdown";

import { Issue } from "../../types/api";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";


export function Post() {

    const params = useParams();

    const [post, setPost] = useState({} as Issue);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        api.get(`repos/luizgts/ignite-reactjs-github-blog/issues/${params.postId}`)
            .then(response => {
                setPost(response.data);   
            }).catch(error => { 
                console.error(error)
            }).finally(() => {
                setIsLoading(false);
            })
    }, [params.postId]);

    if (isLoading) {
        return (
            <PostContainer>
                Carregando ...
            </PostContainer>
        );
    }

    return (
        <PostContainer>
            <PostInfo>
                <header>
                    <PostBackLink to="/">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <span>Voltar</span>
                    </PostBackLink>

                    <PostGithubLink 
                        to={post.html_url}
                        target="_blank"
                    >
                        <span>Ver no Github</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </PostGithubLink>
                </header>
                <h1>{post.title}</h1>
                <footer>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>{post.user.login}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <span>
                            {formatDistance(
                                new Date(post.created_at),
                                new Date(),
                                {
                                    locale: ptBR
                                }
                            )}
                        </span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        <span>{post.comments} {post.comments != 1 ? 'comentários' : 'comentário'}</span>
                    </div>
                </footer>
            </PostInfo>

            <PostContent>
                <Markdown>{post.body}</Markdown>
            </PostContent>
        </PostContainer>
    )
}
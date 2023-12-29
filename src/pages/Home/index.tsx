import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserGroup,
    faArrowUpRightFromSquare 
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { 
    HomeContainer, 
    Profile,
    ProfileGithubLink,
    Publications,
    SearchInput,
    PostContainer,
    Post 
} from "./styles";

import { api } from "../../lib/axios";
import { UserProfileResponse, IssuesResponse  } from "../../types/api";

import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SearchInputSchema = z.object({
    query: z.string()
});

type SeachInputType = z.infer<typeof SearchInputSchema>;

export default function Home() {

    const {
        register,
        handleSubmit
    } = useForm<SeachInputType>({
        resolver: zodResolver(SearchInputSchema)
    });

    const [posts, setPosts] = useState({} as IssuesResponse);
    const [userProfile, setUserProfile] = useState({} as UserProfileResponse);
    const [isLoading, setIsLoading] = useState(true);

    async function handleSearchInput(data: SeachInputType) {
        const response = await fetchPosts(data.query);
        setPosts(response.data);
    }

    function fetchUserProfile() {
        return api.get<UserProfileResponse>('/users/luizgts');
    }

    async function fetchPosts(query?: string) {
        const searchURI = query
        ? `search/issues?q=${query}%20repo:luizgts/ignite-reactjs-github-blog`
        : `search/issues?q=repo:luizgts/ignite-reactjs-github-blog`;
        return api.get<IssuesResponse>(searchURI);
    }

    useEffect(() => {
        setIsLoading(true);
        Promise.all([fetchPosts(), fetchUserProfile()])
            .then(response => {
                setPosts(response[0].data);
                setUserProfile(response[1].data);
            }).catch(error => {
                console.error(error);
            }).finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return (
            <HomeContainer>
                Carregando ...
            </HomeContainer>
        );
    }

    return (
        <HomeContainer>
            <Profile>
                <img src={userProfile.avatar_url} alt="" />
                <div>
                    <header>
                        <h1>{userProfile.name}</h1>
                        <ProfileGithubLink to={userProfile.html_url} target="_blank">
                            <span>Github</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </ProfileGithubLink>
                    </header>
                    <p>{userProfile.bio}</p>
                    <footer>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>{userProfile.login}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUserGroup} />
                            <span>{userProfile.followers} {userProfile.followers > 1 ? 'seguidores' : 'seguidor'}</span>
                        </div>
                    </footer>
                </div>
            </Profile>

            <Publications>
                <h2>Publicações</h2>
                <span>{posts.total_count} {posts.total_count > 1 ? 'publicações' : 'publicação'}</span>
            </Publications>

            <SearchInput>
                <form 
                    onSubmit={handleSubmit(handleSearchInput)}
                    autoComplete="off"
                >
                    <input
                        type="text"
                        placeholder="Buscar conteúdo"
                        {...register('query')}
                    />
                </form>
            </SearchInput>

            <PostContainer>
                {
                    posts.items.map(post => (
                        <Link to={`post/${post.number}`} key={post.number}>
                            <Post>
                                <header>
                                    <div>{post.title}</div>
                                    <span>
                                        {formatDistance(
                                            new Date(post.created_at),
                                            new Date(),
                                            {
                                                locale: ptBR
                                            }
                                        )}
                                    </span>
                                </header>
                                <p>{post.body}</p>
                            </Post>
                        </Link>
                    ))
                }
            </PostContainer>
        </HomeContainer>
    )
}
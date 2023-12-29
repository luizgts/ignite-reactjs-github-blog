export type IssuesResponse = {
    total_count: number,
    items: Issue[]
}

export type Issue = {
    id: number,
    number: number,
    title: string,
    body: string,
    comments: number,
    html_url: string,
    user: { login: string }
    created_at: string,
}

export type UserProfileResponse = {
    id: number,
    name: string,
    login: string,
    avatar_url: string,
    html_url: string
    bio: string,
    followers: number
}
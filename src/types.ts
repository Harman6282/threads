export type User = {
    id: string;
    name: string;
    username: string;
    avatar_url: string;
    bio: string;
}

export type Post = {
    id: string;
    content: string;
    user_id: string;
    user: User;
    parent_id: string | null;
    parent: Post | null;
    replies: Post[];
    createdAt: string;
    
}
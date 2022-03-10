export interface IComment{
    id: number
    postId: number
    parent_id: number
    user: string,
    date: Date,
    content: string
    children?: IComment[]
}
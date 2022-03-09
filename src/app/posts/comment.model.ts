export interface IComment{
    id: number
    post_id: number
    parent_id: number
    user: string,
    date: Date,
    content: string
}
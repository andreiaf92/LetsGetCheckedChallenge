import { IComment } from '.';
export interface IPost{
    id: number
    title: string
    author: string
    publish_date: Date
    slug: string
    description: string
    content: string
    comments: IComment[]
}
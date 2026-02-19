import { IPost } from "./post";

export interface IPagination {
    data: IPost[];
    links: IPaginationLink[];
}

export interface IPaginationLink {
    active: boolean;
    label: string;
    page: number | null;
    url: string | null;
}

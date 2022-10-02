// some type interfaces used in the application
export interface IRawData {
    page: number
    total_pages: number
    data: IUser[]
    
}

export interface IUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}
export interface INewUser {
    email: string,
    password: string
}

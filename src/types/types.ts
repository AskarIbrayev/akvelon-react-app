// some type interfaces used in the application

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

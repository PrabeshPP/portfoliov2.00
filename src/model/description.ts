export interface Description{
    id:string,
    header:string,
    paragraph:string
}

//model for the services fetched from the firebase

export interface Service{
    id:number,
    service:string,
    iconURL:string,
    description:string
}
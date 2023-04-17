 export interface IUser{
    id?:number
    firstName?:String
    lastName?:String
    profession?:String
    status?:String
    old?:number
    size?:number
    kills?:Array<String>
    desc?:String
    image?:String
    city?:String
    country?:String
    contact?:Array<IContact>
    genre?:String
    is_active?:Boolean
}
interface IContact{
    icon?:JSX.Element
    numberPhone?:String
    other?:String
}
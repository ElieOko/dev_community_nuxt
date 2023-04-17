export interface IProject{
    id?:Number
    nom?:String
    desc_full?:String
    short_desc?:String
    images?:Array<String>
    video?:JSX.Element
    pub_year?:String
}
import { Discussion } from "./Discussions"
import { RECEIVE, SEND } from "./action/actions"

export interface User{
    name: string,
    email: string,
    tel: number,
    onLine:boolean,
    infos :string,
    profilImage: string,
    message : {
        time:string,
        content:string
    }
    discussions: Discussion[]

}
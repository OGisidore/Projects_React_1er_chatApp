import { RECEIVE, SEND } from "./action/actions";

export interface Discussion{ 
    status: typeof SEND | typeof RECEIVE | null,
    time:string,
    content:string

}
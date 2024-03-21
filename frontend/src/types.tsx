export type student = {
    _id : string;
    username : string;
    note : string;
    courses : string[];
}

export type course = {
    _id : string;
    name: string;
    courseLength : Number;
    paid : number;
    parentId : string;
    classes : string[];
    isPaid: boolean;
}

export type classes = {
    _id : string;
    date : Date;
    note : string;
    paid : Boolean;
    parentId : string;
}
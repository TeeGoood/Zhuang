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
    parentId : string;
    classes : string[];
    paidClasses: string[];
}

export type classes = {
    _id : string;
    date : Date;
    note : string;
    paid : Boolean;
    parentId : string;
}
export type student = {
    _id : string;
    username : string;
    fname : string;
    lname : string;
    courses : string[];
}

export type course = {
    _id : string;
    name: string;
    courseLength : Number;
    paid : Number;
    parentId : string;
    classes : string[];
}

export type classes = {
    _id : string;
    date : Date;
    note : string;
    paid : Boolean;
    parentId : string;
}
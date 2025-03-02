import ClassRow from "./ClassRow";

interface ClassTableProps{
    classes: String[];
}

const ClassTable = (props: ClassTableProps) => {
    return (  
        <table>
            <thead className="text-slate-400">
                <tr className="border-y border-primary-light table-auto font-normal">
                    <th></th>
                    <th>ครั้งที่</th>
                    <th className="text-start p-2">วันที่</th>
                    <th className="text-start">หมายเหตุ</th>
                    <th>เรียบร้อย</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.classes.map((classId, order) => {
                        return (<ClassRow classId={classId} order={order+1} key={order}/>)
                    })
                }
            </tbody>
        </table>
    );
}
 
export default ClassTable;
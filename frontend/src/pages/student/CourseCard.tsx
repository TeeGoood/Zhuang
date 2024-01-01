const CourseCard = () => {
    return (  
        <div className="flex flex-col gap-4 border border-primary-light p-4 rounded-lg shadow-md shadow-primary-soLight hover:shadow-lg hover:shadow-primary-soLight transition">
            <p className="text-2xl">HSK 3</p>
            <div className="flex items-center justify-between">
                <div className="flex flex-col text-slate-400 text-sm" >
                    <span>
                        เรียนไปเเล้ว
                    </span>
                    <span className="flex items-center gap-2"> 
                        <span className="text-xl text-primary-normal">13/20</span> 
                        <span>ครั้ง</span>
                    </span>
                </div>
                <div className="bg-approval-normal text-white py px-3 rounded-full">
                    จ่ายเเล้ว
                </div>
            </div>
        </div>
    );
}
 
export default CourseCard;
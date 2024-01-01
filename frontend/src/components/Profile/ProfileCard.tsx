const ProfileCard = () => {
    return (  
        <div className="bg-primary-soLight py-4 px-8 rounded-lg flex items-center justify-between ">
            <div className="flex flex-col gap-1 ">
                <span className="text-xl font-bold">
                    Tee
                </span>
                <span className="text-primary-normal">
                    ชยพล อาภายะธรรม
                </span>
            </div>
            <div className="flex gap-2 items-center">
                <span className="font-bold text-primary-normal text-xl">10</span>
                <span>คอร์ส</span>
            </div>
        </div>
    );
}
 
export default ProfileCard;
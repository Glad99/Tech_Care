import logo from "../assets/TestLogo.svg"
import home from "../assets/home_FILL0_wght300_GRAD0_opsz24.svg"
import group from "../assets/group_FILL0_wght300_GRAD0_opsz24.svg"
import calender from "../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
import chat from "../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"
import credit from "../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
import woman from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
import settings from "../assets/settings_FILL0_wght300_GRAD0_opsz24.svg"
import more from "../assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg"



const Navbar = () => {
  return (
    <div className='bg-white h-[72px] flex justify-between p-8 items-center rounded-full'>
            <img src={logo} alt="" className="w-[211px] h-[48px] " />
        <div className="flex w-[663px] justify-between items-center">
            <div className="flex gap-2 hover:bg-[#D8FCF7] cursor-pointer py-3 px-4 rounded-full">
                <img src={home} alt="" className="w-[22px] h-[17px]" />
                <p className="font-bold">Overview</p>
            </div>
            <div className="flex gap-2 bg-[#01F0D0] py-3 px-4 rounded-full hover:bg-[#D8FCF7] cursor-pointer">
            <img src={group} alt="" className="w-[22px] h-[17px]" />
                <p className="font-bold">Patients</p>
            </div>
            <div className="flex gap-2 hover:bg-[#D8FCF7] cursor-pointer py-3 px-4 rounded-full">
            <img src={calender} alt="" className="w-[22px] h-[17px]" />
                <p className="font-bold">Schedule</p>
            </div>
            <div className="flex gap-2 hover:bg-[#D8FCF7] cursor-pointer py-3 px-4 rounded-full">
            <img src={chat} alt="" className="w-[22px] h-[17px]" />
                <p className="font-bold">Message</p>
            </div>
            <div className="flex gap-2 hover:bg-[#D8FCF7] cursor-pointer py-3 px-4 rounded-full">
            <img src={credit} alt=""className="w-[22px] h-[17px]" />
                <p className="font-bold">Transactions</p>
            </div>
        </div>
        <div className="w-[241px] flex justify-between items-center">
           <div className="flex gap-2">
           <img src={woman} alt="" />
           <div>
           <p className="font-bold text-[#072635]">Dr. Jose Simmons</p>
           <p className="text-[#707070]">General Practitioner</p>
           </div>
           </div>
           <div className="h-10 w-0.5 bg-[#EDEDED]"></div>
           <img src={settings} alt="" className="w-[19px] h-[20px]" />
           <img src={more} alt="" className="w-[4px] h-[18px]" />
        </div>
    </div>
  )
}

export default Navbar
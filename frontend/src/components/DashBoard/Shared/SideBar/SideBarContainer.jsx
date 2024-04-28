/* eslint-disable react/prop-types */
import {Power} from "@phosphor-icons/react"
import Buttons from "./Buttons"
import Logo from "./Logo"
import { useSelector } from "react-redux";

export default function SideBarContainer() {
  let Data = [];
   Data   = useSelector((state) => state.DashBoardDatas.SideBarButtons);
  const DashOpt = useSelector((state) => state.DashBoardOpt);
  return (
   <>
    <div className="w-[100%] h-[96%] flex justify-between flex-col items-center rounded-lg">
        <Logo/>
        <div className={`w-[100%] flex flex-col justify-evenly items-center ${Data.length<=6?"h-[40%]":"h-[50%]"}`}>
           {Data.map((item)=>{
            console.log(item.NavigateTo)
            return (
                <Buttons key={item.id} id={item.id} ButtonName={item.ButtonName} Logo={item.Logo} navigateTo={item.NavigateTo} Content={item.Content}  ActiveColor={DashOpt.SeletedOption===item.id?"bg-orange-600":""}/>
            )
           })}
        </div>
       <Buttons className=" mb-16"  ButtonName={"LogOut"} logo={<Power className="font-extrabold" size={25} weight="bold" />} />
    </div>
   </>
  )
}
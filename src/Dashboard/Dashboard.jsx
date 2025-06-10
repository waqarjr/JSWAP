export const Dashboard = ()=>{

return( <>
<div className="bg-black h-screen grid grid-cols-[376px_auto] text-white">
  <div className=" grid grid-cols-[80px_auto]">
    <div className="h-[344px]  grid grid-rows-[80px_auto] gap-[40px] border-r-2 border-gray-900">
        <div className="h-[82px]   flex items-center justify-center " > 
            <img src="/pic/image1.png" className="w-[40px] h-[40px] cursor-pointer" alt="" />
        </div>
        <div className="  flex flex-col gap-5 items-center justify-center" >
            <img src="/pic/image2.png" className="w-[40px] h-[40px] cursor-pointer" alt="" />
            <img src="/pic/image3.png" className="w-[30px] h-[30px] cursor-pointer" alt="" />
            <img src="/pic/image4.png" className="w-[30px] h-[30px] cursor-pointer" alt="" />
        </div>
    </div>
    <div className=" pt-[136px] px-2 gap-10   border-r-2 border-gray-900" >
        <p className="pl-2 w-[88px] h-[36px] font-sans ">
            General    
        </p>
        <div className="[&>*]:px-4 [&>*]:py-2 [&>*]:my-2">
            <div className="flex gap-4 items-center rounded-md transition-colors duration-200 hover:bg-gray-200 hover:text-black cursor-pointer">
                <img src="/pic/imageDashboard1.png" className="w-6 h-6" alt="Dashboard icon" />
                <p className="font-light">Dashboard</p>
            </div>
            <div className="flex gap-4 items-center rounded-md transition-colors duration-200 hover:bg-gray-200 hover:text-black cursor-pointer">
                <img src="/pic/imageDashboard2.png" className="w-6 h-6" alt="Account icon" />
                <p className="font-light">Account</p>
            </div>
            <div className="flex gap-4 items-center rounded-md transition-colors duration-200 hover:bg-gray-200 hover:text-black cursor-pointer">
                <img src="/pic/imageDashboard3.png" className="w-6 h-6" alt="Eligibility icon" />
                <p className="font-light">Eligibility</p>
            </div>
            <div className="flex gap-4 items-center rounded-md transition-colors duration-200 hover:bg-gray-200 hover:text-black cursor-pointer">
                <img src="/pic/imageDashboard4.png" className="w-6 h-6" alt="Whitelisted icon" />
                <p className="font-light">Whitelisted</p>
            </div>
        </div>
    </div>
  </div>
  <div className="">
    <nav className=" text-white flex justify-between items-center px-6 py-4" >

        <div className="flex items-center space-x-6" >
            <img src="/nav/image1.png" alt="" className="w-5 h-5 cursor-pointer" />
            <img src="/nav/image2.png" alt="" className="w-5 h-5 cursor-pointer" />
            <img src="/nav/image3.png" alt="" className="w-5 h-5 cursor-pointer" />
            <img src="/nav/image4.png" alt="" className="w-5 h-5 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-4" >
            <button className="flex items-center  px-4 py-2 rounded-xl space-x-2 hover:bg-[#2a2a2a]">
            <img src="/nav/image5.png" alt="" className="w-5 h-5" />
            <span>BSC</span>
            </button>
            <button className="w-40 h-12 rounded-2xl px-4 py-3 flex items-center justify-center gap-2 text-white font-medium text-base cursor-pointer"
            style={{ background: 'linear-gradient(85.9deg, #D16BA5 -14.21%, #BA83CA 15.03%, #9A9AE1 43.11%, #69BFF8 74.29%, #52CFFE 90.94%, #5FFBF1 111.44%)'
            }}>Connect Wallet
            </button>
        </div>
    </nav>
            {/* text  */}
    <div className="w-[174px] h-[42px] absolute top-[152px] left-[514px]  ">
        <p className=" font-bold text-[34px] leading-[42px] ">
        Dashboard
        </p>
    </div>
    <div className="w-[710px] h-[384px] absolute top-[242px] left-[514px] rounded-[16px] shadow-2xl bg-gray-900" >
            <div className="flex mx-4 my-2 h-10 items-center justify-between gap-2">
                <div className="flex items-center justify-between w-[82px] h-10 ">
                    <img src="/pic/image1.png" className="w-[40px] h-[40px] cursor-pointer" alt="" />
                    <span className="font-bold   tracking-normal" >DOT</span>
                </div>
                <div className="w-[289px] h-8 flex items-center justify-center">
                    <p className="w-[77px] h-6 font-normal  text-[14px] ">Buy DOT on</p>
                    <div className="w-[112px] h-6 flex items-center justify-evenly">
                        <img src="/nav/image6.png" alt="" className="w-4 h-4 " />
                        <p className="h-6 font-normal  text-[14px]" >PancakeSwap</p>
                    </div>
                    <div className="w-[84px] h-6 flex items-center justify-center gap-2">
                        <img src="/nav/image7.png" alt="" className="w-4 h-4 " />
                        <p className="h-6 font-normal  text-[14px]" >UniSwap</p>
                    </div>
                </div>
            </div>
    </div>
  </div>
</div>

</>)

}
export default Dashboard;
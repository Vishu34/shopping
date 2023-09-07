import { BsCheck } from "react-icons/bs";
    const Header=({mydata})=>{

    const{bgcolor,first,second,third,btn,img}=mydata
    return(
        <>
<section className="px-8 md:px-16 xl:px-32 md:pt-20" style={{backgroundColor:bgcolor}}>
    <div className="py-5  grid xs:gridcol1 md:grid-cols-2 gap-3">
        <div className=" space-y-8 p-2 sm:w-[90%]">
        <p className="font-bold txt">{first}</p>
        <h1 className="font-bold text-4xl sm:text-5xl">{second}</h1>
        <p className="text-gray-500">{third}</p>
                    <div className="flex items-center space-x-10 text-gray-500 font-semibold">
                        <ul>
                            <li className='flex items-end space-x-4'><BsCheck className='txt font-bold text-xl mr-2'/>lorem</li>
                            <li className='flex items-end space-x-4'><BsCheck className='txt font-bold text-xl mr-2'/>lorem</li>
                            <li className='flex items-end space-x-4'><BsCheck className='txt font-bold text-xl mr-2'/>lorem</li>
                        </ul>
                        <ul>
                            <li className='flex items-end space-x-4'><BsCheck className='txt font-bold text-xl mr-2'/>lorem</li>
                            <li className='flex items-end space-x-4'><BsCheck className='txt font-bold text-xl mr-2'/>lorem</li>
                            <li className='flex items-end space-x-4'><BsCheck className='txt font-bold text-xl mr-2'/>lorem</li>
                        </ul>
                    </div>

                    <button className="bg-txt text-white font-bold text-sm px-4 py-2 rounded-full">{btn}</button>
        </div>
        <div className="p-2">
              <img src={img} alt="img" className="h-[100%] w-[100%]"/>
             
        </div>
    </div>
</section>
        </>
    )
}


export default Header;
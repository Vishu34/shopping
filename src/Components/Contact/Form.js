const ContactForm=()=>{
    
    return(
        <>
 <section className="px-8 md:px-16 xl:px-32  py-5">
     <div className="">
     <h1 className="font-bold text-xl text-center py-3 ">Contact us</h1>
        <div className="  first-slide py-3 px-2 rounded-md">
           
           <form className="space-y-2">
           <div className="">
            <input type="text" placeholder="Enter your name" className="w-[100%] rounded-md p-2 border-2 border-blue-600"/>
            </div>
            <div className="">
            <input type="email" placeholder="Enter your email" className="w-[100%] rounded-md p-2 border-2 border-blue-600"/>
            </div>
            <textarea rows={10} cols={20}  value="text" className="w-[100%] rounded-md p-2 border-2 border-blue-600">text here...</textarea>
            <div className="">
                <button className="bg-blue-600 text-white  font-semibold rounded-md px-4 py-1"> Send </button>
            </div>
           </form>
        </div>
     </div>
 </section>
        </>
    )
}

export default ContactForm
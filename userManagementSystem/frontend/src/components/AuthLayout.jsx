export default function AppLayout({children}){

 return(

 <div className="min-h-screen bg-[#0b0f19] text-white relative overflow-hidden">

 {/* Gradient Lights */}

 <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[180px] opacity-20 top-[-100px] left-[-100px]"></div>

 <div className="absolute w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[200px] opacity-20 bottom-[-150px] right-[-150px]"></div>

 <div className="relative z-10">

 {children}

 </div>

 </div>
 )
}
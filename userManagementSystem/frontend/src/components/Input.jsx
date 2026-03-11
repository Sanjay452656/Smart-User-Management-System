export default function Input({ placeholder, type="text", onChange }){

 return(

 <div className="relative group">

 <input
 type={type}
 placeholder=" "
 onChange={onChange}
 className="
 w-full
 px-4
 pt-6
 pb-2
 bg-[#14141c]
 border border-white/10
 rounded-xl
 outline-none
 focus:border-purple-500
 transition
 "
 />

 <label
 className="
 absolute
 left-4
 top-2
 text-xs
 text-gray-400
 transition
 "
 >
 {placeholder}
 </label>

 </div>
 )
}
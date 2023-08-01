import { MagnifyingGlass } from "@phosphor-icons/react"

export default function InputSearch(){
    return(
        <div className="hidden sm:block">
            <div className="relative flex items-center ml-2">
                <label className="absolute top-1/2 -translate-y-1/2 left-3"><MagnifyingGlass size={18} color="#232323" weight="bold" /></label>
                <input type="text" placeholder="Search" 
                    className="w-80 lg:w-96 px-4 py-2 bg-zinc-100 rounded pl-10 outline-none placeholder:font-Roboto placeholder:font-medium font-Roboto font-bold">

                </input>
            </div>
            
        </div>
    )
}
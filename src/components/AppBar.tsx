import { SearchBar } from "./SearchBar"

export const AppBar=()=>{
    return <div className="flex justify-between pt-2 p-3">
        <div className="text-md inline-flex items-center pb-2">
            Youtube
        </div>
        <div>
            <SearchBar />
        </div>
        <div className="text-md inline-flex items-center pb-2">
            Sign in
        </div>
    </div>
}
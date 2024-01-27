 export function VideoCard(props:any){
    return <div className="p-2 cursor-pointer">
     <img className="rounded-2xl" src={props.image}></img>
     <div className="grid grid-cols-12 pt-3">
        <div className="col-span-1">
        <img className="rounded-full w-20 h-15" src={props.thumbnailmage}></img>
        </div>
        <div className="col-span-11 pl-3">
            <div>
              {props.title}
            </div>
        
        <div className="col-span-11  text-gray-400 text-base">
             {props.description}
        </div>
        <div className="col-span-11  text-gray-400 text-base">
            {props.views} {props.timeStamp}
        </div>
        </div>
     </div>
    </div>
}
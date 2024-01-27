import { VideoCard } from "./VideoCard"

let VIDEOS=[]
    for(let i=1;i<25;i++){
        VIDEOS.push({
            title:"OG:Teaser(Telugu)| Pawan Kalyan",
            image:"photo.jpg",
            thumbnailmage:"logo.jpg",
            description:"DVV Entertainment",
            views:"45M views",
            timeStamp:"13 days ago"
        })
}
// {
//     title:"OG:Teaser(Telugu)| Pawan Kalyan",
//     image:"photo.jpg",
//     thumbnailmage:"logo.jpg",
//     description:"DVV Entertainment",
//     views:"45M views",
//     timeStamp:"13 days ago"
// },{
//     title:"OG:Teaser(Telugu)| Pawan Kalyan",
//     image:"photo.jpg",
//     thumbnailmage:"logo.jpg",
//     description:"DVV Entertainment",
//     views:"45M views",
//     timeStamp:"13 days ago"
// },{
//     title:"OG:Teaser(Telugu)| Pawan Kalyan",
//     image:"photo.jpg",
//     thumbnailmage:"logo.jpg",
//     description:"DVV Entertainment",
//     views:"45M views",
//     timeStamp:"13 days ago"
// },{
//     title:"OG:Teaser(Telugu)| Pawan Kalyan",
//     image:"photo.jpg",
//     thumbnailmage:"logo.jpg",
//     description:"DVV Entertainment",
//     views:"45M views",
//     timeStamp:"13 days ago"
// }
export const VideoGrid=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {VIDEOS.map(video=> <div>
            <VideoCard
              title={video.title}
              image={video.image}
              thumbnailmage={video.thumbnailmage}
              description={video.description}
              views={video.views}
              timeStamp={video.timeStamp}
              ></VideoCard>
            </div>)}
    </div>
}
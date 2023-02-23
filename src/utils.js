const paginate=(followers)=>{
const itemsPerPage=10;
const numberOfPages=Math.ceil(followers.length/itemsPerPage)
//logic to generate new followers per page;
const newFollowers=Array.from({
    length:numberOfPages
},(_,index)=>{
    const start=index*itemsPerPage;
    return followers.slice(start,start+itemsPerPage)
})
return newFollowers
}
export default paginate;
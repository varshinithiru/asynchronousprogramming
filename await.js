const blogs=[
    {title:"Blog One",description:"This is Blog One"},
    {title:"Blog Two",description:"This is Blog Two"}
];

function createBlog(blog){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            blogs.push(blog);
            resolve();
        },2000)
    })

}
                      
function getBlogs(){
     blogs.forEach((blog)=>{
        console.log(blog.title);

    })
}
async function handleAsyncronous(){
    await createBlog({title:"Blog Three",description:"This is blog three"});
    getBlogs();

}
handleAsyncronous();
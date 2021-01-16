const blogs=[
    {title:"Blog One",description:"This is Blog One"},
    {title:"Blog Two",description:"This is Blog Two"}
];
function createBlog(blog){
    setTimeout(()=>{
        blogs.push(blog); // set time out is inbuilt function, there is a delay because it is waiting for the response from previous executions 
    },2000)
}
function getBlogs(){
    blogs.forEach((blog)=>{
        console.log(blog.title);

    })
}
createBlog({title:"Blog Three",description:"This is blog three"});
getBlogs();
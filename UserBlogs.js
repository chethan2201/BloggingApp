import React,{useState,useEffect} from 'react'
import axios from 'axios';
import BlogCard from '../components/BlogCard';
const UserBlogs = () => {
    const [blogs,setBlogs] = useState([])

    //get user blogs
    const getUserBlogs = async () => {
        try {
            const id = localStorage.getItem('userId')
            const {data} = await axios.get(`http://localhost:8080/api/v1/blog/user-blog/${id}`)
            if(data?.success){
                setBlogs(data?.UserBlog.blogs)
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserBlogs();
    },[]);
    console.log(blogs);
  return (
    <div>
          {blogs && blogs.map((blog) =>
      <BlogCard
       title={blog.title} 
       discription = {blog.discription}
       image = {blog.image}
       username ={blog.user.username}
       time={blog.createdAt}
       />
       )}
    </div>
  )
}

export default UserBlogs
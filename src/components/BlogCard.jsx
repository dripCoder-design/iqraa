import React from 'react'
import  {useNavigate} from 'react-router-dom'

const BlogCard = ({blog}) => {
    const {title,description,category,image,_id} = blog;
    const navigate = useNavigate();
  return (
    <div className="card bg-base-100 shadow-sm
    hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer" onClick={()=> navigate(`/blog/${_id}`)}>
  <figure>
    <img
      src={image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   <p 
    dangerouslySetInnerHTML={{ 
        __html: description.replace(/<[^>]*>/g, '').slice(0, 80) + '...' 
    }} 
/>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
  )
}

export default BlogCard
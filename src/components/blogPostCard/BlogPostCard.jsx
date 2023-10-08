import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import { useNavigate } from 'react-router';


function BlogPostCard() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;
  // console.log(getAllBlog)

  const navigate = useNavigate();

  return (
    <div>
      
      <section className="text-gray-600 body-font">
      <div class="flex py-[50px]">
  <div class="m-auto text-3xl ">
    
    <span style={{
        
        color: mode === 'dark'
          ?
          'white'
          : 'black'
      }} className=''>RECENT UPADATES</span>
      
  </div>
</div>
        <div className="container px-5 py-10 mx-auto max-w-7xl ">

          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Card 1  */}
            {getAllBlog.length > 0
              ? <> {getAllBlog.map((item, index) => {
                console.log(item)
                const {thumbnail, date, id} = item
                return (
                  <div className="p-4 md:w-1/3" >
                    <div
                      style={{
                        background: mode === 'dark'
                          ? 'rgb(30, 41, 59)'
                          : 'white'
                      }}
                      className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer
               rounded-xl overflow-hidden`}
                    >
                      {/* Blog Thumbnail  */}
                      <img 
                      onClick={()=> navigate(`/bloginfo/${id}`)}
                      className=" w-full" src={thumbnail} alt="blog" />

                      {/* Top Items  */}
                      <div className="p-6">
                        {/* Blog Date  */}
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{
                          color: mode === 'dark'
                            ? 'rgb(226, 232, 240)'
                            : ' rgb(30, 41, 59)'
                        }}>
                          {date}
                        </h2>

                        {/* Blog Title  */}
                        <h1 className="title-font text-lg font-bold text-gray-900 mb-3" style={{
                          color: mode === 'dark'
                            ? 'rgb(226, 232, 240)'
                            : ' rgb(30, 41, 59)'
                        }}>
                          {item.blogs.title}
                        </h1>

                        {/* Blog Description  */}
                        <p className="leading-relaxed mb-3" style={{
                          color: mode === 'dark'
                            ? 'rgb(226, 232, 240)'
                            : ' rgb(30, 41, 59)'
                        }}>
                          <Button
              style={{
                background: mode === 'dark'
                  ? 'rgb(226, 232, 240)'
                  : '#00CCFF',
                color: mode === 'dark'
                  ?
                  'black'
                  : 'white'
              }}>
             <a href={item.blogs.link}> download</a>
            </Button>
                         
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })} </>
              : <> <h1>Not Found</h1></>}
          </div>

          {/* See More Button  */}
          {/* <div className="flex justify-center my-5">
            <Button
              style={{
                background: mode === 'dark'
                  ? 'rgb(226, 232, 240)'
                  : '#CC5500',
                color: mode === 'dark'
                  ?
                  '#CC5500'
                  : 'rgb(226, 232, 240)'
              }}>
              See More
            </Button>
          </div> */}
        </div>
      </section >
    </div >
  )
}

export default BlogPostCard
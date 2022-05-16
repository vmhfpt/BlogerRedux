import postApi from "../../api/postApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from '../SideBarPage/SideBar';
import CommentPage from './components/CommentPage';
import CommentContainer from "../CommentPage/CommentContainer";
import packageJson from  '../../../package.json';
function PostPageContainer() {
  let params = useParams();
  
  const [dataItem, setDateItem] = useState([]);
  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);
  const [morePost, setPost] = useState([]);
  useEffect(() => {
    
   


    const url = params.slug;
    const handleApiPost = async () => {
      try {

        const params = { slug: url };
        const response = await postApi.getPostDetail(params);

        setDateItem(response.data);
        setCategory(response.category);
        setTag(response.tag);
        setPost(response.data.more_post);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };

    handleApiPost();
  }, [params]);
  //console.log(morePost);
  return (
<div> 
<div className="container-fluid page-header">
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{"minHeight": "400px"}}>
                <h3 className="display-4 text-white text-uppercase">Bài viết</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><Link className="text-white" to="/">Home</Link></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">{dataItem.title}</p>
                </div>
            </div>
        </div>
    </div>

    
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="pb-3">
              <div className="blog-item">
                <div className="position-relative">
                  <img
                    className="img-fluid w-100"
                    src={packageJson.domain_api + dataItem.thumb}
                    alt=""
                  />
                  <div className="blog-date">
                    <h6 className="font-weight-bold mb-n1">2020</h6>
                    <small className="text-white text-uppercase">
                      {dataItem.created_at}
                    </small>
                  </div>
                </div>
              </div>
              <div className="bg-white mb-3" style={{ padding: "30px" }}>
                <div className="d-flex mb-3">
                  <Link
                    className="text-primary text-uppercase text-decoration-none"
                    to=""
                  >
                    {dataItem.category ? dataItem.category.title : ''}
                  </Link>
                  <span className="text-primary px-2">|</span>
                  <Link
                    className="text-primary text-uppercase text-decoration-none"
                    to=""
                  >
                    Tag -- {dataItem.tag ? dataItem.tag.title : ''}
                  </Link>
                </div>
                <h2 className="mb-3">{dataItem.title}</h2>
                <div className="config-image-container">
                <div
                  dangerouslySetInnerHTML={{ __html: dataItem.content }}
                ></div>
                </div>
               
              </div>
            </div>

          
 <CommentPage slug={params.slug}/>
<CommentContainer slug={params.slug} />
          </div>


  <SideBar category={category}
          morePost={morePost}
          tag={tag}
  />
        </div>
      </div>
    </div>
    </div>
  );
}
export default PostPageContainer;

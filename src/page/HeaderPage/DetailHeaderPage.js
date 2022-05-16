import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import headerApi from '../../api/headerApi';
import postApi from "../../api/postApi";
import SideBar from "../SideBarPage/SideBar";
function DetailHeaderPage(){
    const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);
  const [morePost, setPostMore] = useState([]);
    const [dataItem, setDataItem] = useState([]);
    const url = useParams();
    
    useEffect(() => {
        const handleApiFooter = async () => {
            try {
      
              const params = { slug: url.slug };
              const response = await headerApi.getDetail(params);
         setDataItem(response);
             
         const paramnew = {
            slug: "huong-dan-su-dung-va-download-adobe-premiere-mien-phi-hp-connect",
          };
         const responseMore = await postApi.getPostDetail(paramnew);

         setCategory(responseMore.category);
         setTag(responseMore.tag);
         setPostMore(responseMore.data.more_post);

            } catch (error) {
              console.log("Failed to fetch product list: ", error);
            }
          };
      
          handleApiFooter();
    }, [url.slug])
   
    return (

<div> 
<div className="container-fluid page-header">
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{"minHeight": "400px"}}>
                <h3 className="display-4 text-white text-uppercase">Đọc thêm</h3>
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
                
                  
                </div>
              </div>
              <div className="bg-white mb-3" style={{ padding: "30px" }}>
               
                <h2 className="mb-3">{dataItem.title}</h2>
                <div className="config-image-container">
                <div
                  dangerouslySetInnerHTML={{ __html: dataItem.content }}
                ></div>
                </div>
                
              </div>
            </div>
           
          </div>
          <SideBar category={category} morePost={morePost} tag={tag} />
        </div>
      </div>
    </div>
    </div>

    );
}
export default DetailHeaderPage;
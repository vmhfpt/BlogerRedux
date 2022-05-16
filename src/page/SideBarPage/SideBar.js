import { Link } from "react-router-dom";
import {  DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import packageJson from  '../../../package.json';
function SideBar({category, morePost, tag}){
    return (  <div className="col-lg-4 mt-5 mt-lg-0">
    <div className="d-flex flex-column text-center bg-white mb-5 py-5 px-4">
      <img
        alt=""
        src="https://cf.shopee.vn/file/7680559f2432c33f9ba95f4fb787eb40"
        className="img-fluid mx-auto mb-3"
        style={{ width: "100px" }}
      />
      <h3 className="text-primary mb-3">Vũ Minh Hùng</h3>
      <p>Tôi là một developer Back-end</p>
      <div className="d-flex justify-content-center">
        <Link className="text-primary px-2" to="">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link className="text-primary px-2" to="">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link className="text-primary px-2" to="">
          <i className="fab fa-linkedin-in"></i>
        </Link>
        <Link className="text-primary px-2" to="">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link className="text-primary px-2" to={{ pathname: "https://www.youtube.com/channel/UCGYTvcelrhmKkLSs3pqn0Ow"  }}target="_blank">
          <i className="fab fa-youtube"></i>
        </Link>
      </div>
    </div>

    <div className="mb-5">
      <div className="bg-white" style={{ padding: "30px" }}>
        <div className="input-group">
          <input
            type="text"
            className="form-control p-4"
            placeholder="Keyword"
          />
          <div className="input-group-append">
            <span className="input-group-text bg-primary border-primary text-white">
              <i className="fa fa-search"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-5">
      <h4
        className="text-uppercase mb-4"
        style={{ letterSpacing: "5px" }}
      >
        Danh mục 
      </h4>
      <div className="bg-white" style={{ padding: "30px" }}>
        <ul className="list-inline m-0">
          {category.map((value, key) => (
            <li
              key={key}
              className="mb-3 d-flex justify-content-between align-items-center"
            >
              <Link onClick={() => scroll.scrollTo(100)} className="text-dark" to={"/category/" + value.slug}>
                <i className="fa fa-angle-right text-primary mr-2"></i>
                {value.title}
              </Link>
              <span className="badge badge-primary badge-pill">
                {value.sumpost}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mb-5">
      <h4
        className="text-uppercase mb-4"
        style={{ letterSpacing: "5px" }}
      >
        Bài viết gợi ý
      </h4>
      {morePost.map((value, key) => (
      
      
        value.post.map((post, keyc)=> {
          return( <Link onClick={() => scroll.scrollTo(100)} to={"/post/" + post.slug} key={keyc}
            className="d-flex align-items-center text-decoration-none bg-white mb-3"
            href=""
          >
             <img style={{'width': '100px', 'height' : '100px'}}className="img-fluid" src={packageJson.domain_api + post.thumb} alt="" />
            <div className="pl-3">
           
              <h6 className="m-1">
              {post.title}
              </h6>
              <i> 
              {post.description}
              </i> <br/>
              <small>{post.created_at}</small>
            </div>
          </Link>)
        })
      
      ))}

     
    
    </div>

    <div className="mb-5">
      <h4
        className="text-uppercase mb-4"
        style={{ letterSpacing: "5px" }}
      >
        Tag liên quan
      </h4>
      <div className="d-flex flex-wrap m-n1">
        {tag.map((value, key) => (
          <Link onClick={() => scroll.scrollTo(100)} key={key} to={"/tag/" + value.slug} className="btn btn-light m-1">
            {value.title}
          </Link>
        ))}
      </div>
    </div>
  </div>);
}
export default SideBar;
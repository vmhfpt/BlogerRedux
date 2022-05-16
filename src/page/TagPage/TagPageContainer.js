import { Link } from "react-router-dom";
import tagApi from "../../api/tagApi";
import postApi from "../../api/postApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../SideBarPage/SideBar";
import packageJson from  '../../../package.json';
function TagPageContainer() {
  const [dataItem, setDataItem] = useState([]);
  const [post, setPost] = useState([]);
  const [category, setCategory] = useState([]);
  const [tag, setTag] = useState([]);
  const [morePost, setPostMore] = useState([]);
  let params = useParams();
  useEffect(() => {
    const url = params.slug;
    const handleApiCategory = async () => {
      try {
        const params = { slug: url };
        const response = await tagApi.getTagDetail(params);
        setDataItem(response.data);
        setPost(response.get_post);

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

    handleApiCategory();
  }, [params]);
  
  return (
    <div>
      <div className="container-fluid page-header">
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "400px" }}
          >
            <h3 className="display-4 text-white text-uppercase">Tag</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </p>
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
              <div className="row pb-3">
                {post.map((value, key) =>
                  value.post.map((post, keyp) => {
                    return (
                      <div key={keyp} className="col-md-6 mb-4 pb-2">
                        <div className="blog-item">
                          <div className="position-relative">
                            <img
                              className="img-fluid w-100"
                              src={packageJson.domain_api + post.thumb}
                              alt=""
                            />
                            <div className="blog-date">
                              <h6 className="font-weight-bold mb-n1">01</h6>
                              <small className="text-white text-uppercase">
                                Jan
                              </small>
                            </div>
                          </div>
                          <div className="bg-white p-4">
                            <div className="d-flex mb-2">
                              <Link
                                className="text-primary text-uppercase text-decoration-none"
                                to=""
                              >
                                Vũ Minh Hùng
                              </Link>
                              <span className="text-primary px-2">|</span>
                              <Link
                                className="text-primary text-uppercase text-decoration-none"
                                to=""
                              >
                                {dataItem.title}
                              </Link>
                            </div>
                            <Link
                              className="h5 m-0 text-decoration-none"
                              to= {  post.slug ? "/post/" + post.slug : '' }
                            >
                              {post.title ? post.title : ''}
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}

                <div className="col-12">
                  <nav aria-label="Page navigation">
                    <ul
                      className="pagination pagination-lg justify-content-center bg-white mb-0"
                      style={{ padding: "30px" }}
                    >
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
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
export default TagPageContainer;

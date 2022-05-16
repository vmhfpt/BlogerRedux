import { Link } from "react-router-dom";
import commentApi from "../../../api/commentApi";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import selectsComment from "../../CommentPage/selectsComment";
import { handleChange } from '../../../state/comment/commentActions';
import {  Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
function CommentPage({ slug }) {
  const dispatch = useDispatch();
  const [template, setTemplate] = useState(0);
  const update = useSelector(selectsComment);
  const [dataItem, setDataItem] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [content, setContent] = useState("");
  const [errorName, setErrorName] = useState("* Bắt buộc");
  const [errorEmail, setErrorEmail] = useState(" * Bắt buộc");
  const [errorNumber, setErrorNumber] = useState("* Bắt buộc");
  const [errorContent, setErrorContent] = useState("* Bắt buộc");
  const emailValidation = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(email) === false) {
      setErrorEmail("* Email không hợp lệ");
    } else {
      setErrorEmail("");
    }
  };

  const handleName = (e) => {
    setName(e.target.value);

    if (e.target.value === "" || e.target.value[0] === " ") {
      setErrorName("* Tên không được để trống");
    } else {
      setErrorName("");
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setErrorEmail("* Email không được để trống");
    } else {
      emailValidation();
    }
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
    if (e.target.value === "" || e.target.value[0] === " ") {
      setErrorNumber("* Số điện thoại không được để trống");
    } else {
      setErrorNumber("");
    }
  };
  const handleContent = (e) => {
    setContent(e.target.value);
    if (e.target.value === "" || e.target.value[0] === " ") {
      setErrorContent("* Nội dung không được để trống");
    } else {
      setErrorContent("");
    }
  };
  const handleReply = (value) => {
    setTemplate(() => {
      if (template === 0) {
        return value;
      } else {
        return 0;
      }
    });
  };
  const handleSubmit = () => {

    if (errorEmail === '' && errorContent === '' && errorName === '' && errorNumber === ''){
        var  dataApi = {
             name : name,
             email : email,
             content : content,
             number : number,
             slug : slug,
             parent_id : template
         }
         const handleApiCategory = async () => {
          try {
            
            const response = await commentApi.postComment(dataApi);
            dispatch(handleChange(!update));
            scroller.scrollTo(`${template}`, {
              duration: 500,
              delay: 0,
              smooth: true
            });
            setTemplate(0);
            setContent('');
            setEmail('');
            setName('');
            setNumber('');
            setErrorContent('* Bắt buộc nhập');
            setErrorEmail('* Bắt buộc nhập');
            setErrorName('* Bắt buộc nhập');
            setErrorNumber('* Bắt buộc nhập');
          } catch (error) {
            console.log("Failed to fetch product list: ", error);
          }
        };
        handleApiCategory();
    }else {
      scroller.scrollTo('reply-comment', {
        duration: 500,
        delay: 0,
        smooth: true
      });
    }
    
  }
  useEffect(() => {
   // console.log("render list comment in component comment list");
    const params = { slug: slug };
    const handleApiPost = async () => {
      try {
        const response = await commentApi.getComment(params);

        setDataItem(response.data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };

    handleApiPost();
  }, [slug, update]);

  return (
    <div
      id="anchor"
      className="bg-white"
      style={{ padding: "30px", marginBottom: "30px" }}
    >
      <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
        {dataItem.length} Bình luận
      </h4>

      {dataItem.map((value, key) => (
        <div id={value.id} key={key} className="media mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
            alt=""
            className="img-fluid mr-3 mt-1"
            style={{ width: "45px" }}
          />
          <div className="media-body">
            <h6>
              <Link to="">{value.name}</Link>
              <small>
                <i>- {value.created_at}</i>
              </small>
            </h6>
            <p>{value.content}</p>
            {template === value.id ? (
              <div id="reply-comment" className="bg-white mb-3" style={{ padding: "30px" }}>
                <h4
                  className="text-uppercase mb-4"
                  style={{ letterSpacing: "5px" }}
                >
                  Gửi bình luận của bạn
                </h4>

                <div className="form-group">
                  <label htmlFor="name">Tên *</label>
                  <input
                    value={name}
                    onChange={(e) => handleName(e)}
                    type="text"
                    className="form-control"
                    id="name"
                  />
                  <span className="error-custom"> {errorName}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    value={email}
                    onChange={(e) => handleEmail(e)}
                    type="email"
                    className="form-control"
                    id="email"
                  />
                  <span className="error-custom"> {errorEmail}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="phone_number">Số điện thoại *</label>
                  <input
                    type="number"
                    value={number}
                    onChange={(e) => handleNumber(e)}
                    className="form-control"
                    id="phone_number"
                  />
                  <span className="error-custom"> {errorNumber}</span>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Nội dung *</label>
                  <textarea
                    onChange={(e) => handleContent(e)}
                    id="message"
                    cols="30"
                    rows="5"
                    value={content}
                    className="form-control"
                  >
                    {content}
                  </textarea>
                  <span className="error-custom"> {errorContent}</span>
                </div>
                <div className="form-group mb-0">
                  <button onClick={handleSubmit}className="btn btn-primary font-weight-semi-bold py-2 px-3">
                    Gửi
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
            <button
              onClick={() => handleReply(value.id)}
              className="btn btn-sm btn-outline-primary"
            >
              {template !== 0 && template === value.id ? "đóng lại" : "trả lời"}
            </button>
            {value.child_comment.map((child, keycm) => {
              return (
                <div key={keycm} className="media mt-4">
                  <img
                    src="https://truesun.in/wp-content/uploads/2021/08/62681-flat-icons-face-computer-design-avatar-icon.png"
                    alt=""
                    className="img-fluid mr-3 mt-1"
                    style={{ width: "45px" }}
                  />
                  <div className="media-body">
                    <h6>
                      <Link to="">{child.name}</Link>
                      <small>
                        <i> - {child.created_at}</i>
                      </small>
                    </h6>
                    <p>{child.content}</p>
                    <button
                      onClick={() => handleReply(value.id)}
                      className="btn btn-sm btn-outline-primary"
                    >
                      Trả lời
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
export default CommentPage;

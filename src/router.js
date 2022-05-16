
import { Routes, Route } from "react-router-dom";
import HomePageContainer from './page/HomePage/HomePageContainer';
import PostPageContainer from './page/PostPage/PostPageContainer';
import CategoryPage from './page/DetailCategoryPage/CategoryPage';
import TagPageContainer from './page/TagPage/TagPageContainer';
import DetailHeaderPage from './page/HeaderPage/DetailHeaderPage';
function RouterShow() {
  
  return (
    <Routes>
    <Route path="/" element={<HomePageContainer />} />
    <Route path="post/:slug" element={<PostPageContainer  />} />
    <Route path="category/:slug" element={<CategoryPage />} />
    <Route path="tag/:slug" element={<TagPageContainer />} />
    <Route path="footer/:slug" element={<DetailHeaderPage />} />
    </Routes>
  );
}
export default RouterShow;
/*
 <Routes>
      <Route path="/user/resign" element={<Resign />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/:category" element={<Index body={listProduct} />} />
      <Route path="/:category/:sort" element={<Index body={listProduct}/>} />
      <Route path="/" element={<Index body={listProduct}/>} />
      <Route path="/dtdd/:name" element={<Product />} />
      <Route path="/dtdd/search/:key" element={<Search />} />
    </Routes>
*/
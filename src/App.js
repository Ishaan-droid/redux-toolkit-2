import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AddPostForm from "./features/posts/AddPostForm";
import PostLists from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostLists />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;

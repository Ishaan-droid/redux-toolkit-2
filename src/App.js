import AddPostForm from "./features/posts/AddPostForm";
import PostLists from "./features/posts/PostsList";

const App = () => {
  return (
    <div className="App">
      <AddPostForm />
      <PostLists />
    </div>
  );
};

export default App;

import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Javascript',
      description: 'Javascript Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eveniet?'
    },
    {
      id: 2,
      title: 'Javascript',
      description: 'Javascript Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eveniet?'
    },
    {
      id: 3,
      title: 'Javascript',
      description: 'Javascript Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, eveniet?'
    },
  ])

  const [title, setTitle] = useState('')
  const addNewPost = (e) => {
    e.preventDefault()
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          type="text"
          placeholder="Описание поста"
        />
        <MyButton
          onClick={addNewPost}
        >
          Создать пост
        </MyButton>
      </form>
      <PostList posts={posts} title={'Посты JS'}/>
    </div>
  )
}

export default App;

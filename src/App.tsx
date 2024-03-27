import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { postsMock } from "./mocks/Posts.mock";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {postsMock.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </main>
      </div>
    </>
  );
}

export default App;

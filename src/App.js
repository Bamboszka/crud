import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.js';
import Post from './components/pages/Post/Post.js';
import PostAdd from './components/pages/PostAdd/PostAdd.js';
import PostEdit from './components/pages/PostEdit/PostEdit.js';
import About from './components/pages/About/About.js';
import NotFound from './components/pages/NotFound/NotFound.js';
import Footer from './components/views/Footer/Footer';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';

function App() {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:postId' element={<Post />} />
          <Route path='/post/add' element={<PostAdd />} />
          <Route path='/post/edit/:postId' element={<PostEdit />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;

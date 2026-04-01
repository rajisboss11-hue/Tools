import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';
import Tools from './pages/Tools';
import AIWriter from './pages/AIWriter';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<SinglePost />} />
          <Route path="tools" element={<Tools />} />
          <Route path="writer" element={<AIWriter />} />
        </Route>
      </Routes>
    </Router>
  );
}

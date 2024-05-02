import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import PostListWrapper from './components/store/store-post-list.jsx';
import {Outlet} from 'react-router-dom'

export default function App() {

  return (
  <>
  <PostListWrapper>
    <Header />
    <Outlet />
    <Footer />
  </PostListWrapper>
  </>
  );
  }
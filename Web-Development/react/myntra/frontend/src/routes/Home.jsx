import React from 'react';
import HomeItem from '../components/HomeItem.jsx';
import { useSelector } from 'react-redux';

const Home = () => {
const postItems = useSelector(store => store.items);

return (
<>
<div className="items-container">
        {postItems.map(item => <HomeItem key={item.id} item={item} />)}
</div>
</>
);
};

export default Home;
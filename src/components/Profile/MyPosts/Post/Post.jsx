import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

	return (
	<div className={s.item}>
		<img src='https://www.kinonews.ru/insimgs/2021/newsimg/newsimg98663.jpg'></img>
		{ props.message }
		<div>
			<span>Like</span> { props.likesCount } 	
		</div>
	</div>
	);
}

export default Post;
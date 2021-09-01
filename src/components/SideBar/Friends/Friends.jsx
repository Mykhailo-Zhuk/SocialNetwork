import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {

	return (
	<div className={s.item}>
        <div className={s.item1}> </div>
			{ props.name }
	</div>
	);
}

export default Friends;
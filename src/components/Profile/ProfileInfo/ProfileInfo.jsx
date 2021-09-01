import React from 'react';
import  s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src='https://upload.wikimedia.org/wikipedia/commons/0/09/POL_2007_08_04_Jaroslawiec_zachodniopomorskie_02.JPG' width='800px' height='500'></img>
			</div>
			<div className = {s.descriptionBlock}>
				ava + discription
			</div>
		</div>			
		
	);
}

export default ProfileInfo;
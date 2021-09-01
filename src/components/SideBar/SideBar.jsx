import React from 'react';
import Friends from './Friends/Friends';
import s from './SideBar.module.css';

const SideBar = (props) => {


    let sideBlock = props.state.map ( f => <Friends name={f.name}/>);

    return (
        <div class={s.navBlock}>
            <h2>Friends</h2>
                <div className={s.item}>
					{ sideBlock }
				</div>
        </div>   
    )
}

export default SideBar;
import React from 'react';
import s from './Message.module.css';
// import {NavLink} from 'react-router-dom'

const Message =(props) => {
    
	let newMessageElement = React.createRef();

	let addMessage = () => {
		let text = newMessageElement.current.value;
		alert(text);
	}
	
	return (
        <div> 
			<div className={s.dialog}>{props.message}
				</div>
					<div className={s.messageBlock}>
							<div>
								<textarea ref={ newMessageElement }></textarea>
							</div>
							<div>
								<button onClick={ addMessage }>Add message</button>
							</div>
					</div>
		</div> 
    )
}

export default Message;
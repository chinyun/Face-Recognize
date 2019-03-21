import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	const imageAltText= (imageUrl ==="") ? "" : imageUrl;
	return (
		<div className='center ma'>
			<div className='absolute mt3'>
				<img 
					id='inputimage' alt={imageAltText} src={imageUrl}  
					width='400px' height='auto'/>
				<div 
					className='bounding-box' 
					style={{
						top: box.topRow, 
						right: box.rightCol, 
						bottom: box.bottomRow, 
						left: box.leftCol }} >
				</div>
			</div>
		</div>
	)
}

export default FaceRecognition;
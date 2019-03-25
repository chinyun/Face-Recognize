import React from 'react';

const Rank = ({name, entries})=> {
	return (
		<div>
			<div className='white f3'>
				{`${name} , your current rank is...`}
				<p>This rank is up to how many times you submit a pictures to recognize.</p>
			</div>
			<div className='white f1'>
				{entries}
			</div>
		</div>
	)
}

export default Rank;
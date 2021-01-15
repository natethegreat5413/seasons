import React from 'react';

// this function helps determine whether it is winter or summer in the northern and summer hemispheres based on the new Date().getMonth() javascript function.
const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	// JSX logic
	const seasonsDisplayText = season === 'winter' ? 'Burr, it is chilly' : "Let's hit the beach";

	return <div>{seasonsDisplayText}</div>;
};

export default SeasonDisplay;

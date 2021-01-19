import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
	summer: {
		text: "Let's hit the beach!",
		iconName: 'sun'
	},
	winter: {
		text: 'Buuur it is so cold!',
		iconName: 'snowflake'
	}
};

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
	const { text, iconName } = seasonConfig[season]; // { text, iconName }
	// JSX logic
	// const seasonsDisplayText = season === 'winter' ? "Burr, it's super cold out here" : "Let's hit the beach";
	// const icon = season === 'winter' ? 'snowflake' : 'sun';

	return (
		<div className={`season-display ${season}`}>
			<i className={`${iconName} icon icon-left massive`} />
			<h1>{text}</h1>
			<i className={`${iconName} icon icon-right massive`} />
		</div>
	);
};

export default SeasonDisplay;

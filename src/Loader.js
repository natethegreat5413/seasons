import React from 'react';

const Loader = (props) => {
	return (
		<div className="ui active dimmer">
			<div class="ui big text loader">{props.loadingMessage}</div>
		</div>
	);
};

// in case you forget to create a custom message the Loader will default to the default Props
Loader.defaultProps = {
	loadingMessage: 'Loading . . . '
};

export default Loader;

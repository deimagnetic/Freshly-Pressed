var React = require('react-native');

var {
	StyleSheet,
	Text,
	View,
	Image
} = React;

var postDetail = React.createClass( {
	getDefaultProps: function() {
		return {
			post: null
		}
	},

	render: function() {
		return (
			<View>
				<Image
					style={ styles.featured }
					source={ {
						uri: this.props.post.featured_image
					} }
				/>
			</View>
		);
	}
} );

var styles = {
	featured: {
		width: 320,
		height: 200
	}
};

module.exports = postDetail;

var React = require('react-native'),
	strip = require( 'strip' );

var {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView
} = React;

var postDetail = React.createClass( {
	getDefaultProps: function() {
		return {
			post: null
		}
	},

	render: function() {
		console.log( this.props.post );
		return (
			<ScrollView>
				{ this.props.post.featured_image && this.props.post.featured_image.length ?
					<Image
						style={ styles.featured }
						source={ {
							uri: this.props.post.featured_image
						} }
					/> :
					null
				}
				<Text style={ styles.textContainer }>
					{ this.props.post.content }
				</Text>
			</ScrollView>
		);
	}
} );

var styles = {
	featured: {
		width: 380,
		height: 200
	},
	textContainer: {
		padding: 10
	}
};

module.exports = postDetail;

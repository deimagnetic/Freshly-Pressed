var React = require('react-native'),
	data = require('./data');

var {
	StyleSheet,
	ListView,
	Text,
	View,
	TouchableHighlight
} = React;

var PostDetail = require( './post-detail' );

var Posts = React.createClass({
	getInitialState: function() {
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		return {
			dataSource: ds.cloneWithRows( data.posts ),
		};
	},

	pressRow: function( post ) {
		console.log( this.props );
		console.log( post );

		this.props.navigator.push( {
			title: post.title,
			component: PostDetail,
			backButtonTitle: 'Posts',
			passProps: {
				post: post
			}
		} );
	},

	renderRow: function( post ) {
		return (
			<TouchableHighlight onPress={ () => this.pressRow( post ) } >
				<View style={ styles.row } >
					<Text>{ post.title }</Text>
				</View>
			</TouchableHighlight>
		)
	},

	render: function() {
		return (
			<ListView
				dataSource = { this.state.dataSource }
				renderRow = { this.renderRow }
			/>
		);
	},
});

var styles = StyleSheet.create({
	row: {
		flex: 1,
		padding: 10,
		backgroundColor: '#ffffff',
	}
});

module.exports = Posts;

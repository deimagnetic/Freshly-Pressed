var React = require('react-native'),
	data = require('./data');

var {
	AppRegistry,
	StyleSheet,
	ListView,
	Text,
	View
} = React;

var Posts = React.createClass({
	getInitialState: function() {
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		return {
			dataSource: ds.cloneWithRows( data.posts ),
		};
	},

	renderRow: function( post ) {
		return (
			<View style={ styles.row } >
				<Text>{ post.title }</Text>
			</View>
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

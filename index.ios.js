/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native'),
	data = require('./data');
var {
	AppRegistry,
	StyleSheet,
	ListView,
	Text,
	View,
} = React;

var FreshlyPressed = React.createClass({
	getInitialState: function() {
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		return {
			dataSource: ds.cloneWithRows(data.posts),
		};
	},

	render: function() {
		return ( < ListView dataSource = {
				this.state.dataSource
			}
			renderRow = {
				(rowData) => < Text style = {
					styles.container
				} > {
					rowData.title
				} < /Text>} / >
			);
		},
	});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('FreshlyPressed', () => FreshlyPressed);

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
	Text,
	View,
	NavigatorIOS
} = React;

var Posts = require( './posts' );

var FreshlyPressed = React.createClass({

	render: function() {
		return (
			<NavigatorIOS
				initialRoute={ {
					component: Posts,
					title: 'Freshly Pressed'
				} }
				style={ styles.container }
			/>
		);
	},
});

var styles = {
	container: {
		flex: 1
	}
};

AppRegistry.registerComponent( 'FreshlyPressed', () => FreshlyPressed );

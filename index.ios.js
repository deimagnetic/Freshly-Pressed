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
			<Posts />
		);
	},
});

AppRegistry.registerComponent( 'FreshlyPressed', () => FreshlyPressed );

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
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor: '#ffffff',
	}
});

AppRegistry.registerComponent('FreshlyPressed', () => FreshlyPressed);

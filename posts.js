var React = require('react-native'),
	data = require('./data'),
	he = require( 'he' );

var {
	StyleSheet,
	ListView,
	Text,
	View,
	TouchableHighlight,
	Image
} = React;

var PostDetail = require( './post-detail' );

function htmlDecode(input){
	var e = document.createElement('div');
	e.innerHTML = input;
	return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

var Posts = React.createClass( {
	getInitialState: function() {
		var ds = new ListView.DataSource({
			rowHasChanged: ( r1, r2 ) => r1.ID !== r2.ID
		});

		return {
			dataSource: ds.cloneWithRows( data.posts ),
		};
	},

	pressRow: function( post ) {
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
					{ post.featured_image && post.featured_image.length ?
						<Image
							style={ styles.rowImage }
							source={ {
								uri: post.featured_image
							} }
						/> :
						null
					}
					<Text style={ styles.title } >
						{ he.decode( post.title ) }
					</Text>
				</View>
			</TouchableHighlight>
		)
	},

	render: function() {
		return (
			<ListView
				dataSource={ this.state.dataSource }
				renderRow={ this.renderRow }
			/>
		);
	},
} );

var styles = StyleSheet.create( {
	row: {
		flexDirection: 'row',
		padding: 10,
		backgroundColor: '#ffffff',
		borderBottomWidth: 1,
		borderColor: '#e0e0e0'
	},
	rowImage: {
		width: 40,
		height: 60,
		flex: 0.25
	},
	title: {
		flex: 0.75,
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 10
	}
} );

module.exports = Posts;

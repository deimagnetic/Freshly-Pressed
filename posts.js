var React = require('react-native'),
	data = require('./data'),
	he = require( 'he' ),
	request = require( 'superagent' ),
	_ = require( 'lodash' );

var {
	StyleSheet,
	ListView,
	Text,
	View,
	TouchableHighlight,
	Image
} = React;

var PostDetail = require( './post-detail' );

var dataSource = new ListView.DataSource({
	rowHasChanged: ( r1, r2 ) => r1.ID !== r2.ID
});

var lastPostDate;

var Posts = React.createClass( {
	getInitialState: function() {
		return {
			dataSource: dataSource.cloneWithRows( [] ),
		};
	},

	componentDidMount: function() {
		this.fetchPosts();
	},

	posts: [],

	fetchPosts: function() {
		request( 'https://public-api.wordpress.com/rest/v1.1/freshly-pressed/' )
			.query( { before: lastPostDate, number: 20 } )
			.end( function( error, response ) {
				var posts = JSON.parse( response.text ).posts,
					temp = this.posts.concat( posts );

				lastPostDate = _.last( posts ).date;

				this.posts = temp;

				this.setState( { dataSource: dataSource.cloneWithRows( this.posts ) } );
			}.bind( this ) );
	},

	pressRow: function( post ) {
		this.props.navigator.push( {
			title: he.decode( post.title ),
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
				onEndReached={ this.fetchPosts }
				onEndReachedThreshold={ 400 }
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
		paddingLeft: 10,
		textAlign: 'auto'
	}
} );

module.exports = Posts;

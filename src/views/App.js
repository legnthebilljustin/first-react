import '../assets/App.css';
import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title.js'
import Post from '../components/Post.js'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userIndex: 0,
			users: [
				{ firstname: 'Wilson', lastname: 'Thebuss', id: 1 },
				{ firstname: 'Aynie', lastname: 'Dair', id: 2 },
				{ firstname: 'Bala', lastname: 'Kaye', id: 3 },
			],
			posts: []
		}
	}
	render() {

		const posts = this.state.posts
		const users = this.state.users

		const postsToRender = posts.map( (post, index) => {
			return <Post title={post.title} body={post.body} id={post.id} key={index} ></Post>
		})

		const usersToRender = users.map( (user, index) => {
			return <Button className='user-choices' key={index} onClick={e => this.getPosts(user.id, index)}>{ user.firstname +' '+ user.lastname }</Button>
		})

		return (
			<div className="App">
				<div className='container'>
					<h1>Click a name to see their posts.</h1>
					{ usersToRender }
					<Title firstname={users[this.state.userIndex].firstname } lastname={users[this.state.userIndex].lastname }></Title>
					{ postsToRender }
				</div>
			</div>
		);
	}

	componentDidMount() {
		this.getPosts(1, 0)
	}


	async getPosts(id, index) {
		const res =  await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        this.setState({
			userIndex: index,
            posts: res.data
        })
	}

	async showPosts(id) {
		this.setState({
            userIndex: id
        })
	}
}


const Button = styled.button`
		border: none;
		height: 50px;
		width: 150px;
		background: #fff;
		margin: 20px 3px;
		color: #504f4f;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.5s ease-in-out;
	`

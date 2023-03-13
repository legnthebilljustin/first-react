import React from 'react'
import styled from 'styled-components';
import Comment from './Comment.js'

export default class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showComments: false,
        }
    }

    render() {
        return (
            <PostField>
                <PostTitle>{ this.props.title }</PostTitle>
                <PostBody>{ this.props.body }</PostBody>
                <PostActions onClick={e => this.toggleComments()}>Click to { this.state.showComments ? 'hide' : 'show' } comments.</PostActions>
                <Comment 
                    render={ this.state.showComments ? true : false }
                    postid={this.props.id}
                >
                </Comment>
            </PostField>
        );
    }

    toggleComments = () => {
        this.setState({
            showComments: !this.state.showComments,
        })
    }

        
}

const PostField = styled.div`
            background: #fff;
            height: auto;
            width: 100%;
            margin: 5px;
            border-radius: 5px;
            padding: 15px 25px;
        `

const PostTitle = styled.div`
            color: #3e3e3e;
            font-weight: bold;
            font-size: 1.3rem;
            text-transform: capitalize;
        `

const PostBody = styled.div`
            color: #7c7c7c;
            margin: 10px 0;
        `
const PostActions = styled.div`
            text-align: right;
            margin: 0 20px 10px 0;
            font-size: 0.8rem;
            color: #1dadf6;
            font-style: italic;
            cursor: pointer;
        `
const Comments = styled.div`

        `


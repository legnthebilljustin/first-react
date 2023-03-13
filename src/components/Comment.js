import axios from "axios";
import React from "react";

export default class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
        
    }
    render() {
        if (!this.props.render) { return null }

        const comments = this.state.comments
        let commentsToRender
        if (comments.length) {
            commentsToRender = comments.map( comment => {
                return ( 
                    <div className="comments" key={comment.id}>
                        <p>"{ comment.body }"</p>
                        <div className="email">- { comment.email }</div>
                    </div>
                )
            })
            
        }

        return (
            <div className="comments-container">
                { commentsToRender }
            </div>
        );

        
    }

    componentDidUpdate(prevProps) {  // need to change this into a 'watch variable`
        if (prevProps.postid != this.props.postid) {
            this.getComments()
        }
    }

    componentDidMount() {
        this.getComments()
        
    }

    async getComments() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.postid}/comments`)
        this.setState({
            comments: response.data
        })
        return 
    }
}




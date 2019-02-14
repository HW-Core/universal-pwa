import React from "react"
import { Link } from "react-router-dom";

const ISSUES = '//api.github.com/repos/vmg/redcarpet/issues';

class Blog extends React.Component {

  constructor () {
    super();
    this.state = {
      posts: []
    }
 
  }

  async componentDidMount (){

    const postsUrl = ISSUES;

    var response = await fetch(postsUrl);

    this.setState({
      posts: await response.json()
    })
  }
 
  render() {

    
    return (
      <div className="container">
          {(this.state.posts.length && this.state.posts.map((v,k)=><p key={k}><Link to={"/blog/"+v.number+"/"}>{v.title}</Link></p>)) || "Loading..."}
      </div>
    );
  }
}

export default Blog;
import React,{Component, Fragment} from "react";
import Post from "../../component/Post/Post";
import './BlogPost.css';
import axios from "axios";

class BlogPost extends Component {
    
    state = {
            post : [],
            formBlogPost : {
                id:1,
                title:'',
                body:'',
                userId:1
            },
            isUpdate : false,
        }

    getPostApi = () => {


        axios.get('http://localhost:3001/posts?_sort=id&_order=desc')
        .then((res)=>{
            this.setState({
                post : res.data
            })
        })
    }

    postToApi = () => {
        axios.post('http://localhost:3001/posts',this.state.formBlogPost)
        .then((res) => {
            console.log(res)
        },(err)=> {
            console.log(err);
        })
        this.getPostApi();
    }
    
    updateToApi = () => {
        axios.put(`http://localhost:3001/posts/${this.state.formBlogPost.id}`,this.state.formBlogPost) 
            .then((res)=>{
            this.getPostApi()
        })
    }
    
    handleDelete = (data) => {
        console.log(data)
        axios.delete(`http://localhost:3001/posts/${data}`) 
            .then((res)=>{
            this.getPostApi()
        })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost : data,
            isUpdate : true,
        })
        // console.log(data)
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.updateToApi();
        }else{
            this.postToApi();
        }
        
        this.setState({
            formBlogPost : {
                title : '',
                body : ''
            }

        });

    }

    handleFormChange = (e) => {
        let formNew = {...this.state.formBlogPost}

        ///buat unik id make time
        let id = new Date().getTime();
        if(!this.state.isUpdate){
            formNew['id'] = id; 
        }
        formNew[e.target.name] = e.target.value;
        this.setState({
            formBlogPost : formNew
        },() => {
            // console.log(this.state.formBlogPost)
        })
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json=>{
        //         this.setState({
        //             post:json
        //         })
        //     })
        //     .then(json => console.log(json))

        // axios.get('http://localhost:3001/posts')
        // .then((res)=>{
        //     this.setState({
        //         post : res.data
        //     })
        // })
        this.getPostApi();
    }


    render(){
        return(
            <Fragment>
            <p className="section-title">Blog Post</p>
            <div className="form-add-post">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" placeholder="add Title here" onChange={this.handleFormChange} value={this.state.formBlogPost.title} />
                <label htmlFor="body">Blog Content</label>
                <textarea name="body" id="body" cols="30" rows="10" placeholder="add content here" onChange={this.handleFormChange} value={this.state.formBlogPost.body}></textarea>
                <button className="btn-submit" onClick={this.handleSubmit} >Save</button>
            </div>
            {
                this.state.post.map(post =>{ 
                    return <Post key={post.id} data={post} delete={this.handleDelete} update={this.handleUpdate}/>
                })
            }
            
            </Fragment>
        )
    }
}

/// data={post} merupakan penyederhanaan dari title={post.title} desc={post.body}
export default BlogPost;
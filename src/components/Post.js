import React from "react";
import styled from '@emotion/styled'
const Header=styled.header`
background:#f4f4f4;
padding:1rem;
text-align:center;
`;
const MainSection=styled.section`
margin:auto;
max-width:500px;
overflow:auto;
padding:3rem 2rem;
`;
const PostForm=styled.form`
padding:2rem;
background:#f4f4f4;
label{
    display:block;
}
input[type='text]{
    width:100%;
    padding:8px;
    margin-bottom:10px;
    border-radius:5px;
    border:1px solid #ccc
}
`;
const PostButton=styled.button`
display:block;
padding:10px 15px;
border:0;
background:#333;
color:#fff;
border-radius:5px;
margin:5px 0;
&:hover{
    background:#444;
    cursor:pointer
}`;

const Post = () => {
   
  return (
    <div>
        <form className='container' method='post' action='/'>
        <Header><h1>Enter Detail</h1></Header>
        <MainSection>
            <PostForm >
                <div>
                    <label>Enter Name:</label>
                    <input type="text" name='name' placeholder='Enter Your Name' />
                </div>
                <div>
                    <label>Enter Url:</label>
                    <input type="text" name='url' placeholder='Enter Your Url' />
                </div>
                <PostButton type="submit">Submit</PostButton>
            </PostForm>
        </MainSection>
        </form>
    </div>
  )
}

export default Post
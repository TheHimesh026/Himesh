import {Link,redirect,Form} from 'react-router-dom';
import "./social.css";

const CreatePost = () => {

return (
<Form method="POST" className="custom-form" style={{margin: '10px'}}>
      <div className="mb-3">
        <label htmlFor="userId" className="custom-label">
          Enter your User Id here
        </label>
        <input
  type="text"
  className="custom-input"
  id="userId"
  placeholder="Your User Id"
  name="userId"
  />
</div>

      <div className="mb-3">
        <label htmlFor="title" className="custom-label">
          Post Title
        </label>
        <input
  type="text"
  className="custom-input"
  id="title"
  placeholder="How are you feeling today..."
  name="title"
  />
</div>

      <div className="mb-3">
        <label htmlFor="body" className="custom-label">
          Post Content
        </label>
        <textarea
  type="text"
  rows="4"
  className="custom-textarea"
  id="body"
  placeholder="Tell us more about it"
  name="body"
  />
</div>

      <div className="mb-3">
        <label htmlFor="reactions" className="custom-label">
          Number of reactions
        </label>
        <input
type="text"
className="custom-input"
id="reactions"
placeholder="How many people reacted to this post"
name="reactions"
/>
</div>

      <div className="mb-3">
        <label htmlFor="tags" className="custom-label">
          Enter your hashtags here
        </label>
        <input
type="text"
className="custom-input"
id="tags"
placeholder="Please enter tags using space"
name="tags"
/>
</div>

      <button type="submit" className="custom-button">
        Post
      </button>
</Form>
);
};
export default CreatePost;


export async function submitAction(data) {
   const formData = await data.request.formData();
   const postData = Object.fromEntries(formData);
   postData.tags = postData.tags.split(" ");
  
  fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(postData)
})
.then(res => res.json())
.then(posts => {
  console.log(posts);
});
return redirect("/");
};
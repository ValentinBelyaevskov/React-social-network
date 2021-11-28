import s from "./NewPost.module.css"
import NewPostFormContainer from "./NewPostFormContainer"

const NewPost = () => {
   return (
      <section className={`${s.newPost} new-post`}>
         <h2 className={s.header}>New post</h2>
         <NewPostFormContainer/>
      </section>
   )
}




export default NewPost
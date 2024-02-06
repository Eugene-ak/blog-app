import "../stylesheets/createBlog.styles.css"

const CreateBlogPage = () => {
  return (
    <main className='create-page'>
      <h1>Create New Post</h1>
      <form className="create-form">
        <input type='text' placeholder='Heading'/>
        <input type='text' placeholder='Field'/>
        <input type='text' placeholder='Content'/>
        <input type='text' placeholder='Author'/>
        <input type='date' />
        <input type='submit' name='create' value={"Create"} />
      </form>
    </main>
  )
}

export default CreateBlogPage

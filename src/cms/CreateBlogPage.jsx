import "../stylesheets/createBlog.styles.css"

const CreateBlogPage = () => {
  return (
    <main className='create-page'>
      <h1>Create New Post</h1>
      <form className="create-form">
        <div>
          <input type='text' placeholder='Heading' />
          <input type='text' placeholder='Field' />
          <input type='date' />
          <input type='text' placeholder='Author' />
          <textarea type='text' placeholder='Content'>Content</textarea>
        </div>
        <input type='submit' name='create' value={"Create"} />
      </form>
    </main>
  )
}

export default CreateBlogPage

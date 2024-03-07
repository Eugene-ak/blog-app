import "../stylesheets/create.styles.css";

const Create = () => {
  return (
    <main className="create-page">
      <h1>Create New Post</h1>
      <form className="create-form" method="post">
        <div>
          <input type="text" placeholder="Heading" />
          <input type="text" placeholder="Field" />
          <input type="date" />
          <input type="text" placeholder="Author" />
        </div>
        <textarea type="text" placeholder="Content">
          Content
        </textarea>
        <input type="submit" name="create" value={"Create"} />
      </form>
    </main>
  );
};

export default Create;

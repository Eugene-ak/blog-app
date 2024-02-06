import "../stylesheets/overview.styles.css"

const Overview = () => {
  return (
    <main className="overview">
      <h1>Overview</h1>
      <div className="top-row">
        <div>
          <p>Total Number of Posts</p>
          <span>0</span>
        </div>
        <div>
          <p>Total Number of Views</p>
          <span>0</span>
        </div>
        <div>
          <p>Total Number of Comments</p>
          <span>0</span>
        </div>
      </div>
      <div className="bottom-row">
        <button>Create New Post</button>
        <button>View All Posts</button>
      </div>
    </main>
  )
}

export default Overview

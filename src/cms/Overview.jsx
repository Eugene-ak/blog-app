import "../stylesheets/overview.styles.css";

const Overview = () => {
  return (
    <main className="overview">
      <div className="top-row">
        <h1>Overview</h1>
        <span className="buttons">
          <button>New Post</button>
          <button>All Posts</button>
        </span>
      </div>

      <div className="bottom-row">
        <div>
          <p>Total Posts</p>
          <span>0</span>
        </div>
        <div>
          <p>Total Views</p>
          <span>0</span>
        </div>
        <div>
          <p>Total Comments</p>
          <span>0</span>
        </div>
      </div>
    </main>
  );
};

export default Overview;

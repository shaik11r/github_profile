import { useEffect, useState } from "react";
import "./App.css";
import Follower from "./Follower";
import useFetch from "./useFetch";

function App() {
  const { loading, data } = useFetch();
  const [followers, setFollowers] = useState([]);
  const [page, setPage] = useState(0);
  console.log(data);
  useEffect(() => {
    if (loading) return;
    else {
      return setFollowers(data[page]);
    }
  }, [loading, page]);
  const nextpage = () => {
    setPage((oldpage) => {
      let nextpage = oldpage + 1;
      if (nextpage > data.length - 1) {
        nextpage = 0;
      }
      return nextpage;
    });
  };
  const prevpage = () => {
    setPage((oldpage) => {
      let prevpage = oldpage - 1;
      if (prevpage < 0) {
        prevpage = data.length - 1;
      }
      return prevpage;
    });
  };
  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "Profiles"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers?.map((followers) => {
            return <Follower key={followers.id} {...followers} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevpage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextpage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;

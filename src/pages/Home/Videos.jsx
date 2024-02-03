import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../../hooks/useVideoList";
import { Video } from "./../../components/Video";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { error, loading, videos, hasMore } = useVideoList(page);
  return (
    <>
      {videos.length > 0 && (
        <InfiniteScroll
          className="videos"
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
          loader="Loading..."
        >
          {videos.map((video, i) =>
            video.noq > 0 ? (
              <Link
                to={`quiz/${video.youtubeID}`}
                key={video.youtubeID + i}
                state={video.title}
              >
                <Video
                  id={video.youtubeID}
                  noq={video.noq}
                  title={video.title}
                />
              </Link>
            ) : (
              <Video
                id={video.youtubeID}
                key={video.youtubeID + i}
                noq={video.noq}
                title={video.title}
              />
            )
          )}
        </InfiniteScroll>
      )}

      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error!</div>}
      {loading && <div>Loading...</div>}
    </>
  );
}

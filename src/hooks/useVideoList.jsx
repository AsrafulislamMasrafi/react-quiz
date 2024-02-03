import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";
export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function videoFetch() {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(9)
      );

      try {
        setError(false);
        setLoading(true); // get data form firebase database

        const snapShot = await get(videoQuery);
        setLoading(false);

        if (snapShot.exists()) {
          setVideos((preVideos) => {
            return [...preVideos, ...Object.values(snapShot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (e) {
        setLoading(false);
        setError(true);
        console.log(e);
      }
    }

    return () => videoFetch();
  }, [page]);
  return {
    loading,
    error,
    videos,
    hasMore,
  };
}

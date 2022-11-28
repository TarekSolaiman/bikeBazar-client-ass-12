import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `BikeBazar - ${title}`;
  }, [title]);
};

export default useTitle;

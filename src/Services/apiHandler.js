export const performRequest = async (url) => {
  const abortCont = new AbortController();
  try {
    let response = await fetch(url, { signal: abortCont.signal });
    
    if (!response.ok) {
      throw Error("could not fetch the data from that resourse");
    }
    return response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("fetch aborted");
    }
  }
};

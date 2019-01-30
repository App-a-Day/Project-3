import axios from "axios";


const KEY = "AIzaSyDI0Zqy1_qK_BzKOh7GkmReugFhDFt8y1E";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: "surfboards"
    }
});

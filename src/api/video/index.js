import axios from 'axios'

const postVideo = form => axios.post("/api/v1/video", form).then(resp => resp.data);

const Login = form => axios.post("/api/v1/user/login", form).then(resp => resp.data);

const getVideo = id => axios.get(`/api/v1/video/${id}`).then(resp => resp.data);

const listVideo = (start,limit) => axios.get("/api/v1/videos",{params: {start,limit}}).then(resp => resp.data);


export {
    getVideo,
    listVideo,
    postVideo,
    Login,
}
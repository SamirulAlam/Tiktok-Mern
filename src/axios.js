import axios from "axios";

const instance=axios.create({
    baseURL:"https://tiktok-mern-build.herokuapp.com/"
});

export default instance;
import React from "react";
import './App.css';
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
      <Video url="https://v9.tiktokcdn.com/b131fd8bf1d512156c5dce4454f33209/5fe7d397/video/tos/alisg/tos-alisg-pve-0037c001/fb8f75720d264d4da015c5b651792f9d/?a=1233&br=6318&bt=3159&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202012261821280101890560340F6F6000&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2dtZHF2OXhqeDMzOzczM0ApZzplOjdnZDxoN2c2Z2czNGdwXm5wZ2ozLm5fLS02MTRzczFeLTM2Xi9hMC0zYTQtYjM6Yw%3D%3D&vl=&vr="
      channel ="MERN Bros"
      description="web development"
      song="REACT"
      likes={123}
      shares={23}
      messages={234}
      />
      <Video url="https://v9.tiktokcdn.com/b131fd8bf1d512156c5dce4454f33209/5fe7d397/video/tos/alisg/tos-alisg-pve-0037c001/fb8f75720d264d4da015c5b651792f9d/?a=1233&br=6318&bt=3159&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202012261821280101890560340F6F6000&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2dtZHF2OXhqeDMzOzczM0ApZzplOjdnZDxoN2c2Z2czNGdwXm5wZ2ozLm5fLS02MTRzczFeLTM2Xi9hMC0zYTQtYjM6Yw%3D%3D&vl=&vr="
      channel ="MERN Bros"
      description="web development"
      song="REACT"
      likes={123}
      shares={23}
      messages={234}
      />
      </div>
    </div>
  );
}

export default App;

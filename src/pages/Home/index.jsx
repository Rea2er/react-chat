import React from "react";

import { Message } from "../../components";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Message
        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5g67tZkLuNcbMvMPfjAO08mstu5QTUr_y5g&usqp=CAU"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        date="Sat Aug 08 2020 20:53:17"
        isMe={false}
      />
      <Message
        avatar="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        date="Sat Aug 08 2020 21:03:17"
        isMe={true}
        isReaded={false}
        attachments={[
          { filename: "image.jpg", url: "" },
          { filename: "image.jpg", url: "" },
          { filename: "image.jpg", url: "" },
        ]}
      />
    </div>
  );
};

export default Home;

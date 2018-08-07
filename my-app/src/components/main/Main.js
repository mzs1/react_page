import React from "react";

import Title from "../Title/Title";
import Content from '../Content/Content ';

const Main = () => {
  return (
    <React.Fragment>
      <Title text="title" theTitle="       CloudSystems"/>
      <Content
        pragraphs ={[
          {
            title: "Single Page Application هذا الموقع هو ",
            text: "هذه مهمة الرياكت لشركة غيمة وهي عبارة عن صفحة شخصية بسيطة"
          }
        ]}
      />
    </React.Fragment>
  );
};

export default Main;

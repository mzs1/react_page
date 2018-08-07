import React from 'react'

import Content from '../Content/Content ';
import Title from '../Title/Title';

const ContactMe = () => {
    return (
        <React.Fragment>
          <Title text="title" theTitle="اتصل بي"/>
          <Content
        pragraphs ={[
          {
            title: ":للتواصل",
            text: "alsaud11111@gmail.com :البريد الالكتروني "

          }
          ,
          {

            text: "0563309000 : رقم الجوال "

          }
        ]}
      />
        </React.Fragment>
      );
}

export default ContactMe ;

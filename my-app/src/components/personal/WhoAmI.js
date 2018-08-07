import React from "react";

import Title from "../Title/Title";
import Content from "../Content/Content ";

const WhoAmI = () => {
  return (
    <React.Fragment>
      <Title text="title" theTitle="من أنا ؟" />
      <Content
        pragraphs ={[
          {

            text: "اسمي محمد عبد العزيز السعود، طالب في جامعة القصيم ،كلية الحاسب الآلي،تخصص علوم الحاسب ، حاليًا لدي برنامج تدريبي من قبل شركة غيمة مدتة شهران تقريبا أجيد التصميم المسبق للمواقع عن طريق برنامج ادوب إكس دي،أيضا أيضًا لدي خبرة بسيطة في تصميم برامج الجوال بإستخدام الزامرين التابعة لمايكروسفت،أيضًا أمتلك خبرة في مجال الهارد وار ."
          },
        
        ]}
      />
    </React.Fragment>
  );
};

export default WhoAmI;

import React, { useState } from 'react';
import '../style/Content5.css';

export default function Content5() {
   const [mouseOver1, setMouseOver1] = useState(false);
   const [mouseOver2, setMouseOver2] = useState(false);
   const [mouseOver3, setMouseOver3] = useState(false);
   const [mouseOver4, setMouseOver4] = useState(false);

   return (
      <div className='content5_wrap'>
         <div className='content5_1'>
            <div>
               <h1>ABOUT</h1>
            </div>
         </div>
         <div className='content5_2'>
            <div className='about_box'>
               <div
                  onMouseEnter={() => setMouseOver1(true)}
                  onMouseLeave={() => setMouseOver1(false)}
               >
                  <div>
                     <p className={`en_1 ${mouseOver1 ? 'txt_off' : ''}`}>
                        In terms of communication with others, I possess a natural and vibrant friendliness, along with the ability to empathize. I am capable of understanding and empathizing with other people's emotions and opinions, which allows me to easily connect with others in any environment.
                     </p>
                     <p className={`kr_1 ${mouseOver1 ? 'txt_on' : ''}`}>
                        사람들과 소통하는 데 있어서 자연스럽고 활기찬 친화력과 함께, 공감 능력을 갖추고 상대방의 감정과 의견을 이해하며 공감할 수 있는 능력으로 어떤 환경에서든 사람들과 잘 섞일 수 있는 사람입니다.
                     </p>
                  </div>
               </div>
               <div
                  onMouseEnter={() => setMouseOver2(true)}
                  onMouseLeave={() => setMouseOver2(false)}
                  className={`about2 ${mouseOver1 ? 'action2' : ''}`}>
                  <div>
                     <p
                        className={`en_2 ${mouseOver2 ? 'txt_off' : ''}`}>
                        Through the courses at Green Computer Academy, I have developed the skills to utilize programs necessary for frontend development, such as HTML/CSS, JavaScript, React, and Vue.
                     </p>
                     <p className={`kr_2 ${mouseOver2 ? 'txt_on' : ''}`}>
                     그린 컴퓨터아카데미에서의 수업을 통해 HTML/CSS, 자바스크립트, 리액트, 뷰 등 프론트엔드 개발에 필요한 프로그램들을 활용하는 능력을 키웠습니다. 
                     </p>
                  </div>
               </div>
               <div
                  onMouseEnter={() => setMouseOver3(true)}
                  onMouseLeave={() => setMouseOver3(false)}
                  className={`about3 ${mouseOver1 ? 'action3' : ''} ${mouseOver2 ? 'action3' : ''}`}>
                  <div>
                     <p className={`en_3 ${mouseOver3 ? 'txt_off' : ''}`}>
                     During various portfolio projects, I have placed a strong emphasis on utilizing different concepts and technologies. To avoid producing mundane results, I constantly seek new challenges and strive to implement creative works by leveraging a diverse range of skills.
                     </p>
                     <p className={`kr_3 ${mouseOver3 ? 'txt_on' : ''}`}>
                     다양한 포트폴리오 작업을 수행하면서 다양한 컨셉과 기술을 활용하는 것을 중요하게 생각했습니다. 식상한 결과물을 만들지 않기 위해 항상 새로운 도전을 시도하고, 다양한 기술들을 활용하고자하여 창의적인 작품들을 구현하였습니다. 
                     </p>
                  </div>
               </div>
               <div
                  onMouseEnter={() => setMouseOver4(true)}
                  onMouseLeave={() => setMouseOver4(false)}
                  className={`about3 ${mouseOver1 ? 'action3' : ''} ${mouseOver2 ? 'action3' : ''} ${mouseOver3 ? 'action3' : ''}`}>
                  <div>
                     <p className={`en_4 ${mouseOver4 ? 'txt_off' : ''}`}>
                        I will continue to embrace challenges and pursue a creative mindset.<br />
                        VELOG:www.avawerf.com <br />
                        e-mail:rhqudwns311@gmail.com
                        phone:010-3100-0855
                     </p>
                     <p className={`kr_4 ${mouseOver4 ? 'txt_on' : ''}`}>
                     계속해서 도전하고 창의적인 정신을 추구하겠습니다.<br />
                     VELOG:https://velog.io/@ko_baaang<br />
                        e-mail:rhqudwns311@gmail.com<br />
                        phone:010-3100-0855
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

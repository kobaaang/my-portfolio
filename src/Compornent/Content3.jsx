import React, {  useState } from 'react';
import '../style/Content3.css';


function Content3() {
   const [textOnArray, setTextOnArray] = useState([false, false, false,false]);
   //항목이 추가될 때 마다 false값추가


   const handleMouseOver = (index) => {
      setTextOnArray((prev) => {
         const newState = [...prev];
         newState[index] = true;
         return newState;
      });
   };

   const handleMouseOut = (index) => {
      setTextOnArray((prev) => {
         const newState = [...prev];
         newState[index] = false;
         return newState;
      });
   };

   return (
      <div className='content3_wrap'>
         <div className='content3_1'>
            <div>
               <p>WEBSITE</p>
            </div>
            <div className='content_box'></div>
         </div>
         <div className='content3_2'>
            <ul>
               <li>
                  <div
                     className='text_trigger'
                     onMouseOver={() => handleMouseOver(0)}
                     onMouseOut={() => handleMouseOut(0)}
                  >
                     <a href="https://main--kobaaangshop.netlify.app/">.</a>
                  </div>
                  <div className='text_box'>
                     <h1 className={`${textOnArray[0] ? 'text_on' : ''}`}>WOOYOUNMI<br />SHOP</h1>
                     <p>
                        "wooyoungmi"사이트는 React를 기반으로 한 웹 어플리케이션으로, 사용자들에게 편리한 인터페이스를 제공합니다<br />
                        먼저, 사용자 로그인 기능을 통해 개인 계정으로 회원가입하고 로그인할 수 있습니다. 이를 통해 사용자들은 자신의 계정으로 사이트에 접근하고, 사용자 개인화된 콘텐츠를 이용할 수 있습니다.

                     또한, 관리자 계정 설정 기능이 있어 특정 사용자를 관리자로 지정할 수 있습니다. 관리자로 로그인하면 일반 사용자와는 다른 추가적인 권한을 가지게 되며, 사이트의 운영과 관리에 필요한 기능들을 사용할 수 있습니다.

                     </p>
                  </div>
                  
               </li>
               <li>
                  <div
                     className='text_trigger'
                     onMouseOver={() => handleMouseOver(1)}
                     onMouseOut={() => handleMouseOut(1)}
                  >
                     <a href="https://kobaaang.github.io/mybook1/">.</a>
                  </div>
                  <div className='text_box'>
                     <h1 className={`${textOnArray[1] ? 'text_on' : ''}`}>BOOK</h1>
                     <p>
                     이 웹 앱은 오픈 api를 사용하여 사용자가 책을 검색하고, 검색한 책을 원하는 카테고리에 저장하거나 삭제할 수 있습니다. 사용자는 '읽고 싶은', '읽는 중', '다 읽음'과 같은 카테고리를 선택하여 책을 관리할 수 있습니다.
                     또한, 사용자가 읽고 있는 책을 메인 페이지에서 확인할 수 있으며, 책을 읽는 시간을 측정하는 타이머 기능이 있습니다. 이를 통해 사용자는 현재 얼마나 책을 읽었는지를 파악할 수 있습니다.
                     또한, 책을 읽다가 마음에 드는 구절을 메모하는 기능도 있어서 사용자는 중요한 내용을 쉽게 기록할 수 있습니다.
                     이 웹 앱은 사용자들이 도서를 효율적으로 관리하고, 읽는 데 도움을 주는 기능들을 제공합니다. 간편한 사용자 인터페이스와 다양한 기능으로 사용자들에게 가치있는 경험을 제공합니다.
                     </p>
                  </div>
               </li>
               <li>
                  <div
                     className='text_trigger'
                     onMouseOver={() => handleMouseOver(2)}
                     onMouseOut={() => handleMouseOut(2)}
                  >
                     <a href="https://kobaaang.github.io/digitalworld/">.</a>
                  </div>
                  <div className='text_box'>
                     <h1 className={`${textOnArray[2] ? 'text_on' : ''}`}>Digital World</h1>
                     <p>
                     이사이트는 매력적인 도트 아트와 픽셀 그래픽으로 구성된 특별한 사이트입니다. 사용자들에게 멋진 시각적 경험과 흥미로운 상호작용을 제공하며, 도트 캐릭터들과 함께하는 모험을 즐길 수 있습니다.
                     사용자들은 아름다운 도트 아트로 구성된 캐릭터들과 다양한 상호작용을 할 수 있습니다. 특별한 픽셀 그래픽과 아름다운 디자인은 사용자들에게 특별한 경험을 선사하며, 사이트 내에서 즐거운 시간을 보낼 수 있도록 합니다.
                     이 사이트를 통해 사용자들은 예술적인 도트 아트의 아름다움을 감상하고, 독특한 픽셀 그래픽과 함께 멋진 시각적 경험을 누릴 수 있습니다. 도트와 픽셀 그래픽의 매력을 느끼고 싶은 모든 이들에게 추천하는 사이트입니다. 사이트를 방문하여 아름다운 도트 아트와 픽셀 그래픽으로 가득한 세계를 탐험해보세요!
                     </p>
                  </div>
               </li>
               <li>
                  <div
                     className='text_trigger'
                     onMouseOver={() => handleMouseOver(0)}
                     onMouseOut={() => handleMouseOut(0)}
                  >
                     <a href="https://main--elegant-bublanina-94e78c.netlify.app/">.</a>
                  </div>
                  <div className='text_box'>
                     <h1 className={`${textOnArray[3] ? 'text_on' : ''}`}>MY Diary</h1>
                     <p>
                        내가 남기고 싶은 것들을 사진과 간단한 문장들로 기록할 수 있게 만든 vue를 기반으로 한 사이트입니다.
                        간결한 인터페이스들로 사용자가 쉽게 사진을 업로드하고 필터를 적용할 수 있도록 도와줍니다. 각 사진에는 사용자가 남기고 싶은 문장을 함께 작성할 수 있으며, 이렇게 기록한 사진들은 소중한 추억을 담은 간단한 일기처럼 정리되어 관리됩니다.
                        사용자는 사진에 원하는 필터 효과를 적용하여 감성적인 이미지부터 화려한 이미지까지 다양한 스타일로 사진을 꾸밀 수 있습니다. 이렇게 다양한 필터를 적용하여 더욱 특별한 사진을 기록할 수 있다는 것이 이 사이트의 큰 특징입니다.
                        이 웹사이트를 통해 즐거운 경험과 기억에 남을 소중한 순간들을 기록하는 즐거움을 느껴보세요.
                     </p>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   );
}
export default Content3;
import React, { useEffect, useRef } from 'react';
import { media } from '../../style/media_query';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Contact = (e) => {
  const form = useRef();
  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.ask_message.value.trim();

    if (!name) {
      alert("이름을 입력해주세요.");
      form.current.user_name.focus();
      return;
    }
  
    if (!email) {
      alert("이메일을 입력해주세요.");
      form.current.user_email.focus();
      return;
    }

    // 이메일 형식 검증 정규식 사용용
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      form.current.user_email.focus();
      return;
    }

    if (!message) {
      alert("메세지를 입력해주세요.");
      form.current.ask_message.focus();
      return;
    }
    
    emailjs
      .sendForm('service_6i3c8b9', 'template_edxthle', form.current, {
        publicKey: 'g7y_GTZGmYuk45m_L'
      })
      .then(
        () => {
          alert("메일이 성공적으로 전송되었습니다!");
          form.current.reset();
        },
        (error) => {
          alert("메일 전송에 실패했습니다. 다시 시도해주세요.");
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <ContactForm name='CONTACT'>
      <div>
        <h3>Contact Us</h3>
        <form ref={form} onSubmit={sendEmail}>
          <ol>
            <li>
              <label>Name</label>
              <input type="text" name="user_name" placeholder='이름을 적어주세요.' ref={inputFocus} />
            </li>
            <li>
              <label>Email</label>
              <input type="email" name="user_email" placeholder='이메일을 적어주세요.' />
            </li>
            <li className='text-areaLine'>
              <label>Message</label>
              <textarea name="ask_message" placeholder='메세지를 입력해주세요.' />
            </li>
            <input type="submit" value="보내기" />
          </ol>
        </form>
      </div>
    </ContactForm>
  )
}

export default Contact;

const ContactForm = styled.section`
  width: 100%;
  height: auto;
  padding: 5vw 20px;
  background-color: ${({ theme }) => theme.mainBg};
  & > div{
    margin: 0 auto;
    max-width: 680px;
  }
  & h3{
    color: #15b392;
    font-size: 80px;
    font-weight: 700;
    text-align: center;
  }
  & form{
    width: 100%;
    height: 100%;
    margin-top: 40px;
  }
  & ol{
    & li{
      display: flex;
      align-items: center;

      &:nth-child(n+2){
        margin-top: 20px;
      }

      &.text-areaLine{
        align-items: flex-start;
        &>label{
          padding-top: 20px;
        }
      }
    }
    & label{
      font-size: 25px;
      font-weight: 600;
      color: ${({ theme }) => theme.textSubColor};
      min-width: 25%;
    }
    & input[type="text"],
    & input[type="email"]{
      width: 100%;
      height: 60px;
      color: ${({ theme }) => theme.textSubColor};
        border-bottom: 3px solid #ddd;
    }
    & textarea{
      width: 100%;
      height: 250px;
      color: ${({ theme }) => theme.textSubColor};
    }
    input[type="submit"]{
      width: 200px;
      max-width: 200px;
      height: 60px;
      margin: 60px auto 0;
      border-radius: 12px;
      border: 2px solid ${({ theme }) => theme.borderColor};
      display: flex;
      justify-content: center;
      align-items: center;
      linie-height: 1.2;
      font-size: 20px;
      font-weight: 600;
      color: ${({ theme }) => theme.textColorRev};
      transition: ease .3s;
      background-color: ${({ theme }) => theme.mainBgRev};
      cursor: pointer;
      &:hover{
        background-color: #15b392;
        border: 2px solid transparant;
      }
    }
    input[type="text"]:focus,
    input[type="email"]:focus,
    textarea:focus{
      border-bottom: 2px solid #15b392;
    }
  }

  ${media.pc` 
    & h3{
      font-size: 60px; 
    }
  `}
  ${media.desktop`
    padding: 80px 50px;
  `}
  ${media.tablet`
    & ol{
      & label{
        font-size: 20px;
        min-width: 20%;
      }
      input[type="text"], 
      input[type="email"]{
        height: 50px;
        font-size: 16px;
      }
      input[type="text"]::placeholder, 
      input[type="email"]::placeholder{
        font-size: 16px;
      }
      textarea{
        font-size: 16px;
      }
      textarea::placeholder{
        font-size: 16px;
      }
    }
  `}
  ${media.pad`
    padding: 50px;
    & h3{
      font-size: 40px; 
    }
  `}
  ${media.pad`
    & form{
      margin-top: 20px;
    }
    & ol{
      input[type="submit"]{
        max-width: 140px;
        height: 50px;
        border-radius: 8px;
        font-size: 18px;
        margin: 40px auto 0px;
      }
    }
  `}
  ${media.mediumSmall`
    & ol{
      & li{
        align-items: flex-start;
        flex-direction: column;
      }
    }
  `}
  ${media.mobile`
    padding: 40px 30px;
    & h3{
      font-size: 35px; 
    }
    & ol{
      & li{
        align-items: flex-start;
        flex-direction: column;
        &:nth-child(n+2){
          margin-top: 15px;
        }
        &.text-areaLine > label{
          padding: 0px;
        }
      }
      & label{
        font-size: 18px;
        min-width: 20%;
      }
    }
  `}
  ${media.smallMo`
    & ol{
      input[type="submit"]{
        max-width: inherit;
        width: 100%;
        border-radius: 6px;
        height: 45px;
        margin: 30px auto 0px;
        font-size: 14px;
      }
    }
  `}
`
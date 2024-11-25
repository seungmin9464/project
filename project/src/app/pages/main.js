"use client"
import { useEffect } from 'react';
import "../styles/main.css";

export default function Main(){
  useEffect(() => {
    // 'main__title__text' 클래스를 가진 첫 번째 요소를 선택
    const title = document.querySelector('.main__title__text');
    
    if (title) {
      const fontFamily = window.getComputedStyle(title).fontFamily;

      if (fontFamily === '"Crimson Text", serif') {
        setTimeout(() => {
          title.style.fontFamily = '"Bebas Neue", sans-serif';
        }, 3000);

        setTimeout(() => {
          title.style.fontFamily = 'Spicy Rice, sans-serif';
        }, 6000);
      }

    }
  }, []);

  return(
    <section className="main__banner">
      <h1 className="main__title">CREATE&nbsp;THE&nbsp;
        <span className="main__title__text">WEB</span>
      </h1>
    </section>
  )
}
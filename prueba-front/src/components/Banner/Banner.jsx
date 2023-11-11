import { useEffect, useRef } from "react";

import style from "./Banner.module.css";
import leftArrow from "./../../img/left-arrow.svg";
import rightArrow from "./../../img/right-arrow.svg";

const Banner = () => {
  const cardsBanner = useRef(null);
  const intervalBanner = useRef(null);

  const next = () => {
    if (cardsBanner.current.children.length > 0) {
      const firstElement = cardsBanner.current.children[0];
      cardsBanner.current.style.transition = `750ms ease-out all`;

      const sizeBanner = cardsBanner.current.children[0].offsetWidth;
      cardsBanner.current.style.transform = `translateX(-${sizeBanner}px)`;

      const transition = () => {
        cardsBanner.current.style.transition = "none";
        cardsBanner.current.style.transform = `translateX(0)`;

        cardsBanner.current.appendChild(firstElement);

        cardsBanner.current.removeEventListener("transitionend", transition);
      };

      cardsBanner.current.addEventListener("transitionend", transition);
    }
  };
  const previous = () => {
    if (cardsBanner.current.children.length > 0) {
      const index = cardsBanner.current.children.length - 1;
      const lastElement = cardsBanner.current.children[index];
      cardsBanner.current.insertBefore(
        lastElement,
        cardsBanner.current.firstChild
      );

      const sizeBanner = cardsBanner.current.children[0].offsetWidth;

      cardsBanner.current.style.transition = "none";
      cardsBanner.current.style.transform = `translateX(-${sizeBanner}px)`;

      setTimeout(() => {
        cardsBanner.current.style.transition = "750ms ease-out all";
        cardsBanner.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    intervalBanner.current = setInterval(() => {
      next();
    }, 3000);

    cardsBanner.current.addEventListener("mouseenter", () => {
      clearInterval(intervalBanner.current);
    });

    cardsBanner.current.addEventListener("mouseleave", () => {
      intervalBanner.current = setInterval(() => {
        next();
      }, 3000);
    });
  }, []);

  return (
    <div className={style.banner}>
      <div className={style.cardsBanner} ref={cardsBanner}>
        <div className={style.cardBanner}>
          <h2>This is a banner 1</h2>
          <h3>Info</h3>
          <p>
            Etiam a enim volutpat, aliquam lacus nec, laoreet purus. Integer et
            molestie augue
          </p>
        </div>

        <div className={style.cardBanner}>
          <h2>This is a banner 2</h2>
          <h3>Info</h3>
          <p>
            Etiam a enim volutpat, aliquam lacus nec, laoreet purus. Integer et
            molestie augue
          </p>
        </div>

        <div className={style.cardBanner}>
          <h2>This is a banner 3</h2>
          <h3>Info</h3>
          <p>
            Etiam a enim volutpat, aliquam lacus nec, laoreet purus. Integer et
            molestie augue
          </p>
        </div>
      </div>

      <div className={style.controllers}>
        <button className={`${style.button} ${style.left}`} onClick={previous}>
          <img src={leftArrow} className={style.arrows} />
        </button>
        <button className={`${style.button} ${style.right}`} onClick={next}>
          <img src={rightArrow} className={style.arrows} />
        </button>
      </div>
    </div>
  );
};

export default Banner;

"use client";
import { useEffect } from "react";
import jQuery from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

export default function Review() {
  useEffect(() => {
    const $ = jQuery;

    if ($ && typeof $(".review-slider").slick === "function") {
      $(".review-slider").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });
    }

    return () => {
      const slider = $(".review-slider");
      if (slider.length && typeof slider.slick === "function") {
        try {
          slider.slick("unslick");
        } catch (e) {
          console.log("Error unslicking slider:", e);
        }
      }
    };
  }, []);

  return (
    <section className="py-12 px-4 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#C06014] text-center md:text-left">
          CUSTOMER REVIEW
        </h2>
        
        <div className="mt-4 space-y-4">
          <p className="text-sm md:text-base text-gray-600 text-center md:text-left">
            Kami berkomitmen menghadirkan hidangan berkualitas tinggi yang bisa dinikmati oleh Anda dan para tamu. 
            Setiap kunjungan di tempat kami diharapkan terasa hangat dan berkesan, dengan pelayanan terbaik dan 
            suasana yang nyaman. Merupakan kebahagiaan bagi kami untuk bisa melayani Anda!
          </p>
          <p className="text-sm md:text-base text-gray-600 text-center md:text-left">
            Pernah menikmati pengalaman bersantap bersama kami? Beri tahu kami pendapat Anda. 
            Masukan Anda sangat berharga dan membantu kami untuk terus menjadi lebih baik!
          </p>
        </div>

        <div className="review-slider mt-8 mx-auto">
          <div className="px-2">
            <div className="w-full p-4 md:p-6 border rounded-lg shadow-lg bg-white">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold">Dani Pingge</h3>
                  <div className="flex space-x-1 text-yellow-500">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dolor nec orci facilisis varius.
              </p>
            </div>
          </div>

          <div className="px-2">
            <div className="w-full p-4 md:p-6 border rounded-lg shadow-lg bg-white">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold">Dani Cumbak</h3>
                  <div className="flex space-x-1 text-yellow-500">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              </p>
            </div>
          </div>

          <div className="px-2">
            <div className="w-full p-4 md:p-6 border rounded-lg shadow-lg bg-white">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold">Dani Binjek</h3>
                  <div className="flex space-x-1 text-yellow-500">
                    <span>★</span><span>★</span><span>★</span><span>☆</span><span>☆</span>
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec tellus sed augue semper porta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
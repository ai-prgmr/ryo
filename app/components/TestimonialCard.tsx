// components/TestimonialCard.jsx
import React from "react";
import { Star } from "lucide-react";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle: string;
}
export default function TestimonialCard({
  quote,
  authorName,
  authorTitle,
}: TestimonialCardProps) {
  const stars = [1, 2, 3, 4, 5]; // An array to map over

  return (
    // <>
    //   <svg
    //     className="h-12 w-12 text-gray-400 transform scale-y-[-1]" // Original SVG for closing quote
    //     viewBox="0 0 24 27"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
    //       fill="currentColor"
    //     />
    //   </svg>
    //   <figure className="max-w-screen-md mx-auto h-full flex flex-col ">
    //     {" "}
    //     <blockquote>
    //       <p className="text-2xl font-medium text-gray-500 ">{quote}</p>
    //     </blockquote>
    //     <figcaption className="flex  items-center justify-center divide-gray-500 mt-6 space-x-3">
    //       <div className="flex flex-col justify-center items-center space-y-2 ">
    //         <div className="pr-3 font-medium text-gray-900 ">{authorName}</div>
    //         <div className="pl-3 text-sm font-light text-gray-500 ">
    //           {authorTitle}
    //         </div>
    //         <div className="flex space-x-1 ">
    //           {stars.map((_, index) => (
    //             <Star
    //               key={index}
    //               className="w-5 h-5"
    //               color="#A2D22E"
    //               fill="#A2D22E"
    //             />
    //           ))}
    //         </div>
    //       </div>
    //     </figcaption>
    //   </figure>
    //   <svg
    //     className="h-12 w-12 text-gray-400 transform scale-y-[-1]" // Original SVG for closing quote
    //     viewBox="0 0 24 27"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <path
    //       d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
    //       fill="currentColor"
    //     />
    //   </svg>
    // </>
    <div className="relative max-w-lg mx-auto overflow-hidden">
      {/* Opening Quote SVG (positioned absolutely) */}

      <figure className="max-w-screen-md mx-auto flex flex-col items-center text-center relative z-10">
        <blockquote className="relative p-4">
          {/* Opening Quote Icon (in the background) */}
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="absolute -top-4 -left-0 text-9xl text-gray-300 opacity-60 -z-10"
          />

          {/* The main quote text */}
          <p className="relative text-xl md:text-2xl font-normal text-gray-600 z-10">
            {quote}
          </p>

          {/* Closing Quote Icon (in the background) */}
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="absolute -bottom-4 -right-0 text-9xl text-gray-300 opacity-60 -z-10"
          />
        </blockquote>

        <figcaption className="flex flex-col items-center mt-6 space-y-2">
          <div className="border-t-1 border-black w-30"></div>
          <div className="font-bold text-gray-900">{authorName}</div>
          <div className="text-sm font-light text-gray-500">{authorTitle}</div>
          <div className="flex space-x-1 text-green-400">
            {stars.map((_, index) => (
              <Star key={index} className="w-5 h-5" fill="#A2D22E" />
            ))}
          </div>
        </figcaption>
      </figure>

      {/* Closing Quote SVG (positioned absolutely) */}
    </div>
  );
}

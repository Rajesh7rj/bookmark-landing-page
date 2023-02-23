import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const data = [
  {
    id: 1,
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },

  {
    id: 2,
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },

  {
    id: 3,
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

export default function QnA() {
  const [selID, setSelID] = useState();
  const showAnswer = (id) => {
    if (id === selID) {
      setSelID();
    } else {
      setSelID(id);
    }
  };

  return (
    <div>
      <section className="section4">
        <div className="sec4-info">
          <h2 className="sec4-heading">Frequently Asked Questions</h2>
          <p className="sec4-text">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>

        <div className="qna">
          <hr className="line" />
          {data.map(({ id, question, answer }) => (
            <div
              key={id}
              className={`qnaBox ${id === selID ? "active" : ""}`}
              onClick={() => showAnswer(id)}
            >
              <p className="question">
                <span>
                  {question}
                </span>
                <span>
                  {" "}
                  <IoIosArrowDown
                    className="arrow"
                    style={{ color: "softBlue" }}
                  />{" "}
                </span>
              </p>
              <p className="answer">{answer}</p>
            </div>
          ))}
        </div>
        <div className="sec4-btn">
          <button className="moreInfo">More Info</button>
        </div>
      </section>
    </div>
  );
}

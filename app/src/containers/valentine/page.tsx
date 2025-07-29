"use client";

import { useState } from "react";
import Image from "next/image";

const noTextsArr = [
  "No 🥺?",
  "Gullu, are you sureee? 🐰",
  "Like... really really sure? 😳",
  "But you're my favorite hooman 🧸",
  "What if I give you unlimited hugs? 🤗",
  "If you say no, my heart will explode into glittery tears 😢",
  "Gullu, you don’t wanna make me cry right? 🥺",
  "I'll be the saddest teddy in the world 🐻💔",
  "Okay... I guess I'll stop asking... 😔",
  "SIKE!! Gullu PLEASE SAY YES 🥹💖",
  "You’re literally breaking my soft lil heart rn 💔😭",
  "Still no? wow... you’re too cute to be this cruel 😩"
];


enum Stages {
  stageNo = "stage-no",
  stageYes = "stage-yes",
  unhappy = "unhappy",
}

export default function Valentine() {
  const [stage, setStage] = useState(Stages.stageNo);
  const [counter, setCounter] = useState(0);

  const changeNoText = () => {
    setCounter((prevState) => {
      if (prevState < noTextsArr.length - 1) {
        return prevState + 1;
      } else {
        setStage(Stages.unhappy);
        return 0;
      }
    });
  };

  console.log(counter);

  return (
    <section className="valentine-box select-none">
      {stage === Stages.stageNo && (
        <>
          <div className="text-center">
            <Image
              className="mx-auto"
              src="/valentine/valentine-bear.gif"
              alt="valentine bear | valentine"
              width={250}
              height={250}
            />
          </div>
          <div className="text-2xl mt-2 text-gray-900 text-center">
            So Gullu.. when your Buri Buri Zaemon finally lands in UK.. will you let him take you out on that proper date?
          </div>
          <div className="flex items-center justify-center mt-3 text-center">
            <button
              className="bg-green-500 text-white rounded me-2 py-1 px-2"
              style={{ fontSize: counter ? `${(counter + 1) * 15}px` : "18px" }}
              onClick={() => setStage(Stages.stageYes)}
            >
              Yes
            </button>
            <button
              className="bg-red-500 text-white rounded ms-2 py-1 px-2 text-[18px]"
              onClick={changeNoText}
            >
              {noTextsArr[counter]}
            </button>
          </div>
        </>
      )}
      {stage === Stages.stageYes && (
        <>
          <Image
            src="/valentine/bear-kiss-bear-kisses.gif"
            alt="valentine kiss | valentine"
            width={250}
            height={250}
          />
          <div className="text-center text-2xl mt-2 text-gray-900">
            {"Yay! Now I'm happy!"}
          </div>
        </>
      )}
      {stage === Stages.unhappy && (
        <>
          <Image
            src="/valentine/unhappy-bear.gif"
            alt="valentine kiss | valentine"
            width={250}
            height={250}
          />
          <div className="text-center text-2xl mt-2 text-gray-900">
            {"OK! Bye..."}
          </div>
        </>
      )}
    </section>
  );
}

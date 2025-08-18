import { useState, useEffect } from "react";
import { Turns } from "@/constants/Turns";
import { useTranslation } from "react-i18next";

export default function CurrentStep({ hookData }) {
  const [changeBG, setchangeBG] = useState();
  const { t } = useTranslation();

  const { currentStep, handleStartPlay, handleResetGame, time, turn } =
    hookData;

  const namePLayer = turn === Turns.P1 ? t("game.player1") : t("game.player2");

  useEffect(() => {
    currentStep === 2
      ? time < 6
        ? setchangeBG("animate-pulse bg-secondary")
        : setchangeBG("none")
      : setchangeBG("none");
  }, [currentStep, time]);

  return (
    <footer
      className={`w-full h-60   rounded-2xl  p-10 order-4  flex justify-center items-center border-b-10 border-3  ${changeBG} `}
    >
      {currentStep === 1 && (
        <div className="w-60 h-40 rounded-xl border-b-10 border-3 bg-base-100 p-6 order-2 text-center  ">
          <p>{t("game.table")}</p>
          <h1 className="text-2xl">{t("game.tableTitle")}</h1>
          <button
            onClick={() => {
              handleStartPlay(true);
            }}
            className="btn btn-info w-30 mx-auto rounded-2xl"
          >
            {t("game.btnTable")}
          </button>
        </div>
      )}
      {currentStep === 2 && (
        <figure className="relative  p-6 order-2 text-center bg-red-20">
          <svg
            width="197"
            height="165"
            xmlns="http://www.w3.org/2000/svg"
            stroke="bg-red-300"
            fill="none"
            viewBox="0 0 197 165"
          >
            <defs>
              <filter
                x="-4.2%"
                y="-4.2%"
                width="108.4%"
                height="116.2%"
                filterUnits="objectBoundingBox"
                id="a"
              >
                <feMorphology
                  radius="3"
                  operator="dilate"
                  in="SourceAlpha"
                  result="shadowSpreadOuter1"
                />
                <feOffset
                  dy="10"
                  in="shadowSpreadOuter1"
                  result="shadowOffsetOuter1"
                />
                <feComposite
                  in="shadowOffsetOuter1"
                  in2="SourceAlpha"
                  operator="out"
                  result="shadowOffsetOuter1"
                />
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                  in="shadowOffsetOuter1"
                />
              </filter>
              <path
                d="M12.239 34.847 87.279 3.25a20 20 0 0 1 15.454-.029l75.96 31.65A20 20 0 0 1 191 53.333V130c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V53.28a20 20 0 0 1 12.239-18.433Z"
                id="b"
              />
            </defs>
            <g transform="translate(3 2)" fill="none" fillRule="evenodd">
              <use fill="#000" filter="url(#a)" xlinkHref="#b" />
              <path
                stroke="currentColor"
                strokeWidth="3"
                fill="currentColor"
                className={`${turn === Turns.P1 ? "fill-info" : "fill-error"}`}
                d="M86.697 1.868a21.5 21.5 0 0 1 16.613-.03l75.96 31.65a21.478 21.478 0 0 1 9.62 7.92 21.478 21.478 0 0 1 3.61 11.925V130a21.433 21.433 0 0 1-6.297 15.203A21.433 21.433 0 0 1 171 151.5H20a21.433 21.433 0 0 1-15.203-6.297A21.433 21.433 0 0 1-1.5 130V53.28c0-4.326 1.296-8.44 3.589-11.893a21.478 21.478 0 0 1 9.568-7.923Z"
              />
            </g>
          </svg>
          <figcaption className="text-xl absolute top-1/4 left-1/2 -translate-x-1/2 text-white font-bold ">
            {namePLayer} <span className="text-2xl">{t("game.titleTurn")}</span>
          </figcaption>
          <figcaption className=" absolute top-1/2 left-1/2 -translate-x-1/2 text-4xl text-white font-bold mt-2">
            {time}
          </figcaption>
        </figure>
      )}

      {currentStep === 3 && (
        <div
          className={`${
            turn === Turns.P1 ? "bg-info" : "bg-error"
          } flex-col  w-60 h-40 rounded-xl border-b-10 border-3 bg-base-100 p-6 order-2 text-center flex items-center justify-center text-2xl gap-y-1 `}
        >
          <h2 className=""> {namePLayer} </h2>
          <p>{t("game.winner")}</p>
          <button
            onClick={() => {
              handleStartPlay(false);
              handleResetGame(false);
            }}
            className="btn w-30 mx-auto rounded-2xl"
          >
            {t("game.btnPlay")}
          </button>
        </div>
      )}
    </footer>
  );
}

import clsx from "clsx";
import React from "react";

export default function Level({
  text,
  level,
  title,
  options,
  state,
  setState,
  letzteslevel,
}: {
  level: number;
  text: string;
  title: string;
  options: {
    text: string;
    morale: number;
    people: number;
    conclusion: string;
  }[];
  state: {
    survivors: number;
    morality: number;
    level: number;
  };
  letzteslevel?: boolean;
  setState: React.Dispatch<
    React.SetStateAction<{
      survivors: number;
      morality: number;
      level: number;
    }>
  >;
}) {
  const [active, setActive] = React.useState(-1);
  return (
    <div
      className={clsx(
        "w-full absolute grid duration-300",
        { "translate-x-full": state.level < level },
        { "-translate-x-full": state.level > level },
      )}
    >
      <section className="max-w-6xl  w-full mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center">{title}</h1>
        <h3 className="text-xl text-center mb-6">{text}</h3>
        <div>
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <button
                  disabled={active != -1}
                  className="bg-blue-500 w-full m-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  {option.text}
                </button>
              </div>
            );
          })}
        </div>
        <div
          className={clsx(
            "w-full max-w-6xl h-full bg-black bg-opacity-80 absolute px-4 py-32 sm:px-6 lg:px-8 top-0 text-lg text-center opacity-100 duration-100",
            active === -1 && "hidden opacity-0",
          )}
        >
          <h2 className="text-white text-xl mb-4">
            {active === -1 ? "" : options?.[active].conclusion}
          </h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setState({
                survivors: state.survivors + options[active].people,
                morality: state.morality + options[active].morale,
                level: state.level + 1,
              });
            }}
          >
            {letzteslevel ? "Spiel beenden" : "Nächstes Level"}
          </button>
        </div>
      </section>
    </div>
  );
}

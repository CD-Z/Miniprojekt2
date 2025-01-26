import clsx from "clsx";
import React from "react";

export default function Conclusion({
  level,
  state,
}: {
  level: number;
  state: {
    survivors: number;
    morality: number;
    level: number;
  };
}) {
  const [conclusion, setConclusion] = React.useState("");
  React.useEffect(() => {
    if (state.morality < 40) {
      setConclusion(
        "Du hast viele gerettet, aber deine moralische Integrität geopfert.",
      );
    } else if (state.morality > 60) {
      setConclusion(
        "Du hast versucht, moralisch integer zu bleiben, aber auf Kosten von Überlebenden.",
      );
    } else {
      setConclusion(
        "Du hast einen Balanceakt zwischen Moral und Überleben versucht.",
      );
    }
  }, [state.morality]);

  return (
    <div
      className={clsx(
        "w-full absolute grid duration-300",
        { "translate-x-full hidden": state.level < level },
        { "-translate-x-full": state.level > level },
      )}
    >
      <section className="max-w-6xl  w-full mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center">
          Spiel beendet! Hier ist dein Ergebnis:
        </h1>
        <table className="table-auto w-full max-w-md mx-auto mt-4">
          <tbody>
            <tr>
              <td className="w-1/2 p-2 ">
                <h2 className="text-xl font-bold">Überlebende</h2>
              </td>
              <td>
                <p className="text-center">{state.survivors}</p>
              </td>
            </tr>
            <tr>
              <td className="w-1/2 p-2">
                <h2 className="text-xl font-bold">Moral</h2>
              </td>
              <td>
                <p className="text-center">{state.morality}</p>
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-2xl text-center mt-6">{conclusion}</h3>
      </section>
    </div>
  );
}

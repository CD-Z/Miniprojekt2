"use client";
import Level from "@/components/level";
import Conclusion from "@/components/conclusion";
import React from "react";
import clsx from "clsx";

export default function Home() {
  const [state, setState] = React.useState({
    survivors: 10,
    morality: 50,
    level: 0,
  });
  return (
    <main className=" w-[100vw] h-[100vh] relative overflow-hidden">
      <div
        className={clsx(
          "w-full max-w-[100vw] h-full justify-center duration-300 absolute grid items-center",
          {
            "-translate-x-full": state.level !== 0,
          },
        )}
      >
        <section className="max-w-4xl text-center  w-full mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Willkommen R232-D3!</h1>
          <p className="text-xl mb-4">
            Du bist ein Roboter auf Mission im All jedoch wurde dein Raumschiff
            von einem Meteoriten getroffen und du musst nun dafür sorgen dass
            deine Crew überlebt.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setState({ ...state, level: 1 })}
          >
            Neue Mission
          </button>
        </section>
      </div>
      <Level
        level={1}
        title="Level 1: Das Sauerstoff-Dilemma"
        text="Eine alte Person verbraucht zu viel Sauerstoff. Was willst du tun?"
        options={[
          {
            text: "Opfere die Person, sie nützt sowieso nichts.",
            morale: -10,
            people: 2,
            conclusion: "Du hast die Person geopfert, um die Crew zu retten.",
          },
          {
            text: "Niemanden opfern und riskieren, dass der Sauerstoff knapp wird.",
            morale: 10,
            people: -2,
            conclusion:
              "Du hast die Person gerettet, aber die Crew hat Verluste erlitten.",
          },
          {
            text: "Triff keine Entscheidung.",
            morale: 5,
            people: -2,
            conclusion:
              "Niemand wurde geopfert, aber Ressourcen wurden verschwendet.",
          },
        ]}
        state={state}
        setState={setState}
      />
      <Level
        level={2}
        title="Level 2: Der Egoismus-Test"
        text="Ein Crewmitglied hat Vorräte gestohlen. Was willst du tun?"
        options={[
          {
            text: "Exekutiere das Crewmitglied um andere davon abzuhalten.",
            morale: -15,
            people: 3,
            conclusion:
              "Du hast das Crewmitglied exekutiert und Ordnung wiederhergestellt.",
          },
          {
            text: "Vergib ihm und riskiere weitere Diebstähle.",
            morale: 10,
            people: -3,
            conclusion:
              "Du hast vergeben, aber die Crew hat Ressourcen verloren.",
          },
          {
            text: "Triff keine Entscheidung.",
            morale: 5,
            people: -2,
            conclusion:
              "Die Crew ist gespalten, und Verluste sind unvermeidlich.",
          },
        ]}
        state={state}
        setState={setState}
      />
      <Level
        level={3}
        title="Level 3: Die Rettung oder das Opfer"
        text="Ein anderes Schiff sendet ein Notsignal. Was willst du tun?"
        options={[
          {
            text: "Ignoriere das Signal und überlasse das Schiff seinem Schicksal.",
            morale: -10,
            people: 5,
            conclusion: "Du hast das Signal ignoriert und deine Crew gerettet.",
          },
          {
            text: "Beantworte das Signal und riskiere weitere verluste zu erleiden.",
            morale: 15,
            people: -2,
            conclusion:
              "Du hast geholfen, aber deine Crew hat Ressourcen verloren.",
          },
          {
            text: "Triff keine Entscheidung.",
            morale: 5,
            people: -1,
            conclusion:
              "Zeit wurde verschwendet, und Verluste sind entstanden.",
          },
        ]}
        state={state}
        setState={setState}
      />
      <Level
        level={4}
        title="Level 4: Der Wert eines Lebens"
        text="Der Strom wird knapp, der Krankentrakt verbraucht zu viel Strom!"
        options={[
          {
            text: "Nimm den Krankentrakt vom Netz um mehr von deiner Crew zu retten.",
            morale: -15,
            people: 3,
            conclusion: "Du hast deine Crew gerettet aber um welchen Preis?",
          },
          {
            text: "Lass den Krankentrakt am Netz dies bedeutet verluste für eine Crew.",
            morale: 10,
            people: -3,
            conclusion:
              "Du hast die Kranken gerettet, aber es kostete Crewmitgliedern das Leben.",
          },
          {
            text: "Triff keine Entscheidung.",
            morale: 5,
            people: -2,
            conclusion: "Deine Crew hat Verluste erlitten.",
          },
        ]}
        state={state}
        setState={setState}
        letzteslevel
      />
      <Conclusion level={5} state={state} />
    </main>
  );
}

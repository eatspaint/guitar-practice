import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { styled } from "../styles/theme";
import { ScaleRuns } from "../components/exercises";

const Container = styled("div", {
  display: "grid",
  gap: "1rem",
  justifyContent: "center",
  alignContent: "center",
  margin: "0 auto",
  padding: "2rem",
  height: "100%",
});

enum Exercise {
  ScaleRuns,
}

const Home: NextPage = () => {
  const [routine, setRoutine] = useState<Exercise[]>([Exercise.ScaleRuns]);

  const renderExercise = (exercise: Exercise) => {
    switch (exercise) {
      case Exercise.ScaleRuns:
        return <ScaleRuns />;
      default:
        break;
    }
  };

  const renderRoutine = () => routine.map(renderExercise);

  const addExercise = (exercise: Exercise) =>
    setRoutine([...routine, exercise]);

  const addScaleRun = () => addExercise(Exercise.ScaleRuns);

  return (
    <>
      <Head>
        <title>Guitar Practice</title>
        <meta name="description" content="Guitar excercises" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎸</text></svg>"
        ></link>
      </Head>

      <Container>
        {renderRoutine()}
        <button type="button" onClick={addScaleRun}>
          Add scale run
        </button>
      </Container>
    </>
  );
};

export default Home;

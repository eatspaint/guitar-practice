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
        <link rel="icon" href="/guitar.svg" />
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

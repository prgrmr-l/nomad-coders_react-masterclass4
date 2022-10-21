import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: tomato;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  &:nth-child(2),
  &:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Circle = styled(motion.div)`
  background-color: black;
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const Btn = styled.button`
  background-color: green;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function App() {
  const [id, setId] = useState<null | string>(null);
  const [btn, setBtn] = useState(false);
  const toggleClicked = () => setBtn((prev) => !prev);
  const selectId=() =>setId(["1", "2", "3", "4"].map())

  return (
    <Wrapper>
      <Grid>
        {/* {["1", "2", "3", "4"].map((n) => (
          <Box onClick={() => setId(n)} key={n} layoutId={n} />
           
          
        ))} */}

        <Box layoutId="1" />
        <Box layoutId="2">{!btn ? <Circle layoutId="circle" /> : null}</Box>
        <Box layoutId="3">{btn ? <Circle layoutId="circle" /> : null}</Box>
        <Box layoutId="4" />
      </Grid>
      <Btn onClick={toggleClicked}>click here</Btn>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;

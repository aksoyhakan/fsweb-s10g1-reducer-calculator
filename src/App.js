import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer from "./reducers";
import { initialState } from "./reducers";
import {
  applyNumber,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  M_PLUS,
  M_R,
  M_C,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                onClick={(event) =>
                  dispatch({
                    type: M_PLUS,
                  })
                }
                value={"M+"}
              />
              <CalcButton
                onClick={(event) =>
                  dispatch({
                    type: M_R,
                  })
                }
                value={"MR"}
              />
              <CalcButton
                onClick={(event) =>
                  dispatch({
                    type: M_C,
                  })
                }
                value={"MC"}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={(event) =>
                  dispatch(applyNumber(Number(event.target.value)))
                }
                value={1}
              />
              <CalcButton
                onClick={(event) =>
                  dispatch(applyNumber(Number(event.target.value)))
                }
                value={2}
              />
              <CalcButton
                onClick={(event) =>
                  dispatch(applyNumber(Number(event.target.value)))
                }
                value={3}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={(event) =>
                  dispatch(applyNumber(Number(event.target.value)))
                }
                value={4}
              />
              <CalcButton
                onClick={(event) =>
                  dispatch(applyNumber(Number(event.target.value)))
                }
                value={5}
              />
              <CalcButton
                onClick={(event) =>
                  dispatch(applyNumber(Number(event.target.value)))
                }
                value={6}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={(event) =>
                  dispatch(applyNumber(Number(event.target.value)))
                }
                value={7}
              />
              <CalcButton
                onClick={(event) =>
                  dispatch(applyNumber(Number(event.target.value)))
                }
                value={8}
              />
              <CalcButton
                onClick={(event) =>
                  dispatch(applyNumber(Number(event.target.value)))
                }
                value={9}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={(event) =>
                  dispatch({
                    type: CHANGE_OPERATION,
                    payload: `${event.target.value}`,
                  })
                }
                value={"+"}
              />
              <CalcButton
                onClick={(event) =>
                  dispatch({
                    type: CHANGE_OPERATION,
                    payload: `${event.target.value}`,
                  })
                }
                value={"*"}
              />
              <CalcButton
                onClick={(event) =>
                  dispatch({
                    type: CHANGE_OPERATION,
                    payload: `${event.target.value}`,
                  })
                }
                value={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                onClick={(event) =>
                  dispatch({
                    type: CLEAR_DISPLAY,
                  })
                }
                value={"CE"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

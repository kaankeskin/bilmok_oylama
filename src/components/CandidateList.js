import React from "react";
import Candidate from "./Candidate"
import { observer } from "mobx-react-lite";

const CandidateList = ({ store }) => {
  const {
    ykdkCandidates,
    universityCandidates,
    selectedType,
    switchYkdkCandidates,
    switchUniversityCandidates
  } = store;

  let candidates;
  if (selectedType === "YKDK") candidates = ykdkCandidates;
  else candidates = universityCandidates;

  return (
    <div className="container">
      <div>
        <button onClick={switchYkdkCandidates}>YKDK</button>
        <button onClick={switchUniversityCandidates}>University</button>
      </div>
      <div className="container">
        <div className="row">
          {candidates.map(candidate => (
            <Candidate key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default observer(CandidateList);
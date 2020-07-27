import React from 'react';
import ReactDOM from 'react-dom';
import { persist } from "mst-persist";

import ykdkCandidates from "./data/ykdk";
import universityCandidates from './data/universities'

import CandidateList from "./components/CandidateList";

import { CandidateStore } from "./models/candidates";

const store = CandidateStore.create({
	ykdkCandidates: ykdkCandidates,
	universityCandidates: universityCandidates,
	selectedType: "YKDK"
});

persist("store", store);

window.store = store;
ReactDOM.render(
  <CandidateList store={store} />,
  document.getElementById('root')
);

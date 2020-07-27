import { types } from "mobx-state-tree";

const Candidate = types
  .model("Candidate", {
    id: types.identifierNumber,
    name: types.maybe(types.string),
    university: types.string,
    count: types.integer
  })
  .actions(self => ({
    decrement() {
      if (self.count > 0) {
        --self.count;
      }
    },
    increment() {
      ++self.count;
    }
  }))
  .views(self => ({
    get imagePath() {
      let sanitizer = value => {
        let charMap = { ç: "c", ö: "o", ş: "s", ı: "i", ü: "u", ğ: "g" };
        return value
          .replace(/\s/g, "_")
          .toLocaleLowerCase("tr")
          .split("")
          .map(c => charMap[c] || c)
          .join("");
      };
      let isUniversity = self.name === undefined;
      let fileNameValue = self.name === undefined ? self.university : self.name;
      return `/img/${isUniversity ? "universite" : "ykdk"}/${sanitizer(fileNameValue)}.png`;
    }
  }));

const CandidateStore = types
  .model("CandidateStore", {
    ykdkCandidates: types.array(Candidate),
    universityCandidates: types.array(Candidate),
    selectedType: types.enumeration(["YKDK", "UNIVERSITY"])
  })
  .actions(self => ({
    switchYkdkCandidates() {
      self.selectedType = "YKDK";
    },
    switchUniversityCandidates() {
      self.selectedType = "UNIVERSITY";
    }
  }));

  export { Candidate, CandidateStore };
import { makeIdGenerator } from "../utils/makeIdGenerator";

const universities = ["İstanbul Bilgi Üniversitesi", "Karadeniz Teknik Üniversitesi", "Muğla Sıtkı Koçman Üniversitesi"]

const idGenerator = makeIdGenerator();

export default universities.map(university => ({
    id: idGenerator.next().value,
    university: university,
    count: 0
}));
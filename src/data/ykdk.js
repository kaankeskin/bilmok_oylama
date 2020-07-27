import { makeIdGenerator } from "../utils/makeIdGenerator";

const ykdks =  [
    {university:'Ortadoğu Teknik Üniversitesi', name:'Alperen Keleş'},
    {university:'Adnan Menderes Üniversitesi', name:'Devrim Mert Yöyen'},
    {university:'Karadeniz Teknik Üniversitesi', name:'Ekrem İbram'},
    {university:'Karadeniz Teknik Üniversitesi', name:'Emre Ummak'},
    {university:'İstanbul Bilgi Üniveritesi', name:'Eren Kalkan'},
    {university:'Cumhuriyet Üniversitesi', name:'Fahrican Seçer'},
    {university:'Yeditepe Üniversitesi', name:'Fatih Kara'},
    {university:'Selçuk Üniversitesi', name:'Fazilet Taşyürek'},
    {university:'Mehmet Akif Ersoy Üniversitesi', name:'İbrahim Ferhat Özdemir'},
    {university:'İnönü Üniversitesi', name:'Metehan Şaşmaz'},
    {university:'Balıkesir Üniversitesi', name:'Ufuk Taş'},
    {university:'Dokuz Eylül Üniversitesi', name:'Yavuz Buğrahan Öztok'}
];

const idGenerator = makeIdGenerator();

export default ykdks.map(ykdk => ({
    id: idGenerator.next().value,
    name: ykdk.name,
    university: ykdk.university,
    count: 0
}));
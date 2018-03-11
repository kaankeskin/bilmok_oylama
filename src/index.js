import React from 'react';
import ReactDOM from 'react-dom';

import OylananKart from './oylanan.js';

function OylananList(props) {
	const oylananlar = props.oylananlar;
	const listItems = oylananlar.map((oylanan) =>
		<OylananKart universite={oylanan.universite} ad={oylanan.ad} img={oylanan.img} />
	);
	return (
		<div className="container">
			<div className="row">
				{listItems}
			</div>
		</div>
	);
}


const oylananlar =  [
			{universite:'İstanbul Bilgi Üniversitesi', img:'/img/universite/ibu.jpg'},
			{universite:'Karadeniz Teknik Üniversitesi', img:'/img/universite/ktu.jpg'},
			{universite:'Muğla Sıtkı Koçman Üniversitesi', img:'/img/universite/msku.jpg'}
		];

/*
const oylananlar =  [
			{universite:'Ortadoğu Teknik Üniversitesi', ad:'Alperen Keleş', img:'/img/ykdk/alperen_keles.png'},
			{universite:'Adnan Menderes Üniversitesi', ad:'Devrim Mert Yöyen', img:'/img/ykdk/devrim_mert_yoyen.png'},
			{universite:'Karadeniz Teknik Üniversitesi', ad:'Ekrem İbram', img:'/img/ykdk/ekrem_ibram.png'},
			{universite:'Karadeniz Teknik Üniversitesi', ad:'Emre Ummak', img:'/img/ykdk/alperen_keles.png'},
			{universite:'İstanbul Bilgi Üniveritesi', ad:'Eren Kalkan', img:'/img/ykdk/eren_kalkan.png'},
			{universite:'Cumhuriyet Üniversitesi', ad:'Fahrican Seçer', img:'/img/ykdk/fahrican_secer.png'},
			{universite:'Yeditepe Üniversitesi', ad:'Fatih Kara', img:'/img/ykdk/fatih_kara.png'},
			{universite:'Selçuk Üniversitesi', ad:'Fazilet Taşyürek', img:'/img/ykdk/fazilet_tasyurek.png'},
			{universite:'Mehmet Akif Ersoy Üniversitesi', ad:'İbrahim Ferhat Özdemir', img:'/img/ykdk/ibrahim_ferhat_ozdemir.png'},
			{universite:'İnönü Üniversitesi', ad:'Metehan Şaşmaz', img:'/img/ykdk/metehan_sasmaz.png'},
			{universite:'Balıkesir Üniversitesi', ad:'Ufuk Taş', img:'/img/ykdk/ufuk_tas.png'},
			{universite:'Dokuz Eylül Üniversitesi', ad:'Yavuz Buğrahan Öztok', img:'/img/ykdk/yavuz_bugrahan_oztok.png'}
		];
*/
ReactDOM.render(
  <OylananList oylananlar={oylananlar} />,
  document.getElementById('root')
);

import Header from 'o-header';

Header.init();

import OVideo from 'o-video';
const opts = {
    id: 4165329773001,
	optimumwidth: 710,
	placeholder: true,
	classes: ['video']
};
const video = new OVideo(document.body,opts);
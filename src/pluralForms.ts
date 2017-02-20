export const PLURAL_FORMS: {[locale: string]: {count: number, form: (n: number) => number}} = {
	ach: {count: 1, form: (n) => n > 1 ? 1 : 0},
	af: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	k: {count: 2, form: (n) => n > 1 ? 1 : 0},
	am: {count: 2, form: (n) => n > 1 ? 1 : 0},
	an: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	ar: {count: 2, form: (n) => (n===0 ? 0 : (n===1 ? 1 : (n===2 ? 2 : (n%100>=3 && n%100<=10 ? 3 : (n%100>=11 ? 4 : 5)))))},
	arn: {count: 2, form: (n) => n > 1 ? 1 : 0},
	ast: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	ay: {count: 2, form: () => 0},
	az: {count: 2, form: (n) => n !== 1 ? 1 : 0},

	be: {count: 3, form: (n) => (n%10===1 && n%100!==11 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))},
	bg: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	bn: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	bo: {count: 1, form: () => 0},
	br: {count: 2, form: (n) => n > 1 ? 1 : 0},
	brx: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	bs: {count: 3, form: (n) => (n%10===1 && n%100!==11 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))},

	ca: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	cgg: {count: 1, form: () => 0},
	cs: {count: 3, form: (n) => (n===1) ? 0 : ((n>=2 && n<=4) ? 1 : 2)},
	csb: {count: 4, form: (n) => (n===1 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))},
	cy: {count: 4, form: (n) => (n===1) ? 0 : ((n===2) ? 1 : ((n !== 8 && n !== 11) ? 2 : 3))},

	da: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	de: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	doi: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	dz: {count: 1, form: () => 0},

	el: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	en: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	eo: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	es: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	et: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	eu: {count: 2, form: (n) => n !== 1 ? 1 : 0},

	fa: {count: 1, form: () => 0},
	ff: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	fi: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	fil: {count: 2, form: (n) => n > 1 ? 1 : 0},
	fo: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	fr: {count: 2, form: (n) => n > 1 ? 1 : 0},
	fur: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	fy: {count: 2, form: (n) => n !== 1 ? 1 : 0},

	ga: {count: 5, form: (n) => (n===1 ? 0 : (n===2 ? 1 : (n<7 ? 2 : (n<11 ? 3 : 4))))},
	gd: {count: 4, form: (n) => (n===1 || n===11) ? 0 : ((n===2 || n===12) ? 1 : ((n > 2 && n < 20) ? 2 : 3))},
	gl: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	gu: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	gun: {count: 2, form: (n) => n > 1 ? 1 : 0},

	ha: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	he: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	hi: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	hne: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	hy: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	hr: {count: 3, form: (n) => (n%10===1 && n%100!==11 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))},
	hu: {count: 2, form: (n) => n !== 1 ? 1 : 0},

	ia: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	id: {count: 1, form: () => 0},
	is: {count: 2, form: (n) => (n%10!==1 || n%100===11) ? 1 : 0},
	it: {count: 2, form: (n) => n !== 1 ? 1 : 0},

	ja: {count: 1, form: () => 0},
	jbo: {count: 1, form: () => 0},
	jv: {count: 2, form: (n) => n !== 0 ? 1 : 0},

	ka: {count: 1, form: () => 0},
	kk: {count: 1, form: () => 0},
	km: {count: 1, form: () => 0},
	kn: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	ko: {count: 1, form: () => 0},
	ku: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	kw: {count: 4, form: (n) => ((n===1) ? 0 : (n===2) ? 1 : (n === 3) ? 2 : 3)},
	ky: {count: 1, form: () => 0},

	lb: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	ln: {count: 2, form: (n) => n > 1 ? 1 : 0},
	lo: {count: 1, form: () => 0},
	lt: {count: 3, form: (n) => (n%10===1 && n%100!==11 ? 0 : (n%10>=2 && (n%100<10 || n%100>=20) ? 1 : 2))},
	lv: {count: 3, form: (n) => (n%10===1 && n%100!==11 ? 0 : (n !== 0 ? 1 : 2))},

	mai: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	mfe: {count: 2, form: (n) => n > 1 ? 1 : 0},
	mg: {count: 2, form: (n) => n > 1 ? 1 : 0},
	mi: {count: 2, form: (n) => n > 1 ? 1 : 0},
	ml: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	mn: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	mni: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	mnk: {count: 3, form: (n) => (n===0 ? 0 : (n===1 ? 1 : 2))},
	mr: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	ms: {count: 1, form: () => 0},
	mt: {count: 4, form: (n) => (n===1 ? 0 : (n===0 || ( n%100>1 && n%100<11) ? 1 : ((n%100>10 && n%100<20 ) ? 2 : 3)))},
	my: {count: 1, form: () => 0},

	nah: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	nap: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	nb: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	ne: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	nl: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	se: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	nn: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	no: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	nso: {count: 2, form: (n) => n !== 1 ? 1 : 0},

	oc: {count: 2, form: (n) => n > 1 ? 1 : 0},
	or: {count: 2, form: (n) => n !== 1 ? 1 : 0},

	ps: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	pa: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	pap: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	pl: {count: 3, form: (n) => (n===1 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))},
	pms: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	pt: {count: 2, form: (n) => n !== 1 ? 1 : 0},

	rm: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	ro: {count: 3, form: (n) => (n===1 ? 0 : ((n===0 || (n%100 > 0 && n%100 < 20)) ? 1 : 2))},
	ru: {count: 3, form: (n) => (n%10===1 && n%100!==11 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))},
	rw: {count: 2, form: (n) => n !== 1 ? 1 : 0},

	sah: {count: 1, form: () => 0},
	sat: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	sco: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	sd: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	si: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	sk: {count: 3, form: (n) => (n===1) ? 0 : ((n>=2 && n<=4) ? 1 : 2)},
	sl: {count: 4, form: (n) => (n%100===1 ? 1 : (n%100===2 ? 2 : (n%100===3 || n%100===4 ? 3 : 0)))},
	so: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	son: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	sq: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	sr: {count: 3, form: (n) => (n%10===1 && n%100!==11 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))},
	su: {count: 1, form: () => 0},
	sw: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	sv: {count: 2, form: (n) => n !== 1 ? 1 : 0},

	ta: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	te: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	tg: {count: 2, form: (n) => n > 1 ? 1 : 0},
	ti: {count: 2, form: (n) => n > 1 ? 1 : 0},
	th: {count: 1, form: () => 0},
	tk: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	tr: {count: 2, form: (n) => n > 1 ? 1 : 0},
	tt: {count: 1, form: () => 0},

	ug: {count: 1, form: () => 0},
	uk: {count: 3, form: (n) => (n%10===1 && n%100!==11 ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2))},
	ur: {count: 2, form: (n) => n !== 1 ? 1 : 0},
	uz: {count: 2, form: (n) => n > 1 ? 1 : 0},

	vi: {count: 1, form: () => 0},

	wa: {count: 2, form: (n) => n > 1 ? 1 : 0},
	wo: {count: 1, form: () => 0},

	yo: {count: 2, form: (n) => n !== 1 ? 1 : 0},

	zh: {count: 1, form: () => 0},
};

import example from './example.json';

let row1 = {
	list: [
		example.list[0],
		example.list[1],
		example.list[2],
		example.list[3],
		example.list[4],
	],
	name: 'Row 1',
};
let row2 = {
	list: [
		example.list[5],
		example.list[6],
		example.list[7],
		example.list[8],
		example.list[9],
	],
	name: 'Row 2',
};
let row3 = {
	list: [
		example.list[10],
		example.list[11],
		example.list[12],
		example.list[13],
		example.list[14],
	],
	name: 'Row 3',
};
let row4 = {
	list: [
		example.list[15],
		example.list[16],
		example.list[17],
		example.list[18],
		example.list[19],
	],
	name: 'Row 4',
};
let row5 = {
	list: [
		example['list'][20],
		example['list'][21],
		example['list'][22],
		example['list'][23],
		example['list'][24],
	],
	name: 'Row 5',
};
let col1 = {
	list: [
		example.list[0],
		example.list[5],
		example.list[10],
		example.list[15],
		example.list[20],
	],
	name: 'Col 1',
};
let col2 = {
	list: [
		example.list[1],
		example.list[6],
		example.list[11],
		example.list[16],
		example.list[21],
	],
	name: 'Col 2',
};
let col3 = {
	list: [
		example.list[2],
		example.list[7],
		example.list[12],
		example.list[17],
		example.list[22],
	],
	name: 'Col 3',
};
let col4 = {
	list: [
		example.list[3],
		example.list[8],
		example.list[13],
		example.list[18],
		example.list[23],
	],
	name: 'Col 4',
};
let col5 = {
	list: [
		example.list[4],
		example.list[9],
		example.list[14],
		example.list[19],
		example.list[24],
	],
	name: 'Col 5',
};
let diag1 = {
	list: [
		example.list[0],
		example.list[6],
		example.list[12],
		example.list[18],
		example.list[24],
	],
	name: 'Diag 1',
};
let diag2 = {
	list: [
		example.list[4],
		example.list[8],
		example.list[12],
		example.list[16],
		example.list[20],
	],
	name: 'Diag 2',
};

let bingo = [
	row1,
	row2,
	row3,
	row4,
	row5,
	col1,
	col2,
	col3,
	col4,
	col5,
	diag1,
	diag2,
];

export default bingo;

import Sketch from 'react-p5';
import P5 from 'p5'; //Import this for typechecking and intellisense

interface IShapeConfig {
	points: number;
	filled: boolean;
	color: string[];
	stroke: number;
	// strokeColor: number[] | null;
	radius: number;
}

const shapes: Record<TShapes, IShapeConfig> = {
	triangle: {
		points: 3,
		filled: true,
		color: ['#00C8C8', '#EFFF2C'], // 'rgba(255, 255, 100, .25)',
		stroke: 0,
		// strokeColor: null,
		radius: 70,
	},
	square: {
		points: 4,
		filled: false,
		color: ['#D11149', '#FF7F11'],
		stroke: 20,
		// strokeColor: [255, 100],
		radius: 70,
	},
	hexagon: {
		points: 6,
		filled: true,
		color: ['#00C8C8', '#EFFF2C'], // 'rgba(255, 255, 100, .25)',
		stroke: 0,
		radius: 70,
	},
	circle: {
		points: 100,
		filled: false,
		color: ['#00C8C8', '#EFFF2C'],
		stroke: 20,
		radius: 70,
	},
};
type TShapes = 'square' | 'circle' | 'hexagon' | 'triangle';

function getRandomPosition(p5: P5, dimention: number) {
	return p5.constrain(
		p5.random(0, dimention),
		0 + dimention * 0.15,
		dimention - dimention * 0.15
	);
}

const width = window.innerWidth - 10;
const height = window.innerHeight;
let elements: Shape[] = [];
const mappedShapes: TShapes[] = ['circle', 'hexagon', 'square', 'triangle'];
const P5Canvas = () => {
	const setup = (p5: P5, canvasParentRef: Element) => {
		p5.createCanvas(width, height).parent(canvasParentRef);
		const ctx = p5.drawingContext.canvas.getContext('2d');
		const gradient = (ctx as any)?.createLinearGradient(0, 0, width, height);

		for (let i = 0; i < mappedShapes.length; i++) {
			elements[i] = new Shape(p5, mappedShapes[i]);
			elements[i].setRandomMove(p5);
			elements[i].setPoints(shapes[mappedShapes[i]].points);

			gradient.addColorStop(0, shapes[mappedShapes[i]].color[0]);
			gradient.addColorStop(0.5, shapes[mappedShapes[i]].color[1]);
			if (shapes[mappedShapes[i]].filled) {
				(ctx as any).fillStyle = gradient;
				(ctx as any).strokeStyle = 'transparent';
			} else {
				(ctx as any).fillStyle = 'transparent';
				(ctx as any).strokeStyle = gradient;
			}
		}
	};

	const draw = (p5: P5) => {
		p5.background('#1b2430');
		elements.forEach(element => {
			const [x, y] = element.getPosition();
			const points = element.getPoints();
			// element.show(p5);
			drawShapes(p5, x, y, points);
			element.move();
			element.bounce(p5);
		});
	};

	function drawShapes(p5: P5, x: number, y: number, points: number) {
		p5.beginShape();
		let angle = p5.TWO_PI / points;
		const radius = 70;
		for (let a = 0; a < p5.TWO_PI; a += angle) {
			let sx = x + p5.cos(a) * radius;
			let sy = y + p5.sin(a) * radius;
			p5.vertex(sx, sy);
		}
		p5.endShape(p5.CLOSE);
	}

	return <Sketch setup={setup} draw={draw} />;
};

export default P5Canvas;

class Shape {
	public x: number;
	public y: number;
	public speedX: number = 0;
	public speedY: number = 0;
	public dirX: number = 0;
	public dirY: number = 0;
	public shape: TShapes = 'circle';
	public r: number = 0;
	public points: number = 0;

	constructor(p5: P5, shape: TShapes) {
		this.x = getRandomPosition(p5, width);
		this.y = getRandomPosition(p5, height);

		this.dirX;
		this.dirY;
		this.speedX;
		this.speedY;
		this.shape = shape;
		this.r = 0;
	}

	setPoints = (num: number) => {
		this.points = num;
	};

	getPoints = () => {
		return this.points;
	};

	getPosition = () => {
		return [this.x, this.y];
	};

	show = (p5: P5) => {
		const { color, filled, radius, stroke } = shapes[this.shape];
		this.r = radius;

		if (filled) {
			p5.noStroke();
			// p5.fill(p5.color(color[0]), p5.color(color[1]));
		} else {
			p5.noFill();
			// p5.stroke(p5.color(color[0]), p5.color(color[1]));
			// p5.strokeWeight(stroke);
		}

		if (this.shape === 'circle') {
			p5.circle(this.x, this.y, radius * 2);
		} else {
			const { points } = shapes[this.shape];
			let angle = p5.TWO_PI / points;
			p5.beginShape();
			for (let a = 0; a < p5.TWO_PI; a += angle) {
				let sx = this.x + p5.cos(a) * radius;
				let sy = this.y + p5.sin(a) * radius;
				p5.vertex(sx, sy);
			}
			p5.endShape(p5.CLOSE);
		}
	};

	setRandomMove = (p5: P5) => {
		this.speedX = p5.random(0, 1);
		this.speedY = p5.random(0, 1);

		this.dirX = p5.random() > 0.5 ? 1 : -1;
		this.dirY = p5.random() > 0.5 ? 1 : -1;
	};

	move = () => {
		this.x += this.speedX * this.dirX;
		this.y += this.speedY * this.dirY;
	};

	bounce = (p5: P5) => {
		if (this.x - this.r < 0 || this.x + this.r > p5.width) {
			this.dirX *= -1;
			return;
		}

		if (this.y - this.r < 0 || this.y + this.r > p5.height) {
			this.dirY *= -1;
			return;
		}
	};
}

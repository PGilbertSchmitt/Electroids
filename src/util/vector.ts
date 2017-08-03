class Vector {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    static rand(mag = 1): Vector {
        let rad = 2 * Math.PI * Math.random();
        let x = Math.sin(rad) * mag;
        let y = Math.cos(rad) * mag;
        return new Vector(x, y);
    }

    plus(other: Vector): Vector {
        return new Vector(
            this.x + other.x,
            this.y + other.y,
        );
    }

    minus(other: Vector): Vector {
        return new Vector(
            this.x - other.x,
            this.y - other.y
        );
    }

    mag(): number {
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }

    dist(other: Vector): number {
        let dVec = this.minus(other);
        return dVec.mag();
    }

    scale(size: number): Vector {
        return new Vector(this.x * size, this.y * size);
    }
}
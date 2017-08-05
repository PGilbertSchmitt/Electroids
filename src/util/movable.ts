import Vector from './vector';

interface Options {
    pos?: Vector;
    vel?: Vector;
    rad?: number;
}

class Movable {
    private pos: Vector;
    private vel: Vector;
    private rad: number;

    constructor(options: Options = {}) {
        this.pos = options.pos || new Vector(0, 0);
        this.vel = options.vel || new Vector(0, 0);
        this.rad = options.rad || 0;
    }

    x(): number {
        return this.pos.x;
    }

    y(): number {
        return this.pos.y;
    }

    dx(): number {
        return this.vel.x;
    }

    dy(): number {
        return this.vel.y;
    }

    radians(): number {
        return this.rad;
    }

    setRadians(rads: number) {
        this.rad = rads;
    }

    // Should be called ever tick in order to create movement
    move() {
        this.pos = this.pos.plus(this.vel);
    }

    // Sets the position vector directly
    moveTo(location: Vector) {
        this.pos = Object.create(location);
    }

    // Combines position vectors
    moveBy(delta: Vector) {
        this.pos = this.pos.plus(delta);
    }

    // Sets the velocity vector directly
    setVelocity(velocity: Vector) {
        this.vel = velocity;
    }

    // Combines velocity vectors
    addVelocity(velocity: Vector) {
        this.vel = this.vel.plus(velocity);
    }
};

export default Movable;
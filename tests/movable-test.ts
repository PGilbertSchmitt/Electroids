import Movable from '../src/util/movable';
import Vector from '../src/util/vector';
import { expect } from 'chai';

describe('Movable', () => {
    let mover;

    beforeEach(() => {
        mover = new Movable({
            pos: new Vector(3, 4),
            vel: new Vector(5, 2),
            rad: 1.54
        });
    });

    describe('Constructor', () => {
        it('can be given an initial position value', () => {
            expect(mover.x()).to.eq(3);
            expect(mover.y()).to.eq(4);
        });

        it('can be given an initial velocity value', () => {
            expect(mover.dx()).to.eq(5);
            expect(mover.dy()).to.eq(2);
        });

        it('can be given an inital rotaion value', () => {
            expect(mover.radians()).to.eq(1.54);
        });
    });

    describe('Moving', () => {
        it('can be moved per tick', () => {
            mover.move();
            expect(mover.x()).to.eq(8);
            expect(mover.y()).to.eq(6);
            mover.move();
            expect(mover.x()).to.eq(13);
            expect(mover.y()).to.eq(8);
        });

        it('can be moved to an absolute position', () => {
            mover.moveTo(new Vector(9, 8));
            expect(mover.x()).to.eq(9);
            expect(mover.y()).to.eq(8);
        });

        it('can be moved to a relative position', () => {
            mover.moveBy(new Vector(6, 7));
            expect(mover.x()).to.eq(9);
            expect(mover.y()).to.eq(11);
        });
    });

    describe('Velocity', () => {
        it('can have its velocity changed absolutely', () => {
            mover.setVelocity(new Vector(4, 4));
            expect(mover.dx()).to.eq(4);
            expect(mover.dy()).to.eq(4);
        });

        it('can have its velocity changed relatively', () => {
            mover.addVelocity(new Vector(4, 4));
            expect(mover.dx()).to.eq(9);
            expect(mover.dy()).to.eq(6);
        })
    });
});
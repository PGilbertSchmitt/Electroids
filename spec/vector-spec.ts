import Vector from "../src/util/vector";
import { expect } from 'chai';

describe("Vector", () => {
    let vec, vec1, vec2, outVec;

    beforeEach(() => {
        vec1 = new Vector(2, 6);
        vec2 = new Vector(3, 4);
    });

    it("starts with origin vector", () => {
        vec = new Vector();
        expect(vec.x).to.eql(0);
        // expect(vec.y).toBe(0);
    });

    it("can be initialized with coordinates", () => {
        vec = new Vector(2, 4);
        expect(vec.x).to.eql(2);
        // expect(vec.y).toBe(4);
    });

    // describe("Plus", () => {
    //     beforeEach(() => {
    //         outVec = vec1.plus(vec2);
    //     })

    //     it("can add to other vectors", () => {
    //         expect(outVec.x).toBe(5);
    //         expect(outVec.y).toBe(10);
    //     });

    //     it("doesn't modify either vector", () => {
    //         expect(vec1.x).toBe(2);
    //         expect(vec2.x).toBe(3);
    //     });
    // });

    // describe("Minus", () => {
    //     beforeEach(() => {
    //         outVec = vec1.minus(vec2);
    //     });

    //     it("can subtract on vector from another", () => {
    //         expect(outVec.x).toBe(-1);
    //         expect(outVec.y).toBe(2);
    //     });

    //     it("doesn't modify either vector", () => {
    //         expect(vec1.x).toBe(2);
    //         expect(vec2.x).toBe(3);
    //     });
    // });

    // describe("Mag", () => {
    //     it("finds the magnitude within a reasonable range", () => {
    //         expect(vec1.mag()).toBeWithinRange(6.30, 6.35);
    //     });
    // });
});
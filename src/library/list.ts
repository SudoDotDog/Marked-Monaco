/**
 * @author WMXPY
 * @namespace MarkedMonaco_Library
 * @description List
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

export const markedListLibrary = [
    `interface Array<T> {`,
    `/** Filter the array by the given function. */`,
    `filter: (condition: (element: T, index: number, array: T[]) => boolean) => T[];`,
    `/** Iterate the array by the given function. */`,
    `forEach: (callback: (element: T, index: number, array: T[]) => void) => void;`,
    `/** Gets the length of the array. This is a number one higher than the highest index in the array. */`,
    `length: number;`,
    `/** Map the array by the given function. */`,
    `map: <R>(condition: (element: T, index: number, array: T[]) => R) => R[];`,
    `[index: number]: T;`,
    `}`,
].join(New_Line_Character);

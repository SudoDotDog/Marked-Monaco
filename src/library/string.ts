/**
 * @author WMXPY
 * @namespace MarkedMonaco_Library
 * @description String
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

export const markedStringLibrary = [
    `interface String {`,
    `/** Concatenate target string with other strings. */`,
    `concat: (...strings: string[]) => string;`,
    `/** Check if the string ends with the given target. */`,
    `endsWith: (searchString: string) => boolean;`,
    `/** Check if the string includes the given target. */`,
    `includes: (searchString: string) => boolean;`,
    `/** Get the length of a string. */`,
    `length: number;`,
    `/** Pad on the end of the string with the given target. */`,
    `padEnd: (targetLength: number, padString: string) => string;`,
    `/** Pad on the start of the string with the given target. */`,
    `padStart: (targetLength: number, padString: string) => string;`,
    `/** Repeat the string with the given count. */`,
    `repeat: (count: number) => string;`,
    `/** Replace the string with the given target. */`,
    `replace: (searchValue: string, replaceValue: string) => string;`,
    `/** Get a slice of the string. */`,
    `slice: (start: number, end?: number) => string;`,
    `/** Split the string with the given target. */`,
    `split: (separator: string) => string[];`,
    `/** Get the substring of the string. */`,
    `substring: (start: number, end?: number) => string;`,
    `/** Check if the string starts with the given target. */`,
    `startsWith: (searchString: string) => boolean;`,
    `/** Get the lower case of the string. */`,
    `toLowerCase: () => string;`,
    `/** Get the string. */`,
    `toString: () => string;`,
    `/** Get the upper case of the string. */`,
    `toUpperCase: () => string;`,
    `}`,
].join(New_Line_Character);

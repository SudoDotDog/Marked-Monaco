/**
 * @author WMXPY
 * @namespace MarkedMonaco_Library
 * @description Number
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

export const markedNumberLibrary = [
    `interface Number {`,
    `/** Get the string value of target number in given fraction digits. */`,
    `toFixed: (fractionDigits: number) => string;`,
    `/** Get the string value of target number in given precision. */`,
    `toPrecision: (precision: number) => string;`,
    `/** Get the string value of target number. */`,
    `toString: () => string;`,
    `}`,
].join(New_Line_Character);

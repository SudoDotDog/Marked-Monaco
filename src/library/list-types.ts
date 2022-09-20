/**
 * @author WMXPY
 * @namespace MarkedMonaco_Library
 * @description List Types
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

const arrayLikeLibrary: string[] = [
    `interface ArrayLike<T> {`,
    `length: number;`,
    `[n: number]: T;`,
    `}`,
];

export const markedListTypesLibrary = [
    ...arrayLikeLibrary,
].join(New_Line_Character);

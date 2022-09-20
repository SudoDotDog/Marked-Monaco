/**
 * @author WMXPY
 * @namespace MarkedMonaco_Library
 * @description Object Types
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

const partialLibrary: string[] = [
    `interface Partial<T> {`,
    `[P in keyof T]?: T[P];`,
    `}`,
];

export const markedObjectTypesLibrary = [
    ...partialLibrary,
].join(New_Line_Character);

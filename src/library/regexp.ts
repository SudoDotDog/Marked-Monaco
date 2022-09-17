/**
* @author WMXPY
* @namespace MarkedMonaco_Library
* @description RegExp
*/

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

export const markedRegExpLibrary = [
    `interface RegExp {`,
    `/** Check if the target string match the regular expression. */`,
    `test: (string: string) => boolean;`,
    `/** Get the string value of target regular expression. */`,
    `toString: () => string;`,
    `}`,
].join(New_Line_Character);

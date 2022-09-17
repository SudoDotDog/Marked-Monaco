/**
 * @author WMXPY
 * @namespace MarkedMonaco_Library
 * @description Boolean
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

export const markedBooleanLibrary = [
    `interface Boolean {`,
    `/** Get the string value of target boolean. */`,
    `toString: () => string;`,
    `}`,
].join(New_Line_Character);

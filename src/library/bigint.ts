/**
 * @author WMXPY
 * @namespace MarkedMonaco_Library
 * @description Bigint
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

export const markedBigintLibrary = [
    `interface Bigint {`,
    `/** Get the string value of target bigint. */`,
    `toString: () => string;`,
    `}`,
].join(New_Line_Character);

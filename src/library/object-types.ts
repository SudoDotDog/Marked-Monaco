/**
 * @author WMXPY
 * @namespace MarkedMonaco_Library
 * @description Object Types
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";

const partialLibrary: string[] = [
    `type Partial<T> {`,
    `[P in keyof T]?: T[P];`,
    `}`,
];

const requiredLibrary: string[] = [
    `type Required<T> {`,
    `[P in keyof T]-?: T[P];`,
    `}`,
];

const readonlyLibrary: string[] = [
    `type Readonly<T> {`,
    `readonly [P in keyof T]: T[P];`,
    `}`,
];

const pickLibrary: string[] = [
    `type Pick<T, K extends keyof T> {`,
    `[P in K]: T[P];`,
    `}`,
];

const recordLibrary: string[] = [
    `type Record<K extends keyof any, T> {`,
    `[P in K]: T;`,
    `}`,
];

const excludeLibrary: string[] = [
    `type Exclude<T, U> = T extends U ? never : T;`,
];

const extractLibrary: string[] = [
    `type Extract<T, U> = T extends U ? T : never;`,
];

const omitLibrary: string[] = [
    `type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;`,
];

const nonNullableLibrary: string[] = [
    `type NonNullable<T> = T & {}`,
];

const parametersLibrary: string[] = [
    `type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;`,
];

const constructorParametersLibrary: string[] = [
    `type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;`,
];

const returnTypesLibrary: string[] = [
    `type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;`,
];

const instanceTypesLibrary: string[] = [
    `type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;`,
];

export const markedObjectTypesLibrary = [
    ...partialLibrary,
    ...requiredLibrary,
    ...readonlyLibrary,
    ...pickLibrary,
    ...recordLibrary,
    ...excludeLibrary,
    ...extractLibrary,
    ...omitLibrary,
    ...nonNullableLibrary,
    ...parametersLibrary,
    ...constructorParametersLibrary,
    ...returnTypesLibrary,
    ...instanceTypesLibrary,
].join(New_Line_Character);

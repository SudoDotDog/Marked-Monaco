/**
 * @author WMXPY
 * @namespace MarkedMonaco_Declare
 * @description Monaco
 */

import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export { monaco };

export type Monaco = typeof monaco;
export type LanguageServerDefaults = typeof monaco.languages.typescript.javascriptDefaults;

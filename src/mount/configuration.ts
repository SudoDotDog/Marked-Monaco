/**
 * @author WMXPY
 * @namespace MarkedMonaco_Mount
 * @description Configuration
 */

import { LanguageServerDefaults, monaco } from "../declare/monaco";

export const mountConfiguration = (languageServerDefault: LanguageServerDefaults): void => {

    languageServerDefault.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ESNext,
        allowNonTsExtensions: true,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.ESNext,
        noEmit: true,
        typeRoots: [],
        noLib: true,
    });

    languageServerDefault.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
    });
};

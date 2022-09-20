/**
 * @author WMXPY
 * @namespace MarkedMonaco_Mount
 * @description Configuration
 */

import { LanguageNamespace, LanguageServerDefaults } from "../declare/monaco";

export const mountConfiguration = (
    languageServerDefault: LanguageServerDefaults,
    languageNamespace: LanguageNamespace,
): void => {

    languageServerDefault.setCompilerOptions({
        target: languageNamespace.ScriptTarget.ESNext,
        allowNonTsExtensions: true,
        moduleResolution: languageNamespace.ModuleResolutionKind.NodeJs,
        module: languageNamespace.ModuleKind.ESNext,
        noEmit: true,
        typeRoots: [],
        noLib: true,
    });

    languageServerDefault.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
    });
};

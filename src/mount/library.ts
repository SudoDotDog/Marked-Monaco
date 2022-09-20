/**
 * @author WMXPY
 * @namespace MarkedMonaco_Mount
 * @description Library
 */

// eslint-disable-next-line camelcase
import { New_Line_Character } from "@sudoo/marked";
import { LanguageServerDefaults } from "../declare/monaco";
import { markedBigintLibrary } from "../library/bigint";
import { markedBooleanLibrary } from "../library/boolean";
import { markedFunctionLibrary } from "../library/function";
import { markedListLibrary } from "../library/list";
import { markedListTypesLibrary } from "../library/list-types";
import { markedNumberLibrary } from "../library/number";
import { markedObjectTypesLibrary } from "../library/object-types";
import { markedRegExpLibrary } from "../library/regexp";
import { markedStringLibrary } from "../library/string";

export const mountLibrary = (languageServerDefault: LanguageServerDefaults): void => {

    languageServerDefault.addExtraLib([
        markedBigintLibrary,
        markedBooleanLibrary,
        markedFunctionLibrary,
        markedListLibrary,
        markedListTypesLibrary,
        markedNumberLibrary,
        markedObjectTypesLibrary,
        markedRegExpLibrary,
        markedStringLibrary,
    ].join(New_Line_Character), 'marked-library.d.ts');
};

/**
 * @author WMXPY
 * @namespace MarkedMonaco_Declare
 * @description Manager
 */

import { LanguageNamespace, LanguageServerDefaults } from "./monaco";

export type MarkedMonacoMixin = (manager: IMarkedMonacoManager) => void;

export interface IMarkedMonacoManager {

    use(mixin: MarkedMonacoMixin): this;

    getLanguageServerDefaults(): LanguageServerDefaults;
    getLanguageNamespace(): LanguageNamespace;
}

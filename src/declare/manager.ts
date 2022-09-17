/**
 * @author WMXPY
 * @namespace MarkedMonaco_Declare
 * @description Manager
 */

import { LanguageServerDefaults } from "./monaco";

export type MarkedMonacoMixin = (manager: IMarkedMonacoManager) => void;

export interface IMarkedMonacoManager {

    use(mixin: MarkedMonacoMixin): this;

    getLanguageServerDefaults(): LanguageServerDefaults;
}

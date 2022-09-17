/**
 * @author WMXPY
 * @namespace MarkedMonaco
 * @description Manager
 */

import { SandboxLanguage } from "@sudoo/marked";
import { LanguageServerDefaults, Monaco } from "./declare/monaco";
import { mountConfiguration } from "./mount/configuration";
import { mountLibrary } from "./mount/library";

export class MarkedMonacoManager {

    public static fromMonaco(monaco: Monaco, language: SandboxLanguage): MarkedMonacoManager {

        return new MarkedMonacoManager(monaco, language);
    }

    private readonly _language: SandboxLanguage;
    private readonly _monaco: Monaco;

    private constructor(monaco: Monaco, language: SandboxLanguage) {

        this._monaco = monaco;
        this._language = language;
    }

    public ignite(): void {

        const languageServerDefaults: LanguageServerDefaults =
            this._getDefaultLanguage();

        mountConfiguration(languageServerDefaults);

        mountLibrary(languageServerDefaults);
    }

    private _getDefaultLanguage(): LanguageServerDefaults {

        if (this._language === 'javascript') {
            return this._monaco.languages.typescript.javascriptDefaults;
        } else if (this._language === 'typescript') {
            return this._monaco.languages.typescript.typescriptDefaults;
        }
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`Unknown language: ${this._language}`);
    }
}

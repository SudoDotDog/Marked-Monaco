/**
 * @author WMXPY
 * @namespace MarkedMonaco
 * @description Manager
 */

import { SandboxLanguage } from "@sudoo/marked";
import { IMarkedMonacoManager, MarkedMonacoMixin } from "./declare/manager";
import { LanguageServerDefaults, Monaco } from "./declare/monaco";
import { mountConfiguration } from "./mount/configuration";
import { mountLibrary } from "./mount/library";

export class MarkedMonacoManager implements IMarkedMonacoManager {

    public static fromMonaco(
        monaco: Monaco,
        language: SandboxLanguage,
    ): MarkedMonacoManager {

        return new MarkedMonacoManager(monaco, language);
    }

    private readonly _language: SandboxLanguage;
    private readonly _monaco: Monaco;

    private constructor(monaco: Monaco, language: SandboxLanguage) {

        this._monaco = monaco;
        this._language = language;
    }

    public use(mixin: MarkedMonacoMixin): this {

        mixin(this);
        return this;
    }

    public ignite(): this {

        const languageServerDefaults: LanguageServerDefaults =
            this._getDefaultLanguage();

        mountConfiguration(languageServerDefaults);
        mountLibrary(languageServerDefaults);

        return this;
    }

    public getLanguageServerDefaults(): LanguageServerDefaults {

        return this._getDefaultLanguage();
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

/* eslint-disable no-undef */
export const UD = {
    locale: "ud-PK",
    language: "urdu",
    code: "ud",
    dictionary: require("./dictionary/ud-PK.json"),
};
export const EN = {
    locale: "en-US",
    language: "English",
    code: "en",
    dictionary: require("./dictionary/en-US.json"),
};
export const JP = {
    locale: "ja-JP",
    language: "Japanese",
    code: "ja",
    dictionary: { welcome: "こんにちは" },
};

const languageSet = {
    en: EN.dictionary,
    ud: UD.dictionary,
    ja: JP.dictionary,

    //covering Extreme Casses
    // if you are using i18n the fallback option will take care of it.
    null: EN.dictionary,
    undefined: EN.dictionary,
    "": EN.dictionary,
};

export const languageDictionary = {
    languageSet,
};

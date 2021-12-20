import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as RNLocalize from "react-native-localize";

const Localization = ({
  editor,
  availableLanguages,
  fallbackLanguage,
  fallbackRTL = false,
  callback = (
    firstLanguage,
    bestLanguage,
    isRTL,
    decimalSeparator,
    groupingSeparator,
    preferedCurrency,
    country,
    calendar,
    temperatureUnits,
    timezone,
    uses24hClock,
    usesMetric
  ) => null,
}) => {
  const [localized, setLocalized] = useState(false);
  useEffect(() => {
    if (
      !editor &&
      availableLanguages &&
      fallbackLanguage &&
      global.localized === undefined
    ) {
      global.localized = true;
      const locals = RNLocalize.getLocales();
      let firstLanguage = "unknown";
      if (locals.length > 0) {
        firstLanguage = locals[0].languageCode;
      }
      const { decimalSeperator, groupingSeparator } =
        RNLocalize.getNumberFormatSettings();
      const currencies = RNLocalize.getCurrencies();
      const country = RNLocalize.getCountry();
      const calendar = RNLocalize.getCalendar();
      const temperatureUnits = RNLocalize.getTemperatureUnit();
      const timezone = RNLocalize.getTimeZone();
      const uses24hClock = RNLocalize.uses24HourClock();
      const usesMetric = RNLocalize.usesMetricSystem();
      debugger;
      const language = RNLocalize.findBestAvailableLanguage(
        availableLanguages.map((language) => language.availableLanguageCodes)
      );
      let languageCode = fallbackLanguage;
      let languageRTL = fallbackRTL;
      if (language) {
        languageCode = language.languageTag;
        languageRTL = language.isRTL;
      }
      callback(
        firstLanguage,
        languageCode,
        languageRTL,
        decimalSeperator,
        groupingSeparator,
        currencies[0],
        country,
        calendar,
        temperatureUnits,
        timezone,
        uses24hClock,
        usesMetric
      );
    }
  }, [availableLanguages, fallbackLanguage, editor]);
  return <View />;
};

export default Localization;

import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import * as RNLocalize from "react-native-localize";

const Localization = ({
	availableLanguages = [],
	fallbackLanguage = "en-US",
	fallbackRTL = false,
	callback = (firstLanguage, bestLanguage, isRTL, decimalSeparator, groupingSeparator, preferedCurrency, country, calendar, temperatureUnits, timezone, uses24hClock, usesMetric) => null
}) => {
	useEffect(() => {
		
console.log(RNLocalize.getLocales());
const locals = RNLocalize.getLocales();
let firstLanguage = "unknown"
if (locals.length > 0) {
	firstLanguage = locals[0].languageCode
}
 const { decimalSeperator, groupingSeparator } = RNLocalize.getNumberFormatSettings();
 const currencies = RNLocalize.getCurrencies();
 const country = RNLocalize.getCountry()
const calendar = RNLocalize.getCalendar()
const temperatureUnits = RNLocalize.getTemperatureUnit()
const timezone = RNLocalize.getTimeZone();
const uses24hClock = RNLocalize.uses24HourClock();
const usesMetric = RNLocalize.usesMetricSystem();
const language = RNLocalize.findBestAvailableLanguage(availableLanguages)
let languageCode = fallbackLanguage
let languageRTL = fallbackRTL
if (language) {
	languageCode = language.languageTag
	languageRTL = language.isRTL
}
 callback(firstLanguage, languageCode, languageRTL, decimalSeperator, groupingSeparator, currencies[0], country, calendar, temperatureUnits, timezone, uses24hClock, usesMetric)
console.log(RNLocalize.getCurrencies());
	}, [])
	return(
		<View />
	)
}

export default Localization

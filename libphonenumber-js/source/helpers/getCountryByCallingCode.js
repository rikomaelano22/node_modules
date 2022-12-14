import Metadata from '../metadata.js'
import getNumberType from './getNumberType.js'

const USE_NON_GEOGRAPHIC_COUNTRY_CODE = false

export default function getCountryByCallingCode(callingCode, nationalPhoneNumber, metadata) {
	/* istanbul ignore if */
	if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
		if (metadata.isNonGeographicCallingCode(callingCode)) {
			return '001'
		}
	}
	// Is always non-empty, because `callingCode` is always valid
	const possibleCountries = metadata.getCountryCodesForCallingCode(callingCode)
	if (!possibleCountries) {
		return
	}
	// If there's just one country corresponding to the country code,
	// then just return it, without further phone number digits validation.
	if (possibleCountries.length === 1) {
		return possibleCountries[0]
	}
	return selectCountryFromList(possibleCountries, nationalPhoneNumber, metadata.metadata)
}

function selectCountryFromList(possibleCountries, nationalPhoneNumber, metadata) {
	// Re-create `metadata` because it will be selecting a `country`.
	metadata = new Metadata(metadata)
	for (const country of possibleCountries) {
		metadata.country(country)
		// Leading digits check would be the simplest and fastest one.
		// Leading digits patterns are only defined for about 20% of all countries.
		// https://gitlab.com/catamphetamine/libphonenumber-js/blob/master/METADATA.md#leading_digits
		// Matching "leading digits" is a sufficient but not necessary condition.
		if (metadata.leadingDigits()) {
			if (nationalPhoneNumber &&
				nationalPhoneNumber.search(metadata.leadingDigits()) === 0) {
				return country
			}
		}
		// Else perform full validation with all of those
		// fixed-line/mobile/etc regular expressions.
		else if (getNumberType({ phone: nationalPhoneNumber, country }, undefined, metadata.metadata)) {
			return country
		}
	}
}
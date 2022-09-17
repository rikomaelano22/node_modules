import withMetadataArgument from '../min/exports/withMetadataArgument.js'

import _parse from '../es6/parse.js'

export function parse() {
	return withMetadataArgument(_parse, arguments)
}

module.exports = ({copyrightHolder = '', year}) => `
This is APREAMBL.TEX, version 1.10e, written by Hans-Hermann Bode
(HHBODE@DOSUNI1.BITNET), for the BibTeX 'adaptable' family, version 1.10.
See the file APREAMBL.DOC for a detailed documentation.

This program is distributed WITHOUT ANY WARRANTY, express or implied.

    Copyright (c) ${year || new Date().getFullYear()} ${copyrightHolder}

Permission is granted to make and distribute verbatim copies of this document provided that the copyright notice and this permission notice are preserved on all copies.

Permission is granted to copy and distribute modified versions of this document under the conditions for verbatim copying, provided that the entire resulting derived work is distributed under the terms of a permission notice identical to this one.
`

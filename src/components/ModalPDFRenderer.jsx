import React from 'react'
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

const ModalPDFRenderer = ( {linkname, baseurl, filename, linkstyle} ) => {

    const url = baseurl + '/assets/' + filename;

    return (
        <EmbedPDF>
            <a href={url} style={linkstyle}>
                {linkname}
            </a>
        </EmbedPDF>
    )
}

export default ModalPDFRenderer
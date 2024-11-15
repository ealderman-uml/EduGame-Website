import React from 'react'
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

const InlinePDFRenderer = ( {baseurl, filename} ) => {

    const url = baseurl + '/assets/' + filename;

    const styles = {
        pdf: {
            width: "100%",
            height: "100%",
        }
    }

    return (
        <EmbedPDF
        mode='inline'
        style={styles.pdf}
        documentURL={url}
        />
    )
}

export default InlinePDFRenderer
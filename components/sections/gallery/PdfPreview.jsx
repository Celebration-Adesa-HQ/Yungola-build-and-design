"use client";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF worker to match the exact API version of react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfPreview({ pdf, onDocumentLoadSuccess }) {
  return (
    <Document
      file={pdf}
      onLoadSuccess={(data) => onDocumentLoadSuccess(pdf, data)}
      onLoadError={(error) => console.error("PDF Load Error:", error)}
      loading={<span className="text-xs text-darkSecondaryForeground">Loading preview...</span>}
      error={<span className="text-xs text-red-500">Failed to load PDF</span>}
      className="w-full h-full flex items-start justify-center"
    >
      <Page 
        pageNumber={1} 
        renderTextLayer={false} 
        renderAnnotationLayer={false}
        className="shadow-2xl [&>canvas]:w-full! [&>canvas]:h-auto!"
        onLoadError={(error) => console.error("Page Load Error:", error)}
      />
    </Document>
  );
}

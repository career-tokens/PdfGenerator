'use client'
import React, { useState, useEffect } from "react";



 const OneDoc = () => {
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    const fetchPdf = async () => {
        try {        
          const data = JSON.parse(localStorage.getItem("data"));
          const template = localStorage.getItem("template");
          const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/v1/getPDF`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ data , template })
          });
        const blob = await response.blob();
        setPdfData(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };

    fetchPdf();
  }, []);
  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      {pdfData ? (
        <object
          data={pdfData}
          type="application/pdf"
          style={{ width: "100%", height: "100%", border: "none" }}
        >
          <p>
            Your browser does not support PDFs.{" "}
            <a href={pdfData}>Download the PDF</a>.
          </p>
        </object>
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
};

export default OneDoc;
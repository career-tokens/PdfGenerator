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
            method: "POST",
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
        <Loading/>
      )}
    </div>
  );
};

export default OneDoc;


const Loading = () => {
  return (
    <div className="h-screen flex flex-col gap-y-[2vh] justify-center items-center bg-[#001428]">
      <div class="spinner"></div>
      <p className="text-[#009ff9] text-lg">Loading your PDF...</p>
<style>
{`.spinner {
   width: 56px;
   height: 56px;
   border-radius: 50%;
   background: radial-gradient(farthest-side,#009ff9 94%,#0000) top/9px 9px no-repeat,
          conic-gradient(#0000 30%,#009ff9);
   -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
   animation: spinner-c7wet2 1s infinite linear;
}

@keyframes spinner-c7wet2 {
   100% {
      transform: rotate(1turn);
   }
}
`}
</style>
    </div>
  )
}
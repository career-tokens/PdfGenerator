import { OneDocPdf } from "../../../../components/OneDocPdf"
import { Onedoc } from "@onedoc/client";
import { compile } from "@fileforge/react-print";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { JSXElementConstructor, ReactElement, ReactNode } from "react";

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY as string);

export async function POST(request){
  const requestData = await request.json();
  const { data , template , theme } = requestData;
  const { file, error } = await onedoc.render({
    html: await compile(OneDocPdf({data,template,theme}) as ReactElement<any, string | JSXElementConstructor<any>>),
    test: false,
    assets: [
      {
        path: "./util/util.css",
        content: readFileSync(join(process.cwd(), "./util/util.css")).toString(),
      },
    ],
  });

  if (error) {
    throw error;
  }

  const pdfBuffer = Buffer.from(file);

  // Return the PDF
  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
}

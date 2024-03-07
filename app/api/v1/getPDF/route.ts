import { OneDocPdf } from "../../../../components/OneDocPdf"
import { Onedoc } from "@onedoc/client";
import { compile } from "@onedoc/react-print";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const onedoc = new Onedoc(process.env.ONEDOC_API_KEY as string);

export async function POST(request) {
  const requestData = await request.json();
  const { data , template } = requestData;
  const { file, error } = await onedoc.render({
    html: await compile(OneDocPdf({data,template})),
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

export async function GET() {
  return new Response("hi server is working")
}
export const runtime = "edge";

import { NextResponse } from "next/server";

const URL1 = process.env.URL1;
const URL2 = process.env.URL2;

export async function POST(req) {
  const jsonData = await req.json();
  const ip = req.headers.get("x-real-ip") ?? "127.0.0.1";
  const name = String(jsonData.name || "").trim();
  const message = String(jsonData.message || "").trim();

  const resp = await sendMessage(name, message, ip);
  return new NextResponse(JSON.stringify(resp), { status: resp.status });
}

async function sendMessage(name, message, ip) {
  if (!name || !message)
    return {
      ok: false,
      message: "Please fill all the fields!",
      status: 400,
    };

  const content = `
<b>IP :</b> <code>${ip}</code>
<b>Name :</b> ${name}
<b>Message:</b>
${message}
`
    .replace(/(?:\r\n|\r|\n)/g, "%0A")
    .trim();

  const url1 = URL1 + content;
  const url2 = URL2 + content;

  try {
    const resp = await fetch(url1);
    const _ = await fetch(url2);
    const data = await resp.json();
    if (data.ok)
      return {
        ok: true,
        message: "Success!",
        status: 200,
      };
  } catch (error) {
    return {
      ok: false,
      message: "Something went wrong!",
      status: 500,
    };
  }
}

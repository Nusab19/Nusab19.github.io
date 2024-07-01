export const runtime = "edge";

import { NextResponse } from "next/server;

const URL1 = process.env.URL1;
const URL2 = process.env.URL2;

export async function POST(req) {
  const jsonData = await req.json();
  const ip = req.headers.get("x-real-ip") ?? "127.0.0.1";
  const url = String(jsonData.url || "").trim();
  
  if(url == ''){
      let resp = {
  "message":"No URL provided"
      }
      return new NextResponse(JSON.stringify(resp), { status:  401 });
  }
  
  let endpoint = `https://web.archive.org/save/${url}`
  let reap = await fetch('https://httpbin.org/post');
  
  return new NextResponse(JSON.stringify(resp.data()), { status: resp.status });
}

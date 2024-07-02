export const runtime = "edge";

import { NextResponse } from "next/server";


export async function POST(req) {
  const jsonData = await req.json();
  const ip = req.headers.get("x-real-ip") ?? "127.0.0.1";
  const url = decodeURI((jsonData.url || "").trim());
  console.log(url)
  return new NextResponse(JSON.stringify({message:" Hello", ip}), { status: 200 });
  
  if(url == ''){
      let resp = {
  "message":"No URL provided"
      }
      return new NextResponse(JSON.stringify(resp), { status:  401 });
  }
  
  let endpoint = `https://web.archive.org/save/${url}`
  let resp = await fetch(endpoint);
  
  return new NextResponse(JSON.stringify(resp.data()), { status: resp.status });
}

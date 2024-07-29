import { NextRequest } from "next/server";
import { JsonResponse } from "../default";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-real-ip") ?? "127.0.0.1";
  let abc = await fetch("https://httpbin.org/ip");
  const serverIP = (await abc.json()).origin;

  try {
    var jsonData = await req.json();
  } catch {
    const data = {
      ok: false,
      message: "Invalid JSON",
      ip,
      serverIP,
    };
    return JsonResponse(data, 400);
  }
  const url = jsonData.url;

  if (url == "") {
    let resp = {
      ok: false,
      message: "No URL provided",
      ip,
      serverIP,
    };
    return JsonResponse(resp, 400);
  }

  let endpoint = `https://web.archive.org/save/${url}`;
  let resp = await fetch(endpoint);
  if (!resp.ok) {
    let data = {
      ok: false,
      message: "Failed to archive",
      ip,
      serverIP,
    };
    return JsonResponse(data, 400);
  }

  const data = {
    ok: true,
    message: "Done",
    ip,
    serverIP,
  };
  return JsonResponse(data);
}

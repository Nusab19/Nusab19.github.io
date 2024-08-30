import axios from "axios";
import { NextRequest } from "next/server";
import { JsonResponse } from "../default";

const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const runtime = "edge";
const PASS = process.env.PASS;

export async function POST(req: NextRequest) {
  /*    Request body:
  {
    "url": "https://example.com",
    "method": "GET", // Optional (default: "GET")
    "headers": {} // Optional (default: {})
    }

    Response body:
    {
    "ok": true | false,
    "response":{
      "status": 200,
      "statusText": "OK",
      "headers": {},
    },
    "ip": "a.b.c.d",
    "serverIP": "a.b.c.d"
    }
  */
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
  const method = jsonData.method || "GET";
  const headers = jsonData.headers || {};
  var response;
  try {
    response = await axiosInstance({
      method,
      url,
      headers,
    });
  } catch (error) {
    let errorMsg = "Something went wrong";
    if (error instanceof Error) {
      errorMsg = error.message;
    }
    const data = {
      ok: false,
      message: errorMsg,
      ip,
      serverIP,
    };
    return JsonResponse(data, 400);
  }
  const data = {
    ok: true,
    response: {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      response: response.data,
    },
    ip,
    serverIP,
  };

  return JsonResponse(data);
}

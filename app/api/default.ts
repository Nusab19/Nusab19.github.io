"use server";
import { NextResponse } from "next/server";

export async function JsonResponse(data: any, status: number = 200) {
  return new NextResponse(JSON.stringify(data, null, 2), {
    status: status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  });
}

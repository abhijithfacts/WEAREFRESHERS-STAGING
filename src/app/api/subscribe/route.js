import { saveSubscription } from "../../../lib/db";

export async function POST(req) {
  const subscription = await req.json();
  await saveSubscription(subscription);
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}

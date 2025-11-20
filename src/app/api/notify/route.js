import webpush from "web-push";
import { getSubscriptions } from "../../../lib/db";

webpush.setVapidDetails(
  "mailto:abhijith@facts.ae",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

export async function POST(req) {
  const { title, body } = await req.json();
  const subscriptions = await getSubscriptions();

  await Promise.all(
    subscriptions.map((sub) =>
      webpush.sendNotification(sub, JSON.stringify({ title, body }))
    )
  );

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}

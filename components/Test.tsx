import { auth, currentUser } from "@clerk/nextjs";

export default async function Test() {
  const { userId } = auth();
  const user = await currentUser();
  return <div>{JSON.stringify({ userId, user }, null, 2)}</div>;
}

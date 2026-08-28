import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "./auth";

export async function getAuthSession() {
  return await getServerSession(authOptions);
}

export async function requireAuth() {
  const session = await getAuthSession();
  if (!session || !session.user) {
    redirect("/login");
  }
  return session;
}

export async function requireAdmin() {
  const session = await requireAuth();
  if (!session.user.isAdmin) {
    redirect("/");
  }
  return session;
}

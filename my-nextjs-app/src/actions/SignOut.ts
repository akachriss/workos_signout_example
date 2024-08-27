"use server";
import { signOut } from "@workos-inc/authkit-nextjs";

export const signOutAction = async () => {
  console.log("sign out server action");

  signOut();
};

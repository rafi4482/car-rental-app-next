"use server";

import { createSupabaseServerClient } from "@/utils/supabase/server";
import { IUser } from "@/interfaces";

export const registerUser = async (payload: Partial<IUser>) => {
  const supabase = await createSupabaseServerClient();

  // store authentication details in supabase auth
  const authTableResponse = await supabase.auth.signUp({
    email: payload.email!,
    password: payload.password!,
  });
  if (authTableResponse.error) {
    return { success: false, message: authTableResponse.error.message };
  }

  // store additional user details in user_profiles table
  const userProfilesTableResponse = await supabase
  .from("user_profiles")
  .insert([
    {
      user_id: authTableResponse.data.user?.id,
      name: payload.name,
      email: payload.email,
      role: payload.role || "user",
      status: "active",
    },
  ]);

  if (userProfilesTableResponse.error) {
    return { success: false, message: userProfilesTableResponse.error.message };
  }
  
  return { success: true, message: "User registered successfully" };
};

export const loginUser = async (payload: Pick<IUser, "email" | "password" | "role">) => {
  const supabase = await createSupabaseServerClient();

  // authenticate the user
  const authResponse = await supabase.auth.signInWithPassword({
    email: payload.email,
    password: payload.password,
  });
  if (authResponse.error) {
    return { success: false, message: authResponse.error.message };
  }

  // verify the user's role matches
  const { data: profile, error: profileError } = await supabase
    .from("user_profiles")
    .select("role")
    .eq("user_id", authResponse.data.user.id)
    .single();

  if (profileError) {
    return { success: false, message: "User profile not found" };
  }

  if (profile.role !== payload.role) {
    await supabase.auth.signOut();
    return { success: false, message: `You are not registered as a ${payload.role}` };
  }

  return { success: true, message: "Login successful" };
};

export const getCurrentUser = async () => {
  const supabase = await createSupabaseServerClient();

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return null;
  }

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (!profile) {
    return null;
  }

  return profile;
};

export const logoutUser = async () => {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  return { success: true, message: "Logged out successfully" };
};

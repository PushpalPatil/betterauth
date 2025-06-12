"use server";

import { auth } from "@//lib/auth";

export const signIn = async () => {
    await auth.api.signInEmail({
        body: {
            email: "pushpal@test.com",
            password: "pushyp",
        }
    })
}

export const signUp = async () => {
    await auth.api.signUpEmail({
        body: {
            email: "pushpal@test.com",
            password: "pushyp",
            name: "Pushpal Patil"
        }
    })
}
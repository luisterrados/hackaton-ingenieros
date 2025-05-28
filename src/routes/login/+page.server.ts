import { error, fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {

    signIn: async ({ request, locals: { supabase } }) => {

        const { email, password } = Object.fromEntries(await request.formData()) as {
            email: string
            password: string
        }

        const { error: authError } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (authError) {
            if (authError.code === 'invalid_credentials') {
                return fail(400, {email, incorrect: true});
            } else {
                return error(400, authError.message); 
            }
        } else {
            throw redirect(303, "/");
        }

    }
};
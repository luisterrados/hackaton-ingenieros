import { error, fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {

    signIn: async ({ request, locals: { supabase } }) => {

        const { phone, password } = Object.fromEntries(await request.formData()) as {
            phone: string
            password: string
        }

        const { error: authError } = await supabase.auth.signInWithPassword({
            phone: phone,
            password: password
        });

        if (authError) {
            if (authError.code === 'invalid_credentials') {
                return fail(400, {phone, incorrect: true});
            } else {
                return error(400, authError.message); 
            }
        } else {
            throw redirect(303, "/");
        }

    }
};
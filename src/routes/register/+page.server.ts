import { error, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {

    signUp: async ({ request, locals: {supabase} }) => {

        const { email, name, password } = Object.fromEntries(await request.formData()) as {
            email: string
            name: string
            password: string
        }

        const { error: authError } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: name
                }
            }
        });

        if(authError) {
            error(400, authError.message);
        }

        throw redirect(303, "/");
    }
};
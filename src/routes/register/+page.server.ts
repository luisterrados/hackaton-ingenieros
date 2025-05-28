import { error, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {

    signUp: async ({ request, locals: {supabase} }) => {

        const { phone, name, password } = Object.fromEntries(await request.formData()) as {
            phone: string
            name: string
            password: string
        }

        const { error: authError } = await supabase.auth.signUp({
            phone: phone,
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
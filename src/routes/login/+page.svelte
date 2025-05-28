<script lang="ts">
    import Eye from "@lucide/svelte/icons/eye";
    import EyeOff from "@lucide/svelte/icons/eye-off";

    let showPassword = $state(false);
    function toggleShowPassword() {
        showPassword = !showPassword;
    }

    let { form } = $props();
</script>

<div
    class="card preset-filled-surface-50-950 py-6 px-4 flex flex-col w-full sm:w-2/3 md:w-1/2 my-4 mx-auto shadow-none md:shadow-lg"
>
    <h2 class="title font-bold text-lg self-center mb-4">Iniciar sesión</h2>
    <form action="?/signIn" method="POST">
        <label for="phone" class="label"><b>Número de teléfono</b></label>
        <input
            type="tel"
            name="phone"
            id="phone"
            class="input w-full mb-2 border"
            placeholder="Número de teléfono"
            value={form?.phone ?? ''}
            required
        />

        <label for="password" class="label"><b>Contraseña</b></label>
        <div class="relative">
            <input
                name="password"
                type={showPassword ? "text" : "password"}
                class="input w-full mb-2 border"
                placeholder="Contraseña"
                id="password"
                required
            />
            <button
                type="button"
                class="absolute inset-y-0 right-4"
                onclick={toggleShowPassword}
            >
                {#if showPassword}
                    <EyeOff size={24} />
                {:else}
                    <Eye size={24} />
                {/if}
            </button>
        </div>

        {#if form?.incorrect}
            <p class="text-error-500 mb-2">Teléfono o contraseña incorrectos.</p>
        {/if}

        <button
            type="submit"
            class="btn preset-filled-secondary-500 w-full mb-2"
            >Iniciar sesión</button
        >

        <span
            >¿Aún no tienes una cuenta? <a href="/register" class="anchor"
                >Regístrate</a
            ></span
        >
    </form>
</div>

<script lang="ts">
    import Eye from "@lucide/svelte/icons/eye";
    import EyeOff from "@lucide/svelte/icons/eye-off";

    let confirmPasswordInput: HTMLInputElement;

    let password = $state("");
    let confirmPassword = $state("");

    let showPassword = $state(false);
    let showConfirmPassword = $state(false);

    function checkConfirmPassword() {
        if (password != confirmPassword) {
            confirmPasswordInput.setCustomValidity(
                "Las contraseñas deben ser iguales.",
            );
        } else {
            confirmPasswordInput.setCustomValidity("");
        }
    }

    function toggleShowPassword() {
        showPassword = !showPassword;
    }

    function toggleShowConfirmPassword() {
        showConfirmPassword = !showConfirmPassword;
    }
</script>

<div
    class="card preset-filled-surface-50-950 py-6 px-4 flex flex-col w-full sm:w-2/3 md:w-1/2 my-4 mx-auto shadow-none md:shadow-lg"
>
    <h2 class="title font-bold text-lg self-center mb-4">Crear cuenta</h2>
    <form action="?/signUp" method="POST">
        <label for="phone-number" class="label"><b>Número de teléfono</b></label
        >
        <input
            id="phone"
            name="phone"
            type="tel"
            class="input w-full mb-3 border"
            placeholder="Número de teléfono"
            required
        />

        <label for="name" class="label"><b>Nombre</b></label>
        <input
            id="name"
            name="name"
            type="text"
            class="input w-full mb-3 border"
            placeholder="Nombre"
            required
        />

        <label for="password" class="label"><b>Contraseña</b></label>
        <div class="relative">
            <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                class="input w-full mb-4 border"
                placeholder="Contraseña"
                required
                bind:value={password}
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

        <label for="repeat-password" class="label"
            ><b>Confirmar contraseña</b></label
        >
        <div class="relative">
            <input
                id="repeat-password"
                type={showConfirmPassword ? "text" : "password"}
                class="input w-full mb-4 border"
                placeholder="Confirmar contraseña"
                oninput={checkConfirmPassword}
                bind:value={confirmPassword}
                bind:this={confirmPasswordInput}
            />

            <button
                type="button"
                class="absolute inset-y-0 right-4"
                onclick={toggleShowConfirmPassword}
            >
                {#if showConfirmPassword}
                    <EyeOff size={24} />
                {:else}
                    <Eye size={24} />
                {/if}
            </button>
        </div>

        <button
            type="submit"
            class="btn preset-filled-secondary-500 w-full mb-2"
            >Crear cuenta</button
        >

        <span
            >¿Ya tienes una cuenta? <a href="login" class="anchor"
                >Inicia sesión</a
            ></span
        >
    </form>
</div>

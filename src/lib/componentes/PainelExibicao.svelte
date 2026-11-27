<script lang="ts">
    import { nave } from "../nave.svelte"

    let totalEnergy = $derived(nave.shield + nave.thrusters + nave.weapons);

</script>

<article>
    <h2>5. EXIBIÇÃO E REATIVIDADE</h2>

    <div class="luzes">
        {#each Array(6) as _}<span></span>{/each}
    </div>

    <p class="alerta" class:sobrecarga={totalEnergy > 100}>
        {#if totalEnergy > 100}
            SOBRECARGA({totalEnergy}%)
        {:else}
            REATOR NORMAL({totalEnergy}%)
        {/if}
    </p>

    <section class="velocimetros">
        <figure>
            <div class="disco amber" style:transform="rotate({nave.thrusters * 5}deg)"></div>
            <figcaption>IMPULSO ({nave.thrusters}%)</figcaption>
        </figure>

        <figure>
            <div class="disco" style:transform="rotate({nave.thrusters * 5}deg)"></div>
            <figcaption>ESCUDOS ({nave.shield}%)</figcaption>
        </figure>
    </section>
</article>
<script lang="ts">
    import { nave } from "../nave.svelte";

    let totalEnergy =$derived( nave.shield + nave.thrusters + nave.weapons);
    let velocidade = $derived(nave.thrusters * 12 * (nave.warp ? 4 : 1));
</script>

<article>
    <h2>2. MEMÓRIA REATIVA</h2>
    
    <ul>
        <li>PROPULSORES {nave.thrusters}%</li>
        <li>ESCUDOS {nave.shield}</li>
        <li>ARMAS {nave.weapons}</li>
        <li>VELOCIDADE {velocidade}</li>
        <li>ENERGIA TOTAL {totalEnergy}</li>
    </ul>

</article>
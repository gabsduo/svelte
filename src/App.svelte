<script>
import { nave } from "./lib/nave.svelte";
import MonitorDados from "./lib/componentes/MonitorDados.svelte";
import MonitorMemoria from "./lib/componentes/MonitorMemoria.svelte";
import RegistroNave from "./lib/componentes/RegistroNave.svelte";
import PainelExibicao from "./lib/componentes/PainelExibicao.svelte";
import PainelControle from "./lib/componentes/PainelControle.svelte";
</script>

<header>
  <strong>SVELTE BOOTCAMP</strong>
  <span>{nave.shipName}</span>
</header>

<main style:--impulso={nave.thrusters} class:dobra={nave.warp}>
  <section class="teto">
  <p>{nave.decolou ? 'NAVE EM VOO ESPACIAL' : 'AGUARDANDO DECOLAGEM'}</p>

  </section>


  <section  class="monitores">
    <MonitorDados/>
    <MonitorMemoria/>
    <RegistroNave/>
  </section>


  <section class="mesa">
    <PainelControle/>
    <PainelExibicao/>
  </section>

</main>

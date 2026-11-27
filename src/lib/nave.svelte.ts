import type { Nave } from "./tipos"

export const nave = $state<Nave>({
    shipName: 'svelte',
    emailPiloto: '',
    tripulantes: 2,
    shield: 1,
    thrusters: 20,
    weapons: 15,
    warp: false,
    decolou: false
})
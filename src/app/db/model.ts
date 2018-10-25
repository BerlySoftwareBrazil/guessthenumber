export interface Cobertura{
    id: number,
    name: string,
    base: boolean,
    tipo: TipoCobertura,
    img: string
}

export interface TipoCobertura{
    id: number,
    name: string
}
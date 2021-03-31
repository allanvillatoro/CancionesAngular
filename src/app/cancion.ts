export class Cancion {
    
    cancion : string;
    artista: string;
    album: string;
    anio: number;
    pais: string;
    link: string;

    constructor (
        cancion: string,
        artista: string,
        album: string, anio: number,
        pais: string, link: string) {
        this.cancion = cancion;
        this.artista = artista;
        this.album = album;
        this.anio = anio;
        this.pais = pais;
        this.link = link;
    }
}
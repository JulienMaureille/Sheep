/**
 * Created by Julien on 12/06/2017.
 */

/**
 * Classe représentant object Thread (channel)
 * Cet objet est renvoyé grâce à l'url /threads/
 */
export class ThreadModel {

    /**
     * Identifiant du thread
     */
    public id: number;

    /**
     * Nom du thread
     */
    public name: string;


    /**
     * Date de création du thread
     */
    public createdAt: string;

    /**
     * Date de la mise à jour du thread
     */
    public updatedAt: string;


    constructor(id?: number, name?: string, createdAt?: string, updatedAt?: string) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}


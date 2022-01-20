//Fésű Gábor, Vásárhelyi Ágoston ,Baráth Máté Szoft2/n 2021.12.02  

export class Cars {
    id: number;
    plate: string;
    color: string;
    brand: string;
    year: number;
    capacity: number;
    fuel: string;
    price: number;
    sold: boolean;

    constructor(id: number,
        plate: string,
        color: string,
        brand: string,
        year: number,
        capacity: number,
        fuel: string,
        price: number,
        sold: boolean) { 

        this.id=id;
        this.plate=plate;
        this.color=color;
        this.brand=brand;
        this.year=year;
        this.capacity=capacity;
        this.fuel=fuel;
        this.price=price;
        this.sold=sold;
    }
}




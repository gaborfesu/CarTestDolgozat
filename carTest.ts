//Fésű Gábor, Vásárhelyi Ágoston ,Baráth Máté Szoft2/n 2021.12.02  

import { Cars } from './car';

let kocsi1 = new Cars(1,"abc-123","hite","toyota",2004,50,"benzin",60000,false);
kocsi1.id = 1;
kocsi1.plate = "ABC-123";
kocsi1.color = "white"; 
kocsi1.brand = "Toyota";
kocsi1.year = 2004;
kocsi1.capacity = 50;
kocsi1.fuel = "benzin";  
kocsi1.price = 600000;
kocsi1.sold = false;
 
console.log(kocsi1.brand, kocsi1.sold);
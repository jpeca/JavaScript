// Funkcija koja poredi objekte
function deepEqual (item1, item2){
	// Uporedi direktno i ako su jednaki true
	if (item1 === item2) return true;
    // Ako nisu objekti  onda je false 
    if (item1 == null || typeof item1 != "object" ||
      item2 == null || typeof item2 != "object") return false;
    // Kad jesu objekti uporedi properties listu
	let keys1 = Object.keys(item1), keys2 = Object.keys(item2);
    if (keys2.length != keys2.length) return false;
	// Kad su iste dužine uporedi properti po properti - rekurzija
    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(item1[key], item2[key])) return false;
    }

   return true;
}

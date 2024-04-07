let ucenici = [
   {
     ime: "Elena",
     prezime: "Jovanović",
     godina_rodjenja: 2005,
     pol: "ženski",
     ocjene: {
       matematika: 1,
       maternji_jezik: 5,
       engleski_jezik: 4,
       biologija: 4,
       likovna_kultura: 4
     }
   },
   {
     ime: "Ivan",
     prezime: "Popović",
     godina_rodjenja: 2007,
     pol: "muški",
     ocjene: {
       matematika: 5,
       maternji_jezik: 4,
       engleski_jezik: 5,
       biologija: 5,
       likovna_kultura: 3
     }
   },
   {
     ime: "Jelena",
     prezime: "Nikolić",
     godina_rodjenja: 2006,
     pol: "ženski",
     ocjene: {
       matematika: 4,
       maternji_jezik: 3,
       engleski_jezik: 5,
       biologija: 4,
       likovna_kultura: 4
     }
   },
   {
     ime: "Stefan",
     prezime: "Stojanović",
     godina_rodjenja: 2007,
     pol: "muški",
     ocjene: {
       matematika: 5,
       maternji_jezik: 4,
       engleski_jezik: 5,
       biologija: 3,
       likovna_kultura: 5
     }
   },
   {
     ime: "Milica",
     prezime: "Simić",
     godina_rodjenja: 2005,
     pol: "ženski",
     ocjene: {
       matematika: 4,
       maternji_jezik: 5,
       engleski_jezik: 4,
       biologija: 3,
       likovna_kultura: 4
     }
   },
   {
     ime: "Nikola",
     prezime: "Pavlović",
     godina_rodjenja: 2006,
     pol: "muški",
     ocjene: {
       matematika: 3,
       maternji_jezik: 4,
       engleski_jezik: 5,
       biologija: 5,
       likovna_kultura: 4
     }
   },
   {
     ime: "Sara",
     prezime: "Ilić",
     godina_rodjenja: 2007,
     pol: "ženski",
     ocjene: {
       matematika: 5,
       maternji_jezik: 3,
       engleski_jezik: 5,
       biologija: 4,
       likovna_kultura: 3
     }
   },
   {
     ime: "Luka",
     prezime: "Đorđević",
     godina_rodjenja: 2005,
     pol: "muški",
     ocjene: {
       matematika: 4,
       maternji_jezik: 4,
       engleski_jezik: 4,
       biologija: 5,
       likovna_kultura: 5
     }
   }
 ];


ucenici.forEach(ucenik => {
  izracunajProsjek(ucenik)
  dodajUspjeh(ucenik)
})


function izracunajProsjek(ucenik) {
   ucenik.izracunajProsjek = izracunajProsjek;
   let prosjek;
   prosjek = Object.values(ucenik.ocjene)
      .reduce((total, ocjena) => {return total + ocjena}) / Object.keys(ucenik.ocjene).length;
   ucenik.prosjek = prosjek;
}

function dodajUspjeh(ucenik) {
  let uspjeh;
  let {ime, prezime, pol, prosjek} = ucenik;
 

  if(Object.values(ucenik.ocjene).some(ocjena => {return ocjena == 1})){
    uspjeh = pol == "ženski" ? "nedovoljna" : "nedovoljan"
  }else{
    switch(true){
      case prosjek > 4.5:
        uspjeh = pol == "ženski" ? "odlicna" : "odlican"
        break;
      case prosjek > 3.5:
        uspjeh = pol == "ženski" ? "vrlo dobra" : "vrlo dobar"
        break;
      case prosjek > 2.5:
        uspjeh = pol == "ženski" ? "dobra" : "dobar"
        break;
      case prosjek > 2:
        uspjeh = pol == "ženski" ? "dovoljna" : "dovoljan"
        break;
    }
  }
  ucenik.uspjeh = `${ime} ${prezime} je ${uspjeh}`
}

function sortirajUcenike(ucenici){
  let sortiraniUcenici = ucenici;
  sortiraniUcenici.sort((a, b) =>{
   if(a.prezime > b.prezime){
    return 1
   }else if (a.prezime < b.prezime){
    return -1;
   }else{
    return 0;
   }
  })
  return sortiraniUcenici;
}

function statistikaUspjeha(ucenici) {
  let statistika = {
      odlicnih: 0,
      vrloDobrih: 0,
      dobrih: 0,
      dovoljnih: 0,
      nedovoljnih: 0
  };

  ucenici.forEach(ucenik => {
      let uspjeh = ucenik.uspjeh.toLowerCase();
      if (uspjeh.includes("odlican") || uspjeh.includes("odlicna")) {
          statistika.odlicnih++;
      } else if (uspjeh.includes("vrlo dobar") || uspjeh.includes("vrlo dobra")) {
          statistika.vrloDobrih++;
      } else if (uspjeh.includes("dobar") || uspjeh.includes("dobra")) {
          statistika.dobrih++;
      } else if (uspjeh.includes("dovoljan") || uspjeh.includes("dovoljna")) {
          statistika.dovoljnih++;
      } else if (uspjeh.includes("nedovoljan") || uspjeh.includes("nedovoljna")) {
          statistika.nedovoljnih++;
      }
  });

  return statistika;
}
console.log(ucenici)
console.log(sortirajUcenike(ucenici))
console.log(statistikaUspjeha(ucenici))

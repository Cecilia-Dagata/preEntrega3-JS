const excursiones = [{ imagen: "./assets/array img/knossos.jpg", 
                       tematica: "Intervención humana", 
                       codigo: 12121, 
                       nivel: "basico", 
                       dificultad: "media", 
                       detalle: "Knossos: el palacio y el laberinto del Minotauro", 
                       duracion: "4:50 horas", 
                       precio: 22000 },

                     { imagen: "./assets/array img/petra.jpg", 
                       tematica: "Intervención humana", 
                       codigo: 12123, 
                       nivel: "plus", 
                       dificultad: "media", 
                       detalle: "Petra: la ciudad perdida", 
                       duracion: "4:00 horas",  
                       precio: 45000 },

                     { imagen: "./assets/array img/alejandria.jpg", 
                       tematica: "Intervención humana", 
                       codigo: 12125, 
                       nivel: "premium", 
                       dificultad: "alta", 
                       detalle: "Alejandría: la ciudad sumergida y el Palacio de Cleopatra", 
                       duracion: "4:10 horas",  
                       precio: 71400 },

                     { imagen: "./assets/array img/saltstraumen.jpg", 
                       tematica: "Naturaleza hostil", 
                       codigo: 24241, 
                       nivel: "basico", 
                       dificultad: "media", 
                       detalle: "Saltstraumen: el canal de los remolinos gigantes", 
                       duracion: "3:10 horas",  
                       precio: 20000 },

                     { imagen: "./assets/array img/gouffre.jpg", 
                       tematica: "Naturaleza hostil", 
                       codigo: 24242, 
                       nivel: "plus", 
                       dificultad: "alta", 
                       detalle: "Gouffre Berger: la cueva de la muerte", 
                       duracion: "3:15 horas",  
                       precio: 35700 },

                     { imagen: "./assets/array img/monte-merapi.jpeg", 
                       tematica: "Naturaleza hostil", 
                       codigo: 24245, 
                       nivel: "premium", 
                       dificultad: "alta", 
                       detalle: "Monte Merapi: el volcán más activo de Indonesia", 
                       duracion: "5:40 horas",  
                       precio: 99300 },

                         
                     { imagen: "./assets/array img/pompeya.jpg", 
                       tematica: "Zona de desastre", 
                       codigo: 36360, 
                       nivel: "basico", 
                       dificultad: "baja", 
                       detalle: "Pompeya:la ciudad sepultada", 
                       duracion: "4:30 horas", 
                       precio: 31000 },

                     { imagen: "./assets/array img/kolmanskop.jpg", 
                       tematica: "Zona de desastre", 
                       codigo: 36362, 
                       nivel: "plus", 
                       dificultad: "media", 
                       detalle: "Kolmanskop: el pueblo enterrado en arena", 
                       duracion: "4:20 horas", 
                       precio: 16000 },

                     { imagen: "./assets/array img/pripyat.jpg", 
                       tematica: "Zona de desastre", 
                       codigo: 36365, 
                       nivel: "premium", 
                       dificultad: "alta", 
                       detalle: "Pripyat: Zona de mayor radiación en el mundo", 
                       duracion: "2:15 horas", 
                       precio: 97100 },

                     { imagen: "./assets/array img/belchite.jpg", 
                       tematica: "Experiencia paranormal", 
                       codigo: 48480, 
                       nivel: "basico", 
                       dificultad: "baja", 
                       detalle: "Belchite: el pueblo de las psicofonías", 
                       duracion: "7:00 horas", 
                       precio: 18000 },

                     { imagen: "./assets/array img/poveglia.jpg", 
                       tematica: "Experiencia paranormal", 
                       codigo: 48483, 
                       nivel: "plus", 
                       dificultad: "baja", 
                       detalle: "Poveglia: la isla embrujada", 
                       duracion: "4:10 horas", 
                       precio: 66000 },

                     { imagen: "./assets/array img/aokighara.jpg", 
                       tematica: "Experiencia paranormal", 
                       codigo: 48484, 
                       nivel: "premium", 
                       dificultad: "media", 
                       detalle: "Aokigahara: el bosque de los suicidas", 
                       duracion: "3:00 horas",
                       precio: 66900 }
]

function habilitarExcursion (){ excursiones.push(new Excursion ("./assets/array img/skara-brae.jpg", "Intervención humana", 12120, "basico", "baja", "Skara Brae: yacimiento prehistórico de 5000 años", "3:30 horas", 19000))
                                excursiones.push(new Excursion ("./assets/array img/oradour-sur-glane.jpg", "Intervención humana", 12122, "plus", "baja", "Oradour-sur-Glane: la masacre nazi", "3:15 horas", 38000))
                                excursiones.push(new Excursion ("./assets/array img/naours.jpg", "Intervención humana", 12124, "premium", "media", "Naours: ciudad subterránea construida en el siglo V", "3:20 horas", 66200))
                                excursiones.push(new Excursion ("./assets/array img/lago-hirviente.jpg", "Naturaleza hostil", 24240, "basico", "media", "Dominica: El lago hirviente", "3:40 horas", 15900))
                                excursiones.push(new Excursion ("./assets/array img/huayna-picchu.jpg", "Naturaleza hostil", 24243, "plus", "alta", "Huayna Picchu: el monte más empinado del mundo", "5:00 horas", 69000))
                                excursiones.push(new Excursion ("./assets/array img/piscina-del-diablo.jpg", "Naturaleza hostil", 24244, "premium", "alta", "La piscina del diablo: en el mismo borde de las Cataratas Victorias", "4:30 horas", 85800))
                                excursiones.push(new Excursion ("./assets/array img/mar-de-aral.jpg", "Zona de desastre", 36361, "basico", "baja", "Mar de Aral:el mar desaparecido", "3:20 horas", 24000))
                                excursiones.push(new Excursion ("./assets/array img/bhaktapur.jpg", "Zona de desastre", 36363, "plus", "media", "Bhaktapur: ciudad vieja ciudad nueva", "3:40 horas", 13000))
                                excursiones.push(new Excursion ("./assets/array img/centralia.png", "Zona de desastre", 36364, "premium", "media", "Centralia: Ciudad en llamas que no ha dejado de arder desde 1960", "1:30 horas", 63000))
                                excursiones.push(new Excursion ("./assets/array img/dargavs.jpg", "Experiencia paranormal", 48481, "basico", "media", "Dargavs: la ciudad de los muertos", "7:30 horas", 33000))
                                excursiones.push(new Excursion ("./assets/array img/montsegur.jpg", "Experiencia paranormal", 48482, "plus", "media", "Montsegur: el castillo maldito", "2:20 horas", 27000))
                                excursiones.push(new Excursion ("./assets/array img/amityville.jpg", "Experiencia paranormal", 48485, "premium", "alta", "Amityville: la casa de los asesinatos", "7:00 horas", 84500))
}
const mtgDatabase = {
    "aggro": {
        title: "AGGRO",
        subtitle: "Rápido y Letal",
        speed: "⚡ Turnos 3-5 (Híper rápido)",
        icon: "⚔️",
        colorBg: "rgba(239, 68, 68, 0.1)",
        colorBorder: "#ef4444",
        quote: "No necesitas defenderte si tu rival ya está muerto en el turno 4.",
        decks: [
            {
                name: "Burn (Daño Directo)",
                colors: "🔴",
                mechanic: "Ignoras la mesa casi por completo. En lugar de invocar bárbaros para luchar, encadenas hechizos baratos de 'Fuego' y 'Rayos' apuntando directamente a la salud (cara) del rival. Antes de que él baje su monstruo estrella, ya está a 0.",
                tribal: false,
                theme: "#ef4444"
            },
            {
                name: "White Weenie (Enjambre)",
                colors: "⚪",
                mechanic: "Llenas la mesa en los turnos 1, 2 y 3 con muchísimos soldados diminutos y baratos. Luego lanzas un 'Grito de Guerra' que los dopa a todos temporalmente y atacas en masa. Ellos solos son débiles, juntos son una avalancha.",
                tribal: "Humanos, Soldados, Caballeros, Gatos",
                theme: "#f8fafc"
            },
            {
                name: "Stompy (Mostrencos)",
                colors: "🟢",
                mechanic: "Juegas hechizos que aceleran tu magia rápido para invocar bestias antinaturalmente enormes para lo poco que cuestan. Tu plan es aplastar sus endebles defensas por pura fuerza bruta e inmensidad.",
                tribal: "Dinosaurios, Bestias, Elementales, Osos",
                theme: "#22c55e"
            },
            {
                name: "Tribal Agresivo",
                colors: "🔴 🟢 🔵 ⚫ ⚪",
                mechanic: "Eliges una raza. Cada bicho que bajas de esa raza le da mejoras pasivas y poderes a los demás de la misma raza ('Tus Goblins atacan más fuerte', 'Tus Elfos dan maná'). Gana por sinergia exponencial.",
                tribal: "Goblins, Elfos, Tritones, Zombis, Fragmentados, Aliados",
                theme: "#f59e0b"
            },
            {
                name: "Bogles (Auras / Voltron)",
                colors: "🟢 ⚪",
                mechanic: "Bajas UNA sola criatura barata que tiene 'Antimaleficio' (el rival no puede apuntarla con hechizos para matarla). En los siguientes turnos, le equipas 10 auras mágicas encima hasta convertirla en un Megazord intocable.",
                tribal: false,
                theme: "#10b981"
            },
            {
                name: "Infect (Toxicidad)",
                colors: "🟢 🔵 ⚫",
                mechanic: "Rompes la regla del juego. En lugar de hacer 20 puntos de daño, tus criaturas inyectan 'Contadores de Veneno'. Si llegas a 10, ganas. Proteges a un bicho venenoso para dar un golpe letal e incurable de 10.",
                tribal: "Pirexianos",
                theme: "#84cc16"
            },
            {
                name: "Zoo (La Jungla)",
                colors: "🔴 🟢 ⚪ 🔵 ⚫",
                mechanic: "Rompes la limitación de colores. Llevas tierras que dan todos los colores de maná, solo para jugar única y exclusivamente la criatura agresiva más eficiente del juego de cada color.",
                tribal: false,
                theme: "#d946ef"
            },
            {
                name: "Affinity / Robots",
                colors: "⚙️ (Incoloro) 🔵 🔴",
                mechanic: "Todas tus cartas son artefactos metálicos. Su magia es que cada robot rebaja el coste de los demás. A veces puedes vaciar TODA tu mano de 7 cartas en el Turno 1 porque de repente todas te cuestan Cero.",
                tribal: "Artefactos, Myr, Ensamblajes",
                theme: "#94a3b8"
            },
            {
                name: "Madness / Dredgevine",
                colors: "⚫ 🔴",
                mechanic: "Tienes cartas suicidas en la mano; las usas para descartarte tus propias criaturas a la basura. ¿Por qué? Porque tus criaturas tienen habilidades desde el cementerio que vuelven solas a la vida gratis y furiosas.",
                tribal: "Vampiros, Bestias Suicidas",
                theme: "#7f1d1d"
            },
            {
                name: "Werewolves (Hombres Lobo)",
                colors: "🔴 🟢",
                mechanic: "Aprovechas el ciclo del día y la noche. De día tus humanos son eficientes, pero de noche se transforman en bestias colosales que arrollan cualquier defensa. Obligas al rival a jugar hechizos cuando no quiere para evitar que anochezca.",
                tribal: "Hombres Lobo, Humanos",
                theme: "#b45309"
            }
        ]
    },
    // CONTROL
    "control": {
        title: "CONTROL",
        subtitle: "Paciencia y Dictadura",
        speed: "⏳ Turnos 10+ (Paciencia pura)",
        icon: "🛡️",
        colorBg: "rgba(59, 130, 246, 0.1)",
        colorBorder: "#3b82f6",
        quote: "Yo concedo el permiso para que intentes jugar tus cartas. Spoiler: No te lo doy.",
        decks: [
            {
                name: "Draw-Go (Contrahechizos)",
                colors: "🔵 ⚪",
                mechanic: "Casi no llevas criaturas. Te guardas todo el maná, pasas el turno, y juegas en el turno de tu rival: le dices 'NO' (contrarrestas) a cualquier cosa buena que intente bajar, mientras usas el tiempo libre para robar más cartas.",
                tribal: false,
                theme: "#3b82f6"
            },
            {
                name: "Board Wipes (Limpia Mesas)",
                colors: "⚪ ⚫",
                mechanic: "Dejas a posta que tu rival se crea ganador y llene la mesa de monstruos. Cuando no le quedan más en la mano, lanzas mapas como 'Ira de Dios', que extinguen toda la mesa de golpe. Luego dejas caer tú un monstruo inmortal.",
                tribal: "Ángeles (Finishers)",
                theme: "#cbd5e1"
            },
            {
                name: "Prisión / Stax",
                colors: "⚪ ⚙️ ⚫",
                mechanic: "Bajas leyes y candados. 'Para atacar hay que pagar 2', 'Nadie puede enderezar tierras', 'Destruyo tus pantanos'. Ahogas físicamente sus recursos hasta que desistan por frustración pura al no poder hacer absolutamente nada.",
                tribal: false,
                theme: "#9ca3af"
            },
            {
                name: "Superfriends (Caminantes)",
                colors: "🔵 ⚪ 🟢",
                mechanic: "En lugar de tropas al frente, juegas magias que invocan a Planeswalkers (Los Héroes de la historia). Tienen escudos de carne para protegerlos mientras ellos activan habilidades demoledoras cada turno desde la retaguardia.",
                tribal: "Planeswalkers",
                theme: "#a855f7"
            },
            {
                name: "Moler / Mill",
                colors: "🔵 ⚫",
                mechanic: "La regla secreta de Magic: si alguien tiene que robar carta del mazo pero su mazo está vacío, PIERDE LA PARTIDA INSTANTÁNEAMENTE. Te dedicas a tirarles montañas de cartas directas de la biblioteca al cementerio.",
                tribal: "Cangrejos, Horrores",
                theme: "#6366f1"
            },
            {
                name: "8-Rack (Descarte)",
                colors: "⚫",
                mechanic: "Malicia pura. Su primer turno le arrancas de la mano sus mejores cartas. Luego pones 'Torturas' en mesa: encantamientos macabros que le hacen muchísimo daño por CADA carta que le falte en la mano. Le matas de locura.",
                tribal: false,
                theme: "#1e293b"
            },
            {
                name: "Tap-out Control",
                colors: "🔵 ⚫ 🔴",
                mechanic: "A diferencia del 'Draw-Go', tú juegas en tu turno. Bajas permanentes ultra caros y pesados que controlan grandes aspectos pasivos o criaturas gordísimas limpiadoras que, si nadie les responde ahora, ganan el juego a la larga.",
                tribal: "Esfinges, Levianates",
                theme: "#0c4a6e"
            }
        ]
    },
    // MIDRANGE
    "midrange": {
        title: "MIDRANGE",
        subtitle: "Adaptabilidad Brutal",
        speed: "⏱️ Turnos 6-8 (Valor progresivo)",
        icon: "⚖️",
        colorBg: "rgba(34, 197, 94, 0.1)",
        colorBorder: "#22c55e",
        quote: "No importa la situación, tengo la mejor carta posible para resolverlo.",
        decks: [
            {
                name: "Jund (El Desgaste Absoluto)",
                colors: "⚫ 🔴 🟢",
                mechanic: "Magia uno-a-uno. Destruyes su bicho, le tiras una carta de la mano, tú bajas un monstruo extremadamente pesado. Destruyes sus planes y le ganas por pura fuerza de calidad individual de cartas cuando a los dos se os acaba la gasolina.",
                tribal: "Dragones, Limo",
                theme: "#ef4444"
            },
            {
                name: "The Rock (Resistencia)",
                colors: "⚫ 🟢",
                mechanic: "Un muro de músculos negros y verdes. Juegas a poner murallas vivas gigantes con habilidad de robar vida (Vínculo vital), haciendo inútiles los atauqes rápidos rivales y secándole poco a poco la vida.",
                tribal: false,
                theme: "#15803d"
            },
            {
                name: "Aristócratas (Sacrificio)",
                colors: "⚫ ⚪ 🔴",
                mechanic: "Un estilo macabro: fabricas infinitas ratitas o peones débiles y... TÚ MISMO LOS ASESINAS. Al morirse tus propios soldados, activas disparadores (triggers) en otras cartas que merman la sangre de tu contrincante poco a poco y dopan un bicho letal.",
                tribal: "Vampiros, Clerigos, Humanos",
                theme: "#881337"
            },
            {
                name: "Toolbox (Caja de Herramientas)",
                colors: "🟢 ⚪",
                mechanic: "Llevas solo 1 copia de 50 criaturas distintas para problemas distintos. Pero, usas hechizos 'Tutor' que te dejan buscar en tu biblioteca la criatura PERFECTA que contrarresta el plan de tu rival en ese mismo momento exacto.",
                tribal: false,
                theme: "#facc15"
            },
            {
                name: "Hatebears (Osos del Odio)",
                colors: "⚪ 🟢",
                mechanic: "Juegas guerreros 2/2 pequeñitos (del tamaño de un oso) pero que aplican reglas estrictas. Ej: 'Mientras yo esté vivo, nadie puede usar el cementerio' o 'Cualquier hechizo enemigo cuesta 1 maná extra'. Te pegan mientras frustran tu plan pasivamente.",
                tribal: "Humanos, Osos",
                theme: "#d1d5db"
            },
            {
                name: "Blink (Parpadeo)",
                colors: "⚪ 🔵",
                mechanic: "El efecto 'Al Entrar al Campo de Batalla'. Bajas un héroe que cura 5 al entrar. Acto seguido le disparas magia blanca para 'exiliarlo' y volverlo a meter al instante (parpadeo), activando su efecto de curar diez mil veces repetidas. Beneficios asquerosos.",
                tribal: "Ángeles, Pájaros, Ilusiones",
                theme: "#7dd3fc"
            },
            {
                name: "Enchantress (Puro Aura)",
                colors: "🟢 ⚪",
                mechanic: "Renuncias casi a las criaturas. Enganchas a una sola musa o muro hechizos tras hechizos de Defensa Absoluta, y cada vez que pones un campo de fuerza nuevo, robas muchísimas cartas debido a tus motores mágicos. Inevitable.",
                tribal: "Espíritus",
                theme: "#14b8a6"
            }
        ]
    },
    // TEMPO
    "tempo": {
        title: "TEMPO",
        subtitle: "Esgrima Inteligente",
        speed: "🏃 Turnos 5-7 (Control de ritmos)",
        icon: "🗡️",
        colorBg: "rgba(168, 85, 247, 0.1)",
        colorBorder: "#a855f7",
        quote: "Solo necesito que mi guerrero aguante 5 asaltos en pie y habré desmoronado tu imperio entero.",
        decks: [
            {
                name: "Delver / Spellslinger",
                colors: "🔵 🔴",
                mechanic: "Turno 1: bajas a un mosquito investigador o humano de coste 1 letal. Resto de la partida: Gastas todas tus cartas y maná baratos en decir 'Mucha prisa, te lo devuelvo a tu mano' o 'Fuego, mato a tu bicho', pero en secreto, el mosquito te está cosiendo a daños intocable.",
                tribal: "Hechiceros",
                theme: "#ef4444"
            },
            {
                name: "Death's Shadow",
                colors: "⚫ 🔵 🔴",
                mechanic: "¡Eres masoquista! El Diablo Cthulhu de tu mazo cuesta 1 maná y tiene +13/+13 de fuerza, PERO pierde fuerza según la vida que TÚ tengas. Si estás a 20 vidas el Diablo muere, si estás a 5 de vida, es un 8/8 por 1. Juegas fetiches dañinos a posta.",
                tribal: "Avatar, Sombras",
                theme: "#0f172a"
            },
            {
                name: "Hadas / Ninjas",
                colors: "🔵 ⚫",
                mechanic: "La pesadilla escurridiza. Hadas voladoras entran cortándote el rollo. Luego cuando pegan en el aire cambian mágicamente de sitio en la sombra con Ninjas horribles ('Ninjutsu') para robar cartas o matarte el alma. Todo desde las sombras.",
                tribal: "Hadas, Ninjas, Pícaros",
                theme: "#3b0764"
            },
            {
                name: "Flash (Espejismo)",
                colors: "🔵 🟢",
                mechanic: "Nunca. Juegas. En. Tu. Turno. Tienes criaturas que se pueden bajar al final del turno enemigo. Estás espiando a ver qué hace, dejas pasar ataques en falso y entonces... PUM, emboscada a la velocidad de la luz. Control de tiempos asfixiante.",
                tribal: "Espíritus, Lobos Místicos",
                theme: "#0ea5e9"
            },
            {
                name: "Rogue Bounce (Rebote)",
                colors: "🔵",
                mechanic: "Él invierte su turno 5 tapándose todo el maná, estresado, rezando, invoca un Dios Dorado pagando impuestos severos. Tú tiras 1 maná azul, dices 'A tu mano de vuelta colega'. Ha perdido su turno entero. Tú no, porque a la vez le has pegado. Tempo matemático puro.",
                tribal: "Piratas, Ilusiones",
                theme: "#0284c7"
            },
            {
                name: "Infect Tempo",
                colors: "🟢 🔵",
                mechanic: "El enjambre no es masivo. Sólo hay 1 bicho asqueroso de 'Veneno 1/1'. Lo cubres. Lo escondes. Cuando el rival gira la cabeza para atacar u olvida bloquear, de repente ese bicho se hincha a Músculo 10+ y te clava veneno infinito colado.",
                tribal: "Pirexianos",
                theme: "#166534"
            }
        ]
    },
    // COMBO
    "combo": {
        title: "COMBO",
        subtitle: "Matemáticas Rotas",
        speed: "🧩 Turnos 4-6 (Explosión súbita)",
        icon: "🧩",
        colorBg: "rgba(245, 158, 11, 0.1)",
        colorBorder: "#f59e0b",
        quote: "No estamos jugando a darnos puñetazos. Yo juego mi solitario de matemáticas; si lo resuelvo, estallas.",
        decks: [
            {
                name: "Storm (La Tormenta)",
                colors: "🔴 🔵",
                mechanic: "'Storm' es una avería del juego. Una mágia que se copia a sí misma tantas veces como hechizos se hayan jugado ESTE turno. Te preparas y un buen día juegas: robar, dar maná rojo, robar maná azul, robar... 15 hechizos. Luego pones 'Metralla Storm', se copia 15 veces y le hace 15 misiles a su cara de un golpe letal e ineludible.",
                tribal: false,
                theme: "#ea580c"
            },
            {
                name: "Reanimator (Exhumar)",
                colors: "⚫ 🔴 🔵",
                mechanic: "Los monstruos gigantes valen 8 o 10 manás, son infumables a veces. Fácil: Te lo descartas adrede. Turno 1 o 2 usas un hechizo negro oscuro de 1 o 2 de coste: 'Revivir del cementerio', ¡BAM! Un Jefe final inamovible en tu cara sin pagar el precio real.",
                tribal: "Demonios, Dragones, Eldrazi, Pretores",
                theme: "#4c1d95"
            },
            {
                name: "Combo A+B (Espiral Infinita)",
                colors: "🔴 🔵 🟢",
                mechanic: "Tienes a la bestia 'A', que destapa permanentes, y a la magia 'B', que copia bestias. Pones a las 2 a interactuar. Esto crea un bucle en el código (infinito Loop) donde se generan un trillón de copias idénticas en 0.2 segundos. GG.",
                tribal: "Gatos, Ilusiones",
                theme: "#e11d48"
            },
            {
                name: "Land Combo (Tierra Letal)",
                colors: "🟢 🔴",
                mechanic: "Ignora las criaturas. Solo llevas magia para buscar tierras. Tienes una montaña (Valakut) que cuando pones otra montaña hace daño a la cara. Juegas 'Cambio de paisaje', metes 8 montañas de golpe y la reacción erupta 24 daños explosivos de un petardazo volcánico intratable.",
                tribal: "Elementales",
                theme: "#b45309"
            },
            {
                name: "Ad Nauseam",
                colors: "⚫ ⚪",
                mechanic: "Bajas una defensa que dice 'No puedes perder en vida bajo Cero hoy'. Y luego lanzas la magia 'Ad Nauseam', la cual pagas robando TODA, sí TODA TU PUTA BARAJA, a costa de restarte vidas, poniéndote a -25 (no estás muerto). Con todas las cartas en mano, metes la combinación invencible letal sobre él.",
                tribal: false,
                theme: "#111827"
            },
            {
                name: "Dredge (El Cementerio Enfermo)",
                colors: "⚫ 🟢 🔴",
                mechanic: "Una profanación extrema. Casi nunca usas los costes de arriba a la derecha de la carta. Juegas la partida DESDE la basura, auto-botándote las cartas repetidamente a ti mismo y encadenando zombis putrefactos que resurgen al soltar pestes en la papela. Horrible enfrentarse a esto.",
                tribal: "Zombis, Horrores",
                theme: "#3f6212"
            },
            {
                name: "Cheeri0s / Eggs (Coste Cero)",
                colors: "⚪ 🔵 ⚙️",
                mechanic: "Tu mazo tiene 30 artefactos o armaduras que cuestan 0 manás. Las vomitas todas gratis. Gracias a cartas motor que roban al jugar artefactos, vacías medio mazo y al llegar al volumen crítico lo metes todo a una licuadora haciendo una bomba mágica de metralla ilimitada de impacto frontal por efecto bola de nieve.",
                tribal: "Artefactos Coste Cero",
                theme: "#cbd5e1"
            }
        ]
    },
    // RAMP / BIG MANA
    "ramp": {
        title: "BIG MANA / RAMP",
        subtitle: "Recursos Titánicos",
        speed: "🏔️ Turnos 6-7 (Jugando hechizos de turno 10)",
        icon: "🏔️",
        colorBg: "rgba(14, 116, 144, 0.1)",
        colorBorder: "#06b6d4",
        quote: "Mientras tú juegas con palos y piedras, yo convoco a los Dioses Primigenios.",
        decks: [
            {
                name: "Tron (Urzatron)",
                colors: "⚙️ 🟢",
                mechanic: "Juntas las 3 peculiares tierras de Urza en los turnos 1, 2 y 3. Inmediatamente te dan 7 manás en el tercer turno. Lo usas para bajar un Karn Golem gigante incoloro que reinicia el juego o devora los permanentes rivales.",
                tribal: "Eldrazis, Golems",
                theme: "#a3a3a3"
            },
            {
                name: "Valakut / Scapeshift",
                colors: "🔴 🟢",
                mechanic: "Tu mazo son básicamente tierras. Magias verdes que buscan montañas, hasta tener 7.  Juegas 'Metamorfosis', tiras todas tus tierras al cementerio para buscar Valakuts y Montañas, que tienen un efecto en cadena de erupción volcánica matando al oponente a base de daño de tierras.",
                tribal: false,
                theme: "#dc2626"
            },
            {
                name: "Ramp Pura (Aceleración)",
                colors: "🟢 🔵",
                mechanic: "Juegas elfos, pájaros y hechizos tempranos cuyo único trabajo es darte más maná pasivo cada turno. En el turno 4 ya tienes el doble de tierras que el oponente, listo para invocar sierpes imposibles de responder.",
                tribal: "Elfos Místicos, Elementales",
                theme: "#16a34a"
            },
            {
                name: "Amulet Titan",
                colors: "🟢",
                mechanic: "Bajas un amuleto que hace que tus tierras entren enderezadas. Luego juegas tierras especiales dobles y las devuelves a la mano para generar maná infinito y abusar del Titán Primigenio que busca cualquier tierra de tu mazo dándoles la vuelta al combate.",
                tribal: "Gigantes",
                theme: "#4ade80"
            }
        ]
    }
};

const commanderDatabase = {
    "voltron": {
        title: "VOLTRON",
        subtitle: "Un Comandante Intocable",
        speed: "👑 Equipar y Golpear",
        icon: "🦾",
        colorBg: "rgba(245, 158, 11, 0.1)",
        colorBorder: "#f59e0b",
        quote: "No necesito ejércitos. Mi Comandante es el ejército.",
        decks: [
            {
                name: "Auras Hexproof",
                colors: "🟢 ⚪",
                mechanic: "Tu comandante tiene Antimaleficio. Le adhieres 15 auras distintas hasta volverlo imbloqueable, indestructible y letal, buscando hacer 21 daños de comandante a cada rival.",
                tribal: false,
                theme: "#f59e0b"
            },
            {
                name: "Equipment Master",
                colors: "🔴 ⚪",
                mechanic: "Juegas a tu comandante, y luego dedicas tu maná a buscar espadas místicas, martillos pesados y armaduras que le otorgan habilidades masivas y protección de colores.",
                tribal: "Caballeros, Guerreros",
                theme: "#ef4444"
            }
        ]
    },
    "aristocrats": {
        title: "ARISTÓCRATAS",
        subtitle: "La Muerte es Beneficio",
        speed: "🩸 Drenaje Inexorable",
        icon: "💀",
        colorBg: "rgba(168, 85, 247, 0.1)",
        colorBorder: "#a855f7",
        quote: "Algunos de vosotros moriréis, pero es un sacrificio que estoy dispuesto a aceptar.",
        decks: [
            {
                name: "Blood Artist Drain",
                colors: "⚫ ⚪",
                mechanic: "Generas tokens o criaturas baratas para luego sacrificarlas tú mismo ('fooder'). Cada muerte drena 1 vida a todos los rivales a la vez, esquivando la fase de combate por completo.",
                tribal: "Vampiros, Clérigos",
                theme: "#a855f7"
            },
            {
                name: "Graveyard Value",
                colors: "⚫ 🟢",
                mechanic: "Tu cementerio es una segunda mano. Bajas al comandante, sacrificas criaturas para robar cartas y las reanimas una y otra vez provocando efectos infinitos de entrada al campo.",
                tribal: "Zombis, Insectos",
                theme: "#22c55e"
            }
        ]
    },
    "spellslinger": {
        title: "SPELLSLINGER",
        subtitle: "Tormenta de Magia Pura",
        speed: "🌪️ Explosión en Cadena",
        icon: "⚡",
        colorBg: "rgba(59, 130, 246, 0.1)",
        colorBorder: "#3b82f6",
        quote: "Mis criaturas no atacan; simplemente miran cómo te reduce a cenizas mi magia.",
        decks: [
            {
                name: "Storm & Rebound",
                colors: "🔵 🔴",
                mechanic: "Tu comandante premia jugar Instantes y Conjuros baratos robando más cartas. En un turno encadenas 15 hechizos que culminan en un torrente imparable de daño de Tormenta ('Storm').",
                tribal: "Hechiceros",
                theme: "#3b82f6"
            },
            {
                name: "Spell Copy",
                colors: "🔵 🔴 🟢",
                mechanic: "Juegas hechizos devastadores de alto coste y usas habilidades de tu comandante para copiarlos 2 o 3 veces simultáneamente, arrasando la mesa entera sin que el oponente pueda responder a tiempo.",
                tribal: false,
                theme: "#0ea5e9"
            }
        ]
    },
    "group_hug": {
        title: "GROUP HUG",
        subtitle: "Amigo de Todos... Hasta el Final",
        speed: "🤝 Política y Diplomacia",
        icon: "💌",
        colorBg: "rgba(34, 197, 94, 0.1)",
        colorBorder: "#22c55e",
        quote: "¿Por qué pelearnos? Robemos todos cartas y tengamos mucho maná... *risa malvada*.",
        decks: [
            {
                name: "Politician / Kingmaker",
                colors: "🟢 ⚪ 🔵",
                mechanic: "Regalas aceleración de maná y robos masivos a todos los jugadores. Evitas que te ataquen por ser 'el apoyo' pacífico. Cuando sólo queda un rival confiado, te giras y revelas un combo demoledor.",
                tribal: "Hipopótamos, Puebloarbóreo",
                theme: "#22c55e"
            },
            {
                name: "Forced Draw Action",
                colors: "🔵 ⚫ 🔴",
                mechanic: "Haces que todo el mundo robe tantas cartas que acaban muriendo exhaustos de su propia baraja o recibiendo daño por cada carta robada mediante encantamientos punitivos.",
                tribal: false,
                theme: "#6366f1"
            }
        ]
    },
    "typal": {
        title: "TYPAL (TRIBAL)",
        subtitle: "Unión de la Raza",
        speed: "🐲 Invocación de Masas",
        icon: "🛡️",
        colorBg: "rgba(239, 68, 68, 0.1)",
        colorBorder: "#ef4444",
        quote: "Nuestras escamas, nuestras giles y nuestras orejas puntiagudas dominan juntos.",
        decks: [
            {
                name: "Dragon Ramp",
                colors: "🔴 🟢 🔵 ⚪ ⚫",
                mechanic: "Llevas al comandante de la Raza Dragón, dedicas los turnos 1, 2 y 3 a crear maná adicional y del turno 5 en adelante bajas dragones legendarios colosales en cada turno.",
                tribal: "Dragones",
                theme: "#ef4444"
            },
            {
                name: "Elfball",
                colors: "🟢",
                mechanic: "Generas elfos que producen maná (dorks). Cada elfo hace que el siguiente sea más fuerte o genere más elfos. Produces cantidades industriales de maná para lanzar un hechizo final ('Finale of Devastation').",
                tribal: "Elfos",
                theme: "#10b981"
            },
            {
                name: "Slivers (Fragmentados)",
                colors: "🔴 🟢 🔵 ⚪ ⚫",
                mechanic: "La colmena definitiva. Cada Fragmentado que juegas otorga una habilidad a TODOS los demás Fragmentados en mesa (Volar, Prisa, Arrollar, etc.). Cuantos más tienes, más invencibles se vuelven por pura acumulación de poderes compartidos.",
                tribal: "Fragmentados",
                theme: "#f59e0b"
            }
        ]
    },
    "stax": {
        title: "STAX",
        subtitle: "La Prisión del Tablero",
        speed: "🛑 Asfixia Total",
        icon: "⛓️",
        colorBg: "rgba(100, 116, 139, 0.1)",
        colorBorder: "#64748b",
        quote: "¿Creías que venías a jugar a Magic? Estás aquí para mirarme a mí jugar a Magic.",
        decks: [
            {
                name: "Prison & Taxation",
                colors: "⚪ 🔵 ⚫",
                mechanic: "Colocas artefactos y encantamientos que obligan a los rivales a pagar maná extra por atacar, les ralentizan, o impiden que la mesa se enderece (untap). Terminas asfixiando por completo sus recursos.",
                tribal: "Humanos (Inquisidores)",
                theme: "#94a3b8"
            }
        ]
    }
};

let globalFormat = 'standard'; // 'standard' o 'commander'
let battleBox = JSON.parse(localStorage.getItem('mtgBattleBox')) || [];

document.addEventListener('DOMContentLoaded', () => {
    // Sistema Automático de Fondos Animados WebM AAA
    const introScreen = document.getElementById('intro-screen');
    const introVideo = document.getElementById('intro-video-bg');
    const introVideoFolder = 'videos/';
    const videoFiles = ['Colors.webm', 'download (1).webm', 'download.webm']; 
    
    if (introVideo) {
        // El primero siempre es Colors.webm según petición del usuario
        introVideo.src = `${introVideoFolder}Colors.webm`;
        introVideo.play();
        
        // Lógica opcional: Cuando termine un video, poner uno aleatorio
        introVideo.addEventListener('ended', () => {
            const nextVideo = videoFiles[Math.floor(Math.random() * videoFiles.length)];
            introVideo.src = `${introVideoFolder}${nextVideo}`;
            introVideo.play();
        });
    }

    // La niebla ahora está integrada directamente en la intro-screen como efecto decorativo
    // (ya no bloquea la vista con una capa negra encima)

    const homeScreen = document.getElementById('home-screen');
    const detailScreen = document.getElementById('detail-screen');
    const battleboxScreen = document.getElementById('battlebox-screen');
    const archiveScreen = document.getElementById('archive-screen');
    const communityScreen = document.getElementById('community-screen');
    const btnOpenArchive = document.getElementById('btn-open-archive');
    const btnOpenCommunity = document.getElementById('btn-open-community');

    // Inicializar Firebase (con protección para que no rompa la app si no hay internet)
    let db = null;
    try {
        const firebaseConfig = {
          apiKey: "AIzaSyBmwm7-hNy44HzESAzVBuc6Bw803svC6kc",
          authDomain: "mtg-battlebox-generator-c2454.firebaseapp.com",
          projectId: "mtg-battlebox-generator-c2454",
          storageBucket: "mtg-battlebox-generator-c2454.firebasestorage.app",
          messagingSenderId: "664986509467",
          appId: "1:664986509467:web:839d823337910fb58c263e"
        };
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
    } catch(e) {
        console.warn('⚠️ Firebase no se pudo inicializar (probablemente sin internet). La app funciona sin funciones comunitarias.', e);
    }

    const GUILD_PASSWORD = "Proxyspordoquier2026"; // Contraseña preacordada 
    let isCommunityUnlocked = localStorage.getItem('guild_unlocked') === 'true';
    let pendingCommunityAction = null; // para saber si quería abrir 'view' o 'publish'
    
    // Variables globales accesibles por todos los módulos (incluyendo el Tribunal Superior)
    let lastAiResponse = ""; // 🧠 Memoria compartida para la respuesta IA

    // --- 🎨 UTILIDAD GLOBAL: TRANSFORMACIÓN MARKDOWN A HTML PREMIUM ---
    function markdownToHtml(text) {
        text = text.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        text = text.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        text = text.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        text = text.replace(/^---|^___\s*$/gm, '<hr>');
        text = text.replace(/^\s*\*\s+(.*$)/gim, '<li>$1</li>');
        text = text.replace(/(<li>.*<\/li>)/gms, '<ul>$1</ul>');
        text = text.replace(/\n\n/g, '</p><p>');
        
        // 🔥 NUEVO: Soporte para [[Carta|Rareza]]
        text = text.replace(/\[\[(.*?)\|(.*?)\]\]/g, (match, name, rarity) => {
            const r = rarity.trim().toLowerCase();
            return `<span class="mtg-card rarity-${r}" data-card="${name}">${name}</span>`;
        });
        
        // Fallback para [[Carta]] simple
        text = text.replace(/\[\[(.*?)\]\]/g, '<span class="mtg-card" data-card="$1">$1</span>');
        
        return `<p>${text}</p>`;
    }

    // UI elements
    const btnOpenBB = document.getElementById('btn-open-battlebox');
    const bbCountSpan = document.getElementById('bb-count');
    bbCountSpan.textContent = battleBox.length;

    // Inject Config Modal
    const modalHTML = `
        <div id="selection-overlay" class="selection-overlay">
            <div class="modal-box">
                <button id="close-modal" class="btn-close-modal">✖</button>
                <h3>Configurar Mazo</h3>
                <div id="modal-deck-display" class="modal-deck">-</div>
                
                <div id="tribal-container" class="form-group" style="display:none;">
                    <label>Raza Tribal Preferida (Ej: Goblins, Libres u Otro):</label>
                    <input type="text" id="config-tribe" placeholder="Escribe tu raza favorita..."/>
                    <small style="color:var(--text-muted); font-size:0.8rem; display:block; margin-top:0.2rem;" id="tribal-hints"></small>
                </div>

                <div class="form-group">
                    <label>Preferencia de Colores:</label>
                    <select id="config-colors">
                        <option value="Lo óptimo matemáticamente">Que la IA elija lo óptimo</option>
                        <option value="Mono Color">Mono Color Puro</option>
                        <option value="Bicolor (Dos colores)">Bicolor</option>
                        <option value="Tricolor (Tres colores)">Tricolor</option>
                        <option value="Incoloro (Artefactos/Eldrazi)">Incoloro / Sin color</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Instrucción Extra (Opcional):</label>
                    <input type="text" id="config-extra" placeholder="Ej: Quiero que incluya 4x copias de X carta mítica..."/>
                </div>

                <button id="btn-save-bb" class="btn-save-bb">Guardar en la Battle Box</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const overlay = document.getElementById('selection-overlay');
    const closeModal = document.getElementById('close-modal');
    const tribalContainer = document.getElementById('tribal-container');
    const configTribe = document.getElementById('config-tribe');
    const tribalHints = document.getElementById('tribal-hints');
    const configColors = document.getElementById('config-colors');
    const configExtra = document.getElementById('config-extra');
    const btnSaveBB = document.getElementById('btn-save-bb');
    const modalDeckDisplay = document.getElementById('modal-deck-display');

    // Inject Archive Modal
    const archiveModalHTML = `
        <div id="archive-overlay" class="selection-overlay">
            <div class="modal-box" style="border-color: #10b981; box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);">
                <button id="close-archive-modal" class="btn-close-modal">✖</button>
                <h3 style="color: #10b981;">Bautizar Generación</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 2rem;">¿Cómo quieres recordar este set de mazos?</p>
                
                <div class="form-group">
                    <label>Título del Lote:</label>
                    <input type="text" id="archive-title" placeholder="Ej: Tanda Agresiva Vol. 2"/>
                </div>

                <div class="form-group">
                    <label>Notas de la Versión (Opcional):</label>
                    <input type="text" id="archive-note" placeholder="Ej: Las cartas salieron increíbles, falta probar."/>
                </div>

                <button id="btn-confirm-archive" class="btn-save-bb" style="background: var(--color-gold); color: black;">Guardar en la Bóveda</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', archiveModalHTML);
    const archOverlay = document.getElementById('archive-overlay');
    const closeArchModal = document.getElementById('close-archive-modal');
    const archTitle = document.getElementById('archive-title');
    const archNote = document.getElementById('archive-note');
    const btnConfirmArchive = document.getElementById('btn-confirm-archive');

    closeArchModal.addEventListener('click', () => { archOverlay.classList.remove('active'); });

    // Community Password variables
    const passOverlay = document.getElementById('password-overlay');
    const closePassModal = document.getElementById('close-password-modal');
    const passInput = document.getElementById('community-password');
    const btnConfirmPass = document.getElementById('btn-confirm-password');
    const passError = document.getElementById('password-error');

    closePassModal.addEventListener('click', () => { 
        passOverlay.classList.remove('active'); 
        passInput.value = '';
        passError.style.display = 'none';
    });
    
    let activeSelection = {}; // Stores temp config data

    // Nav: Intro Screen Format Logic
    const archetypesNav = document.getElementById('archetypes-nav');
    
    function renderHomeDoors(db) {
        archetypesNav.innerHTML = '';
        for (const archKey in db) {
            const arch = db[archKey];
            const btn = document.createElement('button');
            btn.className = `arch-door door-${archKey}`; // mantengo la clase por consistencia
            btn.setAttribute('data-arch', archKey);
            
            btn.innerHTML = `
                <div class="door-glow" style="border-color: ${arch.colorBorder}; box-shadow: 0 0 30px ${arch.colorBg};"></div>
                <span class="icon">${arch.icon}</span>
                <h3>${arch.title}</h3>
                <small>${arch.subtitle}</small>
            `;
            
            // Hover manual por JS para manejar colores dinámicos
            btn.addEventListener('mouseenter', () => {
                const glow = btn.querySelector('.door-glow');
                glow.style.opacity = '1';
                btn.style.transform = 'translateY(-10px) scale(1.05)';
            });
            btn.addEventListener('mouseleave', () => {
                const glow = btn.querySelector('.door-glow');
                glow.style.opacity = '0';
                btn.style.transform = 'none';
            });
            
            btn.addEventListener('click', () => {
                renderDetailScreen(archKey, db);
                switchViews(homeScreen, detailScreen);
            });
            
            archetypesNav.appendChild(btn);
        }
    }

    // EPIC CANVAS RENDERING (High Fidelity)
    let animationFrameId;
    function initEpicCanvas() {
        const canvas = document.getElementById('epic-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        // Fix devicePixelRatio para máxima calidad en pantallas modernas/Retina
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
        
        // CSS properties para mantener tamaño real
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';

        const particles = [];
        const numParticles = 150;

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: Math.random() * 3 + 1,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 1) * 3 - 0.5,
                hue: Math.random() * 40 + 10, // Rojos y dorados
                alpha: Math.random() * 0.8 + 0.1
            });
        }

        function render() {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for (let i = 0; i < numParticles; i++) {
                const p = particles[i];
                
                // Generar gradiente radial para luz ultra-realista
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
                gradient.addColorStop(0, `hsla(${p.hue}, 100%, 70%, ${p.alpha})`); // núcleo brillante
                gradient.addColorStop(0.4, `hsla(${p.hue}, 100%, 50%, ${p.alpha * 0.5})`);
                gradient.addColorStop(1, `hsla(${p.hue}, 100%, 30%, 0)`); // corona difuminada

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Movimiento flotante termodinámico
                p.x += Math.sin(p.y * 0.01) * 0.5 + p.vx;
                p.y += p.vy;
                p.alpha -= 0.003; 

                if (p.x < 0 || p.x > window.innerWidth || p.y < 0 || p.alpha <= 0) {
                    p.x = Math.random() * window.innerWidth;
                    p.y = window.innerHeight + 20;
                    p.alpha = Math.random() * 0.8 + 0.2;
                }
            }
            animationFrameId = requestAnimationFrame(render);
        }
        render();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
        });
    }

    if (introScreen && introScreen.style.display !== 'none') {
        initEpicCanvas();
    }

    const btnFormatStandard = document.getElementById('btn-format-standard');
    const btnFormatCommander = document.getElementById('btn-format-commander');
    
    function chooseFormat(format) {
        globalFormat = format;
        introScreen.classList.add('intro-fade-out');
        
        setTimeout(() => {
            introScreen.style.display = 'none';
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            homeScreen.classList.add('active-view');
            if (format === 'commander') {
                renderHomeDoors(commanderDatabase);
            } else {
                renderHomeDoors(mtgDatabase);
            }
        }, 2500); // 2.5s para la disipación épica de la IA de Stitch
    }

    if (btnFormatStandard) btnFormatStandard.addEventListener('click', () => chooseFormat('standard'));
    if (btnFormatCommander) btnFormatCommander.addEventListener('click', () => chooseFormat('commander'));

    // Nav: Open Battle Box
    btnOpenBB.addEventListener('click', () => {
        renderBattleBox();
        const active = document.querySelector('.view.active-view');
        if(active !== battleboxScreen) switchViews(active, battleboxScreen);
    });

    // Trigger secreto: Doble-clic en el icono 📦 del título de la Battle Box
    battleboxScreen.addEventListener('dblclick', (e) => {
        const trigger = document.getElementById('bb-title-trigger');
        if (trigger && (e.target === trigger || trigger.contains(e.target))) {
            const jp = document.getElementById('judgment-panel');
            if (jp) {
                jp.style.display = jp.style.display === 'none' ? 'block' : 'none';
                if (jp.style.display === 'block') {
                    setTimeout(() => jp.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
                }
            }
        }
    });

    // Nav: Back from Battle Box
    document.getElementById('btn-back-from-bb').addEventListener('click', () => {
        switchViews(battleboxScreen, homeScreen);
    });

    // Nav: Open Archive
    if (btnOpenArchive) {
        btnOpenArchive.addEventListener('click', () => {
            renderArchiveBox();
            const active = document.querySelector('.view.active-view');
            if(active !== archiveScreen) switchViews(active, archiveScreen);
        });
    }

    // Nav: Back from Archive
    const backArch = document.getElementById('btn-back-from-archive');
    if (backArch) {
        backArch.addEventListener('click', () => {
            switchViews(archiveScreen, homeScreen);
        });
    }

    // Nav: Open Community Vault
    if (btnOpenCommunity) {
        btnOpenCommunity.addEventListener('click', () => {
             if (isCommunityUnlocked) {
                 openCommunityScreen();
             } else {
                 pendingCommunityAction = 'view';
                 passOverlay.classList.add('active');
             }
        });
    }

    // Nav: Back from Community
    const backCom = document.getElementById('btn-back-from-community');
    if(backCom) {
        backCom.addEventListener('click', () => {
             switchViews(communityScreen, homeScreen);
        });
    }

    closeModal.addEventListener('click', () => { overlay.classList.remove('active'); });

    // Save Deck to Local Storage
    btnSaveBB.addEventListener('click', () => {
        const newDeck = {
            id: Date.now(),
            archetype: activeSelection.archName,
            subArchetype: activeSelection.deckName,
            format: activeSelection.format, // 🔥 NUEVO: Persistimos el formato
            tribe: tribalContainer.style.display !== 'none' ? configTribe.value.trim() : 'N/A',
            colorsFreq: configColors.value,
            extraNotes: configExtra.value.trim()
        };

        battleBox.push(newDeck);
        localStorage.setItem('mtgBattleBox', JSON.stringify(battleBox));
        bbCountSpan.textContent = battleBox.length;
        
        overlay.classList.remove('active');
        
        // Return to Home automatically on save
        switchViews(detailScreen, homeScreen);
    });

    function switchViews(from, to) {
        from.classList.remove('active-view');
        setTimeout(() => {
            from.style.display = 'none';
            to.style.display = 'block';
            setTimeout(() => to.classList.add('active-view'), 50);
        }, 400);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Render Archetype detail
    function renderDetailScreen(archKey, db) {
        const data = db[archKey];
        let html = `
            <div class="screen-header" style="border-color: ${data.colorBorder}; box-shadow: 0 0 40px ${data.colorBg};">
                <button class="btn-back" id="btn-go-back">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Regresar al Salón
                </button>
                <div class="detail-title" style="color: ${data.colorBorder};">
                    <span>${data.icon}</span> <span>${data.title}</span>
                </div>
                <div style="font-size: 1.2rem; margin-bottom: 0.5rem; letter-spacing: 2px;">${data.subtitle}</div>
                <div style="font-size: 1rem; color: #94a3b8; font-weight: 600; margin-bottom: 1rem; background: rgba(0,0,0,0.5); display: inline-block; padding: 0.4rem 1rem; border-radius: 20px; border: 1px solid ${data.colorBorder}; box-shadow: 0 0 10px ${data.colorBg};">Ritmo Óptimo: <span style="color:white">${data.speed}</span></div>
                <div class="detail-quote" style="color: ${data.colorBorder};">"${data.quote}"</div>
            </div>
            <div class="db-grid">
        `;
        
        data.decks.forEach((deck, idx) => {
            const tHtml = deck.tribal ? `<div class="tribal-box"><span>Mejores Razas:</span> ${deck.tribal}</div>` : '';
            html += `
                <article class="deck-card" style="border-top: 4px solid ${deck.theme};">
                    <div class="deck-header">
                        <h4>${deck.name}</h4>
                        <div class="color-badges" title="Colores Típicos">${deck.colors}</div>
                    </div>
                    <div class="deck-body">
                        <div class="mechanic-box" style="border-color: ${deck.theme};">
                            <span class="mechanic-title" style="color: ${deck.theme};">Cómo Juega:</span>
                            ${deck.mechanic}
                        </div>
                        ${tHtml}
                    </div>
                    <button class="btn-choose" data-key="${archKey}" data-idx="${idx}" style="background-color: rgba(255,255,255,0.1); border: 1px solid ${deck.theme}; color: white;">
                        Configurar Mazo
                    </button>
                </article>
            `;
        });
        
        html += `</div>`;
        detailScreen.innerHTML = html;
        
        document.getElementById('btn-go-back').addEventListener('click', () => { switchViews(detailScreen, homeScreen); });

        // Open Config Modal
        detailScreen.querySelectorAll('.btn-choose').forEach(btn => {
            btn.addEventListener('click', () => {
                const k = btn.getAttribute('data-key');
                const i = btn.getAttribute('data-idx');
                const dk = db[k];
                const item = dk.decks[i];
                
                activeSelection = { archName: dk.title, deckName: item.name, format: globalFormat };
                
                modalDeckDisplay.textContent = `${item.name}`;
                modalDeckDisplay.style.color = item.theme;
                
                configExtra.value = "";
                configColors.value = "Lo óptimo matemáticamente";
                
                if (item.tribal) {
                    tribalContainer.style.display = "block";
                    configTribe.value = "";
                    tribalHints.innerHTML = `Sugerencias clásicas: <em>${item.tribal}</em>`;
                } else {
                    tribalContainer.style.display = "none";
                }
                
                overlay.classList.add('active');
            });
        });
    }

    // Render Battle Box Screen & Prompt Logic
    function renderBattleBox() {
        const listDiv = document.getElementById('bb-list');
        const btnMaster = document.getElementById('btn-master-prompt');
        
        if (battleBox.length === 0) {
            listDiv.innerHTML = `<div class="empty-bb">Tu Battle Box está vacía. Sumérgete en las salas y elige sabiamente.</div>`;
            btnMaster.style.display = 'none';
            return;
        }

        btnMaster.style.display = 'inline-block';

        const standardDecks = battleBox.filter(d => d.format === 'standard');
        const commanderDecks = battleBox.filter(d => d.format === 'commander');

        let html = '';

        if (standardDecks.length > 0) {
            html += `<h3 class="bb-category-title title-standard">🏰 MAZOS STANDARD / KITCHEN TABLE</h3>`;
            standardDecks.forEach(deck => html += renderDeckItem(deck, 'standard'));
        }

        if (commanderDecks.length > 0) {
            html += `<h3 class="bb-category-title title-commander">👑 MAZOS COMMANDER (EDH)</h3>`;
            commanderDecks.forEach(deck => html += renderDeckItem(deck, 'commander'));
        }

        listDiv.innerHTML = html;

        function renderDeckItem(deck, format) {
            return `
                <div class="bb-item bb-item-${format}">
                    <div class="bb-info">
                        <h4>[${deck.archetype}] - ${deck.subArchetype}</h4>
                        <p><strong>Colores:</strong> ${deck.colorsFreq} | <strong>Raza/Tribu:</strong> ${deck.tribe || 'No aplica'}</p>
                        ${deck.extraNotes ? `<p><em>Nota: ${deck.extraNotes}</em></p>` : ''}
                    </div>
                    <div class="bb-actions">
                        <button class="btn-prompt" data-id="${deck.id}">Prompt Singular</button>
                        <button class="btn-delete" data-id="${deck.id}">Borrar</button>
                    </div>
                </div>
            `;
        }

        // Delete Logic
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(btn.getAttribute('data-id'));
                battleBox = battleBox.filter(d => d.id !== id);
                localStorage.setItem('mtgBattleBox', JSON.stringify(battleBox));
                bbCountSpan.textContent = battleBox.length;
                renderBattleBox();
            });
        });

        // Prompt Singular Logic
        document.querySelectorAll('.btn-prompt').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(btn.getAttribute('data-id'));
                const d = battleBox.find(x => x.id === id);
                
                const isCmdr = d.format === 'commander';
                let prompt = "";
                if (isCmdr) {
                    prompt = `Actúa como un experto jugador histórico y pro-builder de Magic: The Gathering (formato EDH / COMMANDER).
Nuestra misión es diseñar una lista EXCELENTE de 100 cartas para Commander multijugador (4 personas) de alto nivel, pero divertida.

Reglas ESTRICTAS de Commander:
1. Exactamente 100 cartas (1 Comandante Legendario + 99 cartas en el mazo principal). Proporciones idóneas (ej: ~37 tierras, 10 ramp, 10 robo).
2. Regla Singleton: NO puedes repetir ninguna carta (salvo tierras básicas). SOLO 1 COPIA DE CADA CARTA.
3. Identidad de Color: Todas las 99 cartas DEBEN pertenecer exclusivamente a la identidad de color del Comandante.

RAREZAS Y FORMATO: Escribe cada carta como: "Cantidad [[Nombre exacto en Inglés|Rareza]]".
Rarezas: C (Común), U (Infrecuente), R (Rara), M (Mítica).

Parámetros para el mazo:
- Arquetipo EDH: ${d.archetype} -> Variante: ${d.subArchetype}
- Colores: ${d.colorsFreq}
- Tribu Requerida: ${d.tribe === 'N/A' || d.tribe === '' ? 'La óptima' : d.tribe}
- Instrucciones: ${d.extraNotes || 'Ninguna.'}

Salida: Pásame la lista final estructurada con desplegables para cada sección de cartas.`;
                } else {
                    prompt = `Actúa como un experto jugador histórico y pro-builder de Magic: The Gathering.
Nuestra misión es diseñar una lista EXCELENTE de 60 cartas para el formato "Kitchen Table Magic" de altísimo nivel.

RAREZAS Y FORMATO: Escribe cada carta como: "Cantidad [[Nombre exacto en Inglés|Rareza]]".
Rarezas: C (Común), U (Infrecuente), R (Rara), M (Mítica).

Parámetros:
- Arquetipo Principal: ${d.archetype} -> Variante: ${d.subArchetype}
- Exigencia de Colores: ${d.colorsFreq}
- Raza/Tribu Requerida: ${d.tribe === 'N/A' || d.tribe === '' ? 'La óptima' : d.tribe}
- Instrucciones extra obligatorias: ${d.extraNotes || 'Ninguna.'}

Salida esperada: Lista limpia y estructurada.`;
                }

                // Copy to clipboard
                navigator.clipboard.writeText(prompt).then(() => {
                    btn.textContent = "¡Copiado!";
                    btn.style.background = "#22c55e"; // green
                    setTimeout(() => {
                        btn.textContent = "Prompt Singular";
                        btn.style.background = "var(--color-blue)";
                    }, 2000);
                }).catch(err => {
                    alert("Error al copiar al portapapeles. Da permiso a la web o revisa la consola.");
                    console.error("Error copiando txt: ", err);
                });
            });
        });

        // Master Prompt Logic
        btnMaster.addEventListener('click', () => {
            let masterPrompt = `Actúa como un diseñador Maestro de entornos cerrados de Magic: The Gathering (como un diseñador de un prestigioso "Cube" o experto de "Battle Box").
Mi misión es fabricar de golpe nuestra próxima GRAN TANDA de ${battleBox.length} mazos de 60 cartas para Kitchen Table Magic de gran poder.

Contexto: Queremos vía libre para usar Staples históricos potentes y cartones caros, PERO el requisito número uno y la Directriz Vital de Equilibrio es: 
¡QUIERO QUE DISEÑES ESTOS ${battleBox.length} MAZOS A LA VEZ PARA QUE ESTÉN PERFECTAMENTE EQUILIBRADOS Y AFIANZADOS ENTRE ELLOS COMO UN ECOSISTEMA! 
Ningún mazo debe aplastar sistemáticamente a los demás. Tienen que interactuar todos contra todos. Prohibido incluir combos que asfixien y ganen la partida en turno 1-2. Interacción forzada.

A continuación, los parámetros exigidos para cada uno de los ${battleBox.length} mazos:\n\n`;

            battleBox.forEach((d, i) => {
                masterPrompt += `--- [MAZO ${i+1}]: ${d.archetype} -> Variante: ${d.subArchetype} ---
- Colores: ${d.colorsFreq}
- Tribu: ${d.tribe === 'N/A' || d.tribe === '' ? 'A tu elección para optimizar' : d.tribe}
- Notas extra mías: ${d.extraNotes || 'Ninguna'}\n\n`;
            });

            masterPrompt += `Por favor, primero hazme un pequeño resumen estratégico de por qué funcionará estupendamente la sinergia global y luego otórgame las ${battleBox.length} listas puras listas para copiar en una web de Proxys fácilmente.`;

            navigator.clipboard.writeText(masterPrompt).then(() => {
                const originalText = btnMaster.textContent;
                btnMaster.textContent = "✨ ¡Mega Prompt Copiado al Portapapeles! ✨";
                btnMaster.style.background = "#22c55e";
                setTimeout(() => {
                    btnMaster.textContent = originalText;
                    btnMaster.style.background = "rgba(168, 85, 247, 0.4)";
                }, 3000);
            });
        }, {once: true}); // Use once true to avoid duping listeners on re-render, though ideally we move the listener outside or remove it.
        // Actually, since render happens often, let's remove existing listeners by cloning or just keeping {once: true} as a hack? 
        // A better way is: it's fine, the DOM replaces if we just re-render but wait, btnMaster is outside bb-list. 
        // We need to replace the btnMaster node to wipe event listeners if renderBattleBox runs multiple times.
        const newBtnMaster = btnMaster.cloneNode(true);
        btnMaster.parentNode.replaceChild(newBtnMaster, btnMaster);

        newBtnMaster.addEventListener('click', () => {
             const isCmdr = battleBox.length > 0 && battleBox[0].format === 'commander';
             let masterPrompt = "";
             
             if (isCmdr) {
                 masterPrompt = `Actúa como un diseñador Maestro de metajuegos de Magic: The Gathering Commander (EDH).
Mi misión es fabricar una "Battle Box Multijugador" de ${battleBox.length} mazos de COMMANDER de alto poder.

DIRECTRICES: TODOS los ${battleBox.length} mazos deben estar al MISMO nivel de poder (Power Level 7-8). Interacción constante, magia épica y prohibición total a combos degenerados infumables en los primeros turnos que bloqueen la partida sin respuestas.

REGLAS DE COMANDANTE INFALIBLES POR MAZO:
1. 100 Cartas Exactas (1 Comandante Legendario + 99 cartas).
2. REGLA SINGLETON: 1 sola copia máxima por carta (salvo tierras básicas).
3. Identidad de Color estricta basada en el Comandante elegido.

Parámetros exigidos para cada mazo del grupo:\n\n`;
             } else {
                 masterPrompt = `Actúa como un diseñador Maestro de entornos cerrados de Magic: The Gathering (como un Cube o Battle Box).
Mi misión es fabricar de golpe nuestra próxima GRAN TANDA de ${battleBox.length} mazos de 60 cartas para Kitchen Table Magic de gran poder.

Contexto: Queremos usar cartas muy potentes y rotas, PERO el requisito número uno es: 
¡QUIERO QUE DISEÑES LAS LISTAS DE ESTOS ${battleBox.length} MAZOS A LA VEZ PARA QUE ESTÉN PERFECTAMENTE EQUILIBRADOS Y AFIANZADOS ENTRE ELLOS! 
Ningún mazo debe aplastar sistemáticamente a los demás. Se permiten hasta 4 copias de cartas (no es EDH).

A continuación, los parámetros exigidos para cada uno de los ${battleBox.length} mazos de 60 cartas:\n\n`;
             }

            battleBox.forEach((d, i) => {
                masterPrompt += `--- [MAZO ${i+1}]: ${d.archetype.toUpperCase()} -> Variante: ${d.subArchetype} ---
- Colores requeridos: ${d.colorsFreq}
- Tribu requerida (si aplica): ${d.tribe === 'N/A' || d.tribe === '' ? 'Óptima para estrategia' : d.tribe}
- Notas extra: ${d.extraNotes || 'Ninguna restricción.'}\n\n`;
            });

            masterPrompt += `Hazme un pequeño resumen estratégico de su sinergia cruzada y otórgame las ${battleBox.length} listas limpias y de corrido listas para imprimir.`;

            navigator.clipboard.writeText(masterPrompt).then(() => {
                const originalText = newBtnMaster.textContent;
                newBtnMaster.textContent = "✨ ¡Copiado con Éxito Maestro! ✨";
                newBtnMaster.style.background = "#22c55e"; // green
                setTimeout(() => {
                    newBtnMaster.textContent = originalText;
                    newBtnMaster.style.background = "rgba(168, 85, 247, 0.4)";
                }, 3000);
            });
        });

        // 🔮 NUEVO: Lógica de la API Multi-Proveedor Directa en la web
        const aiPanel = document.getElementById('ai-generator-panel');
        const providerSelect = document.getElementById('ai-provider');
        const modelSelect = document.getElementById('api-model-select');
        const apiKeyInput = document.getElementById('api-key-input');
        const btnLoadModels = document.getElementById('btn-load-models');
        const btnAiGen = document.getElementById('btn-ai-generate');
        const aiStatus = document.getElementById('ai-status');
        const aiResults = document.getElementById('ai-results-container');
        const viewControls = document.getElementById('ai-view-controls');
        const btnViewGuide = document.getElementById('btn-view-guide');
        const btnViewList = document.getElementById('btn-view-list');

        let currentSavedModel = localStorage.getItem('ai_model');
        // lastAiResponse y markdownToHtml ahora son globales del scope DOMContentLoaded

        function renderAiResults(view) {
            if (!lastAiResponse) return;
            
            aiResults.innerHTML = '';
            aiResults.style.display = 'block';
            viewControls.style.display = 'flex';

            // Actualizar estado de botones
            if (view === 'guide') {
                btnViewGuide.style.background = 'rgba(245, 158, 11, 0.4)';
                btnViewList.style.background = 'transparent';
                
                const chunks = lastAiResponse.split('---').filter(c => c.trim().length > 10);
                if (chunks.length > 1) {
                    // Si hay varios mazos, los colapsamos individualmente incluso en vista guía
                    let fullHtml = '';
                    chunks.forEach(chunk => {
                        const lines = chunk.trim().split('\n');
                        let titleLine = lines[0].replace(/#/g, '').trim() || "Mazo Generado";
                        fullHtml += `
                            <div class="ai-deck-box collapsible-deck">
                                <details>
                                    <summary class="deck-summary">
                                        <span>${titleLine}</span>
                                        <svg class="chevron" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M6 9l6 6 6-6"/></svg>
                                    </summary>
                                    <div class="deck-content-inner">
                                        ${markdownToHtml(chunk.trim())}
                                    </div>
                                </details>
                            </div>
                        `;
                    });
                    aiResults.innerHTML = fullHtml;
                } else {
                    const html = markdownToHtml(lastAiResponse);
                    aiResults.innerHTML = `<div class="ai-deck-box">${html}</div>`;
                }
            } else {
                btnViewList.style.background = 'rgba(245, 158, 11, 0.4)';
                btnViewGuide.style.background = 'transparent';

                const chunks = lastAiResponse.split('---').filter(c => c.trim().length > 10);
                const container = document.createElement('div');
                container.className = 'ai-results-list';

                chunks.forEach(chunk => {
                    const deckDiv = document.createElement('div');
                    deckDiv.className = 'ai-deck-box collapsible-deck';
                    
                    // Extraer título sugerido y limpiar
                    const lines = chunk.trim().split('\n');
                    let titleLine = lines[0].replace(/#/g, '').trim() || "Mazo Generado";
                    
                    deckDiv.innerHTML = `
                        <details>
                            <summary class="deck-summary">
                                <span>${titleLine}</span>
                                <svg class="chevron" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M6 9l6 6 6-6"/></svg>
                            </summary>
                            <div class="deck-content-inner">
                                ${markdownToHtml(chunk.trim())}
                            </div>
                        </details>
                    `;
                    container.appendChild(deckDiv);
                });
                aiResults.appendChild(container);
            }
            
            activarTooltipsMágicos();
        }

        btnViewGuide.addEventListener('click', () => renderAiResults('guide'));
        btnViewList.addEventListener('click', () => renderAiResults('list'));

        async function cargarModelosDinamicos() {
            const provider = providerSelect.value;
            const key = apiKeyInput.value.trim();

            if (!key) {
                alert("Primero pega tu API Key para poder consultar los modelos.");
                return;
            }

            btnLoadModels.textContent = "⌛";
            btnLoadModels.disabled = true;

            try {
                let url, options, models = [];
                
                if (provider === 'gemini') {
                    url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
                    const res = await fetch(url);
                    if (!res.ok) throw new Error(await res.text());
                    const data = await res.json();
                    // Filtrar solo los que soportan generación de contenido
                    models = data.models
                        .filter(m => m.supportedGenerationMethods.includes('generateContent'))
                        .map(m => ({ id: m.name.replace('models/', ''), name: m.displayName || m.name }));
                } else {
                    // Estructura compatible con OpenAI (Groq, OpenRouter, OpenAI)
                    if (provider === 'openai') url = "https://api.openai.com/v1/models";
                    else if (provider === 'groq') url = "https://api.groq.com/openai/v1/models";
                    else if (provider === 'openrouter') url = "https://openrouter.ai/api/v1/models";

                    const res = await fetch(url, { headers: { "Authorization": `Bearer ${key}` } });
                    if (!res.ok) throw new Error(await res.text());
                    const data = await res.json();
                    
                    // Filtrar morrilla (audio, imagen, embedding)
                    const exclude = ['dall-e', 'whisper', 'tts', 'embed', 'moderation', 'edit', 'vision'];
                    models = data.data
                        .filter(m => {
                            const id = (m.id || m.name || "").toLowerCase();
                            return !exclude.some(word => id.includes(word));
                        })
                        .map(m => ({ id: m.id, name: m.name || m.id }));
                }

                if (models.length === 0) throw new Error("No se encontraron modelos de texto compatibles.");

                // Puntuación para elegir el "mejor" automáticamente
                const scoring = (m) => {
                    const id = m.id.toLowerCase();
                    let score = 0;
                    if (id.includes('thinking')) score += 100;
                    if (id.includes('o1') || id.includes('o3')) score += 90;
                    if (id.includes('pro')) score += 80;
                    if (id.includes('sonnet')) score += 70;
                    if (id.includes('gpt-4o') && !id.includes('mini')) score += 60;
                    if (id.includes('flash')) score += 10;
                    return score;
                };

                models.sort((a, b) => scoring(b) - scoring(a));

                modelSelect.innerHTML = '';
                models.forEach((m, i) => {
                    const opt = document.createElement('option');
                    opt.value = m.id;
                    opt.textContent = (i === 0 ? "🌟 " : "") + m.name;
                    modelSelect.appendChild(opt);
                });

                // Auto-seleccionar el mejor (el primero tras el sort)
                modelSelect.selectedIndex = 0;
                localStorage.setItem('ai_model', modelSelect.value);
                
                // Feedback visual de éxito
                btnLoadModels.textContent = "✅";
                setTimeout(() => btnLoadModels.textContent = "🔄", 2000);

            } catch (err) {
                console.error(err);
                aiResults.innerHTML = `<div style="background: rgba(220, 38, 38, 0.2); border: 1px solid #ef4444; color: #f8fafc; padding: 1rem; border-radius: 8px;">
                    <p>❌ Error cargando modelos de ${provider.toUpperCase()}:</p>
                    <small>${err.message}</small>
                </div>`;
                aiResults.style.display = 'block';
                btnLoadModels.textContent = "❌";
                setTimeout(() => btnLoadModels.textContent = "🔄", 2000);
            } finally {
                btnLoadModels.disabled = false;
            }
        }

        if (battleBox.length > 0) {
            aiPanel.style.display = 'block';
            const savedProvider = localStorage.getItem('ai_provider');
            const savedKey = localStorage.getItem('ai_api_key');
            if (savedProvider) providerSelect.value = savedProvider;
            if (savedKey) apiKeyInput.value = savedKey;
            
            // Si hay key, intentar cargar modelos automáticamente al iniciar
            if (savedKey) cargarModelosDinamicos();
        } else {
            aiPanel.style.display = 'none';
        }

        providerSelect.addEventListener('change', (e) => {
            localStorage.setItem('ai_provider', e.target.value);
            modelSelect.innerHTML = '<option value="">Pulsa Cargar...</option>';
        });
        btnLoadModels.addEventListener('click', cargarModelosDinamicos);
        modelSelect.addEventListener('change', (e) => {
            localStorage.setItem('ai_model', e.target.value);
        });
        apiKeyInput.addEventListener('input', (e) => {
            localStorage.setItem('ai_api_key', e.target.value.trim());
        });

        // Al hacer click en "Generar Ya"
        btnAiGen.addEventListener('click', async () => {
            const key = apiKeyInput.value.trim();
            const provider = providerSelect.value;
            const selectedModel = modelSelect.value;
            
            if (!key) {
                alert("Por favor, introduce tu API Key primero.");
                return;
            }

            // Construir el prompt específico para la IA (con directriz de [[Carta]])
            let promptIA = `Actúa como un diseñador Maestro de entornos cerrados de Magic: The Gathering (como un diseñador de un prestigioso "Cube" o de "Battle Box").
Mi misión es fabricar de golpe nuestra próxima GRAN TANDA de ${battleBox.length} mazos equilibrados para Kitchen Table Magic de gran poder.
¡QUIERO QUE DISEÑES LAS LISTAS A LA VEZ PARA QUE ESTÉN PERFECTAMENTE EQUILIBRADOS Y AFIANZADOS ENTRE ELLOS! Ningún mazo debe aplastar sistemáticamente. Partidas de mínimo 4 turnos garantizadas.

A continuación, los parámetros exigidos:\n\n`;

            battleBox.forEach((d, i) => {
                const isCommander = d.format === 'commander'; // ✅ Ahora usa el campo persistido
                const cardCount = isCommander ? 100 : 60;
                
                promptIA += `--- [MAZO ${i+1}]: ${d.archetype.toUpperCase()} -> Variante: ${d.subArchetype} ---
- Objetivos de diseño: Crear un mazo profesional de EXACTAMENTE ${cardCount} cartas.
${isCommander ? '- REGLA CRÍTICA EDH: Mazo de 100 cartas (1 Comandante + 99 cartas) y REGLA SINGLETON (solo 1 copia de cada carta salvo tierras básicas).' : '- Formato Standard/Kitchen Table: Se permiten hasta 4 copias por carta.'}
- Estructura: No rellenes con tierras básicas al azar. Diseña una curva de maná y un ratio de hechizos/tierras (aprox. 38% de tierras) que sea altamente competitivo y temático.
- Colores obligados: ${d.colorsFreq}
- Tribu requerida (si aplica): ${d.tribe === 'N/A' || d.tribe === '' ? 'Óptima para estrategia' : d.tribe}
- Notas extra mías: ${d.extraNotes || 'Ninguna restricción.'}\n\n`;
            });

            promptIA += `\n🔴 DIRECTRICES MAESTRAS DE EQUILIBRIO Y FORMATO:
1. RAREZA OBLIGATORIA: Por cada carta, usa el formato EXACTO: "Cantidad [[Nombre en Inglés|R]]" (donde R es C, U, R o M).
2. CALIDAD SOBRE RELLENO: No quiero listas genéricas. Selecciona cada carta con intención. El total de ${battleBox.some(d => d.format === 'commander') ? '60 o 100' : '60'} cartas debe alcanzarse mediante una selección meditada.
3. EQUILIBRIO "BATTLE BOX": Los mazos deben estar diseñados para enfrentarse entre sí.
4. ESTRUCTURA: Los mazos DEBEN separarse claramente con "---".
5. CABECERA: La PRIMERA LÍNEA de cada mazo debe ser su nombre seguido de sus iconos de color (ej: # Goblins Rojo-Verde 🔴🟢).`;

            // UI Feedback
            aiStatus.style.display = 'block';
            aiResults.style.display = 'none';
            btnAiGen.disabled = true;
            btnAiGen.style.opacity = '0.5';

            try {
                let url, options, textoDevuelto;

                if (provider === 'gemini') {
                    url = `https://generativelanguage.googleapis.com/v1beta/models/${selectedModel}:generateContent?key=${key}`;
                    options = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{ parts: [{ text: promptIA }] }],
                            generationConfig: { temperature: 0.7 }
                        })
                    };
                } else if (provider === 'openai') {
                    url = `https://api.openai.com/v1/chat/completions`;
                    options = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
                        body: JSON.stringify({ model: selectedModel, messages: [{role: "user", content: promptIA}], temperature: 0.7 })
                    };
                } else if (provider === 'groq') {
                    url = `https://api.groq.com/openai/v1/chat/completions`;
                    options = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
                        body: JSON.stringify({ model: selectedModel, messages: [{role: "user", content: promptIA}], temperature: 0.7 })
                    };
                } else if (provider === 'openrouter') {
                    url = `https://openrouter.ai/api/v1/chat/completions`;
                    options = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
                        body: JSON.stringify({ model: selectedModel, messages: [{role: "user", content: promptIA}], temperature: 0.7 })
                    };
                }

                const response = await fetch(url, options);

                if (!response.ok) {
                    const errorRaw = await response.text();
                    throw new Error(`Google API Devuelve: ${errorRaw}`);
                }

                const data = await response.json();
                
                if (provider === 'gemini') {
                    lastAiResponse = data.candidates[0].content.parts[0].text;
                } else {
                    lastAiResponse = data.choices[0].message.content;
                }

                // Renderizar por defecto en vista guía
                renderAiResults('guide');

            } catch (err) {
                console.error(err);
                aiResults.innerHTML = `<div style="background: rgba(220, 38, 38, 0.2); border: 1px solid #ef4444; color: #f8fafc; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
                    <h3 style="color:#ef4444; margin-bottom: 0.5rem;">❌ Error en la IA (${provider.toUpperCase()})</h3>
                    <p style="margin-bottom: 1rem;">Copia el bloque de aquí abajo y pásaselo a la IA para averiguar qué falla:</p>
                    <div style="background: rgba(0,0,0,0.6); padding: 1rem; border-radius: 4px; border: 1px dashed #ef4444; user-select: text; white-space: pre-wrap; font-family: monospace; font-size: 0.9rem; word-break: break-all;">${err.message}</div>
                </div>`;
                aiResults.style.display = 'block';
                viewControls.style.display = 'none';
            } finally {
                aiStatus.style.display = 'none';
                btnAiGen.disabled = false;
                btnAiGen.style.opacity = '1';
            }
        });
    }

    // --- ACCIONES SECUNDARIAS DE LA IA: GUARDAR Y COMPARTIR ---
    const btnSaveAiDecks = document.getElementById('btn-save-ai-decks');
    const btnPublishCommunity = document.getElementById('btn-publish-community');
    const btnShareWhatsapp = document.getElementById('btn-share-whatsapp');
    const btnShareTelegram = document.getElementById('btn-share-telegram');

    if (btnSaveAiDecks) {
        btnSaveAiDecks.addEventListener('click', () => {
            if (!lastAiResponse) return;
            archTitle.value = "";
            archNote.value = "";
            archOverlay.classList.add('active');
        });
    }

    if (btnConfirmArchive) {
        btnConfirmArchive.addEventListener('click', () => {
            let savedDecklists = JSON.parse(localStorage.getItem('saved_decklists')) || [];
            
            savedDecklists.push({ 
                title: archTitle.value.trim() || 'Generación Anónima',
                note: archNote.value.trim(),
                date: new Date().toLocaleString(), 
                content: lastAiResponse 
            });
            localStorage.setItem('saved_decklists', JSON.stringify(savedDecklists));
            
            archOverlay.classList.remove('active');

            if (btnSaveAiDecks) {
                btnSaveAiDecks.innerHTML = "✅ ¡Archivado!";
                btnSaveAiDecks.style.background = "rgba(16, 185, 129, 0.5)";
                setTimeout(() => {
                    btnSaveAiDecks.innerHTML = "💾 Archivar Local";
                    btnSaveAiDecks.style.background = "rgba(16, 185, 129, 0.2)";
                }, 2000);
            }
            alert("¡Lote de mazos guardado con éxito en tu ordenador!");
        });
    }

    // Variables de estado para no pisar el modal de Archivo
    let isPublishingToCommunity = false;

    if (btnPublishCommunity) {
        btnPublishCommunity.addEventListener('click', () => {
            if (!lastAiResponse) return;
            if (isCommunityUnlocked) {
                isPublishingToCommunity = true;
                archTitle.value = "";
                archNote.value = "";
                document.getElementById('archive-overlay').querySelector('h3').textContent = "Publicar en la Bóveda General";
                document.getElementById('btn-confirm-archive').textContent = "Subir a la nube";
                archOverlay.classList.add('active');
            } else {
                pendingCommunityAction = 'publish';
                passOverlay.classList.add('active');
            }
        });
    }

    // Modificación de la Bóveda para discernir si es local o publica
    if (btnConfirmArchive) {
        // Debemos eliminar el listener anterior y hacer uno nuevo para manejar ambos flujos
        const clonedBtn = btnConfirmArchive.cloneNode(true);
        btnConfirmArchive.parentNode.replaceChild(clonedBtn, btnConfirmArchive);
        
        clonedBtn.addEventListener('click', async () => {
            const title = archTitle.value.trim() || (isPublishingToCommunity ? 'Aporte de Planeswalker' : 'Generación Anónima');
            const note = archNote.value.trim();
            const dateStr = new Date().toLocaleString();

            if (isPublishingToCommunity) {
                clonedBtn.textContent = "Sincronizando...";
                clonedBtn.disabled = true;

                try {
                    await db.collection("community-vault").add({
                        title: title,
                        note: note,
                        date: dateStr,
                        format: globalFormat,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        content: lastAiResponse
                    });
                    
                    archOverlay.classList.remove('active');
                    if (btnPublishCommunity) {
                        btnPublishCommunity.innerHTML = "✅ ¡Publicado!";
                        btnPublishCommunity.style.background = "rgba(59, 130, 246, 0.5)";
                        setTimeout(() => {
                            btnPublishCommunity.innerHTML = "🌐 Publicar Online";
                            btnPublishCommunity.style.background = "rgba(59, 130, 246, 0.2)";
                        }, 2000);
                    }
                    alert("¡Lote de mazos sincronizado con éxito en la nube de Firebase!");
                } catch (e) {
                    console.error("Error al publicar:", e);
                    alert("Error subiendo a la base de datos.");
                } finally {
                    clonedBtn.disabled = false;
                    clonedBtn.textContent = "Guardar en la Bóveda";
                    isPublishingToCommunity = false;
                    document.getElementById('archive-overlay').querySelector('h3').textContent = "Bautizar Generación";
                }
            } else {
                // Guardado Local
                let savedDecklists = JSON.parse(localStorage.getItem('saved_decklists')) || [];
                savedDecklists.push({ 
                    title: title,
                    note: note,
                    date: dateStr, 
                    format: globalFormat,
                    content: lastAiResponse 
                });
                localStorage.setItem('saved_decklists', JSON.stringify(savedDecklists));
                
                archOverlay.classList.remove('active');

                if (btnSaveAiDecks) {
                    btnSaveAiDecks.innerHTML = "✅ ¡Archivado Local!";
                    btnSaveAiDecks.style.background = "rgba(16, 185, 129, 0.5)";
                    setTimeout(() => {
                        btnSaveAiDecks.innerHTML = "💾 Archivar";
                        btnSaveAiDecks.style.background = "rgba(16, 185, 129, 0.2)";
                    }, 2000);
                }
                alert("¡Lote guardado en Local!");
            }
        });
    }

    if (btnShareWhatsapp) {
        btnShareWhatsapp.addEventListener('click', () => {
            if (!lastAiResponse) return;
            const text = encodeURIComponent("¡Echa un vistazo a estos mazos equilibrados de MTG generados!\n\n" + lastAiResponse);
            window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
        });
    }

    if (btnShareTelegram) {
        btnShareTelegram.addEventListener('click', () => {
            if (!lastAiResponse) return;
            const text = encodeURIComponent("¡Echa un vistazo a estos mazos equilibrados de MTG generados!\n\n" + lastAiResponse);
            window.open(`https://t.me/share/url?url=&text=${text}`, '_blank');
        });
    }

    // Lógica del Hover de Scryfall
    function activarTooltipsMágicos() {
        const tooltip = document.getElementById('mtg-tooltip');
        const tooltipImg = document.getElementById('mtg-tooltip-img');
        const cards = document.querySelectorAll('.mtg-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', async (e) => {
                const cardName = card.getAttribute('data-card');
                tooltip.style.display = 'block';
                // Animación css
                tooltip.style.opacity = "0";
                setTimeout(() => tooltip.style.opacity = "1", 50);
                
                // Ponemos la imagen en blanco o loading
                tooltipImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='; // 1x1 transparent

                try {
                    // LLamada a Scryfall
                    const res = await fetch(`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`);
                    let cardData;
                    if (res.ok) {
                        cardData = await res.json();
                    } else {
                        // Si falla buscando nombre exacto, prueba con fuzzy
                        const resFuzzy = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(cardName)}`);
                        if (resFuzzy.ok) {
                           cardData = await resFuzzy.json();
                        }
                    }

                    if (cardData) {
                        // Manejar cartas doble cara (MDFC)
                        if (cardData.image_uris && cardData.image_uris.normal) {
                            tooltipImg.src = cardData.image_uris.normal;
                        } else if (cardData.card_faces && cardData.card_faces[0].image_uris) {
                            tooltipImg.src = cardData.card_faces[0].image_uris.normal;
                        }
                    }
                } catch(err) {
                   console.log("No se pudo obtener imagen de la carta", cardName);
                }
            });

            card.addEventListener('mousemove', (e) => {
                const tooltipWidth = 250;
                const tooltipHeight = 350;
                let finalX = e.pageX + 15;
                let finalY = e.pageY + 15;

                // Si choca por la derecha
                if (e.clientX + tooltipWidth + 30 > window.innerWidth) {
                    finalX = e.pageX - tooltipWidth - 15;
                }
                
                // Si choca por debajo (límite visual de la ventana actual)
                if (e.clientY + tooltipHeight + 30 > window.innerHeight) {
                    finalY = e.pageY - tooltipHeight - 15;
                }

                tooltip.style.left = finalX + 'px';
                tooltip.style.top = finalY + 'px';
            });

            card.addEventListener('mouseleave', () => {
                tooltip.style.display = 'none';
                tooltipImg.src = '';
            });
        });
    }

    // ----------------------------------------------------
    // PROTOCOLO DE JUICIO FINAL vía OpenRouter (Modelo Dinámico)
    // ----------------------------------------------------
    const btnJudge = document.getElementById('btn-run-judgment');
    const inputJudgeKey = document.getElementById('judgment-api-key');
    const judgeLoader = document.getElementById('judgment-loader');
    const judgeVerdict = document.getElementById('judgment-final-verdict');
    const judgeModelSelect = document.getElementById('judgment-model-select');
    const btnLoadJudgeModels = document.getElementById('btn-load-judge-models');

    // Restaurar key guardada
    if (inputJudgeKey) {
        const savedJudgeKey = localStorage.getItem('deepseek_judge_key');
        if (savedJudgeKey) inputJudgeKey.value = savedJudgeKey;
        inputJudgeKey.addEventListener('input', (e) => {
            localStorage.setItem('deepseek_judge_key', e.target.value.trim());
        });
    }

    // Cargar modelos disponibles de OpenRouter dinámicamente
    async function cargarModelosJuicio() {
        const key = inputJudgeKey.value.trim();
        if (!key) { alert("Primero pega tu API Key de OpenRouter."); return; }

        btnLoadJudgeModels.textContent = "⌛";
        btnLoadJudgeModels.disabled = true;

        try {
            const res = await fetch("https://openrouter.ai/api/v1/models", {
                headers: { "Authorization": `Bearer ${key}` }
            });
            if (!res.ok) throw new Error(await res.text());
            const data = await res.json();

            const exclude = ['dall-e', 'whisper', 'tts', 'embed', 'moderation', 'vision', 'image'];
            let models = data.data
                .filter(m => {
                    const id = (m.id || "").toLowerCase();
                    return !exclude.some(w => id.includes(w));
                })
                .map(m => ({ id: m.id, name: m.name || m.id, free: m.id.includes(':free') }));

            // Ordenar: gratuitos primero, luego deepseek, luego gemini
            models.sort((a, b) => {
                const score = (m) => {
                    let s = 0;
                    if (m.free) s += 100;
                    if (m.id.includes('deepseek')) s += 50;
                    if (m.id.includes('r1')) s += 30;
                    if (m.id.includes('gemini')) s += 20;
                    return s;
                };
                return score(b) - score(a);
            });

            if (models.length === 0) throw new Error("No se encontraron modelos.");

            judgeModelSelect.innerHTML = '';
            models.forEach((m, i) => {
                const opt = document.createElement('option');
                opt.value = m.id;
                opt.textContent = (i === 0 ? '🌟 ' : (m.free ? '🆓 ' : '')) + m.name;
                judgeModelSelect.appendChild(opt);
            });

            // Preseleccionar modelo de razonamiento gratuito preferido
            const preferred = ['deepseek-r1', 'r1-distill', 'gemini-2.0-flash-thinking', 'deepseek-chat'];
            for (const pref of preferred) {
                const found = models.findIndex(m => m.id.toLowerCase().includes(pref) && m.free);
                if (found !== -1) { judgeModelSelect.selectedIndex = found; break; }
            }

            localStorage.setItem('judge_model', judgeModelSelect.value);
            btnLoadJudgeModels.textContent = "✅";
            setTimeout(() => btnLoadJudgeModels.textContent = "🔄", 2000);

        } catch (err) {
            console.error(err);
            judgeVerdict.innerHTML = `<h3 style="color:#ef4444;">Error cargando modelos</h3><div style="font-family:monospace; color:#f87171; padding:0.5rem; word-break:break-all;">${err.message}</div>`;
            judgeVerdict.style.display = 'block';
            btnLoadJudgeModels.textContent = "❌";
            setTimeout(() => btnLoadJudgeModels.textContent = "🔄", 2000);
        } finally {
            btnLoadJudgeModels.disabled = false;
        }
    }

    if (btnLoadJudgeModels) {
        btnLoadJudgeModels.addEventListener('click', cargarModelosJuicio);
    }
    if (judgeModelSelect) {
        judgeModelSelect.addEventListener('change', (e) => {
            localStorage.setItem('judge_model', e.target.value);
        });
        const savedModel = localStorage.getItem('judge_model');
        if (savedModel) {
            const opt = [...judgeModelSelect.options].find(o => o.value === savedModel);
            if (opt) judgeModelSelect.value = savedModel;
        }
    }

    if (btnJudge) {
        btnJudge.addEventListener('click', async () => {
            const key = inputJudgeKey.value.trim();
            const selectedModel = judgeModelSelect ? judgeModelSelect.value : '';

            if (!key) {
                alert("El Tribunal requiere una llave válida de OpenRouter.");
                return;
            }
            if (!selectedModel) {
                alert("Pulsa 🔄 para cargar los modelos disponibles de tu cuenta y selecciona uno.");
                return;
            }

            // Contexto: listas IA si existen, sino resumen de la Battle Box
            let contextoParaElJuez = lastAiResponse;
            if (!contextoParaElJuez || contextoParaElJuez.length < 50) {
                if (battleBox.length === 0) { alert("La Battle Box está vacía. Añade mazos primero."); return; }
                contextoParaElJuez = `(Nota: No hay listas completas generadas. El Juez trabajará con los arquetipos.)\n\n`;
                battleBox.forEach((d, i) => {
                    contextoParaElJuez += `MAZO ${i+1}: [${d.archetype}] - ${d.subArchetype}\n`;
                    contextoParaElJuez += `  - Colores: ${d.colorsFreq}\n`;
                    contextoParaElJuez += `  - Tribu: ${d.tribe === 'N/A' || d.tribe === '' ? 'Sin tribu específica' : d.tribe}\n`;
                    contextoParaElJuez += `  - Notas: ${d.extraNotes || 'Ninguna'}\n\n`;
                });
            }

            const promptJuez = `Actúas como un miembro del "Play Design Team" (Equipo de Balanceo) de Magic: The Gathering. 
Se te somete a juicio un "Battle Box" recién creado.
Tu único objetivo es ser implacable, encontrar "Agujeros en el Meta" y evitar Desbalances de Poder Graves.

### DATOS DEL TRIBUNAL (Mazos a Auditar):
${contextoParaElJuez}

### INSTRUCCIONES DEL JUICIO:
1. **Auditoría de Dominancia**: ¿Existe algún mazo que parezca un "Tier 0" absoluto y vaya a arrasar a los demás rutinariamente?
2. **Auditoría de Ineficacia**: ¿Hay algún mazo que es pura basura teórica en este ecosistema y se lo van a merendar siempre?
3. **El Veredicto (Quirúrgico)**: Propón EXACTAMENTE de 3 a 5 cambios de cartas MUY ESPECÍFICOS para equilibrarlos.
Haz tu respuesta limpia, estéticamente agradable e innegable.`;

            judgeVerdict.style.display = 'none';
            judgeLoader.style.display = 'block';
            btnJudge.disabled = true;

            try {
                const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
                    body: JSON.stringify({ model: selectedModel, messages: [{role: "user", content: promptJuez}], temperature: 0.6 })
                });
                if (!res.ok) throw new Error(await res.text());
                const data = await res.json();
                
                let answer = data.choices[0].message.content;
                answer = answer.replace(/<think>/g, '\n\n---\n**🧠 Razonamiento del Tribunal:**\n\n');
                answer = answer.replace(/<\/think>/g, '\n\n---\n\n');

                judgeVerdict.innerHTML = markdownToHtml(answer);
                judgeVerdict.style.display = 'block';
                activarTooltipsMágicos();

            } catch (err) {
                console.error(err);
                judgeVerdict.innerHTML = `<h3 style="color:#ef4444;">Error en la Invocación</h3><div style="background:rgba(0,0,0,0.6); padding:1rem; border:1px dashed #ef4444; border-radius:4px; font-family:monospace; word-break:break-all;">${err.message}</div>`;
                judgeVerdict.style.display = 'block';
            } finally {
                judgeLoader.style.display = 'none';
                btnJudge.disabled = false;
                setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 100);
            }
        });
    }

    // Render Archive Screen (Bóveda)
    function renderArchiveBox() {
        const listDiv = document.getElementById('archive-list');
        if (!listDiv) return;
        
        let savedDecklists = JSON.parse(localStorage.getItem('saved_decklists')) || [];
        
        if (savedDecklists.length === 0) {
            listDiv.innerHTML = `<div class="empty-bb" style="color: #10b981;">La bóveda está vacía. Genera listas con IA y archívalas para conservarlas aquí por la eternidad.</div>`;
            return;
        }

        let html = '';
        // Mostramos las más recientes primero
        const reversedList = [...savedDecklists].reverse();
        reversedList.forEach((item, reverseIdx) => {
             const originalIdx = savedDecklists.length - 1 - reverseIdx;
             const titulo = item.title || `Registro IA: ${item.date}`;
             const nota = item.note ? `<p style="font-size: 0.95rem; color: #facc15; font-style: italic; margin-bottom: 0.5rem;">"${item.note}"</p>` : '';
             
             html += `
                <div class="bb-item" style="border-color: rgba(16, 185, 129, 0.4);">
                    <div class="bb-info">
                        <h4 style="color: #10b981; font-size: 1.5rem; margin-bottom: 0.2rem;">${titulo}</h4>
                        <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">📅 ${item.date}</p>
                        ${nota}
                        <p style="font-size: 0.9rem; color: #94a3b8;">${item.content.substring(0, 100).replace(/\n/g, ' ')}...</p>
                    </div>
                    <div class="bb-actions">
                        <button class="btn-prompt btn-view-archive" data-idx="${originalIdx}" style="background: rgba(16, 185, 129, 0.8);">Leer Registro</button>
                        <button class="btn-delete btn-delete-archive" data-idx="${originalIdx}" style="background: #e11d48;">Desintegrar</button>
                    </div>
                </div>
            `;
        });
        listDiv.innerHTML = html;

        listDiv.querySelectorAll('.btn-view-archive').forEach(btn => btn.addEventListener('click', (e) => {
            const idx = e.target.getAttribute('data-idx');
            const data = JSON.parse(localStorage.getItem('saved_decklists')) || [];
            if(data[idx]) {
                lastAiResponse = data[idx].content;
                const aiPanelDiv = document.getElementById('ai-generator-panel');
                const aiControlsDiv = document.getElementById('ai-view-controls');
                const aiResultsDiv = document.getElementById('ai-results-container');
                const viewGuideBtn = document.getElementById('btn-view-guide');
                
                if (aiPanelDiv && aiControlsDiv && aiResultsDiv) {
                    aiPanelDiv.style.display = 'block';
                    aiControlsDiv.style.display = 'flex';
                    aiResultsDiv.style.display = 'block';
                    
                    // Formateamos usando la función local markdownToHtml para preservar la UI
                    aiResultsDiv.innerHTML = `<div class="ai-deck-box">${markdownToHtml(lastAiResponse)}</div>`;
                    if(typeof activarTooltipsMágicos === 'function') activarTooltipsMágicos();

                    switchViews(archiveScreen, homeScreen);
                    setTimeout(() => window.scrollTo({ top: aiPanelDiv.offsetTop - 50, behavior: 'smooth' }), 300);
                }
            }
        }));

        listDiv.querySelectorAll('.btn-delete-archive').forEach(btn => btn.addEventListener('click', (e) => {
            const idx = e.target.getAttribute('data-idx');
            let data = JSON.parse(localStorage.getItem('saved_decklists')) || [];
            data.splice(idx, 1);
            localStorage.setItem('saved_decklists', JSON.stringify(data));
            renderArchiveBox(); // refrescar
        }));
    }

    // ----------------------------------------------------
    // LÓGICA DE FIREBASE COMUNITARIO
    // ----------------------------------------------------
    btnConfirmPass.addEventListener('click', () => {
        const val = passInput.value.trim();
        if (val === GUILD_PASSWORD) {
            isCommunityUnlocked = true;
            localStorage.setItem('guild_unlocked', 'true');
            passError.style.display = 'none';
            passOverlay.classList.remove('active');

            // Flujo según el botón precionado
            if (pendingCommunityAction === 'view') {
                openCommunityScreen();
            } else if (pendingCommunityAction === 'publish') {
                btnPublishCommunity.click(); // Re-disparar ahora desbloqueado
            }
        } else {
            passError.style.display = 'block';
        }
    });

    passInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') btnConfirmPass.click();
    });

    function openCommunityScreen() {
        const active = document.querySelector('.view.active-view');
        if(active !== communityScreen) switchViews(active, communityScreen);
        renderCommunityBox();
    }

    async function renderCommunityBox() {
        const loader = document.getElementById('community-loader');
        const listDiv = document.getElementById('community-list');
        listDiv.style.display = 'none';
        loader.style.display = 'block';

        try {
            const querySnapshot = await db.collection("community-vault").orderBy("timestamp", "desc").get();
            
            if (querySnapshot.empty) {
                listDiv.innerHTML = `<div class="empty-bb" style="color: #3b82f6;">El santuario está vacío. Aún no hay registros globales.</div>`;
                loader.style.display = 'none';
                listDiv.style.display = 'block';
                return;
            }

            let html = '';
            const communityData = [];

            querySnapshot.forEach((doc) => {
                const item = doc.data();
                item.docId = doc.id;
                communityData.push(item);
                
                const titulo = item.title || `Generación Anónima`;
                const nota = item.note ? `<p style="font-size: 0.95rem; color: #facc15; font-style: italic; margin-bottom: 0.5rem;">"${item.note}"</p>` : '';
                
                let formatBadge = `<span style="background: rgba(239, 68, 68, 0.4); color: white; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; border: 1px solid #ef4444; margin-left: 0.5rem;">⚔️ CLÁSICO 60</span>`;
                let borderColor = `rgba(59, 130, 246, 0.4)`;
                if (item.format === 'commander') {
                    formatBadge = `<span style="background: rgba(245, 158, 11, 0.4); color: white; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; border: 1px solid #f59e0b; margin-left: 0.5rem;">👑 COMMANDER 100</span>`;
                    borderColor = `rgba(245, 158, 11, 0.4)`;
                }
                
                html += `
                <div class="bb-item community-format-${item.format || 'standard'}" style="border-color: ${borderColor};">
                    <div class="bb-info">
                        <h4 style="color: #3b82f6; font-size: 1.5rem; margin-bottom: 0.2rem; display:flex; align-items:center;">🌟 ${titulo} ${formatBadge}</h4>
                        <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem;">🌎 Sincronizado el: ${item.date}</p>
                        ${nota}
                        <p style="font-size: 0.9rem; color: #cbd5e1;">${(item.content || "").substring(0, 100).replace(/\n/g, ' ')}...</p>
                    </div>
                    <div class="bb-actions">
                        <button class="btn-prompt btn-view-community" data-id="${item.docId}" style="background: rgba(59, 130, 246, 0.8); border: 1px solid #60a5fa;">Ver y Copiar</button>
                        <button class="btn-delete btn-delete-community" data-id="${item.docId}" style="background: #e11d48; border: 1px solid #f87171;">Eliminar Nube</button>
                    </div>
                </div>
                `;
            });

            // Guardamos localmente un map id->content rápido
            window._tempCommunityData = communityData;

            listDiv.innerHTML = html;
            
            // Botón: Ver y Copiar
            listDiv.querySelectorAll('.btn-view-community').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const docId = e.target.getAttribute('data-id');
                    const targetData = window._tempCommunityData.find(d => d.docId === docId);
                    
                    if(targetData) {
                        lastAiResponse = targetData.content;
                        const aiPanelDiv = document.getElementById('ai-generator-panel');
                        const aiControlsDiv = document.getElementById('ai-view-controls');
                        const aiResultsDiv = document.getElementById('ai-results-container');
                        
                        if (aiPanelDiv && aiControlsDiv && aiResultsDiv) {
                            aiPanelDiv.style.display = 'block';
                            aiControlsDiv.style.display = 'flex';
                            aiResultsDiv.style.display = 'block';
                            
                            aiResultsDiv.innerHTML = `<div class="ai-deck-box" style="border-color: #3b82f6;">${markdownToHtml(lastAiResponse)}</div>`;
                            if(typeof activarTooltipsMágicos === 'function') activarTooltipsMágicos();

                            switchViews(communityScreen, homeScreen);
                            setTimeout(() => window.scrollTo({ top: aiPanelDiv.offsetTop - 50, behavior: 'smooth' }), 300);
                        }
                    }
                });
            });

            // Botón: Eliminar de la Nube (Firebase)
            listDiv.querySelectorAll('.btn-delete-community').forEach(btn => {
                btn.addEventListener('click', async (e) => {
                    const docId = e.target.getAttribute('data-id');
                    const confirmacion = confirm("⚠️ ¿ESTÁS SEGURO?\n\nVas a eliminar este registro de la base de datos GLOBAL. Todos los miembros del gremio dejarán de verlo.\n\nEsta acción NO se puede deshacer.");
                    
                    if (confirmacion) {
                        try {
                            e.target.disabled = true;
                            e.target.textContent = "⌛...";
                            await db.collection("community-vault").doc(docId).delete();
                            renderCommunityBox(); // Refrescar lista
                        } catch (err) {
                            console.error("Error al borrar de community:", err);
                            alert("Ha ocurrido un fallo al intentar borrar el documento de Firebase.");
                            e.target.disabled = false;
                            e.target.textContent = "Eliminar Nube";
                        }
                    }
                });
            });

            // Lógica de los filtros de formatos
            const filtersDiv = document.getElementById('community-filters');
            filtersDiv.style.display = 'flex';
            
            const filterBtns = document.querySelectorAll('.btn-filter-format');
            filterBtns.forEach(f => {
                f.addEventListener('click', (e) => {
                    filterBtns.forEach(b => {
                        b.classList.remove('active');
                        b.style.background = 'transparent';
                    });
                    
                    e.target.classList.add('active');
                    const colorMap = {
                        'all': 'rgba(59, 130, 246, 0.4)',
                        'standard': 'rgba(239, 68, 68, 0.4)',
                        'commander': 'rgba(245, 158, 11, 0.4)'
                    };
                    const filterType = e.target.getAttribute('data-filter');
                    e.target.style.background = colorMap[filterType];
                    
                    // Ocultar / Mostrar
                    listDiv.querySelectorAll('.bb-item').forEach(itemHTML => {
                        if (filterType === 'all') {
                            itemHTML.style.display = 'flex';
                        } else {
                            if (itemHTML.classList.contains(`community-format-${filterType}`)) {
                                itemHTML.style.display = 'flex';
                            } else {
                                itemHTML.style.display = 'none';
                            }
                        }
                    });
                });
            });

            loader.style.display = 'none';
            listDiv.style.display = 'block';
            
        } catch(err) {
            console.error("Error consiguiendo docs", err);
            loader.style.display = 'none';
            listDiv.style.display = 'block';
            listDiv.innerHTML = `<div class="empty-bb" style="color: #ef4444; border-color: #ef4444;">❌ Error contactando con Firebase. Contacta con el administrador.</div>`;
        }
    }

});





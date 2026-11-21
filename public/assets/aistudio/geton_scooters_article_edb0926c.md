---
title: "Geton Scooters: Fra mobilapp til en IoT-plattform"
seo_title: "Geton Scooters – IoT, MQTT og apputvikling | Geton AS"
meta_description: "Se hvordan Geton AS utviklet en elsparkesykkelplattform med mobilapp, kart, IoT, MQTT og geofencing – fra idé til drift."
slug: "geton-scooters-iot-mqtt-apputvikling"
category: "Kundecase / Teknologi"
---

# Geton Scooters: Fra mobilapp til en IoT-plattform

**Casestudie · Apputvikling · IoT · MQTT**

Å finne en elsparkesykkel på kartet, skanne en QR-kode og starte en tur skal oppleves enkelt. Bak denne opplevelsen ligger imidlertid et samspill mellom mobilapp, karttjenester, backend, betalingsflyt og tilkoblede kjøretøy.

**Geton Scooters** er et eksempel på hvordan Geton AS har utviklet en digital tjeneste som kobler programvare med fysiske enheter – og testet løsningen i virkelig utleiedrift på Sotra.

![Geton-elsparkesykler utplassert utendørs på Sotra](assets/geton-scooters-fleet.webp)
*Geton Scooters i reell drift – et fysisk produkt styrt gjennom en digital plattform.*

## Én tjeneste – flere teknologier

Geton Scooters ble bygget rundt en enkel idé: Brukeren skal kunne finne, leie og avslutte en kjøretur direkte fra mobilen. Appen ble gjort tilgjengelig for både **iOS og Android**, og samlet de viktigste delene av brukerreisen i ett grensesnitt.

Fra kartoversikt og QR-skanning til turinformasjon og vurdering etter avsluttet kjøring måtte hvert steg fungere som én sammenhengende opplevelse. Dette krevde mer enn et godt appdesign – også kommunikasjonen mellom appen, serverne og elsparkesyklene måtte spille på lag.

## Kart, tilgjengelighet og geografiske soner

Kartet var sentralt i Geton Scooters. Her kunne brukeren finne tilgjengelige sparkesykler, orientere seg i nærområdet og starte leieprosessen. Kartløsningen viste også geografiske soner og varsler når en bruker befant seg utenfor et tillatt område.

Denne typen **geofencing** er et viktig eksempel på hvordan stedstjenester kan bli en del av funksjonaliteten i en mobilapp. Det handler ikke bare om å vise et kart, men om å gjøre geografiske regler forståelige for brukeren.

![Kartskjerm fra Geton Scooters med sparkesykler og varsel om sonebegrensning](assets/geton-scooters-map-geofencing.webp)
*Kartvisning med kjøretøy, markerte soner og meldingen «Outside Zone».*

## IoT og MQTT – når programvaren møter kjøretøyet

Den mest interessante delen av prosjektet ligger bak skjermen. Geton Scooters benyttet **IoT (Internet of Things)** og **MQTT** for kommunikasjon med tilkoblede enheter.

MQTT er en lettvekts meldingsprotokoll som bruker en **publish/subscribe-modell**. I stedet for at alle systemer må kommunisere direkte med hverandre hele tiden, kan enheter og tjenester sende og motta meldinger gjennom et meldingssystem. Protokollen er spesielt egnet for IoT-enheter som bruker mobilnett eller har begrenset båndbredde.

I en løsning som Geton Scooters gjør denne typen arkitektur det mulig å knytte kjøretøyenes status og hendelser til den digitale plattformen. Brukeren ser en enkel app; teknisk handler det om flere komponenter som må samhandle presist.

Dette illustrerer en viktig del av moderne **apputvikling**: En mobilapp er ofte bare den synlige delen av et større programvaresystem.

## Apputvikling med fokus på hele brukerreisen

Et godt digitalt produkt handler ikke bare om å få funksjonene til å virke. De må også være enkle å forstå og bruke.

I Geton Scooters omfattet brukeropplevelsen blant annet oversikt over leiealternativer og pass, visning av turinformasjon, avslutning av kjøreturen og mulighet for tilbakemelding. Skjermbildene nedenfor viser to deler av denne brukerreisen.

![Geton Pass i mobilappen med oversikt over leiepass](assets/geton-scooters-pass.webp)
*Geton Pass – en appskjerm for ulike leiealternativer.*

![Skjermbilde fra Geton Scooters etter fullført kjøretur](assets/geton-scooters-completed-trip.webp)
*Fullført tur – oppsummering og mulighet for å vurdere opplevelsen.*

Et slikt produkt krever arbeid på flere nivåer: **UI/UX-design**, utvikling for mobile plattformer, **backend og API-er**, integrasjon med IoT-enheter, kart- og stedstjenester samt logikk for leie og betaling.

Det viktigste er at disse delene ikke oppleves som separate systemer for kunden. De skal fungere som én tjeneste.

## Hva dette prosjektet viser om Geton AS

Geton Scooters ble mer enn en konseptskisse eller en prototype. Løsningen ble brukt i praktisk drift og ga erfaring med både programvareutvikling og de daglige kravene som oppstår når en digital tjeneste møter fysiske produkter og virkelige brukere.

Erfaringene er relevante langt utover elsparkesykler. Den samme kompetansen kan brukes i løsninger for **logistikk, flåtestyring, sporing, smarte produkter, booking og andre digitale tjenester** der apper, systemer og tilkoblede enheter må fungere sammen.

Hos Geton AS jobber vi med å gjøre komplekse ideer om til forståelige, brukervennlige digitale løsninger – fra design og apputvikling til integrasjoner og videreutvikling.

## Har du en appidé som krever mer enn bare en app?

Enten du skal utvikle en mobilapp, et administrasjonssystem eller en IoT-basert plattform, kan vi hjelpe deg å definere riktig løsning og bygge den steg for steg.

**[Snakk med Geton AS om prosjektet ditt](https://getontechs.com/)**

*Merk: Bildene viser Geton Scooters fra en tidligere versjon av tjenesten. Skjermbilder av priser og funksjoner er ikke ment som et gjeldende tilbud.*

**Kilder og relatert informasjon:** [MQTT.org – MQTT-protokollen](https://mqtt.org/) · [Geton Scooters i App Store](https://apps.apple.com/no/app/geton-scooters/id1591591491) · [Geton Scooters på Google Play](https://play.google.com/store/apps/details?id=com.geton)

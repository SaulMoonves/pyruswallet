// Norwegian
'use strict';
var no = function() {}
no.code = 'no';
no.data = {

NAV_ENS: 'ENS',


/* Misc */
x_ParityPhrase              : 'Parity-frase ',

/* Node Switcher */
NODE_Title                  : 'Sett opp en alternativ node',
NODE_Subtitle               : 'For å koble til en lokal node...',
NODE_Warning                : 'Noden din må være HTTPS for å muliggjøre tilkobling via MyEtherWallet.com. Du kan [laste ned MyEtherWallet-repoet & kjøre det lokalt](https://github.com/kvhnuke/etherwallet/releases/latest) for å koble til en hvilken som helst node. Eller du kan skaffe deg et gratis SSL-sertifikat via [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Nodens navn',
NODE_Port                   : 'Nodens port',
NODE_CTA                    : 'Lagre & bruk alternativ node',

/* Contracts */
x_Access                    : 'Åpne ',
CONTRACT_Title              : 'Kontraktadresse ',
CONTRACT_Title_2            : 'Velg eksisterende kontrakt ',
CONTRACT_Json               : 'ABI / JSON grensesnitt ',
CONTRACT_Interact_Title     : 'Les fra / Skriv til kontrakt ',
CONTRACT_Interact_CTA       : 'Velg en funksjon ',
CONTRACT_ByteCode           : 'Byte Code ',
CONTRACT_Read               : 'LES ',
CONTRACT_Write              : 'SKRIV ',

/* Swap / Exchange */
SWAP_rates                  : "Aktuelle vekslingskurser ",
SWAP_init_1                 : "Jeg vil veksle mine ",
SWAP_init_2                 : " med ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Gjennomfør! ", // "Let's do this!" or "Continue"
SWAP_information            : "Din informasjon ",
SWAP_send_amt               : "Beløp som sendes ",
SWAP_rec_amt                : "Beløp som mottas ",
SWAP_your_rate              : "Din vekslingskurs ",
SWAP_rec_add                : "Din mottakeradresse ",
SWAP_start_CTA              : "Start byttet ",
SWAP_ref_num                : "Ditt referansenummer ",
SWAP_time                   : "Gjenstående tid til å sende ",
SWAP_progress_1             : "Ordre initiert ",
SWAP_progress_2             : "Venter på dine ", // Waiting for your BTC...
SWAP_progress_3             : "Mottatt! ", // ETH Received!
SWAP_progress_4             : "Sender dine {{orderResult.output.currency}} ",
SWAP_progress_5             : "Ordre fullført ",
SWAP_order_CTA              : "Vennligst send ", // Please send 1 ETH...
SWAP_unlock                 : "Lås opp din lommebok for å sende ETH eller Tokens direkte fra denne siden. ",

NAV_Swap                    : 'Veksling ',





/* Navigation*/
NAV_AddWallet               : 'Legg til lommebok ',
NAV_BulkGenerate            : 'Opprett flere lommebøker ',
NAV_Contact                 : 'Kontakt ',
NAV_Contracts               : 'Kontrakt ',
NAV_DeployContract          : 'Utplasser kontrakt ',
NAV_GenerateWallet          : 'Opprett lommebok ',
NAV_Help                    : 'Hjelp ',
NAV_InteractContract        : 'Samhandle med Kontrakt ',
NAV_Multisig                : 'Multisig ',
NAV_MyWallets               : 'Mine lommebøker ',
NAV_Offline                 : 'Send Offline ',
NAV_SendEther               : 'Send Ether & Tokens ',
NAV_SendTokens              : 'Send Tokens ',
NAV_SignMsg                 : 'Signér Melding ',
NAV_ViewWallet              : 'Vis lommebok-info ',
NAV_YourWallets             : 'Dine lommebøker ',

/* General */
x_AddessDesc                : 'Du kjenner kanskje dette som ditt "kontonummer" eller din "offentlige nøkkel". Dette er informasjonen som du sender til folk så de kan sende deg ether (en lang rekke tilfeldige tall og bokstaver som starter med "0x"). Ikonet er en enkel måte å kjenne igjen adressen din på. ',
x_Address                   : 'Din adresse ',
x_Cancel                    : 'x_Annuler ',
x_CSV                       : 'CSV-fil (ukryptert) ',
x_Download                  : 'Last ned ',
x_Json                      : 'JSON-fil (ukryptert) ',
x_JsonDesc                  : 'Dette er det ukrypterte JSON-formatet av din private nøkkel. Dette betyr at du ikke trenger noe passord, men også at den som finner din JSON kan få tilgang til lommeboken din og etherne dine uten passord. ',
x_Keystore                  : 'Keystore-fil (UTC / JSON · Anbefalt · Kryptert) ',
x_Keystore2                 : 'Keystore-fil (UTC / JSON) ',
x_KeystoreDesc              : 'Denne Keystore-filen samsvarer med formatet som brukes av Mist, så du enkelt kan importere den i fremtiden. Det er den anbefalte filen å laste ned og sikkerhetskopiere. ',
x_Mnemonic                  : 'Mnemonisk Frase ',
x_Password                  : 'Passord ',
x_Print                     : 'Skriv ut papirlommebok ',
x_PrintDesc                 : 'Profftips: Klikk "skriv ut" og lagre som PDF, selv om du ikke har noen skriver! ',
x_PrintShort                : 'Skriv ut ',
x_PrivKey                   : 'Privat nøkkel (ukryptert) ',
x_PrivKey2                  : 'Privat nøkkel ',
x_PrivKeyDesc               : 'Dette er den ukrypterte tekstversjonen av den private nøkkelen din, noe som betyr at det ikke er nødvendig med noe passord. Hvis noen skulle få tak i den ukrypterte private nøkkelen din, ville de få tilgang til lommeboken din uten å bruke passord. Derfor er krypterte nøkler vanligvis å anbefale. ',
x_Save                      : 'x_Lagre ',
x_TXT                       : 'TXT-fil (ukryptert) ',
x_Wallet                    : 'Lommebok ',

/* Header */
MEW_Warning_1               : 'Sjekk alltid nettsideadressen før du bruker eller oppretter en lommebok. Pass opp for "phishing"-nettsider! ',
CX_Warning_1                : 'Sørg for at du har **eksterne sikkerhetskopier** av alle lommebøker som du lagrer her. Mye kan hende som vil kunne medføre at du mister informasjonen i denne Chrome-utvidelsen, inkludert avinstallasjon og reinstallasjon av utvidelsen. Denne utvidelsen gir deg enkel tilgang til lommebøkene dine, men er **ikke** en måte å sikkerhetskopiere dem på. ',
MEW_Tagline                 : 'Open Source JavaScript Client-Side Ether Wallet ', /* Intentionally not translated */
CX_Tagline                  : 'Open Source JavaScript Client-Side Ether Wallet Chrome Extension ', /* Intentionally not translated */

/* Footer */
FOOTER_1                    : 'Et åpen-kildekode-, javascript-, klient-side-verktøy for å opprette Ethereum-lommebøker & sende transaksjoner. ',
FOOTER_1b                   : 'Skapt av ',
FOOTER_2                    : 'Donasjoner mottas med takk: ',
FOOTER_3                    : 'Klient-side lommebok-oppretting av ',
FOOTER_4                    : 'Ansvarsfraskrivelse ',

/* Sidebar */
sidebar_AccountInfo         : 'Kontoinformasjon ',
sidebar_AccountAddr         : 'Kontoadresse ',
sidebar_AccountBal          : 'Saldo på konto ',
sidebar_TokenBal            : 'Token-saldo ',
sidebar_Equiv               : 'Tilsvarende verdier ',
sidebar_TransHistory        : 'Transaksjonshistorikk ',
sidebar_donation            : 'MyEtherWallet er en gratis åpen-kildekode-service som er dedikert til å ivareta ditt personvern og din sikkerhet. Jo flere donasjoner vi får, jo mer tid kan vi bruke til å lage nye funksjoner, lytte til tilbakemeldinger, og gi deg det du ønsker. Vi er bare to personer som prøver å forandre verden. Vil du hjelpe oss? ',
sidebar_donate              : 'Doner ',
sidebar_thanks              : 'TAKK!!! ',

/* Decrypt Panel */
decrypt_Access              : 'Hvordan ønsker du å få tilgang til lommeboken din? ',
decrypt_Title               : 'Velg formatet på din private nøkkel: ',
decrypt_Select              : 'Velg en lommebok: ',

/* Add Wallet */
ADD_Label_1                 : 'Hva ønsker du å gjøre? ',
ADD_Radio_1                 : 'Opprett ny lommebok ',
ADD_Radio_2                 : 'Velg lommebok-filen din (Keystore / JSON) ',
ADD_Radio_2_alt             : 'Velg lommebok-fil ',
ADD_Radio_2_short           : 'VELG LOMMEBOK-FIL... ',
ADD_Radio_3                 : 'Lim/skriv inn din private nøkkel ',
ADD_Radio_4                 : 'Legg til en konto for overvåkning ',
ADD_Radio_5_Path            : 'Velg "HD derivation" variant ',
ADD_Radio_5_woTrezor        : '(Jaxx, Metamask, Exodus, imToken) ',
ADD_Radio_5_withTrezor      : '(Jaxx, Metamask, Exodus, imToken, TREZOR) ',
ADD_Radio_5_PathAlternative : '(Ledger) ',
ADD_Radio_5_PathTrezor      : '(TREZOR) ',
ADD_Radio_5_PathCustom      : '(tilpasset) ',
ADD_Radio_5                 : 'Lim inn/tast din mnemoniske frase ',
ADD_Label_2                 : 'Lag et kallenavn: ',
ADD_Label_3                 : 'Filen din er kryptert. Vennligst oppgi passordet ',
ADD_Label_4                 : 'Legg til en konto for overvåkning ',
ADD_Warning_1               : 'Du kan legge til hvilken som helst konto som du vil overvåke på lommebok-siden uten å laste opp en privat nøkkel. Dette betyr ** ikke ** at du har tilgang til denne lommeboken, eller at du kan overføre ether fra den. ',
ADD_Label_5                 : 'Oppgi adressen ',
ADD_Label_6                 : 'Lås opp lommeboen din ',
ADD_Label_6_short           : 'Lås opp ',
ADD_Label_7                 : 'Legg til konto ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S ',
ADD_Ledger_1                : 'Koble til din Ledger Nano S ',
ADD_Ledger_2                : 'Åpne Ethereum-applikasjonen (eller kontraktsapplisjonen) ',
ADD_Ledger_3                : 'Sjekk at nettleserstøtte er aktivert i innstillingene. ',
ADD_Ledger_4                : 'Hvis du ikke finner noen nettleserstøtte i innstillingene, sjekk at du har [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
ADD_Ledger_0a               : 'Åpne MyEtherWallet på nytt på en sikker (SSL) forbindelse. ',
ADD_Ledger_0b               : 'Åpne MyEtherWallet på nytt med [Chrome](https://www.google.com/chrome/browser/desktop/) eller [Opera](https://www.opera.com/) ',
ADD_Ledger_scan             : 'Koble til Ledger Nano S ',
x_Trezor                    : 'TREZOR ',
ADD_Trezor_scan             : 'Koble til TREZOR ',
ADD_Trezor_select           : 'Dette er en TREZOR seed ',

/* Generate Wallets */
GEN_desc                    : 'Hvis du vil opprette flere lommebøker, kan du gjøre det her ',
GEN_Label_1                 : 'Oppgi et sterkt passord (minst 9 tegn) ',
GEN_Placeholder_1           : 'Glem IKKE å ta vare på dette! ',
GEN_SuccessMsg              : 'Suksess! Lommeboken din har blitt opprettet. ',
GEN_Label_2                 : 'Lagre din Keystore-fil og/eller private nøkkel. Ikke glem passordet ditt ovenfor. ',
GEN_Label_3                 : 'Lagre adressen din. ',
GEN_Label_4                 : 'Valgfritt: Skriv ut din papir-lommebok, eller lagre en QR-kode-versjon.',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Antall lommebøker som skal opprettes ',
BULK_Label_2                : 'Opprett lommebøker ',
BULK_SuccessMsg             : 'Suksess! Lommebøkene dine har blitt opprettet. ',

/* Sending Ether and Tokens */
SEND_addr                   : 'Til-adresse ',
SEND_amount                 : 'Beløp som skal sendes ',
SEND_amount_short           : 'Beløp ',
SEND_custom                 : 'Tilpasning ',
SEND_gas                    : 'Gas ',
SEND_TransferTotal          : 'Overfør total tilgjengelig saldo ',  // updated to read 'Send Entire Balance'
SEND_generate               : 'Generer transaksjon ',
SEND_raw                    : 'Rå-transaksjon ',
SEND_signed                 : 'Signert transaksjon ',
SEND_trans                  : 'Send transaksjon ',
SEND_custom                 : 'Legg til Token ',
SENDModal_Title             : 'Advarsel! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Du er i ferd med å sende ',
SENDModal_Content_2         : 'til adressen ',
SENDModal_Content_3         : 'Er du sikker på at du ønsker å gjøre dette? ',
SENDModal_Content_4         : 'NB: Hvis det oppstår en feil, må du sannsynligvis legge til ether til kontoen din for å dekke "gas"-kostnaden for å sende ether/token. "Gas" betales i ether. ',
SENDModal_No                : 'Nei, få meg ut herfra! ',
SENDModal_Yes               : 'Ja, jeg er sikker! Gjennomfør transaksjonen. ',

/* Tokens */
TOKEN_Addr                  : 'Adresse ',
TOKEN_Symbol                : 'Token-symbol ',
TOKEN_Dec                   : 'Desimaler ',
TOKEN_show                  : 'Vis Alle Tokens ',
TOKEN_hide                  : 'Skjul Tokens ',

/* Send Transaction */
TRANS_desc                  : 'Hvis du ønsker å sende token, vennligst bruk "Send Token"-siden i stedet. ',
TRANS_warning               : 'Hvis du bruker "Kun ETH"- eller "Kun ETC"-funksjonene, sender du via en kontrakt. Noen tjenester har problemer med å akseptere disse transaksjonene. Les mer. ',
TRANS_advanced              : '+Avansert: Legg til data ',
TRANS_data                  : 'Data ',
TRANS_gas                   : 'Gas Limit ',
TRANS_sendInfo              : 'En standard transaksjon som bruker 21000 gas vil koste 0,000441 ETH. Vi bruker en litt-over-minimum gas-pris på 0,000000021 ETH for å sikre at transaksjonen blir raskt behandlet. Vi tar ikke noe transaksjonsgebyr. ',

/* Send Transaction Modals */
TRANSModal_Title            : '"Kun ETH"- og "Kun ETC"-transaksjoner ',
TRANSModal_Content_0        : 'En notis om forskjellige transaksjoner og tjenester: ',
TRANSModal_Content_1        : '**ETH (Standardtransaksjon): ** Dette Oppretter en standardtransaksjon direkte fra en adresse ti en annen. Den har standard gas på 21000. Det er sannsynlig at ETH som sendes med denne metoden også vil bli sendt som ETC på ETC-kjeden (hvis kontoen inneholder både ETH og ETC). Dette er anbefalt metode hvis kontoen kun inneholder ETH. ',
TRANSModal_Content_2        : '**Kun ETH: ** Dette sender via [Timon Rapp\'s replay-beskyttelseskontrakt (som anbefalt av VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) slik at du kun sender på **ETH**-kjeden. ',
TRANSModal_Content_3        : '**Kun ETC: ** Dette sender via [Timon Rapp\'s replay-beskyttelseskontrakt (som anbefalt av VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/) slik at du kun sender på **ETC**-kjeden. ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** Send kun via Standard transaksjon. Hvis du sender via "Kun"-kontraktene, vil du måtte ta kontakt med deres kundestøttepersonell for å manuelt legge til saldoen din eller få en tilbakebetaling. [Du kan også prøve Shapeshift sitt "splitte"-verktøy.](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** Ingen kjente problemer. Bruk det som passer. ',
TRANSModal_Yes              : 'Flott, jeg skjønner det nå. ',
TRANSModal_No               : 'Trøste og bære, nå er jeg bare enda mer forvirret. Hjelp meg. ',

/* Offline Transaction */
OFFLINE_Title               : 'Generer & send offline transaksjon ',
OFFLINE_Desc                : 'Generering av offline-transaksjoner kan utføres i tre steg. Du utfører steg 1 og 3 på en internettilknyttet datamaskin, og steg 2 på en offline/frakoblet datamaskon. Dette sikrer at dine private nøkler ikke kommer i kontakt med en internettilknyttet enhet. ',
OFFLLINE_Step1_Title        : 'Steg 1: Generer informasjon (internettilknyttet datamaskin) ',
OFFLINE_Step1_Button        : 'Generer informasjon ',
OFFLINE_Step1_Label_1       : 'Fra-adresse ',
OFFLINE_Step1_Label_2       : 'NB: Dette er FRA-adressen, ikke TIL-adressen. "Nonce" genereres fra den opprinnelige kontoen. Hvis du bruker en frakoblet datamaskin, vil dette være adressen til "kald-lager"-kontoen (dvs. kontoen som lagres frakoblet internett). ',
OFFLINE_Step2_Title         : 'Steg 2: Generer transaksjon (frakoblet datamaskin) ',
OFFLINE_Step2_Label_1       : 'Til-adresse ',
OFFLINE_Step2_Label_2       : 'Verdi / Beløp å sende ',
OFFLINE_Step2_Label_3       : 'Gas-pris ',
OFFLINE_Step2_Label_3b      : 'Dette kom fram i steg 1 på den internettilknyttede maskinen. ',
OFFLINE_Step2_Label_4       : 'Gas-grense ',
OFFLINE_Step2_Label_4b      : '21000 er standard gas-grense. Når du sender kontrakter eller ekstra data, kan det hende at grensen må settes høyere. Eventuelt ubrukt gas blir returnert til deg. ',
OFFLINE_Step2_Label_5       : 'Nonce ',
OFFLINE_Step2_Label_5b      : 'Dette kom fram i steg 1 på den internettilknyttede maskinen. ',
OFFLINE_Step2_Label_6       : 'Data ',
OFFLINE_Step2_Label_6b      : 'Dette er valgfritt. Data brukes ofte når du sender transaksjoner til kontrakter. ',
OFFLINE_Step2_Label_7       : 'Skriv inn / Velg din private nøkkel / JSON. ',
OFFLINE_Step3_Title         : 'Steg 3: Send / Publiser transaksjon (internettilknyttet datamaskin) ',
OFFLINE_Step3_Label_1       : 'Overfør (f.eks. via USB-minnepinne) den signerte transaksjonen fra steg 2 og lim den inn her. Trykk så "SEND TRANSAKSJON"-knappen. ',

/* Sign Message */
MSG_message                 : 'Melding ',
MSG_date                    : 'Dato ',
MSG_signature               : 'Signatur ',
MSG_verify                  : 'Verifiser Melding ',
MSG_info1                   : 'Inkluder dagens dato slik at signaturen ikke kan brukes på nytt på en annen dato. ',
MSG_info2                   : 'Inkluder brukernavnet ditt og hvor du benytter dette navnet slik at ingen andre kan benytte det. ',
MSG_info3                   : 'Inkluder en spesifikk grunn for meldingen så den ikke kan brukes på nytt for et annet formål. ',

/* Mnemonic */
MNEM_1                      : 'Vennligst velg adressen du vil jobbe med. ',
MNEM_2                      : 'Din "HD-mnemoniske frase" kan gi deg tilgang til flere lommebøker / adresser. Vennligst velg den adressen du vil jobbe med denne gangen. ',
MNEM_more                   : 'Flere Adresser ',
MNEM_prev                   : 'Forrige Adresse ',

/* Deploy Contracts */
DEP_generate                : 'Generer Bytecode ',
DEP_generated               : 'Generert Bytecode ',
DEP_signtx                  : 'Signer transaksjon ',
DEP_interface               : 'Generer grensesnitt ',

/* My Wallet */
MYWAL_Nick                  : 'Lommebok-kallenavn ',
MYWAL_Address               : 'Lommebok-adresse ',
MYWAL_Bal                   : 'Saldo ',
MYWAL_Edit                  : 'Rediger ',
MYWAL_View                  : 'Se på ',
MYWAL_Remove                : 'Fjern ',
MYWAL_RemoveWal             : 'Fjern lommebok: ',
MYWAL_WatchOnly             : 'Dine "bare-se"-kontoer ',
MYWAL_Viewing               : 'Viser lommebok ',
MYWAL_Hide                  : 'Skjul lommebok-info ',
MYWAL_Edit_2                : 'Rediger lommebok ',
MYWAL_Name                  : 'Lommeboknavn ',
MYWAL_Content_1             : 'Advarsel! Du er i ferd med å fjerne lommeboken din ',
MYWAL_Content_2             : 'Vær sikker på at du har **lagret den private nøkkelen/JSON-filen og passordet** tilknyttet denne lommeboken før du fjerner den. ',
MYWAL_Content_3             : 'Hvis du ønsker å bruke denne lommeboken med din MyEtherWallet Chrome-utvidelse i fremtiden, må du manuelt legge den til igjen ved å bruke den private nøkkelen/JSON og passord. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Dette gir deg muligheten til å laste ned ulike versjoner av private nøkler og skrive ut papirlommeboken din på nytt. Du vil kanskje gjøre dette for å [importere kontoen din til Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Hvis du bare ønsker å sjekke saldoen din, anbefaler vi at du bruker en "blockchain explorer" som f.eks. [etherscan.io](http://etherscan.io/). ',
VIEWWALLET_Subtitle_Short   : 'Dette gir deg muligheten til å laste ned ulike versjoner av private nøkler og skrive ut papirlommeboken din på nytt. ',
VIEWWALLET_SuccessMsg       : 'Suksess! Her er detaljene om din lommebok. ',

/* Chrome Extension */
CX_error_1                  : 'Du har ennå ikke lagret noen lommebok. Klikk ["Legg til lommebok"](/cx-wallet.html#add-wallet) for å legge til en! ',
CX_quicksend                : 'Send ', // if no appropriate translation, just use "Send"

/* Error Messages */
ERROR_0                     : 'Vennligst oppgi et gyldig beløp. ',
ERROR_1                     : 'Passordet ditt må inneholde minst 9 tegn. Vennligst sørg for at det er et sterkt passord. ',
ERROR_2                     : 'Beklager! Vi kjenner ikke igjen denne typen lommebok-fil. ',
ERROR_3                     : 'Dette er ikke en gyldig lommebok-fil. ',
ERROR_4                     : 'Denne enheten eksisterer ikke, vennligst benytt en av de følgende enhetene ',
ERROR_5                     : 'Ugyldig adresse. ',
ERROR_6                     : 'Ugyldig passord. ',
ERROR_7                     : 'Ugyldig beløp. ',
ERROR_8                     : 'Ugyldig gas-grense. ',
ERROR_9                     : 'Ugyldig dataverdi. ',
ERROR_10                    : 'Ugyldig gas-mengde. ',
ERROR_11                    : 'Ugyldig nonce. ',
ERROR_12                    : 'Ugyldig signert transaksjon. ',
ERROR_13                    : 'En lommebok med dette kallenavnet eksisterer allerede. ',
ERROR_14                    : 'Lommebok ikke funnet. ',
ERROR_15                    : 'Det ser ikke ut til at et forslag med denne ID-en eksisterer ennå, eller det er en feil ved innlesning av dette forslaget. ',
ERROR_16                    : 'En lommebok med denne adressen er allerede lagret. Vennligst sjekk lommebok-siden din. ',
ERROR_17                    : 'Du trenger minst 0,01 ether på kontoen din for å dekke gas-kostnaden. Vennligst legg til litt ether og prøv igjen. ',
ERROR_18                    : 'All gas vil bli brukt på denne transaksjonen. Dette betyr at du allerede har stemt på dette forslaget, eller at debatt-perioden er over. ',
ERROR_19                    : 'Ugyldig symbol ',
ERROR_20                    : 'er ikke en gyldig ERC-20-token. Hvis andre tokens holder på å lastes, vennligst fjern denne token og prøv igjen. ',
ERROR_21                    : 'Kunne ikke estimere gas. Det er enten ikke nok midler på kontoen, eller så gir den mottakende kontraktadressen en feilmelding. Prøv å justere gas-mengden manuelt, og fortsett. Feilmeldingen du får når du sender kan være mer informativ. ',
ERROR_22                    : 'Vennligst oppgi gyldig nodenavn ',
ERROR_23                    : 'Oppgi gyldig URL (internett-adresse), hvis du er på https må URL-en starte med https ',
ERROR_24                    : 'Vennligst oppgi gyldig port ',
ERROR_25                    : 'Vennligst oppgi gyldig kjede-ID ',
ERROR_26                    : 'Vennligst oppgi gyldig ABI ',
ERROR_27                    : 'Minimumsbeløp 0.01 ',
ERROR_28                    : '**Du trenger din Keystore-fil & passord eller din private nøkkel** for å få tilgang til denne lommeboken i framtiden. Vennligst lagre og sikkerhetskopier den eksternt! Det finnes ingen måte å gjenopprette en lommebok på hvis du ikke lagrer den. Les [hjelpesiden](https://www.myetherwallet.com/#help) for ytterligere instruksjoner (foreløpig kun på engelsk). ',
ERROR_29                    : 'Vennligst oppgi gyldig brukernavn og passord ',
SUCCESS_1                   : 'Gyldig adresse ',
SUCCESS_2                   : 'Dekrypteringen av lommeboken var vellykket ',
SUCCESS_3                   : 'Transaksjonen ble sendt inn. TX ID ',
SUCCESS_4                   : 'Lommeboken din ble lagt til ',
SUCCESS_5                   : 'Valgt fil ',

WARN_Send_Link              : 'Du ankom via en lenke hvor adresse, verdi, gas, datafelt og/eller transaksjonstype (sendingsmodus) var ferdigutfylt. Du kan endre denne informasjonen før du sender. Lås opp lommeboken din for å komme i gang. ',

/* Geth Error Messages */
GETH_InvalidSender          : 'Feil på avsender ',
GETH_Nonce                  : 'Nonce for liten ',
GETH_Cheap                  : 'Gas-pris for lav til å kunne aksepteres ',
GETH_Balance                : 'Utilstrekkelig saldo ',
GETH_NonExistentAccount     : 'Kontoen eksisterer ikke eller saldoen er for lav ',
GETH_InsufficientFunds      : 'Utilstrekkelig med midler for gas * pris + verdi ',
GETH_IntrinsicGas           : 'Gas-egenverdi for lav ',
GETH_GasLimit               : 'Overskrider blokkens gas-grense ',
GETH_NegativeValue          : 'Negativ verdi ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "En transaksjon med samme hash har allerede blitt importert.",
PARITY_Old                  : "Transaksjonens nonce er for lav. Prøv å øke nonce gradvis (+1).",
PARITY_TooCheapToReplace    : "Transaksjonsavgiften er for lav. Det er en annen transaksjon med samme nonce i køen. Prøv å øke avgiften eller øke nonce (+1).",
PARITY_LimitReached         : "Det er for mange transaksjoner i køen. Transaksjonen din ble derfor droppet. Prøv å øke avgiften.",
PARITY_InsufficientGasPrice : "Transaksjonsavgiften er for lav. Den tilfredsstiller ikke minimumsavgiften til noden din. (minimum: {}, fått: {}). Prøv å øke avgiften.",
PARITY_InsufficientBalance  : "Utilstrekkelige midler. Kontoen du prøver å sende transaksjon fra har ikke nok midler. Påkrevd {} og fått: {}.",
PARITY_GasLimitExceeded     : "Transaksjonskostnaden overskrider nåværende gas-grense. Grense: {}, fått: {}. Prøv å redusere tilført gas.",
PARITY_InvalidGasLimit      : "Tilført mengde gas er over grensen.",

/* Tranlsation Info */
translate_version           : '0.4 ',
Translator_Desc             : 'Takk til oversetterne våre ',
TranslatorName_1            : '[mrstormlars](https://www.myetherwallet.com/?gaslimit=21000&to=0x6Dd9530b2Cb8B2d7d9f7D5D898b6456EC5D94f08&value=1.0#send-transaction) ',
TranslatorAddr_1            : '0x6Dd9530b2Cb8B2d7d9f7D5D898b6456EC5D94f08 ',
/* Translator 1             : Insert Comments Here */
TranslatorName_2            : '',
TranslatorAddr_2            : '',
/* Translator 2             : Insert Comments Here */
TranslatorName_3            : '',
TranslatorAddr_3            : '',
/* Translator 3             : Insert Comments Here */
TranslatorName_4            : '',
TranslatorAddr_4            : '',
/* Translator 4             : Insert Comments Here */
TranslatorName_5            : '',
TranslatorAddr_5            : '',
/* Translator 5             : Insert Comments Here */

/* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
HELP_Warning                : 'Hvis du opprettet en lommebok -eller- lastet ned repoet før **31. desember 2015**, vennligst sjekk lommebøkene dine &amp; last ned en ny versjon av repoet. Klikk for detaljer. ',
HELP_Desc                   : 'Ser du noe som mangler? Har du flere spørsmål? [Ta kontakt med oss](mailto:support@myetherwallet.com), så vil vi ikke bare besvare spørsmålet ditt, men vi vil også oppdatere denne siden så den blir mer nyttig i framtiden! ',
HELP_Remind_Title           : 'Noen påminnelser ',
HELP_Remind_Desc_1          : '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, og noen av de underliggende Javascript-bibliotekene vi benytter er under aktiv utvikling.** Selv om vi har testet grundig, og titusenvis av lommebøker har blitt opprettet uten feil av folk over hele kloden, så er det alltid en liten mulighet for at noe uventet kan skje som kan medføre at dine ETH kan tapes. Vennligst ikke invester mer enn du er villig til å tape, and vær så snill å være forsiktig. Hvis noe skulle skje, er vi lei oss for det, men **vi er ikke ansvarlige for eventuelt tapte etere**. ',
HELP_Remind_Desc_2          : 'MyEtherWallet.com & MyEtherWallet CX er ikke "web wallets" (internettlommebøker). Du oppretter ikke en konto eller gir oss dine ethere for oppbevaring hos oss. Alle data forblir på din PC / i din nettleser. Vi gjør det enkelt for deg å opprette, lagre og få tilgang til din informasjon og samhogle med blokkjeden. ',
HELP_Remind_Desc_3          : 'Hvis du ikke lagrer din private nøkkel & passord, finnes det ingen måte å gjenopprette din lommebok på, eller midlene den inneholder. Sikkerhetskopier dem på flere fysiske lokasjoner &ndash; ikke bare på datamaskinen din! ',

HELP_0_Title                : '0) Jeg er nybegynner. Hva skal jeg gjøre? ',
HELP_0_Desc_1               : 'MyEtherWallet gir deg muligheten til å opprette nye lommebøker slik at du kan lagre etherne dine selv, i stedet for på en børs (hvor du kan kjøpe ether). Denne prosessen skjer helt og holdent på din datamaskin, ikke på våre servere. Derfor, når du oppretter en ny lommebok, **er du ansvarlig for å sikkerhetskopiere den på en forsvarlig måte**. ',
HELP_0_Desc_2               : 'Opprett en ny lommebok. ',
HELP_0_Desc_3               : 'Sikkerhetskopier lommebok. ',
HELP_0_Desc_4               : 'Verifiser at du har tilgang til denne nye lommeboken (f.eks. ved å overføre et ørlite beløp til og fra den nye lommeboken), og at all nødvendig informasjon er lagret og korrekt. ',
HELP_0_Desc_5               : 'Overfør ether til den nye lommeboken. ',

HELP_1_Title                : '1) Hvordan oppretter jeg en ny lommebok? ',
HELP_1_Desc_1               : 'Gå til "Send Ether & Tokens"-siden. ',
HELP_1_Desc_2               : 'Gå til "Legg til lommebok"-siden & velg "Opprett ny lommebok" ',
HELP_1_Desc_3               : 'Oppgi et sterkt passord. Hvis du ikke tror du klarer å huske det, skriv det opp på et sikkert sted. Du kommer til å trenge dette passordet for å sende transaksjoner. ',
HELP_1_Desc_4               : 'Klikk "OPPRETT". ',
HELP_1_Desc_5               : 'Din lommebok har nå blitt opprettet. ',

HELP_2a_Title               : '2a) Hvordan lagrer/sikkerhetskopierer jeg lommeboken min? ',
HELP_2a_Desc_1              : 'Du bør alltid sikkerhetskopiere lommeboken din eksternt og på flere fysiske lokasjoner - som f.eks. på en USB-disk og/eller på et papirark. ',
HELP_2a_Desc_2              : 'Lagre adressen. Du kan holde den for deg selv eller dele den med andre. På den måten kan andre overføre ether til deg. ',
HELP_2a_Desc_3              : 'Lagre versjoner av den private nøkkelen. Ikke del den med noen andre. Din private nøkkel er nødvendig hvis du vil ha tilgang til (og sende) etheren din! Det er 3 typer private nøkler: ',
HELP_2a_Desc_4              : 'Plasser adressen din, versjoner av den private nøkkelen, og PDF-versjonen av papirlommeboken i en folder. Lagre denne på datamaskinen din og en USB-disk. ',
HELP_2a_Desc_5              : 'Skriv ut lommeboken hvis du har en skriver. Hvis ikke, skriv ned adressen og den private nøkkelen din på et papirark. Lagre dette på et sikkert sted, separat fra datamaskinen og USB-disken. ',
HELP_2a_Desc_6              : 'Husk at du må unngå tap av nøklene og passordet pga. tap av, eller feil på, harddisk, USB-disk eller paperlommebok. Du må også ta i betraktning at det kan oppstå fysisk tap/skade på et helt område (tenk på brann eller flom). ',

HELP_2b_Title               : '2b) Hvordan kan jeg lagre ether sikkert / offline / "kaldt" med MyEtherWallet? ',
HELP_2b_Desc_1              : 'Gå til vår github: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ',
HELP_2b_Desc_2              : 'Klikk `dist-vX.X.X.X.zip`. ',
HELP_2b_Desc_3              : 'Flytt zip-fila til en frakoblet datamaskin. ',
HELP_2b_Desc_4              : 'Pakk ut zip-fila (unzip) og dobbeltklikk `index.html`. ',
HELP_2b_Desc_5              : 'Opprett en lommebok med et sterkt passord. ',
HELP_2b_Desc_6              : 'Lagre adressen. Lagre versjoner av den private nøkkelen. Lagre passordet hvis du ikke tror du klarer å huske det for alltid. ',
HELP_2b_Desc_7              : 'Lagre disse papirene / USB-ene på flere fysisk separate steder. ',
HELP_2b_Desc_8              : 'Gå til "Vis lommebok-info"-siden og oppgi (lim inn) din private nøkkel / passord for å sikre at de er korrekte og gir deg tilgang til lommeboken din. Sjekk at adressen du skrev ned er den samme. ',

HELP_3_Title                : '3) Hvordan verifiserer jeg at jeg har tilgang til den nye lommeboken min? ',
HELP_3_Desc_1               : '**Før du sender ether til din nye lommebok**, bør du forsikre deg om at du har tilgang til den. ',
HELP_3_Desc_2               : 'Naviger til "Vis lommebok-info"-siden. ',
HELP_3_Desc_3               : 'Naviger til MyEtherWallet.com sin "Vis lommebok-info"-side. ',
HELP_3_Desc_4               : 'Velg lommebok-filen din, eller din private nøkkel, og lås opp lommeboken din. ',
HELP_3_Desc_5               : 'Hvis lommeboken er kryptert, vil det automatisk dukke opp en tekstboks. Oppgi passordet. ',
HELP_3_Desc_6               : 'Klikk "Lås opp lommebok"-knappen. ',
HELP_3_Desc_7               : 'Informasjon om lommeboken din skal nå dukke opp. Finn konto-adressen din ved siden av et fargerikt, sirkulært ikon. Dette ikonet er en unik, visuell representasjon av din adresse. Vær sikker på at adressen er den samme adressen som du har lagret i tekstdokumentet og papirlommeboken. ',
HELP_3_Desc_8               : 'Hvis du planlegger å lagre et stort ether-beløp, anbefaler vi at du sender et lite beløp til- og fra den nye lommeboken før du deponerer et stort beløp. Send 0,001 ether til din nye lommebok, åpne lommeboken, send de 0,001 eterne (-minus gas-kostnad) til en annen adresse, og forikre deg om at alt fungerer som det skal. ',

HELP_4_Title                : '4) Hvordan sender jeg ether fra en lommebok til en annen? ',
HELP_4_Desc_1               : 'Hvis du planlegger å flytte et stort ether-beløp, bør du testsende et lite beløp først for å forsikre deg om at alt går som planlagt. ',
HELP_4_Desc_2               : 'Naviger til "Send Ether & Tokens"-siden. ',
HELP_4_Desc_3               : 'Velg lommebok-filen din, eller din private nøkkel, og lås opp lommeboken din. ',
HELP_4_Desc_4               : 'Hvis lommeboken er kryptert, vil det automatisk dukke opp en tekstboks hvor du må oppgi passordet ditt. ',
HELP_4_Desc_5               : 'Klikk på "Lås opp lommebok"-knappen. ',
HELP_4_Desc_6               : 'Oppgi adressen som du ønsker å sende til i "Til adresse:"-feltet. ',
HELP_4_Desc_7               : 'Oppgi beløpet som du ønsker å sende. Du kan også klikke på "Send hele saldoen"-lenken hvis du ønsker å overføre hele saldoen. ',
HELP_4_Desc_9               : 'Klikk "Generer transaksjon". ',
HELP_4_Desc_10              : 'En del felter vil dukke opp. Dette er nettleseren din som genererer transaksjonen. ',
HELP_4_Desc_11              : 'Klikk den blå "Send transaksjon"-knappen nedenfor dette. ',
HELP_4_Desc_12              : 'En pop-up vil dukke opp. Verifiser at beløp og adresse du sender til er korrekt. Klikk så "Ja, jeg er sikker! Gjennomfør transaksjonen."-knappen. ',
HELP_4_Desc_13              : 'Transaksjonen vil bli sendt inn. Transaksjons-ID-en (TX-ID) vil vises. Du kan klikke på TX ID for å se den på blokkjeden. ',

HELP_4CX_Title              : '4) Hvordan sender jeg ether med MyEtherWallet CX (Chrome-utvidelsen)? ',
HELP_4CX_Desc_1             : 'Først må du legge til en lommebok. Når du har gjort det, har du 2 muligheter: den kjappe "Send"-funksjonaliteten fra Chrome-utvidelsesikonet eller "Send Ether & Tokens"-siden. ',
HELP_4CX_Desc_2             : 'Send: ',
HELP_4CX_Desc_3             : 'Klikk Chrome-utvidelsesikonet. ',
HELP_4CX_Desc_4             : 'Klikk "Send"-knappen. ',
HELP_4CX_Desc_5             : 'Velg lommeboken du ønsker å sende fra. ',
HELP_4CX_Desc_6             : 'Oppgi adressen du ønsker å sende til i "Til adresse:"-feltet. ',
HELP_4CX_Desc_7             : 'Oppgi beløpet du vil sende. Du kan også klikke på "Send hele saldoen"-lenken hvis du vil overføre hele saldoen. ',
HELP_4CX_Desc_8             : 'Klikk "Send transaksjon". ',
HELP_4CX_Desc_9             : 'Verifiser at adressen og beløpet er korrekt. ',
HELP_4CX_Desc_10            : 'Oppgi passordet for lommeboken. ',
HELP_4CX_Desc_11            : 'Klikk "Send transaksjon." ',
HELP_4CX_Desc_12            : 'Bruk "Send Ether & Tokens"-siden ',

HELP_5_Title                : '5) Hvordan kan jeg bruke MyEtherWallet.com offline/lokalt? ',
HELP_5_Desc_1               : 'Du kan bruke MyEtherWallet.com på datamaskinen din i stedet for fra GitHub-serverne. Du kan opprette en lommebok fullstendig frakoblet fra internett, og sende transaksjoner fra "Send offline"-siden. ',
HELP_5_Desc_7               : 'MyEtherWallet.com kjører nå utelukkende på din datamaskin. ',
HELP_5_Desc_8               : 'I tilfelle du ikke er så vant med dette: du må beholde hele mappen for å kunne kjøre nettsiden, ikke bare `index.html`. Ikke rør eller flytt rundt på noe i mappen. Hvis du lagrer en backup av MyEtherWallet-repoet for framtiden, anbefaler vi å kun lagre zip-fila så du kan være sikker på at innholdet i mappen forblir intakt. ',
HELP_5_Desc_9               : 'Siden vi oppdaterer MyEtherWallet.com hele tiden, anbefaler vi at du oppdaterer din lagrede versjon av repoet jevnlig. ',

HELP_5CX_Title              : '5) Hvordan kan jeg installere denne utvidelsen fra repoet i stedet for fra Chrome-butikken? ',
HELP_5CX_Desc_2             : 'Klikk `chrome-extension-vX.X.X.X.zip`. ',
HELP_5CX_Desc_3             : 'Gå til Google Chrome og finn innstillingene i menyen øverst til høyre under "Flere verktøy". ',
HELP_5CX_Desc_4             : 'Clikk "Utvidelser" til venstre. ',
HELP_5CX_Desc_5             : 'Huk av "Utviklermodus"-knappen på toppen av siden. ',
HELP_5CX_Desc_6             : 'Klikk "Last inn upakket utvidelser"-knappen. ',
HELP_5CX_Desc_7             : 'Naviger til den nå utpakkede mappen som du lastet ned tidligere. Clikk "OK". ',
HELP_5CX_Desc_8             : 'Utvidelsen skal nå dukke opp blant utvidelsene dine og i utvidelses-knappelinjen øverst til høyre i nettleseren. ',

HELP_7_Title                : '7) Hvordan sender jeg token & legger til flere typer token? ',
HELP_7_Desc_0               : '[Ethplorer.io](https://ethplorer.io/) er en flott måte å utforske token på, og for å finne informasjon om antall desimaler for en token. ',
HELP_7_Desc_1               : 'Naviger til "Send Ether & Tokens"-siden. ',
HELP_7_Desc_2               : 'Lås opp lommeboken din. ',
HELP_7_Desc_3               : 'Oppgi adressen som du vil sende til i "Til adresse:"-feltet. ',
HELP_7_Desc_4               : 'Oppgi beløpet som du vil sende. ',
HELP_7_Desc_5               : 'Velg hvilken type token du vil sende . ',
HELP_7_Desc_6               : 'Hvis du ikke ser token-typen på listen: ',
HELP_7_Desc_7               : 'Klikk "Tilpasning". ',
HELP_7_Desc_8               : 'Oppgi adressen, navnet, og antall desimaler for token-et. Disse er oppgitt fra utviklerne av token-et og er også nødvendige når du skal "Add a Watch Token" i Mist. ', //Mist not translated to Norw yet :-)//
HELP_7_Desc_9               : 'Klikk "Lagre". ',
HELP_7_Desc_10              : 'Du kan nå sende denne typen token, samt se saldoen for aktuell token i sidefeltet. ',
HELP_7_Desc_11              : 'Klikk "Generer transaksjon". ',
HELP_7_Desc_12              : 'Noen flere felter vil dukke opp. Dette er nettleseren din som genererer transaksjonen. ',
HELP_7_Desc_13              : 'Klikk den blå "Send transaksjon"-knappen nedenfor dette. ',
HELP_7_Desc_14              : 'En pop-up vil dukke opp. Verifiser at beløp og adresse du sender til er korrekt. Klikk så "Ja, jeg er sikker! Gjennomfør transaksjonen."-knappen. ',
HELP_7_Desc_15              : 'Transaksjonen vil bli sendt inn. Transaksjons-ID-en (TX-ID) vil vises. Du kan klikke på TX ID for å se den på blokkjeden. ',

HELP_8_Title                : '8) Hva skjer hvis nettsiden går ned? ',
HELP_8_Desc_1               : 'MyEtherWallet er ikke en nett-lommebok (web wallet). Du har ingen innlogging og ingenting blir noensinne lagret på våre servere. Det er ganske enkelt et grensesnitt som tillater deg å samhandle med blokkjeden. ',
HELP_8_Desc_2               : 'Hvis MyEtherWallet.com går ned, må du finne en annen måte (som f.eks. geth eller Ethereum Wallet / Mist) å gjøre det på. Men du vil ikke trenge å "hente" eteren din ut av MyEtherWallet, fordi den ikke befinner seg i MyEtherWallet. Den befinner seg i den lommeboka/kontoen som du opprettet ved hjelp av nettsiden vår. ',
HELP_8_Desc_3               : 'Du kan nå svært enkelt importere din ukrypterte private nøkkel og dine Geth/Mist-format (krypterte) filer direkte inn i geth / Ethereum Wallet / Mist. Se spørsmål #12 nedenfor. ',
HELP_8_Desc_4               : 'I tillegg er sannsynligheten for at vi tar ned MyEtherWallet svært liten. Det koster oss nesten ingenting å opprettholde den siden vi ikke lagrer noen informasjon. Hvis vi tar ned domenet, er det fortsatt, og vil alltid være, offentlig tilgjengelig på [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Du kan laste ned zip-fila der og kjøre den lokalt. ',

HELP_8CX_Title              : '8) Hva skjer hvis MyEtherWallet CX (Chrome-utvidelsen) forsvinner? ',
HELP_8CX_Desc_1             : 'For det første er alle data lagret på din datamaskin, ikke på våre servere. Jeg vet det kan være forvirrende, men når du ser på Chrome-utvidelsen, så ser du IKKE på ting som er lagret på våre servere et eller annet sted - det er alt sammen lagret på din egen datamaskin. ',
HELP_8CX_Desc_2             : 'Når det er sagt, så er det **svært viktig** at du sikkerhetskopierer all din informasjon for alle lommebøkene som du har opprettet med MyEtherWallet CX. På den måten vil du fortsatt ha all nødvendig informasjon for å få tilgang til eteren din selv om noe skulle hende med MyEtherWallet CX eller datamaskinen din. Se spørsmål #2a ang. hvordan du sikkerhetskopierer lommebøkene dine. ',
HELP_8CX_Desc_3             : 'Hvis MyEtherWallet CX av en eller annen grunn skulle forsvinne fra Chrome Store, så kan du finne kildekoden på Github og laste den inn manuelt. Se #5 ovenfor. ',

HELP_9_Title                : '9) Er "Send Ether & Tokens"-siden offline? ',
HELP_9_Desc_1               : 'Nei. Den trenger internett for å kunne skaffe den aktuelle gas-prisen, "nonce" for kontoen din, og for å kunne kringkaste transaksjonen (aka "send"). Imidlertid sender den kun den signerte transaksjonen. Din private nøkkel forblir i sikkerhet hos deg. Vi tilbyr nå også en "Offline transaction"-side slik at du kan forsikre deg om at dine private nøkler til enhver tid kun befinner seg på en offline/frakoblet datamaskin. ',

HELP_10_Title               : '10) Hvordan lager jeg en frakoblet/offline transaksjon? ',
HELP_10_Desc_1              : 'Naviger til "Send Offline"-siden via din internettilknyttede datamaskin. ',
HELP_10_Desc_2              : 'Oppgi "Fra-adressen". Vennligst merk at dette er adressen du sender FRA, ikke TIL. Dette genererer "nonce" og "gas-pris". ',
HELP_10_Desc_3              : 'Gå til den internettfrakoblede datamaskinen. Oppgi "TIL-ADRESSEN" og "BELØPET" du vil sende. ',
HELP_10_Desc_4              : 'Oppgi "GAS-PRISEN" slik den ble vist deg på den tilkoblede datamaskinen i steg #1. ',
HELP_10_Desc_5              : 'Oppgi "NONCE" slik den ble vist deg på den tilkoblede datamaskinen i steg #1. ',
HELP_10_Desc_6              : '"GAS-GRENSE" har en standardverdi på 21000. Dette vil dekke en standardtransaksjon. Hvis du sender til en kontrakt eller inkluderer ekstra data i transaksjonen din, må du øke gas-grensen. Eventuelt overskytende gas blir returnert til deg (fra-kontoen). ',
HELP_10_Desc_7              : 'Oppgi noe data hvis du vil. Hvis du oppgir data, må du inkludere mer enn det som er standard gas-grense (21000). Alle data er i HEX-format. ',
HELP_10_Desc_8              : 'Velg lommebokfilen din, eller din private nøkkel, og lås opp lommeboken din. ',
HELP_10_Desc_9              : 'Trykk på "GENERER SIGNERT TRANSAKSJON"-knappen. ',
HELP_10_Desc_10             : 'Datafeltet under denne knappen vil fylles med din signerte transaksjon. Kopier denne og flytt den tilbake til din tilkoblede datamaskin. ',
HELP_10_Desc_11             : 'Lim inn den signerte transaksjonen i tekstfeltet i steg #3 på den tilkoblede maskinen og klikk "Send Ether & Tokens". Dette vil kringkaste transaksjonen din. ',

HELP_12_Title               : '12) Hvordan kan jeg importere en lommebok opprettet med MyEtherWallet til geth / Ethereum Wallet / Mist? ',
HELP_12_Desc_1              : 'Ved å bruke en Geth/Mist JSON-fil fra MyEtherWallet v2+.... ',
HELP_12_Desc_2              : 'Gå til "Vis lommebok-info"-siden. ',
HELP_12_Desc_3              : 'Lås opp lommeboken din ved hjelp av din **krypterte** private nøkkel eller JSON-fil. ',
HELP_12_Desc_4              : 'Gå til "Mine lommebøker"-siden. ',
HELP_12_Desc_5              : 'Velg lommeboken som du ønsker å importere til Mist, klikk "Vis"-ikonet, oppgi passordet, og få tilgang til lommeboken. ',
HELP_12_Desc_6              : 'Finn "Last ned JSON-fil - Geth/Mist-format (kryptert)"-seksjonen. Trykk "Last ned"-knappen nedenfor. Du har nå fått keystore-filen til lommeboken din. ',
HELP_12_Desc_7              : 'Åpne "Ethereum Wallet"-programmet. ',
HELP_12_Desc_8              : 'I menyfeltet, gå til "Accounts" -> "Backup" -> "Accounts" ',
HELP_12_Desc_9              : 'Dette vil åpne keystore-mappen på harddisken din. Kopier filen du nettopp lastet ned (`UTC--2016-04-14......../`) inn i denne keystore-mappen. ',
HELP_12_Desc_10             : 'Kontoen din skal nå umiddelbart dukke opp under "Accounts." ',
HELP_12_Desc_11             : 'Ved å bruke din ukrypterte private nøkkel... ',
HELP_12_Desc_12             : 'Hvis du ikke allerede har den ukrypterte private nøkkelen din, naviger til "Vis lommebok-info"-siden. ',
HELP_12_Desc_13             : 'Velg lommebok-filen din, eller oppgi/lim inn din private nøkkel, for å låse opp lommeboken. ',
HELP_12_Desc_14             : 'Kopier den (ukrypterte) private nøkkelen. ',
HELP_12_Desc_15             : 'Hvis du er på en Mac: ',
HELP_12_Desc_15b            : 'Hvis du er på en PC: ',
HELP_12_Desc_16             : 'Åpne Text Edit og lim inn denne private nøkkelen. ',
HELP_12_Desc_17             : 'Gå til menylinjen og klikk "Format" -> "Make Plain Text". ',
HELP_12_Desc_18             : 'Lagre denne fila på skrivebordet ditt som `ikke_noe_spesielt_slett_meg.txt`. Pass på at det står "UTF-8" og "If no extension is provided use .txt" i lagringsdialogen. ',
HELP_12_Desc_19             : 'Åpne terminalen og kjør følgende kommando: `geth account import ~/Desktop/nothing_special_delete_me.txt` ',
HELP_12_Desc_20             : 'Du vil bli bedt om å lage et nytt passord. Dette er passordet du vil bruke i geth / Ethereum Wallet / Mist hver gang du skal sende en transaksjon, så ikke glem det. ',
HELP_12_Desc_21             : 'Etter at du har lykkes med å importere kontoen, slett `ikke_noe_spesielt_slett_meg.txt` ',
HELP_12_Desc_22             : 'Neste gangen du åpner "Ethereum Wallet"-programmet, vil kontoen din være listet under "Accounts". ',
HELP_12_Desc_23             : 'Åpne Notisblokk/Notepad & lim inn den private nøkkelen ',
HELP_12_Desc_24             : 'Lagre fila som `ikke_noe_spesielt_slett_meg.txt` på `C:` ',
HELP_12_Desc_25             : 'Kjør ledetekst (Windowstast + "cmd")-kommandoen, `geth account import C:\\ikke_noe_spesielt_slett_meg.txt` ',
HELP_12_Desc_26             : 'Du vil bli bedt om å lage et nytt passord. Dette er passordet du vil bruke i geth / Ethereum Wallet / Mist hver gang du skal sende en transaksjon, så ikke glem det. ',
HELP_12_Desc_27             : 'Etter at du har lykkes med å importere kontoen, slett `ikke_noe_spesielt_slett_meg.txt` ',
HELP_12_Desc_28             : 'Neste gangen du åpner "Ethereum Wallet"-programmet, vil kontoen din være listet under "Accounts". ',

HELP_13_Title               : '13) Hva betyr "Utilstrekkelige midler. Kontoen du prøver å sende transaksjon fra har ikke nok midler. Påkrevd XXXXXXXXXXXXXXXXXXX og fått: XXXXXXXXXXXXXXXX." ? ',
HELP_13_Desc_1              : 'Dette betyr at du ikke har nok Ether på kontoen din til å dekke gas-kostnaden. Hver transaksjon (inkludert token- og kontrakt-transaksjoner) krever gas, og gas betales med Ether. Tallet som vises er beløpet som kreves for å dekke transaksjonskostnaden i Wei (1 ETH = 10^18 Wei). Ta dette tallet, del det på `1000000000000000000`, og trekk fra Ether-beløpet som du prøvde å sende (hvis du prøvde å sende Ether). Dette vil gi deg Ether-beløpet som du mangler på (trenger å sende til) denne kontoen for å gjennomføre transaksjonen. ',

HELP_14_Title               : '14) Noen nettsider randomiserer genereringen av den private nøkkelen via musebevegelser. MyEtherWallet.com gjør ikke dette. Er metoden som MyEtherWallet bruker til å generere tilfeldige tall sikker? ',
HELP_14_Desc_1              : 'Selv om musebevegelses-metoden er smart og vi skjønner hvorfor folk liker den, så er realiteten at window.crypto sikrer mer entropi (tilfeldighet) enn musebevegelser. Musebevegelses-metoden er ikke usikker, men det er bare det at vi (og mange andre kryptoeksperter) har tro på window.crypto. I tillegg kan MyEtherWallet.com også benyttes på fingerstyrte enheter. Her er en [konversasjon mellom en sint redditor og Vitalik Buterin angående musebevegelser versus window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) og her er [window.crypto w3 spesifikasjonen](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ',

HELP_15_Title               : '15) Hvorfor har ikke kontoen jeg nettopp opprettet dukket opp i blokkjede-utforskeren? (ie: etherchain, etherscan) ',
HELP_15_Desc_1              : 'Kontoer vil kun dukke opp i en blokkjede-utforsker når kontoen har hatt aktivitet&mdash;for eksempel, når du har overført Ether til den. ',

HELP_16_Title               : '16) Hvordan kan jeg sjekke saldoen på kontoen min? ',
HELP_16_Desc_1              : 'Du kan bruke en blokkjede-utforsker som [etherscan.io](http://etherscan.io/). Lim inn adressen i søkefeltet og den vil finne fram adressen og transaksjonshistorikken. For eksempel, her ser du hvordan vår [donasjonskonto](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) ser ut på etherscan.io ',

HELP_17_Title               : '17) Hvorfor vises ikke saldoen min når jeg låser opp lommeboken min? ',
HELP_17_Desc_1              : 'Dette er mest sannsynlig fordi du er bak en brannmur. API-en vi bruker for å innhente saldoen blokkeres ofte av brannmurer av ymse årsaker. Du vil fortsatt være i stand til å sende transaksjoner, du må bare bruke en annen metode for å se nevnte saldo, som etherscan.io ',

HELP_18_Title               : '18) Hvor er min geth lommebok-fil ',

HELP_19_Title               : '19) Hvor er min Mist lommebok-fil? ',
HELP_19_Desc_1              : 'Mist-filer lagres typisk i lokasjonene ovenfor, men det er mye enklere å åpne Mist, velge "Accounts" i topp-menylinjen, velge "Backup", og velge "Accounts". Dette vil åpne mappen hvor filene dine er lagret. ',

HELP_20_Title               : '20) Hvor er pre-sale lommebok-filen? ',
HELP_20_Desc_1              : 'Der du lagret den. ;) Den ble også sendt deg på e-post, så sjekk der. Se etter fila som heter `"ethereum_wallet_backup.json"` og velg den fila. Denne fila vil være kryptert med et passord som du opprettet under "pre-sale"-kjøpet. ',

HELP_21_Title               : '21) Kan ikke hvem som helst legge inn tilfeldige private nøkler, sjekke saldoen, og sende Ether til sin egen adresse? ',
HELP_21_Desc_1              : 'Kortversjonen: ja, men å finne en konto som inneholder Ether ville tatt lengre tid enn universets levealder...så...nei. ',
HELP_21_Desc_2              : 'Lang ELI5-versjon: Ethereum er basert på [Offentlig nøkkel-kryptografi](https://en.wikipedia.org/wiki/Public-key_cryptography), og mer spesifikt [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf), som er svært utbredt, ikke bare i Ethereum. De fleste servere er beskyttet via ECC. Bitcoin bruker den samme, likeså SSH og TLS og mange flere. Ethereum-nøklene er 256-bit nøkler, som er sterkere enn 128-bit og 192-bit, som også er mye brukt og fortsatt betraktes som sikre av ekspertene. ',
HELP_21_Desc_3              : 'I denne har du en privat nøkkel og en offentlig nøkkel. Den private nøkkelen kan utlede den offentlige nøkkelen, men den offentlige nøkkelen kan ikke brukes for å finne den private nøkkelen. Det faktum at internett og verdens hemmeligheter bruker denne kryptografien betyr at hvis det blir funnet en måte å gå fra offentlige til private nøkler på, så vil dine tapte Ether være det minste av alles problemer. ',
HELP_21_Desc_4              : 'Når det er sagt, JA, hvis noen andre har din private nøkkel, så kan de såvisst sende ether fra din konto. Akkurat som hvis noen har passordet til e-posten din, så kan de lese og sende din e-post, eller passordet til bankkontoen din, så kan de overføre penger. Du kunne laste ned keystore-versjonen av den private nøkkelen din, som er den private nøkkelen som er kryptert med et passord. Dette blir som å ha et passord som er beskyttet av et annet passord. ',
HELP_21_Desc_5              : 'og JA, i teorien kunne du bare taste inn en streng med 64 hexadesimaltegn helt dil du fant en som passet. Faktisk kunne smarte folk skrive et program som svært hurtig kunne sjekke tilfeldige private nøkler. Dette kalles "brute-forcing" eller "mining" private nøkler. Folk har tenkt lenge og hardt på dette. Med noen få svært gode servere, kunne de kanskje klare å sjekke >1M nøkler/sekund. Likevel, selv når så mange sjekkes per sekund, ville det ikke gi tilgang midler som ville gjøre det i nærheten av å være lønnsomt å kjøre disse serverne.  - Det er mer sannsynlig at du, eller dine oldebarn, vil dø før du får en match. ',
HELP_21_Desc_6              : 'Hvis du vet noe om Bitcoin, [dette vil sette det i perspektiv:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *For å illustrere hvor usannsynlig det er: anta at alle satoshi av alle bitcoin som noensinne blir generert ble sendt til hver sin egen unike private nøkkel. Sannsynligheten for at det blant disse nøklene kunne være to som ville korrespondere med samme adresse er ca 1 til 10^20. ',
HELP_21_Desc_7              : '[Hvis du ønsker en mer teknisk forklaring:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *Disse tallene har ikke noe å gjøre med teknologien til enhetene; de er det maksimale som termodynamikken vil tillate. Og de impliserer sterkt at "brute-force"-angrep mot 256-bit nøkler vil være uoppnåelig fram til datamaskiner lages av noe annet enn materie og befinner seg i noe annet enn rom. ',
HELP_21_Desc_8              : 'Selvsagt betinger alt dette at nøkler blir generert på en virkelig tilfeldig måte & med tilstrekkelig entropi. Nøklene som genereres her tilfredsstiller dette kriteriet, det samme gjør Jaxx og Mist/geth. Alle Ethereum-lommebøker er OK. Nøkler som genereres av "brainwallets" er ikke like gode, siden en persons hjerne ikke er i stand til å lage en virkelig tilfeldig "seed". Det har vært noen andre tilfeller av manglende entropi eller "seeds" som ikke er generert på en virkelig tilfeldig måte i Bitcoin-land, men det er en historie som kan vente til en annen dag. ',

HELP_SecCX_Title            : 'Sikring - MyEtherWallet CX (Chrome-utvidelsen) ',
HELP_SecCX_Desc_1           : 'Hvor lagrer denne utvidelsen informasjonen min? ',
HELP_SecCX_Desc_2           : 'Informasjonen som du lager i denne Chrome-utvidelsen lagres via [chrome.storage](http://chrome.storage/). - dette er samme sted som passordene dine lagres når du lagrer passord i Chrome. ',
HELP_SecCX_Desc_3           : 'Hvilken informasjon lages? ',
HELP_SecCX_Desc_4           : 'Adresser, kallenavn og private nøkler lagres i chrome.storage. Den private nøkkelen er kryptert ved hjelp av passordet du satte da du la til lommeboken. Kallenavn og lommebok-adresser er ikke kryptert. ',
HELP_SecCX_Desc_5           : 'Hvorfor er ikke kallenavn og lommebok-adresser kryptert? ',
HELP_SecCX_Desc_6           : 'Hvis vi skulle kryptere disse, måtte du ha oppgitt et passord hver gang du ønsket å se saldo for kontoene dine eller vise kallenavnene. Hvis dette bekymrer deg, anbefaler vi deg å bruke MyEtherWallet.com i stedet for denne Chrome-utvidelsen. ',

HELP_Sec_Title              : 'Sikring ',
HELP_Sec_Desc_1             : 'Hvis en av dine første spørsmål er "Hvorfor skulle jeg stole på disse folkene?", så er det en god ting. Forhåpentligvis vil følgende bidra til å lette på frykten din. ',
HELP_Sec_Desc_2             : 'Vi har vært oppe-og-gå siden august 2015. Hvis du søker etter ["myetherwallet" på reddit](https://www.reddit.com/search?q=myetherwallet), så kan du se mange folk som bruker oss med stor suksess. ',
HELP_Sec_Desc_3             : 'Vi kommer ikke til å ta pengene dine eller stjele dine private nøkler. Det er ingen ondsinnet kode på denne siden. Faktisk er "Send Ether & Tokens"-siden fullstendig klient-drevet. Det betyr at all koden blir kjørt på ** din datamaskin ** og det blir aldri lagret eller overført noe sted. ',
HELP_Sec_Desc_4             : 'Sjekk nettsideadressen (URL) -- Denne siden blir drevet gjennom GitHub og du kan se kildekoden her: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) til domenet: [https://www.myetherwallet.com](https://www.myetherwallet.com). ',
HELP_Sec_Desc_5             : 'For å generere lommebøker, kan du laste ned [kildekoden](https://github.com/kvhnuke/etherwallet/releases/latest). Se #5 ovenfor. ',
HELP_Sec_Desc_6             : 'Kjør en test og sjekk hvilken nettverksaktivitet som skjer. Den enkleste måten som du kan gjøre dette på er å høyreklikke på siden og klikke "inspiser element". Gå til "Nettverk"-flippen. Generer en test-lommebok. Du vil se at det ikke er noen nettverksaktivitet. Du vil se at noe som ser ut som data:image/gif og data:image/png skjer. Disse er QR-kodene som blir generert...på din datamaskin...av din datamaskin. Ingen bytes ble overført. ',
HELP_Sec_Desc_8             : 'Hvis du ikke er komfortabel med å bruke dette verktøyet, så for all del, ikke bruk det. Vi laget dette verktøyet som et hjelpemiddel for folk som vil opprette lommebøker og utføre transaksjoner uten å måtte dykke ned i kommandolinjeoperasjoner eller kjøre en full node. Igjen, ta gjerne kontakt hvis du har bekymringer og vi vil gi tilbakemelding så snart som mulig. Takk! ',

HELP_FAQ_Title              : 'Flere nyttige svar på hyppige spørsmål ',
HELP_Contact_Title          : 'Måter å ta kontakt på'
};

module.exports = no;

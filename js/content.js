// Copy for the 4 dynamic sections (4 Why, 5 How, 7 FAQ, 8 CTA + form), per language and audience.
// EN is the source; PL is ready. IS goes into LUNCHEE_COPY.is with the same shape; any missing audience falls back to EN.
window.LUNCHEE_COPY = {
  en: {
    ui: {
      sending: 'Sending...',
      ok: 'Thank you – your request has been sent. We’ll reply by email with pricing and availability.',
      err: 'Something went wrong. Please try again or email us.',
      name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', message: 'Message',
      optional: '(optional)', interested: 'Interested in', quantity: 'Estimated quantity', quantityPh: 'e.g. 20',
      formH: 'Let’s find the right Lunchee solution for your business.',
      formP: 'Tell us a little about your needs – we’ll send you pricing, availability and terms of cooperation.',
      submit: 'Get your business offer',
      navShort: 'Get offer',
      finalH: 'Ready to bring Lunchee <span class="accent">to your business?</span>',
      finalP: 'Whether you manage a rental fleet, a work crew or a retail store, let’s talk about the right solution for you.',
      placeholder: 'Photo coming soon',
      faq: 'Questions you probably have.',
      change: 'change',
      tagline: 'a hot meal anywhere you drive',
      xbar: 'Christmas gift for your team? Order by 1 December – delivered before Christmas.',
      xbarLink: 'See the gift offer'
    },
    rentals: {
      title: 'Lunchee for car rentals in Iceland',
      cta: 'Get rental partner pricing',
      why: {
        h: 'One lunch box. | Multiple rentals.',
        lead: 'Turn a simple optional extra into a new revenue stream for your rental business.',
        items: [
          ['coins', 'New revenue, no new car.', 'Add one line to your extras list. Same fleet, more money.'],
          ['tool', 'Zero setup.', 'No installation, no training. The 12V socket is already in every car.'],
          ['star', 'Better reviews.', 'Iceland is expensive and guests know it. A hot lunch by a waterfall instead of a pricey stop is the thing they remember – and write about.']
        ]
      },
      how: {
        h: 'Two easy ways to offer it.',
        kind: 'rentals',
        cards: [
          { h: 'Rent it as an extra', p: 'Next to the child seat and Wi-Fi. Charge per day or per rental, your call.',
            mock: { title: 'Extras for your trip', type: 'check', rows: ['Child seat', 'Wi-Fi hotspot', 'Car-powered lunch box <em>+ thermal bag</em>'] } },
          { h: 'Include it in premium packages', p: 'Camper, 4x4, all-inclusive. Raise the value of the package, and its price.',
            mock: { title: 'Camper package includes', type: 'list', rows: ['Bedding &amp; kitchen kit', 'Unlimited mileage', 'Car-powered lunch box'] } }
        ],
        calc: {
          h: 'A small investment. | A new revenue stream.',
          p: 'One lunch box can pay for itself after just a few rentals, depending on your pricing. After that, every additional rental can generate more revenue.',
          cost: 'Purchase cost (ISK)', price: 'Rental price per booking (ISK)',
          result: 'Break-even after', one: 'rental', many: 'rentals',
          empty: 'Enter both amounts to see the result.',
          after: 'Every rental after that: +{x} ISK',
          cta: 'Request rental partner offer'
        }
      },
      faq: [
        ['What if a customer loses or breaks it?', 'Add it to your damage price list, like a child seat or Wi-Fi device.'],
        ['Hygiene between customers?', 'Take out the INOX container and put it in the dishwasher.'],
        ['Will it work in my cars?', 'Yes – 12V in cars and campers, 24V in vans. The 230V cable for the hotel or cabin is in the box.'],
        ['Can customers handle it?', 'Pack it, plug it in, drive. Easier than a Wi-Fi hotspot.'],
        ['How does delivery work?', 'We deliver in Iceland and confirm availability and the date with your order.'],
        ['What about warranty?', 'Warranty and complaints are handled by your local contact in Iceland.']
      ],    },

    crews: {
      title: 'Lunchee for work crews in Iceland',
      cta: 'Equip your crew',
      why: {
        h: 'Hot meals. | Even in the middle of nowhere.',
        lead: 'Give your team a convenient way to enjoy warm meals without leaving the job site.',
        items: [
          ['flame', 'Warm food in the cold.', 'A proper hot meal keeps the crew going through a long day outside.'],
          ['clock', 'No driving for lunch.', 'The break is spent eating, not on the road to the nearest N1.'],
          ['truck', 'Runs on any vehicle.', '12V in pickups, vans and boats, 24V in trucks and ploughs. Plug in on the way to site.']
        ]
      },
      how: {
        h: 'Plug it in on the way. Lunch is ready when the break starts.',
        kind: 'crews',
        visual: { img: 'cables', tag: 'In the box', h: '12V and 24V cables included', p: 'Plug into the pickup, the van or the truck – and the 230V cable for the site cabin.' },
        timeline: [['07:30', 'Plug in on the way to site'], ['11:40', 'It heats while you work'], ['12:00', 'Break. Lunch is hot.']],
        p: 'Each worker brings food from home in their own box. Mix colours so everyone knows which one is theirs.',
        names: ['Jón', 'Sigga', 'Kári', 'Anna']
      },
      faq: [
        ['Will it survive site conditions?', 'Solid build, removable steel container, thermal bag for transport.'],
        ['Can we order for the whole crew?', 'Yes – mix colours in one order, so every worker has their own.'],
        ['Does it work in trucks and machines?', '12V and 24V cables are both in the box.'],
        ['What if something goes wrong?', 'You have a local contact in Iceland who handles complaints – no shipping back to the manufacturer.']
      ],    },

    drivers: {
      title: 'Lunchee for drivers and fleets in Iceland',
      cta: 'Get fleet pricing',
      why: {
        h: 'Your lunch break. | Your rules.',
        lead: 'Warm up your own meals during long shifts without depending on roadside restaurants.',
        items: [
          ['plug', 'Heats while you drive.', 'Plug into 12V or 24V and the meal is hot when you park.'],
          ['wallet', 'Cheaper than station food.', 'Bring food from home instead of paying tourist prices every day.'],
          ['truck', 'Cars, buses and trucks.', 'One box for 12V and 24V – works in every vehicle in the fleet.']
        ]
      },
      how: {
        h: 'Three drivers, one lunch box.',
        kind: 'drivers',
        cards: [
          ['bus', 'Tour bus / super jeep', 'Guests at the waterfall, your lunch heats in the cab.'],
          ['truck', 'Long-haul truck', 'Reykjavík to Akureyri with a hot meal on the way.'],
          ['taxi', 'Taxi', 'Eat between rides, not at the gas station.']
        ],
        visual: { img: 'bag', tag: 'In the box', h: 'Thermal bag included', p: 'Keeps lunch warm between stops – with room for a drink or fruit.' }
      },
      faq: [
        ['Does it work on 24V?', 'Yes, the 24V cable is in the box.'],
        ['How long in winter?', 'About 20 minutes; give it a bit longer with cold food on a freezing day.'],
        ['Can we order for the whole fleet?', 'Yes – mix colours in one order.'],
        ['What if something goes wrong?', 'You have a local contact in Iceland who handles complaints – no shipping back to the manufacturer.']
      ],    },

    companies: {
      title: 'Lunchee for companies in Iceland',
      xmas: {
        tag: 'Christmas gift idea',
        pill: 'Christmas campaign for companies',
        h: '13 Yule Lads. | One gift the whole team will use.',
        lead: 'Give every employee a hot lunch – at the desk, on site or on the road. A practical Christmas gift that stays in use all year, not in a drawer.',
        countdown: 'days left to order for Christmas',
        greeting: 'Order by 1 December – delivered before Christmas. Gleðileg jól!',
        guideH: 'A gift for everyone on the team',
        guide: [
          ['pearl', 'For the office', 'Lunch from home, warm at the desk – no queue for the microwave.'],
          ['nature', 'For the field crew', 'A hot lunch on site, from the van’s 12V socket.'],
          ['city', 'For the drivers', 'Plugs into 12V or 24V – lunch is hot when they park.'],
          ['glamour', 'For the one who has everything', 'Something they don’t have yet – and will use every day.']
        ],
        kitH: 'What each employee gets',
        kit: [
          ['gift', 'A complete gift', 'Electric lunch box with a thermal bag – ready to give.'],
          ['star', 'A brand you can trust', 'European brand with full documentation – not an anonymous gadget.'],
          ['box', 'Their favourite colour', 'Pearl, Nature, City or Glamour – mix them in one order.']
        ],
        planH: 'How it works',
        plan: [
          ['Now – 1 December', 'Tell us your team size and colours.'],
          ['Within days', 'You get an offer and a company invoice.'],
          ['Before Christmas', 'The gifts are delivered to your office.']
        ],
        cta: 'Order gifts for your team',
        snowOn: 'Snow: on',
        snowOff: 'Snow: off'
      },
      cta: 'Request a corporate offer',
      formNote: 'Order by 1 December and we’ll deliver before Christmas.',
      why: {
        h: 'A gift your employees | will actually use.',
        lead: 'A practical solution for employee gifts and teams working on the move.',
        items: [
          ['gift', 'A gift with a purpose.', 'Used every day, all year round – not another gift card.'],
          ['truck', 'Made for the field team.', 'Runs on 12V and 24V in any company vehicle, and on 230V in the office.'],
          ['star', 'Everyone picks a colour.', 'Mix four colours in one order – Pearl, Nature, City or Glamour.']
        ]
      },
      how: {
        h: 'Two ways to give it.',
        kind: 'cards',
        cards: [
          { h: 'Christmas gift for the team', p: 'One order – every employee gets their own box in their favourite colour.',
            mock: { title: 'Christmas gift order', type: 'list', rows: ['Pearl × 40', 'City × 50', 'Nature × 30'] } },
          { h: 'Year-round benefit', p: 'Part of the welcome pack for new hires, or standard kit for crews in the field.',
            mock: { title: 'Welcome pack', type: 'check', rows: ['Laptop', 'Work jacket', 'Car-powered lunch box <em>+ thermal bag</em>'] } }
        ]
      },
      faq: [
        ['Can we order for the whole company?', 'Yes – from a few units to hundreds. Mix colours in one order.'],
        ['Will it arrive before Christmas?', 'Order by 1 December and we’ll deliver before Christmas.'],
        ['Is it a quality product?', 'Yes – a European brand with full documentation and a local contact in Iceland.'],
        ['Invoice for the company?', 'Yes, a regular company invoice.']
      ],    },

    diet: {
      title: 'Lunchee for healthy eating in Iceland',
      cta: 'Where to buy',
      b2c: true,
      why: {
        h: 'Your food. | Your schedule.',
        lead: 'Enjoy homemade meals wherever your day takes you.',
        items: [
          ['leaf', 'Your food, your portions.', 'You decide what’s on the plate and how much. No guessing what’s in the takeaway.'],
          ['box', 'Meal prep, served hot.', 'Cook on Sunday, eat a hot meal all week. 1.1 L steel container plus a 0.5 L one for a salad or snack.'],
          ['wallet', 'Cheaper than eating out.', 'Healthy food on the go costs a fortune in Iceland. Bring your own.']
        ]
      },
      how: {
        h: 'Wherever your day goes, your meal goes too.',
        kind: 'diet',
        cards: [
          ['clock', 'At work', 'Lunch from home, warm at the desk – no queue for the microwave, no takeaway.'],
          ['plug', 'On the road', 'Plugs into the car socket – a proper meal instead of station food.'],
          ['dumbbell', 'After training', 'Plug it in before the workout – your meal is hot when you’re done.']
        ],
        visual: { img: 'inox', tag: 'In the box', h: 'Heated in steel, not plastic', p: 'Your food sits in a removable 1.1 L stainless steel container. Dishwasher safe.' }
      },
      faq: [
        ['Where can I buy it?', 'Lunchee is just arriving in Iceland. Send us the form below and we’ll tell you how to get one.'],
        ['What touches my food?', 'A removable stainless steel (INOX) container. The materials are BPA-free.'],
        ['How much food fits?', '1.1 L in the main container, plus a 0.5 L container with a lid for a salad or snack.'],
        ['Does it work at home and in the office?', 'Yes – the 230V cable is in the box, next to the 12V/24V car cable.'],
        ['How long does it take?', 'About 20 minutes; food from the fridge on a cold day needs a bit longer.']
      ],
      form: {
        h: 'Where to buy <span class="accent">Lunchee.</span>',
        lead: 'Lunchee is just arriving in Iceland. Leave your details and we’ll let you know where and how you can buy one.',
        button: 'Ask about availability'
      }
    },

    stores: {
      title: 'Lunchee for stores in Iceland',
      cta: 'Request wholesale pricing',
      why: {
        h: 'Bring Lunchee | to your customers.',
        lead: 'Add a practical product for drivers, travellers and outdoor workers to your retail assortment.',
        items: [
          ['gift', 'Ready for the gift season.', 'A practical gift for dads, hunters and drivers.'],
          ['box', 'Local partner in Iceland.', 'Ordering, invoicing and support here – no importing on your side.'],
          ['image', 'Ready-made materials.', 'Product photos and descriptions for your shelf and online store.']
        ]
      },
      how: {
        h: 'On your shelf and in your online store.',
        kind: 'stores',
        shelf: 'In store',
        online: 'Online',
        product: 'Lunchee electric lunch box',
        productSub: '12/24 V car + 230 V · thermal bag included',
        badge: 'New',
        stock: 'Available'
      },
      faq: [
        ['Minimum order?', 'Let’s talk – we start small with new partners.'],
        ['Delivery?', 'Delivered to your store in Iceland – we confirm the date with your order.'],
        ['Can I mix colours?', 'Yes, all four colours in one order.'],
        ['Product materials?', 'Packshots, descriptions and specs ready to use.']
      ],    }
  },

  pl: {
    ui: {
      sending: 'Wysyłanie...',
      ok: 'Dziękujemy – zapytanie zostało wysłane. Odpiszemy mailem z ceną i dostępnością.',
      err: 'Coś poszło nie tak. Spróbuj ponownie albo napisz do nas maila.',
      name: 'Imię i nazwisko', company: 'Firma', email: 'E-mail', phone: 'Telefon', message: 'Wiadomość',
      optional: '(opcjonalnie)', interested: 'Czego dotyczy', quantity: 'Szacowana liczba sztuk', quantityPh: 'np. 20',
      formH: 'Dobierzmy Lunchee do Twojej firmy.',
      formP: 'Napisz kilka słów o swoich potrzebach – wyślemy cenę, dostępność i warunki współpracy.',
      submit: 'Odbierz ofertę dla firmy',
      navShort: 'Wycena',
      finalH: 'Lunchee w Twojej firmie? <span class="accent">Porozmawiajmy.</span>',
      finalP: 'Prowadzisz wypożyczalnię, ekipę w terenie albo sklep? Dobierzemy rozwiązanie do Ciebie.',
      placeholder: 'Zdjęcie wkrótce',
      faq: 'Pytania, które pewnie masz.',
      change: 'zmień',
      tagline: 'ciepły posiłek, gdziekolwiek jedziesz',
      xbar: 'Prezent świąteczny dla zespołu? Zamów do 1 grudnia – dostarczymy przed świętami.',
      xbarLink: 'Zobacz ofertę'
    },
    rentals: {
      title: 'Lunchee dla wypożyczalni samochodów na Islandii',
      cta: 'Cennik dla wypożyczalni',
      why: {
        h: 'Jeden lunchbox. | Wiele wynajmów.',
        lead: 'Zamień prosty dodatek w nowe źródło przychodu dla Twojej wypożyczalni.',
        items: [
          ['coins', 'Nowy przychód, bez nowego auta.', 'Dopisz jedną pozycję do listy dodatków. Ta sama flota, więcej pieniędzy.'],
          ['tool', 'Zero wdrożenia.', 'Bez montażu, bez szkoleń. Gniazdo 12V jest już w każdym aucie.'],
          ['star', 'Lepsze opinie.', 'Islandia jest droga i klienci o tym wiedzą. Ciepły lunch przy wodospadzie zamiast drogiego postoju – to zapamiętają i o tym napiszą.']
        ]
      },
      how: {
        h: 'Dwa proste sposoby, żeby to zaoferować.',
        kind: 'rentals',
        cards: [
          { h: 'Wynajem jako dodatek', p: 'Obok fotelika i Wi-Fi. Opłata za dzień albo za cały wynajem – Ty decydujesz.',
            mock: { title: 'Dodatki do podróży', type: 'check', rows: ['Fotelik dziecięcy', 'Hotspot Wi-Fi', 'Elektryczny Lunchbox <em>+ torba termiczna</em>'] } },
          { h: 'W pakietach premium', p: 'Kamper, 4x4, all-inclusive. Podnieś wartość pakietu – i jego cenę.',
            mock: { title: 'Pakiet kamper zawiera', type: 'list', rows: ['Pościel i zestaw kuchenny', 'Bez limitu kilometrów', 'Elektryczny Lunchbox'] } }
        ],
        calc: {
          h: 'Mała inwestycja. | Nowe źródło przychodu.',
          p: 'Jeden lunchbox może się zwrócić już po kilku wynajmach – zależnie od Twojej ceny. Potem każdy kolejny wynajem to dodatkowy przychód.',
          cost: 'Koszt zakupu (ISK)', price: 'Cena wynajmu za rezerwację (ISK)',
          result: 'Zwrot po', one: 'wynajmie', many: 'wynajmach',
          empty: 'Wpisz obie kwoty, żeby zobaczyć wynik.',
          after: 'Każdy kolejny wynajem: +{x} ISK',
          cta: 'Poproś o ofertę dla wypożyczalni'
        }
      },
      faq: [
        ['Co jeśli klient go zgubi albo zepsuje?', 'Dopisz go do cennika szkód, tak jak fotelik czy urządzenie Wi-Fi.'],
        ['A higiena między klientami?', 'Wyjmij pojemnik INOX i włóż go do zmywarki.'],
        ['Czy zadziała w moich autach?', 'Tak – 12V w osobówkach i kamperach, 24V w busach. Kabel 230V do hotelu czy domku jest w zestawie.'],
        ['Czy klienci sobie poradzą?', 'Spakuj, podłącz, jedź. Prościej niż hotspot Wi-Fi.'],
        ['Jak wygląda dostawa?', 'Dostarczamy na Islandii – dostępność i termin potwierdzamy przy zamówieniu.'],
        ['A gwarancja?', 'Gwarancję i reklamacje obsługuje Twój lokalny kontakt na Islandii.']
      ],    },

    crews: {
      title: 'Lunchee dla ekip pracujących w terenie na Islandii',
      cta: 'Wyposaż swoją ekipę',
      why: {
        h: 'Ciepły obiad. | Nawet na końcu świata.',
        lead: 'Daj ekipie wygodny sposób na ciepły posiłek – bez schodzenia z budowy.',
        items: [
          ['flame', 'Ciepłe jedzenie w zimnie.', 'Porządny ciepły posiłek daje ekipie siłę na długi dzień na zewnątrz.'],
          ['clock', 'Bez jeżdżenia na obiad.', 'Przerwa jest na jedzenie, nie na dojazd do najbliższej stacji N1.'],
          ['truck', 'Działa w każdym pojeździe.', '12V w pickupach, busach i łodziach, 24V w ciężarówkach i pługach. Podłączasz po drodze na budowę.']
        ]
      },
      how: {
        h: 'Podłącz po drodze. Lunch jest gotowy, kiedy zaczyna się przerwa.',
        kind: 'crews',
        visual: { img: 'cables', tag: 'W zestawie', h: 'Kable 12V i 24V w komplecie', p: 'Podłączasz w pickupie, busie albo ciężarówce – a kablem 230V w kontenerze na budowie.' },
        timeline: [['07:30', 'Podłączasz po drodze na budowę'], ['11:40', 'Grzeje się, kiedy pracujesz'], ['12:00', 'Przerwa. Lunch jest ciepły.']],
        p: 'Każdy przynosi jedzenie z domu we własnym lunchboxie. Weźcie różne kolory, żeby każdy wiedział, który jest jego.',
        names: ['Jón', 'Sigga', 'Kári', 'Anna']
      },
      faq: [
        ['Czy przetrwa warunki na budowie?', 'Solidna konstrukcja, wyjmowany stalowy pojemnik, torba termiczna do transportu.'],
        ['Czy możemy zamówić dla całej ekipy?', 'Tak – różne kolory w jednym zamówieniu, żeby każdy miał swój.'],
        ['Czy działa w ciężarówkach i maszynach?', 'Kable 12V i 24V są w zestawie.'],
        ['A jeśli coś się zepsuje?', 'Masz lokalny kontakt na Islandii, który obsługuje reklamacje – bez odsyłania do producenta.']
      ],    },

    drivers: {
      title: 'Lunchee dla kierowców i flot na Islandii',
      cta: 'Cennik dla floty',
      why: {
        h: 'Twoja przerwa. | Twoje zasady.',
        lead: 'Podgrzewaj własne jedzenie na długich zmianach, bez zdawania się na przydrożne bary.',
        items: [
          ['plug', 'Grzeje się w trakcie jazdy.', 'Podłącz do 12V lub 24V – posiłek jest ciepły, kiedy parkujesz.'],
          ['wallet', 'Taniej niż jedzenie na stacji.', 'Bierzesz jedzenie z domu, zamiast codziennie płacić turystyczne ceny.'],
          ['truck', 'Osobówki, autobusy i ciężarówki.', 'Jeden lunchbox na 12V i 24V – działa w każdym pojeździe floty.']
        ]
      },
      how: {
        h: 'Trzech kierowców, jeden lunchbox.',
        kind: 'drivers',
        cards: [
          ['bus', 'Autokar / super jeep', 'Turyści przy wodospadzie, a Twój lunch grzeje się w kabinie.'],
          ['truck', 'Ciężarówka w trasie', 'Z Reykjavíku do Akureyri z ciepłym posiłkiem po drodze.'],
          ['taxi', 'Taksówka', 'Jesz między kursami, a nie na stacji benzynowej.']
        ],
        visual: { img: 'bag', tag: 'W zestawie', h: 'Torba termiczna w komplecie', p: 'Trzyma ciepło między przystankami – z miejscem na napój albo owoc.' }
      },
      faq: [
        ['Czy działa na 24V?', 'Tak, kabel 24V jest w zestawie.'],
        ['Ile to trwa zimą?', 'Około 20 minut; przy zimnym jedzeniu w mroźny dzień trochę dłużej.'],
        ['Czy możemy zamówić dla całej floty?', 'Tak – różne kolory w jednym zamówieniu.'],
        ['A jeśli coś się zepsuje?', 'Masz lokalny kontakt na Islandii, który obsługuje reklamacje – bez odsyłania do producenta.']
      ],    },

    companies: {
      title: 'Lunchee dla firm na Islandii',
      xmas: {
        tag: 'Pomysł na prezent świąteczny',
        pill: 'Świąteczna kampania dla firm',
        h: '13 islandzkich Mikołajów. | Jeden prezent, którego użyje cały zespół.',
        lead: 'Daj każdemu pracownikowi ciepły lunch – przy biurku, na budowie albo w trasie. Praktyczny prezent na święta, który zostaje w użyciu przez cały rok, a nie w szufladzie.',
        countdown: 'dni na zamówienie przed świętami',
        greeting: 'Zamów do 1 grudnia – dostarczymy przed świętami. Gleðileg jól!',
        guideH: 'Prezent dla każdego w zespole',
        guide: [
          ['pearl', 'Dla biura', 'Lunch z domu, ciepły przy biurku – bez kolejki do mikrofali.'],
          ['nature', 'Dla ekipy w terenie', 'Ciepły lunch na budowie, z gniazda 12V w busie.'],
          ['city', 'Dla kierowców', 'Podłączasz do 12V lub 24V – lunch jest ciepły, kiedy parkują.'],
          ['glamour', 'Dla kogoś, kto ma wszystko', 'Coś, czego jeszcze nie ma – i będzie używać codziennie.']
        ],
        kitH: 'Co dostaje każdy pracownik',
        kit: [
          ['gift', 'Kompletny prezent', 'Elektryczny lunchbox z torbą termiczną – gotowy do wręczenia.'],
          ['star', 'Marka, której można zaufać', 'Europejska marka z pełną dokumentacją – a nie anonimowy gadżet.'],
          ['box', 'Ulubiony kolor', 'Pearl, Nature, City albo Glamour – kolory mieszasz w jednym zamówieniu.']
        ],
        planH: 'Jak to działa',
        plan: [
          ['Teraz – 1 grudnia', 'Napisz, ile osób liczy zespół i jakie kolory.'],
          ['W ciągu kilku dni', 'Dostajesz ofertę i fakturę na firmę.'],
          ['Przed świętami', 'Prezenty trafiają do Twojego biura.']
        ],
        cta: 'Zamów prezenty dla zespołu',
        snowOn: 'Śnieg: wł.',
        snowOff: 'Śnieg: wył.'
      },
      cta: 'Poproś o ofertę dla firmy',
      formNote: 'Zamów do 1 grudnia, a dostarczymy przed świętami.',
      why: {
        h: 'Prezent, z którego pracownicy | naprawdę będą korzystać.',
        lead: 'Praktyczny pomysł na prezent dla pracowników i dla zespołów, które pracują w ruchu.',
        items: [
          ['gift', 'Prezent z sensem.', 'Używany codziennie, przez cały rok – a nie kolejna karta podarunkowa.'],
          ['truck', 'Stworzony dla ekip w terenie.', 'Działa na 12V i 24V w każdym aucie firmowym i na 230V w biurze.'],
          ['star', 'Każdy wybiera kolor.', 'Cztery kolory w jednym zamówieniu – Pearl, Nature, City albo Glamour.']
        ]
      },
      how: {
        h: 'Dwa sposoby, żeby go podarować.',
        kind: 'cards',
        cards: [
          { h: 'Świąteczny prezent dla zespołu', p: 'Jedno zamówienie – każdy pracownik dostaje swój lunchbox w ulubionym kolorze.',
            mock: { title: 'Zamówienie świąteczne', type: 'list', rows: ['Pearl × 40', 'City × 50', 'Nature × 30'] } },
          { h: 'Benefit na cały rok', p: 'W pakiecie powitalnym dla nowych osób albo jako standardowe wyposażenie ekip w terenie.',
            mock: { title: 'Pakiet powitalny', type: 'check', rows: ['Laptop', 'Kurtka robocza', 'Elektryczny Lunchbox <em>+ torba termiczna</em>'] } }
        ]
      },
      faq: [
        ['Czy możemy zamówić dla całej firmy?', 'Tak – od kilku do kilkuset sztuk. Kolory można mieszać w jednym zamówieniu.'],
        ['Czy dotrze przed świętami?', 'Zamów do 1 grudnia, a dostarczymy przed świętami.'],
        ['Czy to dobry jakościowo produkt?', 'Tak – europejska marka z pełną dokumentacją i lokalnym kontaktem na Islandii.'],
        ['Faktura na firmę?', 'Tak, standardowa faktura dla firmy.']
      ],    },

    diet: {
      title: 'Lunchee dla osób na diecie na Islandii',
      cta: 'Gdzie kupić',
      b2c: true,
      why: {
        h: 'Twoje jedzenie. | Twój rytm dnia.',
        lead: 'Domowe jedzenie na ciepło, gdziekolwiek rzuci Cię dzień.',
        items: [
          ['leaf', 'Twoje jedzenie, Twoje porcje.', 'Ty decydujesz, co jest na talerzu i ile. Bez zgadywania, co jest w jedzeniu na wynos.'],
          ['box', 'Meal prep na ciepło.', 'Gotujesz w niedzielę, jesz ciepły posiłek cały tydzień. Stalowy pojemnik 1,1 l plus 0,5 l na sałatkę albo przekąskę.'],
          ['wallet', 'Taniej niż na mieście.', 'Zdrowe jedzenie na wynos kosztuje na Islandii majątek. Weź swoje.']
        ]
      },
      how: {
        h: 'Twój obiad jedzie tam, gdzie Ty.',
        kind: 'diet',
        cards: [
          ['clock', 'W pracy', 'Lunch z domu, ciepły przy biurku – bez kolejki do mikrofalówki i bez jedzenia na wynos.'],
          ['plug', 'W trasie', 'Podłączasz do gniazda w aucie – porządny posiłek zamiast jedzenia ze stacji.'],
          ['dumbbell', 'Po treningu', 'Podłącz przed treningiem – posiłek jest ciepły, kiedy kończysz.']
        ],
        visual: { img: 'inox', tag: 'W zestawie', h: 'Grzeje w stali, nie w plastiku', p: 'Jedzenie jest w wyjmowanym stalowym pojemniku 1,1 l. Można myć w zmywarce.' }
      },
      faq: [
        ['Gdzie mogę go kupić?', 'Lunchee dopiero trafia na Islandię. Wyślij formularz poniżej, a napiszemy, jak go zdobyć.'],
        ['Z czym styka się jedzenie?', 'Z wyjmowanym pojemnikiem ze stali nierdzewnej (INOX). Materiały są wolne od BPA.'],
        ['Ile jedzenia się mieści?', '1,1 l w głównym pojemniku plus pojemnik 0,5 l z pokrywką na sałatkę albo przekąskę.'],
        ['Działa w domu i w biurze?', 'Tak – kabel 230V jest w zestawie, obok kabla samochodowego 12V/24V.'],
        ['Ile to trwa?', 'Około 20 minut; jedzenie z lodówki w zimny dzień potrzebuje trochę dłużej.']
      ],
      form: {
        h: 'Gdzie kupić <span class="accent">Lunchee.</span>',
        lead: 'Lunchee dopiero trafia na Islandię. Zostaw kontakt, a damy znać, gdzie i jak możesz go kupić.',
        button: 'Zapytaj o dostępność'
      }
    },

    stores: {
      title: 'Lunchee dla sklepów na Islandii',
      cta: 'Poproś o cennik hurtowy',
      why: {
        h: 'Lunchee | dla Twoich klientów.',
        lead: 'Dodaj do oferty praktyczny produkt dla kierowców, podróżnych i osób pracujących na zewnątrz.',
        items: [
          ['gift', 'Gotowy na sezon prezentowy.', 'Praktyczny prezent dla ojców, myśliwych i kierowców.'],
          ['box', 'Lokalny partner na Islandii.', 'Zamówienia, faktury i obsługa na miejscu – bez importu po Twojej stronie.'],
          ['image', 'Gotowe materiały.', 'Zdjęcia produktu i opisy na półkę i do sklepu internetowego.']
        ]
      },
      how: {
        h: 'Na Twojej półce i w Twoim sklepie internetowym.',
        kind: 'stores',
        shelf: 'W sklepie',
        online: 'Online',
        product: 'Elektryczny lunchbox Lunchee',
        productSub: '12/24 V auto + 230 V · torba termiczna w zestawie',
        badge: 'Nowość',
        stock: 'Dostępny'
      },
      faq: [
        ['Minimalne zamówienie?', 'Porozmawiajmy – z nowymi partnerami zaczynamy od małych ilości.'],
        ['Dostawa?', 'Dostarczamy do Twojego sklepu na Islandii – termin potwierdzamy przy zamówieniu.'],
        ['Czy mogę mieszać kolory?', 'Tak, wszystkie cztery kolory w jednym zamówieniu.'],
        ['Materiały produktowe?', 'Packshoty, opisy i specyfikacja gotowe do użycia.']
      ],    }
  },

  // Icelandic – to be filled in and checked by a native speaker. Same shape as `en` (ui + 4 audiences).
  is: {}
};

// Translations of the shared (static) sections in index.html, keyed by data-i18n. English lives in the HTML;
// a missing key keeps the English text.
window.LUNCHEE_SHARED = {
  pl: {
    'hero.tagline': 'Kraina ognia i lodu. Teraz z ciepłym obiadem.',
    'hero.cta': 'Cennik dla firm',
    'hero.cta2': 'Zobacz, jak to działa',
    'badge.heat': 'Do 60°C',
    'hero.h1': 'Ciepły obiad.',
    'hero.h2': 'Tam, gdzie pracujesz.',
    'hero.sub': 'Elektryczne lunchboxy dla ludzi w ruchu. Podłączasz do auta, ciężarówki albo zwykłego gniazdka. <strong>Ciepły posiłek bez mikrofalówki.</strong>',
    'hero.alt': 'Podróżniczka je ciepły posiłek z lunchboxa obok samochodu na islandzkiej drodze',
    'stats.1': 'auto lub gniazdko',
    'stats.2': 'zwykle tyle trwa podgrzewanie',
    'stats.3b': 'Torba termiczna',
    'stats.3': 'w zestawie',
    'stats.4b': 'Marka z UE',
    'stats.4': 'z pełną dokumentacją',
    'who.eyebrow': 'Jeden lunchbox, wiele zastosowań',
    'who.hint': 'Wybierz, kim jesteś – pokażemy, co Lunchee da właśnie Tobie.',
    'who.rentals.short': 'Wynajem',
    'who.crews.short': 'Ekipy',
    'who.drivers.short': 'Kierowcy',
    'who.companies.short': 'Firmy',
    'who.stores.short': 'Sklepy',
    'who.diet.short': 'Dieta',
    'nav.uses': 'Zastosowania',
    'nav.how': 'Jak to działa',
    'nav.product': 'Produkt',
    'nav.faq': 'Pytania',
    'who.h': 'Ciepły obiad w każdym zakątku Islandii.',
    'who.rentals': 'Wypożyczalnie aut',
    'who.rentals.s': 'Dodatkowy zarobek na każdym wynajmie',
    'who.crews': 'Ekipy w terenie',
    'who.crews.s': 'Ciepły obiad na budowie, bez jazdy na stację',
    'who.drivers': 'Kierowcy i floty',
    'who.drivers.s': 'Ciepły obiad w kabinie, bez szukania baru',
    'who.companies': 'Firmy',
    'who.companies.s': 'Prezent na święta, który nie wyląduje w szufladzie',
    'who.diet': 'Zdrowa dieta',
    'who.diet.s': 'Twoje pudełka z dietą zawsze na ciepło',
    'who.stores': 'Sklepy',
    'who.stores.s': 'Produkt, którego potrzebują Islandczycy',
    'product.eyebrow': 'Lunchee – elektryczny lunchbox',
    'product.h': 'Jedno pudełko. Wszystko w środku.',
    'product.lead': 'Działa na <b>12V</b> (auto), <b>24V</b> (ciężarówka) albo <b>230V</b> (zwykłe gniazdko). Nie ma wbudowanej baterii – grzeje, gdy jest podłączony. W zestawie: lunchbox ze stalowym pojemnikiem 1,1&nbsp;l, pojemnik 0,5&nbsp;l, sztućce, oba kable i torba termiczna.',
    'ben.h': 'Dlaczego Lunchee?',
    'ben.1': 'Oszczędzasz czas', 'ben.1s': 'Mniej postojów tylko po to, żeby zjeść coś ciepłego.',
    'ben.2': 'Jesz lepiej', 'ben.2s': 'Bierzesz własne jedzenie, gdziekolwiek rzuci Cię dzień.',
    'ben.3': 'Działa wszędzie', 'ben.3s': '12V, 24V albo 230V. Bez mikrofalówki.',
    'trust.p': 'Elektryczne lunchboxy od uznanej europejskiej marki AGD, dostępne dla firm na Islandii.',
    'trust.1': 'Lokalny partner na Islandii', 'trust.1s': 'Zamówienie, faktura i obsługa na miejscu – bez importowania na własną rękę.',
    'trust.2': 'Dostawa na Islandii', 'trust.2s': 'Dostępność i termin dostawy potwierdzamy przy zamówieniu.',
    'trust.3': 'Gwarancja i reklamacje', 'trust.3s': 'Obsługuje je Twój lokalny kontakt na Islandii – nic nie wysyłasz do producenta.',
    'trust.4': 'Pełna dokumentacja', 'trust.4s': 'Europejska marka z kompletną dokumentacją produktu – udostępniamy na życzenie.',
    'trust.contact': 'Kontakt na Islandii:',
    'product.alt': 'Otwarty lunchbox z ciepłym posiłkiem',
    'kit.bag': 'Torba termiczna',
    'kit.cables': 'Kable 12/24 V + 230 V',
    'kit.inox': 'Pojemnik INOX 1,1 L',
    'colours.p': 'Cztery kolory, ta sama specyfikacja. <b>Mieszaj kolory w jednym zamówieniu.</b>',
    'steps.h': '<b>Ciepły posiłek</b> w 5 krokach',
    'steps.1': 'Przygotuj', 'steps.1s': 'Włóż posiłek do lunchboxa.',
    'steps.2': 'Spakuj', 'steps.2s': 'Włóż go do torby termicznej.',
    'steps.3': 'Podłącz', 'steps.3s': '12V / 24V w pojeździe albo 230V.',
    'steps.4': 'Odczekaj ok. 20 min', 'steps.4s': 'Zależy od jedzenia i temperatury.',
    'steps.5': 'Jedz', 'steps.5s': 'Tam, gdzie się zatrzymasz.',
    'specs.h': 'Specyfikacja',
    'specs.power': 'Zasilanie', 'specs.power.v': '12 V auto / 24 V ciężarówka / 230 V sieć',
    'specs.watt': 'Moc',
    'specs.heat': 'Podgrzewanie', 'specs.heat.v': 'do 60°C, zwykle ok. 20 min (zależy od jedzenia i temperatury)',
    'specs.batt': 'Bateria', 'specs.batt.v': 'Brak – działa po podłączeniu',
    'specs.main': 'Pojemnik główny', 'specs.main.v': '1,1 L, stal nierdzewna (INOX), wyjmowany',
    'specs.extra': 'Pojemnik dodatkowy', 'specs.extra.v': '0,5 L z pokrywką',
    'specs.dim': 'Wymiary', 'specs.dim.v': '23 × 16 × 10,5 cm',
    'specs.weight': 'Waga', 'specs.weight.v': '0,63 kg',
    'specs.mat': 'Materiały', 'specs.mat.v': 'bez BPA',
    'specs.dish': 'Zmywarka', 'specs.dish.v': 'Tak (pojemniki)',
    'specs.box': 'W zestawie',
    'specs.box.v': 'Lunchbox z pojemnikiem INOX 1,1 L · pojemnik 0,5 L z pokrywką · metalowa łyżka i widelec · kabel 230 V · kabel samochodowy 12/24 V · torba termiczna.',
    'specs.know': 'Dobrze wiedzieć',
    'specs.know.v': 'Czas podgrzewania zależy od posiłku i temperatury na zewnątrz – jedzenie z lodówki w zimny dzień potrzebuje trochę więcej czasu. Podczas podgrzewania zostaw otwarty zawór. Nigdy nie włączaj pustego lunchboxa.',
    'foot.p': 'Oficjalny partner Lunchee na Islandii'
  },
  // Icelandic – same keys, after the native check
  is: {}
};

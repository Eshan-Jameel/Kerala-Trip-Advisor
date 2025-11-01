// ==============================================================================
// 0. NEW KERALA GENERAL INFO (ADDED FOR SMARTER RESPONSE)
// ==============================================================================

const KERALA_GENERAL_INFO = {
    "why_visit": [
        "Kerala, known as 'God's Own Country', is famous for its unique blend of serene backwaters, lush green hill stations (like Munnar), and beautiful sandy beaches.",
        "It is the birthplace of Ayurveda, making it a world-renowned destination for wellness and traditional healing.",
        "The state has a rich cultural heritage, including classical art forms like Kathakali and the vibrant ritual art of Theyyam.",
        "Kerala boasts the highest literacy rate in India and has a highly developed social infrastructure."
    ],
    "safety_tips": [
        "Respect local customs, especially when visiting temples (dress modestly).",
        "It's generally safe, but be cautious of scams in crowded tourist areas.",
        "Drink bottled water only and ensure food is freshly prepared.",
        "During monsoon (June-August), be mindful of travel delays and potential flooding in low-lying areas."
    ],
    "budget_guide": [
        "**Budget Traveler (Under $30/day):** Focus on homestays, local buses (KSRTC), and street food/local eateries (chaya kadas).",
        "**Mid-Range Traveler ($60-$120/day):** Includes mid-range resorts, private taxis for longer distances, and comfortable dining.",
        "**Luxury Traveler ($200+/day):** Covers 5-star resorts (e.g., in Kovalam, Kumarakom), private houseboats, and domestic flights."
    ]
};


// ==============================================================================
// 1. KERALA_DATA_MOCK (FULLY EXPANDED with Lat/Lon, Gems, Nearby)
// ==============================================================================

const KERALA_DATA_MOCK = {
    "local_tips": [
        "**Cuisine:** Don't miss the 'Sadya' (a traditional feast on a banana leaf) and fresh 'Karimeen' (Pearl Spot fish).",
        "**Culture:** Try to catch a 'Kathakali' (classical dance) or 'Theyyam' (ritual dance) performance.",
        "**Shopping:** Best buys include spices (pepper, cardamom), coir products, and 'Kasavu' (traditional white & gold) sarees.",
        "**Health:** Kerala is the home of Ayurveda. Consider an authentic Ayurvedic massage."
    ],
    "districts": [
        // --- 1. TVM ---
        {
            "id": "TVM", "name": "Thiruvananthapuram", "nickname": "The Capital Charm", "theme": "Beaches, History, Culture", "lat": 8.5241, "lon": 76.9366,
            "transport": { "airport": "Trivandrum International Airport (TRV)", "train": "Thiruvananthapuram Central (TVC)", "local": "Auto-rickshaws, Taxis (Uber/Ola), KSRTC Buses" },
            "hotels": [ { "name": "The Leela Kovalam (Luxury)", "type": "Resort", "rating": 4.8, "price": "High" }, { "name": "Hyatt Regency (City)", "type": "Hotel", "rating": 4.7, "price": "High" }, { "name": "Varkala Marine Palace (Budget)", "type": "Homestay", "rating": 4.4, "price": "Low" } ],
            "local_tips": [ "**Food:** Try 'Puttu' with fish curry at a local eatery, especially in the Varkala area.", "**Shopping:** Visit 'Chalai Market' for local shopping. 'SMSM Institute' for handicrafts." ],
            "hidden_gem": { "name": "Poovar Backwaters", "desc": "A stunning, quiet estuary near Kovalam where the river meets the sea. Far less crowded than other backwaters." },
            "places": [
                { "name": "Padmanabhaswamy Temple", "category": "Pilgrimage", "highlights": ["Golden treasures", "Dravidian architecture"], "keywords": ["temple", "sree padmanabhaswamy"], "rating": 4.8, "nearby": ["Kuthira Malika Palace", "Pazhavangadi Ganapathy Temple"] },
                { "name": "Kovalam Beach", "category": "Beach", "highlights": ["Lighthouse Beach", "Water sports", "Shallow waters"], "keywords": ["beach", "lighthouse"], "rating": 4.5, "nearby": ["Hawa Beach", "Samudra Beach", "Poovar Backwaters"] },
                { "name": "Varkala Cliff & Beach", "category": "Beach", "highlights": ["Cliffside views", "Healing mineral water"], "keywords": ["cliff", "yoga", "papanasam beach"], "rating": 4.7, "nearby": ["Janardhana Swamy Temple", "Sivagiri Mutt"] }
            ]
        },
        // --- 2. KLM ---
        {
            "id": "KLM", "name": "Kollam", "nickname": "Gateway to Backwaters", "theme": "Backwaters, Cashew, Nature", "lat": 8.8932, "lon": 76.6141,
            "transport": { "airport": "Nearest is Trivandrum (TRV), ~70 km away.", "train": "Kollam Junction (QLN)", "local": "Auto-rickshaws, Taxis, Ferry services" },
            "hotels": [ { "name": "The Raviz Ashtamudi (Luxury)", "type": "Resort", "rating": 4.7, "price": "High" }, { "name": "The Quilon Beach Hotel (Mid-range)", "type": "Hotel", "rating": 4.5, "price": "Mid" }, { "name": "Munroe Island Backwaters (Budget)", "type": "Homestay", "rating": 4.6, "price": "Low" } ],
            "local_tips": [ "**Shopping:** Kollam is the 'Cashew Capital'. Buy high-quality, fresh cashews here.", "**Experience:** Take the 8-hour public ferry from Kollam to Alappuzha for a classic backwater journey." ],
            "hidden_gem": { "name": "Munroe Island", "desc": "A stunning, non-commercialized island cluster in Ashtamudi Lake. Perfect for quiet canoe tours through narrow canals." },
            "places": [
                { "name": "Ashtamudi Lake", "category": "Backwaters", "highlights": ["Houseboat rides", "Eight-channel lake", "Munroe Island"], "keywords": ["backwater", "houseboat", "lake", "munroe island"], "rating": 4.6, "nearby": ["Munroe Island", "Kollam Beach"] },
                { "name": "Jatayu Earth's Center", "category": "Adventure", "highlights": ["World's largest bird sculpture", "Rock climbing", "Cable car"], "keywords": ["adventure", "sculpture", "rock", "jatayu para"], "rating": 4.7, "nearby": ["Chadayamangalam Village"] },
                { "name": "Thenmala Dam & Ecotourism", "category": "Ecotourism", "highlights": ["First planned ecotourism destination", "Adventure zone", "Deer park"], "keywords": ["eco", "dam", "forest", "zip line", "thenmala"], "rating": 4.4, "nearby": ["Palaruvi Waterfalls"] }
            ]
        },
        // --- 3. PTA ---
        {
            "id": "PTA", "name": "Pathanamthitta", "nickname": "Town of Pilgrims", "theme": "Pilgrimage, Rivers, Forests", "lat": 9.2647, "lon": 76.7870,
            "transport": { "airport": "Nearest is Trivandrum (TRV) ~119 km.", "train": "Nearest major is Chengannur (CNGR) ~28 km.", "local": "KSRTC buses and private taxis" },
            "hotels": [ { "name": "Hotel Wyte Portico (Mid-range)", "type": "Hotel", "rating": 4.3, "price": "Mid" }, { "name": "Devasom Board Guesthouses (Budget)", "type": "Guesthouse", "rating": 4.0, "price": "Low" }, { "name": "Green Pamba (Eco-lodge)", "type": "Resort", "rating": 4.4, "price": "Mid" } ],
            "local_tips": [ "**Pilgrimage:** Main gateway to Sabarimala. Check the pilgrimage season ('Mandalam') as it's extremely busy then.", "**Nature:** Gavi is an eco-tourism paradise. Booking in advance is required." ],
            "hidden_gem": { "name": "Perunthenaruvi Waterfalls", "desc": "A beautiful, lesser-known waterfall on the Pamba River. It's a great picnic spot for locals." },
            "places": [
                { "name": "Sabarimala Temple", "category": "Pilgrimage", "highlights": ["Lord Ayyappa", "Perennial pilgrimage site"], "keywords": ["ayyappa", "temple", "forest", "sabarimala"], "rating": 4.9, "nearby": ["Pamba Ganapathy Temple"] },
                { "name": "Gavi Ecotourism", "category": "Wildlife/Nature", "highlights": ["Periyar Tiger Reserve buffer zone", "Off-roading", "Trekking"], "keywords": ["gavi", "jungle", "safari", "trekking"], "rating": 4.6, "nearby": ["Kochu Pamba", "Gavi Lake"] },
                { "name": "Konni Elephant Reserve", "category": "Wildlife/Nature", "highlights": ["Elephant training center", "Forest reserve"], "keywords": ["elephant", "forest", "reserve", "konni"], "rating": 4.2, "nearby": ["Adavi Ecotourism (Bowl Boating)"] }
            ]
        },
        // --- 4. ALP ---
        {
            "id": "ALP", "name": "Alappuzha", "nickname": "Venice of the East", "theme": "Backwaters, Beaches, Coir Industry", "lat": 9.4981, "lon": 76.3388,
            "transport": { "airport": "Nearest is Cochin (COK), ~83 km away.", "train": "Alappuzha Railway Station (ALLP)", "local": "Houseboat, Canoe, Auto-rickshaw" },
            "hotels": [ { "name": "Punnamada Resort (Luxury)", "type": "Resort", "rating": 4.7, "price": "High" }, { "name": "Premium AC Houseboat (Mid-range)", "type": "Houseboat", "rating": 4.5, "price": "Mid" }, { "name": "Johnson's Homestay (Budget)", "type": "Homestay", "rating": 4.5, "price": "Low" } ],
            "local_tips": [ "**Houseboats:** Book an overnight stay in a houseboat for the full experience. A 1-day cruise is also an option.", "**Food:** 'Karimeen Pollichathu' (pearl-spot fish fry) is a must-try." ],
            "hidden_gem": { "name": "Kuttanad", "desc": "This isn't a single spot, but a vast region of paddy fields *below sea level*. Take a canoe ride through the inner villages, away from the main houseboat routes, to see real backwater life." },
            "places": [
                { "name": "Alappuzha Backwaters", "category": "Backwaters", "highlights": ["Houseboat Cruises", "Punnamada Lake", "Snake Boat Race"], "keywords": ["houseboat", "kuttanad", "canal", "venice", "alleppey"], "rating": 4.9, "nearby": ["Kuttanad Paddy Fields", "Alappuzha Beach"] },
                { "name": "Marari Beach", "category": "Beach", "highlights": ["Fishing Village", "Ayurveda Resorts", "Serene"], "keywords": ["mararikulam", "sea", "sand", "resort", "marari"], "rating": 4.5, "nearby": ["Mararikulam Mahadeva Temple"] }
            ]
        },
        // --- 5. KTM ---
        {
            "id": "KTM", "name": "Kottayam", "nickname": "Land of Letters, Lakes, and Latex", "theme": "Lakes, Rubber, Media", "lat": 9.5916, "lon": 76.5222,
            "transport": { "airport": "Nearest is Cochin (COK) ~80 km.", "train": "Kottayam Railway Station (KTYM)", "local": "Buses and taxis. Gateway to Kumarakom." },
            "hotels": [ { "name": "Kumarakom Lake Resort (Luxury)", "type": "Resort", "rating": 4.9, "price": "High" }, { "name": "Coconut Lagoon - CGH (Luxury)", "type": "Resort", "rating": 4.8, "price": "High" }, { "name": "Backwater Ripples (Mid-range)", "type": "Resort", "rating": 4.4, "price": "Mid" } ],
            "local_tips": [ "**Experience:** Kumarakom is the more tranquil, high-end backwater destination compared to Alappuzha.", "**Nature:** Visit the bird sanctuary early in the morning." ],
            "hidden_gem": { "name": "Aymanam Village", "desc": "This is the village featured in the book 'The God of Small Things'. It's a serene, non-touristy area perfect for a peaceful walk or canoe ride." },
            "places": [
                { "name": "Kumarakom Bird Sanctuary", "category": "Wildlife/Nature", "highlights": ["Vembanad Lake islands", "Migratory birds", "Boating"], "keywords": ["bird", "lake", "boating", "kumarakom", "vembanad"], "rating": 4.5, "nearby": ["Vembanad Lake", "Aymanam Village"] },
                { "name": "Vagamon Meadows", "category": "Hill Station", "highlights": ["Rolling green hills", "Pine forests", "Paragliding spot"], "keywords": ["hill", "meadows", "trek", "adventure", "vagamon"], "rating": 4.7, "nearby": ["Vagamon Pine Forest", "Marmala Waterfalls"] },
                { "name": "Illikkal Kallu", "category": "Hill Station", "highlights": ["Mystical rock formations", "Panoramic views", "Trekking point"], "keywords": ["rock", "trek", "viewpoint"], "rating": 4.4, "nearby": ["Kattikayam Waterfalls"] }
            ]
        },
        // --- 6. IDK ---
        {
            "id": "IDK", "name": "Idukki", "nickname": "Hill Station Delight", "theme": "Hill Stations, Spice Plantations, Dams", "lat": 9.8407, "lon": 77.0097,
            "transport": { "airport": "Nearest is Cochin (COK) ~110 km to Munnar.", "train": "Nearest is Aluva (AWY) ~110 km to Munnar.", "local": "Local buses and taxis/jeeps are required." },
            "hotels": [ { "name": "SpiceTree Munnar (Luxury)", "type": "Resort", "rating": 4.9, "price": "High" }, { "name": "Tea County (KTDC, Mid-range)", "type": "Resort", "rating": 4.6, "price": "Mid" }, { "name": "Zostel Munnar (Budget)", "type": "Hostel", "rating": 4.7, "price": "Low" } ],
            "local_tips": [ "**Shopping:** Buy fresh spices like cardamom and pepper from spice gardens in Thekkady.", "**Munnar:** Visit a tea factory to see how tea is processed. 'Top Station' offers breathtaking views." ],
            "hidden_gem": { "name": "Kolukkumalai Tea Estate", "desc": "The highest organic tea plantation in the world. You need to hire a 4x4 jeep to get there, but the sunrise view from the top is absolutely unforgettable." },
            "places": [
                { "name": "Munnar Tea Plantations", "category": "Hill Station", "highlights": ["Tea Estates", "Eravikulam National Park (Nilgiri Tahr)", "Cool Climate"], "keywords": ["tea", "munnar", "hills", "romantic", "trek"], "rating": 4.8, "nearby": ["Munnar Tea Museum", "Mattupetty Dam", "Top Station"] },
                { "name": "Thekkady (Periyar Tiger Reserve)", "category": "Wildlife/Nature", "highlights": ["Tiger Reserve", "Spice Garden Tours", "Boating in Periyar Lake"], "keywords": ["periyar", "thekkady", "wildlife", "jungle", "spice"], "rating": 4.7, "nearby": ["Periyar Lake Boating", "Spice Plantations", "Gavi Forest"] },
                { "name": "Idukki Arch Dam", "category": "Man-made/Viewpoint", "highlights": ["Asia's largest arch dam", "Panoramic valley views"], "keywords": ["dam", "viewpoint", "water"], "rating": 4.5, "nearby": ["Cheruthoni Dam", "Kalvari Mount"] }
            ]
        },
        // --- 7. EKL ---
        {
            "id": "EKL", "name": "Ernakulam", "nickname": "Commercial Capital", "theme": "City Life, History, Beaches", "lat": 9.9312, "lon": 76.2673,
            "transport": { "airport": "Cochin International Airport (COK)", "train": "Ernakulam Junction (ERS) & Ernakulam Town (ERN)", "local": "Kochi Metro, Taxis (Uber/Ola), Auto-rickshaws, Public ferries" },
            "hotels": [ { "name": "Grand Hyatt Kochi Bolgatty (Luxury)", "type": "Hotel", "rating": 4.8, "price": "High" }, { "name": "Brunton Boatyard (Heritage)", "type": "Hotel", "rating": 4.7, "price": "High" }, { "name": "Dutch Bungalow (Mid-range)", "type": "Homestay", "rating": 4.6, "price": "Mid" } ],
            "local_tips": [ "**Culture:** Explore 'Jew Town' in Mattancherry for antique shops and the historic 'Paradesi Synagogue'.", "**Art:** Fort Kochi is famous for street art and the 'Kochi-Muziris Biennale' art festival." ],
            "hidden_gem": { "name": "Paniyeli Poru", "desc": "A beautiful, rocky riverbed spot on the Periyar River, about 60km from the city. It's a serene, non-touristy eco-tourism spot perfect for a day trip." },
            "places": [
                { "name": "Fort Kochi & Chinese Nets", "category": "Historical", "highlights": ["Colonial history", "Chinese fishing nets", "Art Galleries"], "keywords": ["kochi", "fort kochi", "history", "art", "nets", "port"], "rating": 4.7, "nearby": ["St. Francis Church", "Dutch Cemetery", "Kochi Biennale Pavilions"] },
                { "name": "Mattancherry Palace", "category": "Historical", "highlights": ["Mural paintings", "Jewish Synagogue (Jew Town)"], "keywords": ["palace", "history", "museum", "jew town"], "rating": 4.4, "nearby": ["Paradesi Synagogue", "Jew Town Antique Shops"] },
                { "name": "Marine Drive", "category": "City/Viewpoint", "highlights": ["Sunset promenade", "Backwater views", "Boating"], "keywords": ["city", "walk", "boating", "ernakulam"], "rating": 4.3, "nearby": ["Broadway Market", "Rainbow Bridge"] }
            ]
        },
        // --- 8. TSR ---
        {
            "id": "TSR", "name": "Thrissur", "nickname": "Cultural Capital", "theme": "Culture, Festivals, Waterfalls", "lat": 10.5276, "lon": 76.2144,
            "transport": { "airport": "Nearest is Cochin (COK) ~55 km.", "train": "Thrissur Railway Station (TCR)", "local": "Buses and auto-rickshaws." },
            "hotels": [ { "name": "Joys Palace (Luxury)", "type": "Hotel", "rating": 4.6, "price": "High" }, { "name": "Casino Hotel (Mid-range)", "type": "Hotel", "rating": 4.3, "price": "Mid" }, { "name": "Riverok Villas (Budget/Eco)", "type": "Resort", "rating": 4.5, "price": "Low" } ],
            "local_tips": [ "**Festival:** This is the home of 'Thrissur Pooram' (April/May), one of the world's most spectacular festivals. Plan your trip around it!", "**Pilgrimage:** Guruvayur Temple, one of the most important in Kerala, is nearby." ],
            "hidden_gem": { "name": "Vazhachal Waterfalls", "desc": "Just 5km from the famous Athirappilly Falls, most tourists skip this. It's a beautiful, cascading waterfall that's perfect for nature walks and photography, with less of a crowd." },
            "places": [
                { "name": "Athirappilly Waterfalls", "category": "Waterfalls", "highlights": ["Niagara of Kerala", "Sholayar Forest", "Film spot"], "keywords": ["falls", "nature", "trek", "film spot", "athirappilly"], "rating": 4.8, "nearby": ["Vazhachal Waterfalls", "Charpa Falls"] },
                { "name": "Vadakkunnathan Temple", "category": "Pilgrimage", "highlights": ["Thrissur Pooram venue", "Ancient Architecture"], "keywords": ["temple", "pooram", "culture", "vadakkunnathan"], "rating": 4.7, "nearby": ["Thrissur Zoo", "Paramekkavu Bagavathi Temple"] },
                { "name": "Guruvayur Sree Krishna Temple", "category": "Pilgrimage", "highlights": ["Major Hindu temple", "Punnathurkotta elephant sanctuary"], "keywords": ["temple", "elephant", "hindu", "guruvayoor"], "rating": 4.8, "nearby": ["Punnathur Kotta (Elephant Camp)", "Mammiyur Temple"] }
            ]
        },
        // --- 9. PKD ---
        {
            "id": "PKD", "name": "Palakkad", "nickname": "The Gateway of Kerala", "theme": "Forts, Forests, Dams", "lat": 10.7867, "lon": 76.6548,
            "transport": { "airport": "Nearest is Coimbatore (CJB) ~55 km (in Tamil Nadu).", "train": "Palakkad Junction (PGT)", "local": "Buses and taxis." },
            "hotels": [ { "name": "Kairali Ayurvedic Healing Village (Luxury)", "type": "Resort", "rating": 4.7, "price": "High" }, { "name": "Distil (Mid-range)", "type": "Hotel", "rating": 4.4, "price": "Mid" }, { "name": "Hotel Gazala (Budget)", "type": "Hotel", "rating": 4.0, "price": "Low" } ],
            "local_tips": [ "**Nature:** Visit Silent Valley National Park, one of the last undisturbed tracts of rainforest in India.", "**Culture:** This district has a strong Tamil influence. 'Palakkad Fort' is a must-visit." ],
            "hidden_gem": { "name": "Nelliyampathy Hills", "desc": "Often called the 'Poor Man's Ooty', this is a stunning hill station with tea estates and viewpoints that is far less commercialized than Munnar." },
            "places": [
                { "name": "Silent Valley National Park", "category": "Wildlife/Nature", "highlights": ["Evergreen rainforest", "Lion-tailed macaque", "Biodiversity hotspot"], "keywords": ["silent", "jungle", "reserve", "eco", "valley"], "rating": 4.7, "nearby": ["Mukkali"] },
                { "name": "Malampuzha Dam & Garden", "category": "Man-made/Garden", "highlights": ["Yakshi statue", "Ropeway", "Rock Garden"], "keywords": ["dam", "garden", "picnic", "ropeway", "malampuzha"], "rating": 4.5, "nearby": ["Malampuzha Ropeway", "Rock Garden"] },
                { "name": "Palakkad Fort (Tipu's Fort)", "category": "Historical", "highlights": ["18th-century fort", "Hanuman Temple"], "keywords": ["fort", "history", "architecture", "tipu sultan"], "rating": 4.3, "nearby": ["Vadakkanthara Temple"] }
            ]
        },
        // --- 10. MPM ---
        {
            "id": "MPM", "name": "Malappuram", "nickname": "Land of Football", "theme": "History, Literature, Teak", "lat": 11.0734, "lon": 76.0740,
            "transport": { "airport": "Calicut International Airport (CCJ) is in this district.", "train": "Nearest major stations are Tirur (TIR) and Kozhikode (CLT).", "local": "Buses and taxis." },
            "hotels": [ { "name": "The Raviz Kadavu (Luxury)", "type": "Resort", "rating": 4.6, "price": "High" }, { "name": "Hotel Rydges Inn (Mid-range)", "type": "Hotel", "rating": 4.3, "price": "Mid" }, { "name": "NC Gardens & Motel (Budget)", "type": "Hotel", "rating": 4.1, "price": "Low" } ],
            "local_tips": [ "**History:** A major center for Mappila (Kerala Muslim) culture.", "**Nature:** Visit the 'Teak Museum' in Nilambur, dedicated to the world's first teak plantation." ],
            "hidden_gem": { "name": "Kottakkal Arya Vaidya Sala", "desc": "One of the most authentic and respected institutions for Ayurveda in the world. You can visit the medicinal herb garden and learn about traditional healing." },
            "places": [
                { "name": "Nilambur Teak Museum", "category": "Museum", "highlights": ["First Teak Museum in the world", "Teak plantations"], "keywords": ["teak", "museum", "forest", "nilambur"], "rating": 4.4, "nearby": ["Nilambur Kovilakam", "Canolly Plot (Teak Plantation)"] },
                { "name": "Kottakkunnu Park", "category": "Historical/Viewpoint", "highlights": ["Ruin of a fort", "Adventure park", "Sunset view"], "keywords": ["viewpoint", "fort", "park"], "rating": 4.3, "nearby": ["Malappuram Juma Masjid"] },
                { "name": "Tirunavaya Navamukunda Temple", "category": "Pilgrimage", "highlights": ["Located on the banks of Bharathappuzha", "Ancient temple"], "keywords": ["temple", "river", "hindu"], "rating": 4.5, "nearby": ["Mamankam ruins"] }
            ]
        },
        // --- 11. KZD ---
        {
            "id": "KZD", "name": "Kozhikode", "nickname": "City of Spices", "theme": "Spice Route, Beaches, Cuisine", "lat": 11.2588, "lon": 75.7804,
            "transport": { "airport": "Calicut International Airport (CCJ)", "train": "Kozhikode Railway Station (CLT)", "local": "Auto-rickshaws and buses." },
            "hotels": [ { "name": "The Raviz Calicut (Luxury)", "type": "Hotel", "rating": 4.7, "price": "High" }, { "name": "The Gateway Hotel (Mid-range)", "type": "Hotel", "rating": 4.5, "price": "Mid" }, { "name": "Calicut Homestay (Budget)", "type": "Homestay", "rating": 4.4, "price": "Low" } ],
            "local_tips": [ "**Cuisine:** This is a food paradise. Try 'Kozhikodan Halwa', 'Malabar Biryani', and visit 'S.M. Street' (Sweet Meat Street).", "**History:** This is where Vasco da Gama first landed in India, at Kappad Beach." ],
            "hidden_gem": { "name": "Kallai River", "desc": "Once the busiest timber trading hub in the world. Today, it's a quiet, atmospheric place to see old timber yards and the Kallai bridge, perfect for photographers." },
            "places": [
                { "name": "Kappad Beach", "category": "Beach/Historical", "highlights": ["Vasco da Gama's landing site (1498)", "Historical significance"], "keywords": ["vasco", "beach", "history", "kappad"], "rating": 4.5, "nearby": ["Thusharagiri Waterfalls (further away)"] },
                { "name": "Mishkal Mosque (Kuttichira)", "category": "Historical/Religious", "highlights": ["Historic 14th-century mosque", "Wood and tile architecture"], "keywords": ["mosque", "architecture", "history"], "rating": 4.6, "nearby": ["Kuttichira Tank", "Tali Siva Temple"] },
                { "name": "Beypore Port & Sulthan Battery", "category": "Man-made/History", "highlights": ["Ancient shipbuilding center (Uru)", "Suspension bridge"], "keywords": ["ship", "port", "history", "uru", "beypore"], "rating": 4.2, "nearby": ["Beypore Lighthouse", "Kallai River"] }
            ]
        },
        // --- 12. WYD ---
        {
            "id": "WYD", "name": "Wayanad", "nickname": "The Spice Garden of Kerala", "theme": "Caves, Waterfalls, Trekking", "lat": 11.6854, "lon": 76.1320,
            "transport": { "airport": "Nearest is Calicut (CCJ) ~85 km.", "train": "Nearest is Kozhikode (CLT) ~72 km.", "local": "Taxis/jeeps are essential. Places are far apart." },
            "hotels": [ { "name": "Vythiri Village Resort (Luxury)", "type": "Resort", "rating": 4.8, "price": "High" }, { "name": "Banasura Hill Resort (Eco-resort)", "type": "Resort", "rating": 4.7, "price": "High" }, { "name": "Zostel Wayanad (Budget)", "type": "Hostel", "rating": 4.6, "price": "Low" } ],
            "local_tips": [ "**Trekking:** Chembra Peak is a famous trek. Edakkal Caves also requires an uphill walk.", "**Nature:** Stay in a 'Treehouse' for a unique Wayanad experience." ],
            "hidden_gem": { "name": "Phantom Rock", "desc": "A unique rock formation resembling a skull, located near Ambalavayal. It's a great spot for a short hike and offers fantastic views with very few tourists." },
            "places": [
                { "name": "Edakkal Caves", "category": "Historical/Trekking", "highlights": ["Neolithic rock carvings", "Panoramic views"], "keywords": ["cave", "trek", "history", "edakkal"], "rating": 4.6, "nearby": ["Wayanad Heritage Museum", "Phantom Rock"] },
                { "name": "Soochipara Falls", "category": "Waterfalls", "highlights": ["Three-tiered waterfall", "Trekking"], "keywords": ["falls", "nature", "trek", "soochipara"], "rating": 4.5, "nearby": ["Chembra Peak"] },
                { "name": "Banasura Sagar Dam", "category": "Man-made/Viewpoint", "highlights": ["Largest earthen dam in India", "Speed boating", "Islands"], "keywords": ["dam", "boating", "viewpoint", "banasura"], "rating": 4.4, "nearby": ["Karlad Lake (Ziplining)"] }
            ]
        },
        // --- 13. KNR ---
        {
            "id": "KNR", "name": "Kannur", "nickname": "The Land of Looms and Lore", "theme": "Theyyam, Forts, Beaches", "lat": 11.8745, "lon": 75.3704,
            "transport": { "airport": "Kannur International Airport (CNN)", "train": "Kannur Railway Station (CAN)", "local": "Buses and auto-rickshaws." },
            "hotels": [ { "name": "Mascot Beach Resort (Mid-range)", "type": "Resort", "rating": 4.4, "price": "Mid" }, { "name": "Kairali Heritage (Mid-range)", "type": "Resort", "rating": 4.3, "price": "Mid" }, { "name": "Seashell Haris Beach Home (Budget)", "type": "Homestay", "rating": 4.6, "price": "Low" } ], // Corrected typo here
            "local_tips": [ "**Culture:** This is the land of 'Theyyam'. Visit between December and April to witness this vibrant ritual dance at local temples.", "**Experience:** Don't miss the Muzhappilangad Drive-in Beach." ],
            "hidden_gem": { "name": "V-Pra Kaayal Floating Park", "desc": "A beautiful floating park in Valiyaparamba backwaters. It's a fantastic, family-friendly spot that is very popular with locals but often missed by tourists." },
            "places": [
                { "name": "St. Angelo Fort", "category": "Historical", "highlights": ["Portuguese fort (1505)", "Sea views"], "keywords": ["fort", "history", "sea"], "rating": 4.6, "nearby": ["Arakkal Museum", "Payyambalam Beach"] },
                { "name": "Muzhappilangad Drive-in Beach", "category": "Beach", "highlights": ["India's only drive-in beach", "Motor sports"], "keywords": ["drive-in", "beach", "car", "muzhappilangad"], "rating": 4.7, "nearby": ["Ezhara Beach"] },
                { "name": "Parassinikadavu Muthappan Temple", "category": "Pilgrimage/Culture", "highlights": ["Theyyam performance daily", "Located on river bank"], "keywords": ["theyyam", "temple", "culture", "muthappan"], "rating": 4.8, "nearby": ["Vismaya Water Park", "Snake Park"] }
            ]
        },
        // --- 14. KGD ---
        {
            "id": "KGD", "name": "Kasaragod", "nickname": "The Northern Jewel", "theme": "Forts, Rivers, Backwaters", "lat": 12.5080, "lon": 74.9887,
            "transport": { "airport": "Nearest is Mangalore (IXE) ~50 km (in Karnataka).", "train": "Kasaragod Railway Station (KGQ)", "local": "Buses and auto-rickshaws." },
            "hotels": [ { "name": "Taj Bekal Resort & Spa (Luxury)", "type": "Resort", "rating": 4.8, "price": "High" }, { "name": "The Lalit Resort & Spa Bekal (Luxury)", "type": "Resort", "rating": 4.7, "price": "High" }, { "name": "Bekal Palace (Budget)", "type": "Hotel", "rating": 4.1, "price": "Low" } ],
            "local_tips": [ "**Culture:** See the 'Ananthapura Lake Temple', the only lake temple in Kerala.", "**Language:** This district is very diverse. You will hear Malayalam, Tulu, Kannada, and Konkani." ],
            "hidden_gem": { "name": "Ranipuram Hills", "desc": "Often called the 'Ooty of Kasaragod', this is a stunning trekking destination with rolling green hills and forests. It's a perfect, cool escape from the coastal heat." },
            "places": [
                { "name": "Bekal Fort", "category": "Historical", "highlights": ["Largest fort in Kerala", "Keyhole shape", "Film spot"], "keywords": ["bekal", "fort", "history", "beach"], "rating": 4.9, "nearby": ["Bekal Beach", "Chandragiri Fort"] },
                { "name": "Ananthapura Lake Temple", "category": "Pilgrimage", "highlights": ["Only lake temple in Kerala", "Guarded by a crocodile"], "keywords": ["temple", "lake", "unique", "crocodile"], "rating": 4.6, "nearby": ["Madhur Temple"] },
                { "name": "Valiyaparamba Backwaters", "category": "Backwaters", "highlights": ["Northern backwater stretch", "River cruise"], "keywords": ["backwater", "river", "boating"], "rating": 4.5, "nearby": ["Bekal Hole Aqua Park"] }
            ]
        }
    ]
};

// ==============================================================================
// 2. ITINERARY & VIBE DATA
// ==============================================================================
const ITINERARY_MOCK = {
    "3_day": { "title": "3-Day Highlights (Kochi & Backwaters)", "plan": ["**Day 1:** Arrive in Kochi (COK). Explore Fort Kochi...", "**Day 2:** Transfer to Alappuzha. Overnight houseboat cruise.", "**Day 3:** Depart from Kochi."], "startPlace": "Fort Kochi & Chinese Nets" },
    "5_day": { "title": "5-Day Hills & Backwaters", "plan": ["**Day 1:** Arrive Kochi, transfer to Munnar.", "**Day 2:** Munnar sightseeing.", "**Day 3:** Transfer to Alappuzha.", "**Day 4:** Houseboat cruise.", "**Day 5:** Depart from Kochi."], "startPlace": "Munnar Tea Plantations" },
    "7_day": { "title": "7-Day \"God's Own Country\" Dive", "plan": ["**Day 1:** Kochi.", "**Day 2-3:** Munnar.", "**Day 4:** Thekkady.", "**Day 5:** Alappuzha.", "**Day 6:** Kovalam/Varkala.", "**Day 7:** Depart from Trivandrum."], "startPlace": "Fort Kochi & Chinese Nets" }
};
const VIBE_ITINERARY_MOCK = {
    "romantic": { "title": "Romantic Getaway (6 Days)", "plan": ["**Day 1-2:** Munnar (Luxury Resort)", "**Day 3-4:** Thekkady (Spice Plantations)", "**Day 5:** Kumarakom (Backwater Resort)", "**Day 6:** Depart from Kochi."], "startPlace": "Munnar Tea Plantations" },
    "adventure": { "title": "Adventure & Trekking (7 Days)", "plan": ["**Day 1-2:** Munnar (Trekking)", "**Day 3:** Thekkady (Bamboo Rafting)", "**Day 4-5:** Vagamon (Paragliding)", "**Day 6:** Alappuzha (Kayaking)", "**Day 7:** Depart from Kochi."], "startPlace": "Munnar Tea Plantations" },
    "foodie": { "title": "Malabar Foodie Tour (5 Days)", "plan": ["**Day 1-2:** Kozhikode (Malabar Biryani, Halwa)", "**Day 3:** Thalassery (Thalassery Biryani)", "**Day 4:** Kochi (Seafood, Cafes)", "**Day 5:** Depart from Kochi."], "startPlace": "Kappad Beach" } // Changed startPlace to a place
};

// ==============================================================================
// 3. SEASONAL & CHALLENGE DATA
// ==============================================================================
const SEASONAL_TIPS_MOCK = [
    { months: [12, 1, 2], name: "Peak Season (Dec - Feb)", tip: "The weather is cool and dry. Perfect for beaches, backwaters, and catching **Theyyam** performances in Kannur & Kasaragod." },
    { months: [3, 4, 5], name: "Summer (Mar - May)", tip: "Hot and humid. Best to visit hill stations like **Munnar** or **Wayanad**. It's also the season for temple festivals like **Thrissur Pooram**!" },
    { months: [6, 7, 8], name: "Monsoon (Jun - Aug)", tip: "Heavy rain, but stunningly green! Best for **Ayurveda** treatments. You can see the **Snake Boat Races** in August." },
    { months: [9, 10, 11], name: "Post-Monsoon (Sep - Nov)", tip: "Lush green landscapes with fewer crowds. Waterfalls like **Athirappilly** will be at their fullest." }
];
const TRAVEL_CHALLENGE_MOCK = [
    { id: "sadya", text: "Eat a 'Sadya' feast on a banana leaf (with your hands!)" },
    { id: "elephant", text: "Spot a wild elephant" },
    { id: "spices", text: "Bargain for fresh spices in a local market" }, // Corrected ID
    { id: "suleimani", text: "Drink 'Suleimani' (black tea) from a local 'chaya kada'" },
    { id: "bus", text: "Ride in a classic red-and-yellow KSRTC bus" }
];


// ==============================================================================
// 5. CHATBOT CORE LOGIC (Fully Upgraded & Corrected)
// ==============================================================================
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const menuBtn = document.getElementById('menu-btn');
const sideLinks = document.querySelectorAll('.side-link');
const contextDisplay = document.getElementById('context-display');

let userContext = { focus: 'General Kerala', lastDistrict: null, tripItinerary: [], travelMonth: null, challengeProgress: [] };
let isTyping = false;
const MAIN_MENU_REPLIES = [
    { text: "Explore Districts", action: "explore_all" },
    { text: "Plan a Trip", action: "plan_trip_gateway" },
    { text: "Top 5 Spots", action: "top_five" },
    { text: "Local Tips", action: "local_tips" }
];

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#chat-window .quick-reply').forEach(b => b.addEventListener('click', handleQuickReply)); // Initial buttons only
    sideLinks.forEach(l => l.addEventListener('click', handleSideLink));
    menuBtn.addEventListener('click', showMainMenu);
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
    updateContextDisplay();
});

// --- UI HELPERS ---
function appendMessage(content, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    if (typeof content === 'string') {
        // Basic Markdown support for bold text
        content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        messageDiv.innerHTML = `<p>${content}</p>`;
    } else {
        messageDiv.appendChild(content);
    }
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return messageDiv; // Return for attaching listeners
}

function showTypingIndicator() {
    if (isTyping) return;
    isTyping = true;
    const indicatorDiv = document.createElement('div');
    indicatorDiv.classList.add('message', 'bot-message', 'typing-indicator-wrapper');
    indicatorDiv.id = 'typing-indicator';
    indicatorDiv.innerHTML = `<div class="typing-indicator"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
    chatWindow.appendChild(indicatorDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
function hideTypingIndicator() {
    isTyping = false;
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}
function updateContext(newFocus, newLastDistrict = undefined) {
    userContext.focus = newFocus;
    if (newLastDistrict !== undefined) userContext.lastDistrict = newLastDistrict;
    updateContextDisplay();
}
function updateContextDisplay() {
    let contextText = userContext.focus;
    if (userContext.lastDistrict) contextText += ` (${userContext.lastDistrict.name})`;
    if (userContext.travelMonth) contextText += ` [${userContext.travelMonth}]`;
    contextDisplay.textContent = contextText;
}

// --- MAIN INPUT HANDLING ---
function sendMessage() {
    if (isTyping) return;
    const text = userInput.value.trim();
    if (text === '') return;
    appendMessage(text, 'user-message');
    userInput.value = '';
    getBotResponse(text);
}
// **CORRECTED:** Use getAttribute for reliability
function handleQuickReply(event) {
    const target = event.currentTarget;
    const action = target.getAttribute('data-action');
    const value = target.getAttribute('data-value') || target.textContent;
    appendMessage(target.textContent, 'user-message');
    processAction(action, value);
}
// **CORRECTED:** Use getAttribute for reliability
function handleSideLink(event) {
    const target = event.currentTarget;
    const action = target.getAttribute('data-action');
    const value = target.getAttribute('data-value') || target.textContent.replace(/^[^\s]+ /g, '');
    processAction(action, value, true); // true = isSideLink
}

// ==============================================================================
// 6. CORE SMART LOGIC (Handles free-text)
// ==============================================================================
// **CORRECTED:** Added back the missing helper function
const findDistrictInText = (text) => {
    const lowerText = text.toLowerCase();
    return KERALA_DATA_MOCK.districts.find(d =>
        lowerText.includes(d.name.toLowerCase()) ||
        lowerText.includes(d.id.toLowerCase())
    );
};

function getBotResponse(userText) {
    showTypingIndicator();
    const lowerText = userText.toLowerCase();

    setTimeout(() => {
        hideTypingIndicator();
        // Intent Keywords (condensed) - ADDED NEW INTENTS (WHY, BUDGET, SAFETY)
        const INTENTS = {
            GREETINGS: ['hello', 'hi', 'hey'], THANKS: ['thanks', 'thank you'], MENU: ['home', 'main menu', 'start over'],
            ITINERARY: ['plan', 'itinerary', 'trip', 'days'], VIBE: ['vibe', 'romantic', 'adventure', 'foodie'],
            HOTEL: ['hotel', 'houseboat', 'stay', 'room', 'resort'], TRANSPORT: ['transport', 'airport', 'train', 'how to get', 'reach'],
            TIPS: ['tip', 'food', 'eat', 'festival', 'culture', 'shop', 'ayurveda'], GEM: ['hidden gem', 'secret', 'non-touristy'],
            NEARBY: ['nearby', 'what else is there', 'close to'], SEASON: ['visiting in', 'going in', 'best time', 'month'],
            CHALLENGE: ['challenge', 'game'],
            WHY: ['why visit', 'about kerala', 'general info', 'god\'s own country', 'about the state'], // NEW INTENT
            BUDGET: ['budget', 'money', 'cost', 'how much', 'cheap', 'expensive'], // NEW INTENT
            SAFETY: ['safe', 'safety', 'health', 'hospital'] // NEW INTENT
        };
        const hasIntent = (intent) => INTENTS[intent].some(w => lowerText.includes(w));

        // --- Intent Detection Order ---
        if (hasIntent('GREETINGS')) { appendMessage("Hello! How can I help you plan your Kerala trip?", 'bot-message'); appendQuickReplies(MAIN_MENU_REPLIES); return; }
        if (hasIntent('THANKS')) { appendMessage("You're welcome! Is there anything else I can help with?", 'bot-message'); return; }
        if (hasIntent('MENU')) { showMainMenu(); return; }
        
        // --- NEW GENERAL INTENTS (Addressing broader travel questions) ---
        if (hasIntent('WHY')) { handleGeneralKeralaInfo(); return; }
        if (hasIntent('BUDGET')) { handleBudgetRequest(); return; }
        if (hasIntent('SAFETY')) { handleSafetyRequest(); return; }

        if (hasIntent('SEASON')) {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const foundMonth = months.find(m => lowerText.includes(m.toLowerCase()));
            if (foundMonth) { handleSeasonalAdvisor(foundMonth); } else { processAction('ask_travel_month', 'ask_travel_month'); }
            return;
        }
        if (hasIntent('VIBE')) {
            if (lowerText.includes('romantic')) { showVibeItinerary('romantic'); return; }
            if (lowerText.includes('adventure')) { showVibeItinerary('adventure'); return; }
            if (lowerText.includes('foodie')) { showVibeItinerary('foodie'); return; }
            processAction('plan_by_vibe', 'plan_by_vibe');
            return;
        }
        if (hasIntent('ITINERARY')) {
            if (lowerText.includes('3')) { showItinerary("3_day"); return; }
            if (lowerText.includes('5')) { showItinerary("5_day"); return; }
            if (lowerText.includes('7')) { showItinerary("7_day"); return; }
            processAction("plan_trip_gateway", "plan_trip_gateway");
            return;
        }
        if (hasIntent('GEM')) {
            let districtMatch = findDistrictInText(lowerText) || userContext.lastDistrict;
            if (districtMatch) { handleHiddenGem(districtMatch); } else { processAction('ask_hidden_gem', 'ask_hidden_gem'); }
            return;
        }
        if (hasIntent('CHALLENGE')) { handleTravelChallenge(); return; }
        if (hasIntent('HOTEL')) {
            let districtMatch = findDistrictInText(lowerText) || userContext.lastDistrict;
            if (districtMatch) { handleHotelRequest(districtMatch); } else { appendMessage("Sure, for which district?", 'bot-message'); }
            return;
        }

        let placeMatch = findPlaceByName(lowerText);
        if (hasIntent('NEARBY') && placeMatch) { handleNearbyPlaces(placeMatch.place); return; }

        if (hasIntent('TRANSPORT')) {
            let districtMatch = findDistrictInText(lowerText) || (placeMatch && KERALA_DATA_MOCK.districts.find(d => d.id === placeMatch.districtId)) || userContext.lastDistrict;
            if (districtMatch) { handleTransportRequest(districtMatch); } else { appendMessage("I can provide travel info. For which destination?", 'bot-message'); }
            return;
        }
        if (hasIntent('TIPS')) { handleLocalTipsRequest(findDistrictInText(lowerText) || userContext.lastDistrict); return; }

        let districtMatch = findDistrictInText(lowerText);
        if (districtMatch) { updateContext(`Exploring ${districtMatch.name}`, districtMatch); showDistrictCard(districtMatch); return; }
        if (placeMatch) { const district = KERALA_DATA_MOCK.districts.find(d => d.id === placeMatch.districtId); updateContext(`About ${placeMatch.place.name}`, district); showPlaceCard(placeMatch.place, district); return; }

        // --- Improved Fallback (Final Catch-All for Smarter/Wider Queries) ---
        if (userText.length > 5) {
            appendMessage("That's a great question! I am Gody, a specialist in Kerala's 14 districts. I can't answer *every* general travel question (like current visa rules), but I can tell you all about our key topics: **Districts**, **Trip Planning**, **Hidden Gems**, **Local Food**, **Budget**, and **Safety**.", 'bot-message');
            appendQuickReplies(MAIN_MENU_REPLIES);
            return;
        }

        // --- Original Fallback ---
        appendMessage("I'm sorry, I didn't quite understand that. You can ask me about districts (like 'Munnar'), hotels, transport, or local tips.", 'bot-message');
        appendQuickReplies(MAIN_MENU_REPLIES);

    }, 1000);
}

// ==============================================================================
// 7. ACTION PROCESSOR (Handles button clicks)
// ==============================================================================
function processAction(action, value, isSideLink = false) {
    if (!isSideLink) showTypingIndicator();

    setTimeout(() => {
        if (!isSideLink) hideTypingIndicator();

        let botResponse = '';
        let newQuickReplies = [];
        let district;

        switch (action) {
            case 'explore_all':
                updateContext('District Exploration', null);
                const districtNames = KERALA_DATA_MOCK.districts.map(d => ({ text: d.name, action: "text_reply", value: d.name }));
                botResponse = "Here are all 14 districts! Which one would you like to know more about?";
                newQuickReplies = districtNames.slice(0, 7).concat([{ text: "Show more districts...", action: "show_more_districts" }]);
                break;
            case 'show_more_districts':
                const remainingDistricts = KERALA_DATA_MOCK.districts.map(d => ({ text: d.name, action: "text_reply", value: d.name })).slice(7);
                botResponse = "Here are the other districts:";
                newQuickReplies = remainingDistricts;
                break;

            case 'plan_trip_gateway':
                updateContext('Trip Planning', null);
                botResponse = "How would you like to plan your trip?";
                newQuickReplies = [
                    { text: "By Day Count (e.g., 3, 5 Day)", action: "plan_by_daycount" },
                    { text: "By Vibe (e.g., Romantic)", action: "plan_by_vibe" },
                    { text: "By Season", action: "ask_travel_month" }
                ];
                break;
            case 'plan_by_daycount':
                botResponse = "Great! I have some pre-made itineraries. Which one suits you?";
                newQuickReplies = [
                    { text: "3-Day Highlights", action: "show_itinerary", value: "3_day" },
                    { text: "5-Day Hills & Backwaters", action: "show_itinerary", value: "5_day" },
                    { text: "7-Day Deep Dive", action: "show_itinerary", value: "7_day" }
                ];
                break;
            case 'show_itinerary':
                showItinerary(value); return;

            case 'plan_by_vibe':
                updateContext('Trip Planning', null);
                botResponse = "What kind of vibe are you looking for?";
                newQuickReplies = [
                    { text: "❤️ Romantic Getaway", action: "show_vibe_itinerary", value: "romantic" },
                    { text: "🧗 Adventure & Trekking", action: "show_vibe_itinerary", value: "adventure" },
                    { text: "🍜 Malabar Foodie Tour", action: "show_vibe_itinerary", value: "foodie" }
                ];
                break;
            case 'show_vibe_itinerary':
                showVibeItinerary(value); return;

            case 'ask_travel_month':
                updateContext('Seasonal Planning', userContext.lastDistrict);
                botResponse = "What month are you planning to visit? This helps me give seasonal advice.";
                newQuickReplies = [
                    { text: "Jan-Mar", action: "set_travel_month", value: "January" }, { text: "Apr-Jun", action: "set_travel_month", value: "April" },
                    { text: "Jul-Sep", action: "set_travel_month", value: "July" }, { text: "Oct-Dec", action: "set_travel_month", value: "October" }
                ];
                break;
            case 'set_travel_month':
                handleSeasonalAdvisor(value); return;

            case 'ask_hidden_gem':
                if (userContext.lastDistrict) {
                    handleHiddenGem(userContext.lastDistrict);
                } else {
                    updateContext('Hidden Gems', null);
                    botResponse = "Which district's hidden gem do you want to see?";
                    newQuickReplies = KERALA_DATA_MOCK.districts.map(d => ({ text: d.name, action: "show_hidden_gem_for", value: d.id })).slice(0, 7);
                }
                return; // Return because handled by function
            case 'show_hidden_gem_for':
                district = KERALA_DATA_MOCK.districts.find(d => d.id === value);
                if (district) handleHiddenGem(district);
                return; // Return because handled by function

            case 'show_travel_challenge':
                handleTravelChallenge(); return; // Return because handled by function
            case 'complete_challenge_item':
                if (!userContext.challengeProgress.includes(value)) {
                    userContext.challengeProgress.push(value);
                }
                botResponse = `Awesome! You've completed **${userContext.challengeProgress.length} / ${TRAVEL_CHALLENGE_MOCK.length}** challenges! Keep it up!`;
                newQuickReplies = [{ text: "Show Challenge List", action: "show_travel_challenge" }];
                break;

            case 'find_hotels':
                district = KERALA_DATA_MOCK.districts.find(d => d.id === value);
                if (district) { updateContext(`Hotels in ${district.name}`, district); handleHotelRequest(district); }
                return; // Return because handled by function
            case 'find_transport':
                district = KERALA_DATA_MOCK.districts.find(d => d.id === value);
                if (district) { updateContext(`Transport to ${district.name}`, district); handleTransportRequest(district); }
                return; // Return because handled by function
            case 'local_tips':
                handleLocalTipsRequest(userContext.lastDistrict); return; // Return because handled by function
            case 'top_five':
                updateContext('Top Recommendations', null);
                botResponse = "The consensus Top 5: **Bekal Fort**, **Munnar**, **Alappuzha Backwaters**, **Fort Kochi**, and **Varkala Cliff**. Which one first?";
                newQuickReplies = [ { text: "Tell me about Munnar", action: "text_reply", value: "Munnar" }, { text: "Tell me about Bekal Fort", action: "text_reply", value: "Bekal Fort" } ];
                break;
            case 'district_places':
                district = KERALA_DATA_MOCK.districts.find(d => d.id === value);
                if (district) {
                    botResponse = `Here are the top spots in **${district.name}**: <ul>${district.places.map(p => `<li>**${p.name}** (${p.category})</li>`).join('')}</ul>`;
                    newQuickReplies = [ { text: `Find Hotels in ${district.name}`, action: "find_hotels", value: district.id }, { text: `Gody's Hidden Gem`, action: "show_hidden_gem_for", value: district.id } ];
                    updateContext(`Places in ${district.name}`, district);
                }
                break;

            case 'add_to_trip':
                const placeData = findPlaceByName(value);
                if (!placeData) { botResponse = `Sorry, I couldn't find details for ${value}.`; break; }
                const districtForPlace = KERALA_DATA_MOCK.districts.find(d => d.id === placeData.districtId);
                const placeToAdd = { name: placeData.place.name, districtName: districtForPlace.name, lat: districtForPlace.lat, lon: districtForPlace.lon };
                let warningMessage = "";
                if (userContext.tripItinerary.length > 0) {
                    const lastPlace = userContext.tripItinerary[userContext.tripItinerary.length - 1];
                    const distance = calculateDistance(placeToAdd.lat, placeToAdd.lon, lastPlace.lat, lastPlace.lon);
                    if (distance > 150) { warningMessage = `<br><br><b>Smart Navigator Tip:</b> **${placeToAdd.name}** is over **${Math.round(distance)} km** from **${lastPlace.name}**. Plan travel time!`; }
                }
                userContext.tripItinerary.push(placeToAdd);
                botResponse = `Added **${value}**! You have **${userContext.tripItinerary.length}** item(s).${warningMessage}`;
                newQuickReplies = [ { text: "Continue Exploring", action: "text_reply", value: "Explore" }, { text: "Show My Itinerary", action: "current_trip" } ];
                updateContext('Building Itinerary', districtForPlace);
                break;

            case 'current_trip':
            case 'show_itinerary_list': // Renamed for clarity
                botResponse = userContext.tripItinerary.length > 0 ? `Your itinerary: <ul>${userContext.tripItinerary.map(p => `<li>**${p.name}** (${p.districtName})</li>`).join('')}</ul>` : "Your itinerary is empty!";
                newQuickReplies = [ { text: "Add another Place", action: "text_reply", value: "Explore" }, { text: "Clear Itinerary", action: "clear_itinerary" } ];
                break;
            case 'clear_itinerary':
                userContext.tripItinerary = []; botResponse = "Itinerary cleared!"; newQuickReplies = MAIN_MENU_REPLIES; break;

            case 'show_nearby':
                const pData = findPlaceByName(value);
                if (pData) handleNearbyPlaces(pData.place); return; // Return because handled by function
            
            case 'find_hotels_budget': // NEW ACTION for Budget Request
                updateContext('Budget Hotels Search');
                botResponse = "To find the best budget hotels, I recommend looking at the 'Low' price options in the data. Which district should I check?";
                newQuickReplies = KERALA_DATA_MOCK.districts.map(d => ({ text: d.name, action: "find_hotels", value: d.id })).slice(0, 7);
                break;

            case 'filter_nature': handleCategoryFilter('Wildlife/Nature'); return;
            case 'filter_history': handleCategoryFilter('Historical'); return;
            case 'filter_backwaters': handleCategoryFilter('Backwaters'); return;

            case 'text_reply': getBotResponse(value); return; // Explicitly handle text replies
            default: getBotResponse(value); return; // Fallback for any unexpected actions

        }

        // Only append if botResponse was set (avoids empty bubbles)
        if (botResponse) appendMessage(botResponse, 'bot-message');
        if (newQuickReplies.length > 0) appendQuickReplies(newQuickReplies);

    }, 1000);
}

// ==============================================================================
// 8. DYNAMIC UI GENERATION (Cards)
// ==============================================================================
function attachQuickReplyListeners(container) {
    // Attach listeners only to buttons within the newly added message
    container.querySelectorAll('.quick-reply').forEach(button => {
        // Remove existing listener before adding a new one to prevent duplicates
        button.removeEventListener('click', handleQuickReply);
        button.addEventListener('click', handleQuickReply);
    });
}
function showDistrictCard(district) {
    const card = document.createElement('div');
    card.classList.add('rich-card');
    // Ensure places exist before reducing
    const avgRating = district.places && district.places.length > 0
        ? (district.places.reduce((acc, p) => acc + p.rating, 0) / district.places.length).toFixed(1)
        : 'N/A';
    const ratingStars = avgRating !== 'N/A' ? '⭐'.repeat(Math.round(parseFloat(avgRating))) : '';

    card.innerHTML = `
        <h3 class="card-title">${district.name} - ${district.nickname}</h3>
        <p><strong>Focus:</strong> ${district.theme}</p>
        <p class="card-rating">Avg. Rating: ${ratingStars} (${avgRating})</p>
        <div class="quick-replies">
            <button class="quick-reply" data-action="district_places" data-value="${district.id}">See All Places</button>
            <button class="quick-reply" data-action="find_hotels" data-value="${district.id}">Find Hotels</button>
            <button class="quick-reply" data-action="show_hidden_gem_for" data-value="${district.id}">💎 Gody's Gem</button>
        </div>
    `;
    const messageDiv = appendMessage(card, 'bot-message');
    attachQuickReplyListeners(messageDiv); // Pass the container div
}
function showPlaceCard(place, district) {
    const card = document.createElement('div');
    card.classList.add('rich-card');
    const ratingStars = '⭐'.repeat(Math.round(place.rating));

    card.innerHTML = `
        <h3 class="card-title">${place.name}</h3>
        <p><strong>Location:</strong> ${district.name}</p>
        <p class="card-rating">Rating: ${ratingStars} (${place.rating.toFixed(1)})</p>
        <p><strong>Highlights:</strong> ${place.highlights.join(', ')}.</p>
        <div class="quick-replies">
            <button class="quick-reply" data-action="add_to_trip" data-value="${place.name}">Add to My Trip</button>
            <button class="quick-reply" data-action="show_nearby" data-value="${place.name}">📍 What's Nearby?</button>
            <button class="quick-reply" data-action="find_transport" data-value="${district.id}">How to get here</button>
        </div>
    `;
    const messageDiv = appendMessage(card, 'bot-message');
    attachQuickReplyListeners(messageDiv); // Pass the container div
}
function appendQuickReplies(replies) {
    const qrDiv = document.createElement('div');
    qrDiv.classList.add('quick-replies');
    replies.forEach(reply => {
        const button = document.createElement('button');
        button.classList.add('quick-reply');
        button.textContent = reply.text;
        // Use setAttribute for data attributes
        button.setAttribute('data-action', reply.action || 'text_reply');
        button.setAttribute('data-value', reply.value || reply.text);
        qrDiv.appendChild(button);
    });
    const messageDiv = appendMessage(qrDiv, 'bot-message');
    attachQuickReplyListeners(messageDiv); // Pass the container div
}

// ==============================================================================
// 9. NEW FEATURE HANDLER FUNCTIONS (IMPROVED SMARTNESS)
// ==============================================================================
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
function handleHiddenGem(district) {
    updateContext(`Hidden Gem in ${district.name}`, district);
    const gem = district.hidden_gem;
    let botResponse = `💎 **Gody's Hidden Gem for ${district.name}** 💎<br><br>**${gem.name}**: ${gem.desc}`;
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies([ { text: `Tell me more about ${district.name}`, action: "text_reply", value: district.name }, { text: "Ask for another Gem", action: "ask_hidden_gem" } ]);
}
function handleSeasonalAdvisor(month) {
    userContext.travelMonth = month; updateContextDisplay();
    const monthIndex = new Date(`${month} 1, 2000`).getMonth(); // Get 0-11 index using a fixed year
    const season = SEASONAL_TIPS_MOCK.find(s => s.months.includes(monthIndex + 1));
    if (!season) { appendMessage(`Sorry, I couldn't determine the season for ${month}.`, 'bot-message'); return; } // Error handling
    let botResponse = `Visiting in **${month}** (**${season.name}**):<br><br>**My advice:** ${season.tip}`;
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies(MAIN_MENU_REPLIES);
}
function handleNearbyPlaces(place) {
    if (!place.nearby || place.nearby.length === 0) { appendMessage(`**${place.name}** is great on its own! Explore the rest of the district.`, 'bot-message'); return; }
    let botResponse = `While at **${place.name}**, also check out:<ul>${place.nearby.map(spot => `<li>**${spot}**</li>`).join('')}</ul>`;
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies([ { text: `Tell me about ${place.nearby[0]}`, action: "text_reply", value: place.nearby[0] }, { text: `Add ${place.name} to Trip`, action: "add_to_trip", value: place.name } ]);
}
function showVibeItinerary(vibeKey) {
    const itinerary = VIBE_ITINERARY_MOCK[vibeKey];
    if (!itinerary) { appendMessage("Sorry, couldn't find that vibe itinerary.", 'bot-message'); return; }
    updateContext(itinerary.title, null);
    const botResponse = `Here's my **${itinerary.title}**:<ul>${itinerary.plan.map(step => `<li>${step}</li>`).join('')}</ul>`;
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies([ { text: `Add ${itinerary.startPlace} to Trip`, action: "add_to_trip", value: itinerary.startPlace }, { text: "Show other vibes", action: "plan_by_vibe" } ]);
}
function handleTravelChallenge() {
    updateContext("Gody's Challenge", null);
    let botResponse = "🏆 **Gody's Kerala Travel Challenge!** 🏆<br><br>Complete these 5 challenges! Click one when done.";
    const challengeButtons = TRAVEL_CHALLENGE_MOCK.map(item => ({ text: `${userContext.challengeProgress.includes(item.id) ? '✅' : '⬜'} ${item.text}`, action: "complete_challenge_item", value: item.id }));
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies(challengeButtons);
}
// --- NEW FUNCTIONS FOR GENERAL KERALA INFO ---
function handleGeneralKeralaInfo() {
    updateContext('Why Visit Kerala');
    const points = KERALA_GENERAL_INFO.why_visit.map(p => `<li>${p}</li>`).join('');
    const botResponse = `Why visit Kerala? Here are the top reasons why it's called 'God's Own Country': <ul>${points}</ul>`;
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies([{ text: "Plan a Trip", action: "plan_trip_gateway" }, { text: "Top 5 Spots", action: "top_five" }]);
}

function handleBudgetRequest() {
    updateContext('Budget Planning');
    const points = KERALA_GENERAL_INFO.budget_guide.map(p => `<li>${p}</li>`).join('');
    const botResponse = `Here is a general budget guide for traveling in Kerala:<ul>${points}</ul>`;
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies([{ text: "Find Budget Hotels", action: "find_hotels_budget" }, { text: "Local Food & Tips", action: "local_tips" }]);
}

function handleSafetyRequest() {
    updateContext('Safety & Health');
    const points = KERALA_GENERAL_INFO.safety_tips.map(p => `<li>${p}</li>`).join('');
    const botResponse = `Kerala is generally very safe for travelers. Here are some key tips:<ul>${points}</ul>`;
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies([{ text: "Ask about Ayurveda", action: "text_reply", value: "Ayurveda" }, { text: "Local Tips", action: "local_tips" }]);
}


// ==============================================================================
// 10. STANDARD HANDLER & SUPPORT FUNCTIONS
// ==============================================================================
function handleHotelRequest(district) {
    let botResponse = `I don't have specific hotel listings for **${district.name}** yet, but it's known for ${district.theme.toLowerCase()}.`;
    if (district.hotels && district.hotels.length > 0) {
        botResponse = `Accommodation in **${district.name}**:<ul>${district.hotels.map(h => `<li><b>${h.name}</b> (${h.type}) - ${h.rating}⭐, Price: ${h.price}</li>`).join('')}</ul>`;
    }
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies([ { text: `Transport to ${district.name}`, action: "find_transport", value: district.id }, { text: "Local Tips", action: "local_tips" } ]);
}
function handleTransportRequest(district) {
    let botResponse = `I don't have detailed transport info for **${district.name}**.`;
    if (district.transport) {
        botResponse = `Travel info for **${district.name}**:<ul>` +
            (district.transport.airport ? `<li><b>✈️ Airport:</b> ${district.transport.airport}</li>` : '') +
            (district.transport.train ? `<li><b>🚆 Train:</b> ${district.transport.train}</li>` : '') +
            (district.transport.local ? `<li><b>🛺 Local:</b> ${district.transport.local}</li>` : '') + `</ul>`;
    }
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies([ { text: `Find Hotels in ${district.name}`, action: "find_hotels", value: district.id }, { text: "See Places", action: "district_places", value: district.id } ]);
}
function handleLocalTipsRequest(district = null) {
    let tips = [...KERALA_DATA_MOCK.local_tips];
    let title = "General tips for your Kerala trip:";
    if (district && district.local_tips) { 
        tips = [...district.local_tips, ...tips]; 
        title = `Tips for visiting **${district.name}** and general advice:`; 
    }
    appendMessage(`${title} <ul>${tips.map(tip => `<li>${tip}</li>`).join('')}</ul>`, 'bot-message');
    appendQuickReplies(MAIN_MENU_REPLIES);
}
function showItinerary(planKey) {
    const itinerary = ITINERARY_MOCK[planKey];
    if (!itinerary) return;
    updateContext(itinerary.title, null);
    appendMessage(`Here's the **${itinerary.title}**:<ul>${itinerary.plan.map(step => `<li>${step}</li>`).join('')}</ul>`, 'bot-message');
    appendQuickReplies([ { text: `Add ${itinerary.startPlace} to Trip`, action: "add_to_trip", value: itinerary.startPlace }, { text: "Show other plans", action: "plan_by_daycount" } ]);
}
function handleCategoryFilter(category) {
    updateContext(`Filtering by ${category}`);
    const filteredPlaces = KERALA_DATA_MOCK.districts.flatMap(d => d.places.map(p => ({ ...p, districtName: d.name, districtId: d.id }))).filter(p => p.category.includes(category)).sort((a, b) => b.rating - a.rating);
    if (filteredPlaces.length < 1) { appendMessage(`Couldn't find places matching '${category}'.`, 'bot-message'); return; }
    const topPlace = filteredPlaces[0];
    appendMessage(`Top **${category}** spot: **${topPlace.name}** in ${topPlace.districtName}.`, 'bot-message');
    appendQuickReplies([ { text: `Tell me more`, action: "text_reply", value: topPlace.name }, { text: `Add to Trip`, action: "add_to_trip", value: topPlace.name } ]);
}
function findPlaceByName(searchText) {
    const lowerSearch = searchText.toLowerCase().trim();
    if (!lowerSearch) return null; // Avoid searching for empty strings
    for (const district of KERALA_DATA_MOCK.districts) {
        for (const place of district.places) {
            const placeNameLower = place.name.toLowerCase();
            // Stricter matching: includes the search term OR a keyword matches exactly
            if (placeNameLower.includes(lowerSearch) || place.keywords.some(k => k === lowerSearch)) {
                return { place, districtId: district.id };
            }
        }
    }
    return null; // Explicitly return null if not found
}
function showMainMenu() {
    chatWindow.innerHTML = ''; // Clear chat
    updateContext('General Kerala', null); // Reset context
    appendMessage("Welcome back! How can I help you plan your Kerala trip?", 'bot-message');
    appendQuickReplies(MAIN_MENU_REPLIES);
}
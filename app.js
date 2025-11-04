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
            "transport": { 
                "airport": "Trivandrum International Airport (TRV)", 
                "train": "Thiruvananthapuram Central (TVC)", 
                "bus": "Main KSRTC bus terminal at Thampanoor. Regular AC & non-AC buses to Kochi, Kollam, and all major towns.",
                "local": "Auto-rickshaws (use meters in city), Taxis (Uber/Ola), KSRTC city buses." 
            },
            "booking_info": "Wide range of hotels. Best to book Varkala and Kovalam beach resorts well in advance during peak season (Dec-Feb).",
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
            "transport": { 
                "airport": "Nearest is Trivandrum (TRV), ~70 km away.", 
                "train": "Kollam Junction (QLN)", 
                "bus": "KSRTC bus stand near the railway station. Frequent services to Alappuzha, Trivandrum, and Thenmala.",
                "local": "Auto-rickshaws, Taxis, Local ferry services to islands like Munroe." 
            },
            "booking_info": "Famous for high-end backwater resorts. Munroe Island offers many budget-friendly homestays, which are best booked directly or via booking sites.",
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
            "transport": { 
                "airport": "Nearest is Trivandrum (TRV) ~119 km.", 
                "train": "Nearest major is Chengannur (CNGR) ~28 km.", 
                "bus": "Large KSRTC terminal. Main hub for buses to Sabarimala (Pamba). Good connectivity to Kottayam and Kollam.",
                "local": "KSRTC buses and private taxis/jeeps are the primary modes. Jeeps are needed for hilly areas like Gavi." 
            },
            "booking_info": "Accommodation is mostly functional guesthouses and mid-range hotels. Book well in advance during Sabarimala season (Nov-Jan).",
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
            "transport": { 
                "airport": "Nearest is Cochin (COK), ~83 km away.", 
                "train": "Alappuzha Railway Station (ALLP)", 
                "bus": "KSRTC bus stand in the city center. Frequent services to Kochi, Kollam, and Trivandrum.",
                "local": "Auto-rickshaws are plentiful. Canoes and Shikaras (small boats) are used for inner canals. Houseboats for main backwaters."
            },
            "booking_info": "Houseboats are the main attraction. It's highly recommended to book these in advance online, especially for overnight stays.",
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
            "transport": { 
                "airport": "Nearest is Cochin (COK) ~80 km.", 
                "train": "Kottayam Railway Station (KTYM)", 
                "bus": "Major KSRTC hub. Excellent connectivity to Kochi, Thekkady (Kumily), and Munnar.",
                "local": "Buses and taxis. Jetties at Kumarakom for boat services."
            },
            "booking_info": "Kumarakom is known for ultra-luxury backwater resorts and high-end Ayurvedic centers. Book these months in advance for good rates.",
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
            "transport": { 
                "airport": "Nearest is Cochin (COK) ~110 km to Munnar.", 
                "train": "Nearest is Aluva (AWY) ~110 km to Munnar.", 
                "bus": "Towns like Munnar and Thekkady (Kumily) have KSRTC stands. Buses from Kochi/Kottayam are frequent but slow (hilly roads).",
                "local": "Local buses, but auto-rickshaws and hired jeeps are essential for sightseeing as spots are far apart."
            },
            "booking_info": "Munnar and Thekkady are packed. Book hotels/resorts at least 2-3 months in advance for peak season. Many unique plantation stays are available.",
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
            "transport": { 
                "airport": "Cochin International Airport (COK)", 
                "train": "Ernakulam Junction (ERS) & Ernakulam Town (ERN)", 
                "bus": "Major hub at Vyttila Mobility Hub. Buses to all parts of South India. RedBus/AbhiBus are popular for private bus bookings.",
                "local": "Kochi Metro, Taxis (Uber/Ola), Auto-rickshaws, Public ferries (a cheap & scenic way to Fort Kochi)."
            },
            "booking_info": "Fort Kochi has heritage hotels and boutique guesthouses. Ernakulam (city) has business and modern hotels. Wide availability on all major booking platforms.",
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
            "transport": { 
                "airport": "Nearest is Cochin (COK) ~55 km.", 
                "train": "Thrissur Railway Station (TCR)", 
                "bus": "KSRTC stand near the railway station. Well-connected to Kochi, Palakkad, and Kozhikode.",
                "local": "Auto-rickshaws and local buses. Taxis needed for waterfalls."
            },
            "booking_info": "Good availability of city hotels. For Thrissur Pooram (Apr/May), hotels must be booked 6-8 months in advance.",
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
            "transport": { 
                "airport": "Nearest is Coimbatore (CJB) ~55 km (in Tamil Nadu).", 
                "train": "Palakkad Junction (PGT)", 
                "bus": "Major KSRTC and private bus stands. Gateway to Kerala from Tamil Nadu (Coimbatore).",
                "local": "Local buses and auto-rickshaws. Taxis needed for Nelliyampathy (hilly)."
            },
            "booking_info": "Known for Ayurvedic resorts (like Kairali) which should be booked as a package. Standard city hotels are easily available.",
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
            "transport": { 
                "airport": "Calicut International Airport (CCJ) is in this district.", 
                "train": "Nearest major stations are Tirur (TIR) and Kozhikode (CLT).", 
                "bus": "Well-connected by private and KSRTC buses, especially to Kozhikode and Palakkad.",
                "local": "Local buses and auto-rickshaws."
            },
            "booking_info": "Mostly business hotels and local lodges. Kottakkal is famous for Ayurvedic treatment centers, which should be booked for treatment, not just stays.",
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
            "transport": { 
                "airport": "Calicut International Airport (CCJ)", 
                "train": "Kozhikode Railway Station (CLT)", 
                "bus": "Major KSRTC and private bus hub (Mofussil Bus Stand). Excellent links to Wayanad, Kannur, Kochi, and Bangalore.",
                "local": "Auto-rickshaws and city buses. Uber/Ola are available."
            },
            "booking_info": "Good mix of luxury and mid-range hotels. Beachside hotels are popular. Easy to book online via MakeMyTrip, Goibibo, etc.",
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
            "transport": { 
                "airport": "Nearest is Calicut (CCJ) ~85 km.", 
                "train": "Nearest is Kozhikode (CLT) ~72 km.", 
                "bus": "KSRTC buses from Kozhikode (CLT) are the best way. Buses connect main towns like Kalpetta, Sulthan Bathery, and Mananthavady.",
                "local": "Hiring a taxi or jeep for the day is essential. Sightseeing spots are very spread out. Auto-rickshaws are only for short trips within a town."
            },
            "booking_info": "Famous for unique stays like treehouses, plantation villas, and eco-resorts. These must be booked in advance. Hostels (Zostel) are also available.",
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
            "transport": { 
                "airport": "Kannur International Airport (CNN)", 
                "train": "Kannur Railway Station (CAN)", 
                "bus": "Strong KSRTC and private bus network connecting to Kozhikode, Kasaragod, and Mangalore.",
                "local": "Auto-rickshaws and local buses. Taxis are best for reaching the drive-in beach."
            },
            "booking_info": "Good beach resorts and city hotels are available. Homestays are popular for those wanting to see Theyyam (ask the host for schedules).",
            "hotels": [ { "name": "Mascot Beach Resort (Mid-range)", "type": "Resort", "rating": 4.4, "price": "Mid" }, { "name": "Kairali Heritage (Mid-range)", "type": "Resort", "rating": 4.3, "price": "Mid" }, { "name": "Seashell Haris Beach Home (Budget)", "type": "Homestay", "rating": 4.6, "price": "Low" } ],
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
            "transport": { 
                "airport": "Nearest is Mangalore (IXE) ~50 km (in Karnataka).", 
                "train": "Kasaragod Railway Station (KGQ)", 
                "bus": "Good bus connectivity with Mangalore (Karnataka) and Kannur. KSRTC and private buses are available.",
                "local": "Auto-rickshaws and local buses."
            },
            "booking_info": "Bekal is the main hub, known for its 5-star luxury resorts (Taj, Lalit). These are expensive and should be booked far in advance.",
            "hotels": [ { "name": "Taj Bekal Resort & Spa (Luxury)", "type": "Resort", "rating": 4.8, "price": "High" }, { "name": "The Lalit Resort & Spa Bekal (Luxury)", "type": "Resort", "rating": 4.7, "price": "High" }, { "name": "Bekal Palace (Budget)", "type": "Hotel", "rating": 4.1, "price": "Low" } ],
            "local_tips": [ "**Culture:** See the 'Ananthapura Lake Temple', the only lake temple in Kerala.", "**Language:** This district is very diverse. You will hear Malayalam, Tulu, Kannada, and Konkani." ],
            "hidden_gem": { "name": "Ranipuram Hills", "desc": "Often called the 'Ooty of Kasaragod', this is a trekking destination with rolling green hills and forests. It's a perfect, cool escape from the coastal heat." },
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
    { id: "spices", text: "Bargain for fresh spices in a local market" },
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

function handleQuickReply(event) {
    const target = event.currentTarget;
    const action = target.getAttribute('data-action');
    const value = target.getAttribute('data-value') || target.textContent;
    appendMessage(target.textContent, 'user-message');
    processAction(action, value);
}

function handleSideLink(event) {
    const target = event.currentTarget;
    const action = target.getAttribute('data-action');
    const value = target.getAttribute('data-value') || target.textContent.replace(/^[^\s]+ /g, '');
    processAction(action, value, true); // true = isSideLink
}

// ==============================================================================
// 6. CORE SMART LOGIC (Handles free-text)
// ==============================================================================
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

    // === FIX START ===
    // We must find a potential placeMatch *before* checking intents
    // This allows intents to be smart about place names.
    let placeMatch = findPlaceByName(lowerText);
    const districtFromPlace = placeMatch ? KERALA_DATA_MOCK.districts.find(d => d.id === placeMatch.districtId) : null;
    // === FIX END ===

    setTimeout(() => {
        hideTypingIndicator();
        // Intent Keywords (condensed)
        const INTENTS = {
            GREETINGS: ['hello', 'hi', 'hey'], THANKS: ['thanks', 'thank you'], MENU: ['home', 'main menu', 'start over'],
            ITINERARY: ['plan', 'itinerary', 'trip', 'days'], VIBE: ['vibe', 'romantic', 'adventure', 'foodie'],
            HOTEL: ['hotel', 'houseboat', 'stay', 'room', 'resort', 'booking'],
            TRANSPORT: ['transport', 'airport', 'train', 'bus', 'how to get', 'reach'],
            TIPS: ['tip', 'food', 'eat', 'festival', 'culture', 'shop'], GEM: ['hidden gem', 'secret', 'non-touristy'],
            NEARBY: ['nearby', 'what else is there', 'close to'], SEASON: ['visiting in', 'going in', 'best time', 'month'],
            CHALLENGE: ['challenge', 'game']
        };
        const hasIntent = (intent) => INTENTS[intent].some(w => lowerText.includes(w));

        // --- Intent Detection Order ---
        if (hasIntent('GREETINGS')) { appendMessage("Hello! I'm Sanchaari. How can I help you plan your Kerala trip?", 'bot-message'); appendQuickReplies(MAIN_MENU_REPLIES); return; }
        if (hasIntent('THANKS')) { appendMessage("You're welcome! Is there anything else I can help with?", 'bot-message'); return; }
        if (hasIntent('MENU')) { showMainMenu(); return; }
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
        
        // === NEW/UPDATED ITINERARY INTENT ===
        if (hasIntent('ITINERARY')) {
            // Check for a specific district or place in the query
            let districtMatch = findDistrictInText(lowerText) || districtFromPlace;
            if (districtMatch) {
                handleDistrictTripPlan(districtMatch);
                return;
            }
            // Existing logic for generic day counts
            if (lowerText.includes('3')) { showItinerary("3_day"); return; }
            if (lowerText.includes('5')) { showItinerary("5_day"); return; }
            if (lowerText.includes('7')) { showItinerary("7_day"); return; }
            // Fallback to the main planning gateway
            processAction("plan_trip_gateway", "plan_trip_gateway");
            return;
        }
        
        // === FIX START: This logic is now smarter ===
        if (hasIntent('GEM')) {
            let districtMatch = findDistrictInText(lowerText) || districtFromPlace || userContext.lastDistrict;
            if (districtMatch) { handleHiddenGem(districtMatch); } else { processAction('ask_hidden_gem', 'ask_hidden_gem'); }
            return;
        }
        if (hasIntent('CHALLENGE')) { handleTravelChallenge(); return; }
        if (hasIntent('HOTEL')) {
            let districtMatch = findDistrictInText(lowerText) || districtFromPlace || userContext.lastDistrict;
            if (districtMatch) { handleHotelRequest(districtMatch); } else { appendMessage("Sure, for which district?", 'bot-message'); }
            return;
        }

        if (hasIntent('NEARBY') && placeMatch) { handleNearbyPlaces(placeMatch.place); return; }

        if (hasIntent('TRANSPORT')) {
            let districtMatch = findDistrictInText(lowerText) || districtFromPlace || userContext.lastDistrict;
            if (districtMatch) { handleTransportRequest(districtMatch); } else { appendMessage("I can provide travel info. For which destination?", 'bot-message'); }
            return;
        }
        if (hasIntent('TIPS')) {
            let districtMatch = findDistrictInText(lowerText) || districtFromPlace || userContext.lastDistrict;
            handleLocalTipsRequest(districtMatch); 
            return; 
        }
        // === FIX END ===

        // === THIS HANDLES "Tell me about [District]" ===
        let districtMatch = findDistrictInText(lowerText);
        if (districtMatch) { updateContext(`Exploring ${districtMatch.name}`, districtMatch); showDistrictCard(districtMatch); return; }
        // === THIS HANDLES "Tell me about [Place]" ===
        if (placeMatch) { const district = KERALA_DATA_MOCK.districts.find(d => d.id === placeMatch.districtId); updateContext(`About ${placeMatch.place.name}`, district); showPlaceCard(placeMatch.place, district); return; }

        // --- Fallback ---
        handleGeneralInquiry(lowerText);

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
                // === Lat/Lon are PRESERVED here for the distance calculation ===
                const placeToAdd = { 
                    name: placeData.place.name, 
                    districtName: districtForPlace.name, 
                    lat: districtForPlace.lat, // Using district lat/lon 
                    lon: districtForPlace.lon 
                };
                // Check if the *place* itself has lat/lon
                if (placeData.place.lat && placeData.place.lon) {
                    placeToAdd.lat = placeData.place.lat;
                    placeToAdd.lon = placeData.place.lon;
                }
                
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
                // === REVERTED: This is the simple, text-only version ===
                botResponse = userContext.tripItinerary.length > 0 ? `Your itinerary: <ul>${userContext.tripItinerary.map(p => `<li>**${p.name}** (${p.districtName})</li>`).join('')}</ul>` : "Your itinerary is empty!";
                newQuickReplies = [ { text: "Add another Place", action: "text_reply", value: "Explore" }, { text: "Clear Itinerary", action: "clear_itinerary" } ];
                break;
            case 'clear_itinerary':
                userContext.tripItinerary = []; 
                botResponse = "Itinerary cleared!"; 
                newQuickReplies = MAIN_MENU_REPLIES; 
                break;

            case 'show_nearby':
                const pData = findPlaceByName(value);
                if (pData) handleNearbyPlaces(pData.place); return; // Return because handled by function

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
            <button class="quick-reply" data-action="show_hidden_gem_for" data-value="${district.id}">💎 Sanchari's Gem</button>
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
// 9. NEW FEATURE HANDLER FUNCTIONS
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
    // UPDATED: New Name
    let botResponse = `💎 **Sanchari's Hidden Gem for ${district.name}** 💎<br><br>**${gem.name}**: ${gem.desc}`;
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
    updateContext("Sanchari's Challenge", null);
    // UPDATED: New Name
    let botResponse = "🏆 **Sanchari's Kerala Travel Challenge!** 🏆<br><br>Complete these 5 challenges! Click one when done.";
    const challengeButtons = TRAVEL_CHALLENGE_MOCK.map(item => ({ text: `${userContext.challengeProgress.includes(item.id) ? '✅' : '⬜'} ${item.text}`, action: "complete_challenge_item", value: item.id }));
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies(challengeButtons);
}

// ==============================================================================
// 10. STANDARD HANDLER & SUPPORT FUNCTIONS
// ==============================================================================

// === NEW FUNCTION TO HANDLE DISTRICT-SPECIFIC TRIP PLANS ===
function handleDistrictTripPlan(district) {
    updateContext(`Planning trip to ${district.name}`, district);
    
    // Get top 2-3 places from the district's data
    const places = district.places.slice(0, 3);
    
    if (places.length < 2) {
        // Handle districts with few listed places
        const placeName = places.length > 0 ? places[0].name : "the main town";
        appendMessage(`**${district.name}** is a great choice! I recommend visiting **${placeName}**.`, 'bot-message');
        if (places.length > 0) {
            appendQuickReplies([ { text: `Add ${places[0].name} to Trip`, action: "add_to_trip", value: places[0].name } ]);
        }
        return;
    }

    const plan = [
        `**Day 1:** Arrive and explore **${places[0].name}**.`,
        `**Day 2:** Visit **${places[1].name}**` + (places[2] ? ` and **${places[2].name}**.` : '.')
    ];

    const botResponse = `Here's a simple 2-day plan for **${district.name}**:<ul>${plan.map(step => `<li>${step}</li>`).join('')}</ul><br>You can ask me about these places to add them to your trip!`;
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies([
        { text: `Add ${places[0].name} to Trip`, action: "add_to_trip", value: places[0].name },
        { text: `Find Hotels in ${district.name}`, action: "find_hotels", value: district.id },
        { text: "Plan a different trip", action: "plan_trip_gateway" }
    ]);
}

function handleHotelRequest(district) {
    // === UPDATED FUNCTION ===
    let botResponse = `I don't have specific hotel listings for **${district.name}** yet, but it's known for ${district.theme.toLowerCase()}.`;
    if (district.hotels && district.hotels.length > 0) {
        botResponse = `Accommodation in **${district.name}**:<ul>${district.hotels.map(h => `<li><b>${h.name}</b> (${h.type}) - ${h.rating}⭐, Price: ${h.price}</li>`).join('')}</ul>`;
        
        // Add the new booking info
        if (district.booking_info) {
            botResponse += `<br><p><b>Booking Tip:</b> ${district.booking_info}</p>`;
        }
    }
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies([ { text: `Transport to ${district.name}`, action: "find_transport", value: district.id }, { text: "Local Tips", action: "local_tips" } ]);
}
function handleTransportRequest(district) {
    // === UPDATED FUNCTION ===
    let botResponse = `I don't have detailed transport info for **${district.name}**.`;
    if (district.transport) {
        botResponse = `Travel info for **${district.name}**:<ul>` +
            (district.transport.airport ? `<li><b>✈️ Airport:</b> ${district.transport.airport}</li>` : '') +
            (district.transport.train ? `<li><b>🚆 Train:</b> ${district.transport.train}</li>` : '') +
            (district.transport.bus ? `<li><b>🚌 Bus:</b> ${district.transport.bus}</li>` : '') + // <-- ADDED
            (district.transport.local ? `<li><b>🛺 Local:</b> ${district.transport.local}</li>` : '') + `</ul>`;
    }
    appendMessage(botResponse, 'bot-message');
    appendQuickReplies([ { text: `Find Hotels in ${district.name}`, action: "find_hotels", value: district.id }, { text: "See Places", action: "district_places", value: district.id } ]);
}
function handleLocalTipsRequest(district = null) {
    let tips = [...KERALA_DATA_MOCK.local_tips];
    let title = "General tips for your Kerala trip:";
    if (district && district.local_tips) { tips = [...district.local_tips, ...tips]; title = `Tips for visiting **${district.name}**:`; }
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
    // UPDATED: New Name and Catchphrase
    appendMessage("Welcome back! I'm Sanchari, your personal guide to God's Own Country. How can I help?", 'bot-message');
    appendQuickReplies(MAIN_MENU_REPLIES);
}

// ==============================================================================
// 11. NEW: GENERAL INQUIRY FUNCTION
// ==============================================================================

function handleGeneralInquiry(userText) {
    // This is the placeholder function from the previous step.
    // It is preserved.
    appendMessage("I'm sorry, I didn't quite understand that. You can ask me about districts (like 'Munnar'), hotels, transport, or local tips.", 'bot-message');
    appendQuickReplies(MAIN_MENU_REPLIES);
}

# Sanchari - Kerala Travel Guide
> Your personal guide to God's Own Country.

![Sanchari Chatbot Screenshot]("C:\Users\HP\Pictures\Screenshots\Screenshot 2025-11-02 151335.png")

Sanchari (meaning "Traveler" in Malayalam) is a web-based, front-end chatbot designed to be a comprehensive, one-stop guide for planning a trip to Kerala, India. It's built with pure, lightweight HTML, CSS, and Vanilla JavaScript—no external libraries or frameworks.

The chatbot interface allows users to ask for information, and it provides detailed, curated data on all 14 districts of Kerala.

## Features

* **14-District Database:** Provides specific information on all 14 districts, including top attractions, local themes, and ratings.
* **Detailed Travel Info:** Access practical, real-world data on:
    * **Airports:** Nearest airport for each district.
    * **Trains:** Main railway stations.
    * **Buses:** KSRTC and private bus hub information.
    * **Local Transport:** Tips on using auto-rickshaws, jeeps, and local ferries.
* **Hotel & Booking Tips:** In addition to hotel listings, the bot provides practical booking advice for each district (e.g., "Book 6 months in advance for Thrissur Pooram" or "Houseboats are best booked online").
* **Dynamic Itinerary Planner:**
    * **Plan by Vibe:** Get itinerary suggestions for "Romantic," "Adventure," or "Foodie" trips.
    * **Plan by Day Count:** Get pre-made plans for 3, 5, or 7-day trips.
* **Personal Itinerary Builder:**
    * Users can add any location to a personal "My Itinerary" list.
    * Features a **Smart Navigator Tip** that calculates the distance between the last-added item and the new one, warning the user if they are too far apart.
* **Local Expert:**
    * **Sanchari's Hidden Gems:** A unique, non-touristy suggestion for each district.
    * **Local Food & Tips:** General advice on must-try food, cultural etiquette, and shopping.
* **Seasonal Advisor:** The bot can give specific travel advice based on the month the user plans to visit (e.g., warning about monsoon season or recommending Theyyam season).
* **Sanchari's Travel Challenge:** A fun, gamified checklist of 5 must-do experiences in Kerala to engage the user.

## Tech Stack

* **HTML5:** For the core structure and layout.
* **CSS3:** For all styling, using a clean, light "Soft Mint Green" theme with CSS variables.
* **Vanilla JavaScript (ES6+):** For all application logic, including the chat interface, state management, and data retrieval from a mock database.

## How to Run

No complex setup, dependencies, or build steps are required.

1.  Clone this repository:
    ```bash
    git clone [https://github.com/Eshan-Jameel/Kerala-Trip-Advisor.git](https://github.com/Eshan-Jameel/Kerala-Trip-Advisor.git)
    ```
2.  Navigate to the project folder:
    ```bash
    cd Kerala-Trip-Advisor
    ```
3.  Open the `index.html` file in your favorite web browser.

## Future Improvements

* **Connect to a Live API:** The `handleGeneralInquiry` function in `app.js` is a placeholder. The next step is to connect this to a real generative AI or search API to answer general, non-Kerala travel questions.
* **Persistent Itinerary:** Use `localStorage` to save the user's "My Itinerary" list so it persists even after the browser is closed.
* **Live Weather Integration:** Connect to a free weather API to provide real-time weather forecasts for each district.
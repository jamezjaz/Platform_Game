const scoreData = (function() {
    'use strict';
  
    const key = '8lwQu3iBp3BgztURJXox';
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/'
    const data = {}
  
  
    async function postScores(){
      let fullData = data
      try{
        const response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'content-type':'application/json; charset=UTF-8'
          },
          body: JSON.stringify(fullData)
        })
        // console.log("response Ok");
        const data = await response.json()
        return data
      } catch (error) {
        throw new Error("Could not reach the API: " + error)
      }
    }
  
    async function getScores(){
      try{
        const response = await fetch(url)
        const data = await response.json();
        return data
        } catch (error) {
        console.log(error);
      }
    }
  
    const nameSetter = (name) => {
      data.user = name
    }
  
    const scoreSetter = (score) => {
      data.score = score
    }
  
    return{
      postScores,
      getScores,
      nameSetter,
      scoreSetter,
    }
  
  }());
  
  export default scoreData
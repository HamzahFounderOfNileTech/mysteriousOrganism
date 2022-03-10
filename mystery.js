// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases

  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

//Factory function for objects

  const pAequorFactory = (num, arr) => {
      return{
          specimenNum: num,
          dna: arr,
          mutate(){
              let random = Math.round(Math.random() * this.dna.length)
              let rand = returnRandBase()
              while(this.dna[random] === rand){
                rand = returnRandBase()
              }
              this.dna[random] = rand
          },
          compare(obj){
            let comp = 0;
            for(let i = 0; i < this.dna.length; i++){
              for(let j = 0; j < obj.dna.length; j++){
                if(this.dna[i] === obj.dna[j]){
                  comp += 1
                }
              }
            }
            console.log(`Specimen ${this.specimenNum} and specimen ${obj.specimenNum} have ${(comp * 10)/15}% in common`)
          },
          willLikelySurvive(){
            let highSurvivalBases = 0;
            for(let i = 0; i <= this.dna.length - 1; i++){
              if(this.dna[i] === 'C' || this.dna[i] === 'G'){
                highSurvivalBases += 1
              }
            }
            highSurvivalBases = (highSurvivalBases/15) * 100
            if(highSurvivalBases >= 60){
              return true
            } else {
              return false
            }
          }
      }
  }  
  
  let highChancer = []
  
  let num = 1
  
  while(highChancer.length  < 30){
    let pAequorran = pAequorFactory(num, mockUpStrand())
    while(pAequorran.willLikelySurvive() === false){
      pAequorran = pAequorFactory(num, mockUpStrand())
    }
    num += 1
    highChancer.push(pAequorran)
  }
  
  //test

  console.log(highChancer)
  for(let i = 0; i < highChancer.length; i++){
    console.log(highChancer[i].willLikelySurvive())
  }
//Created by me Hamzah GOD OF CODE
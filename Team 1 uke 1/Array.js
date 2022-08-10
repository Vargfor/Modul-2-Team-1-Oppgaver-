

// hvilken data må vi ha i modellen for å kunne tegne opp dette skjermbilde.Admin

// hva kan man gjøre i dette skjermbilde? hvordan skal dette vises i modellen?

// alle inputer på siden trenger et eget felt i modellen.

// model.people = ["Joakim"];



const model = {

    // app tilstand
    currentpage: "survey",
    
    
    
    // input felter
    inputAdmin: [
        {
        title: '',
        question: '',
        chosenForm: ['text', 'selectedNumber'],
        },
        
    ],

    inputUser: [
        {
            answer: '',
        },
    ],
    
    
    
    //Data
    
    Admin: [  
    {
        id: 1,
        name:"Henrik",
        isadmin:true,
        title: 'spørreundersøkelse',
        survey:[
            {questionId: 1,nameOfquestion:  "hva foretrekker du og spise til middag", answers:['taco', 'fisk', 'kjøttboller', 'hamburger'], },
            {questionId: 1,nameOfquestion: "", answers:[], },
            {questionId: 1,nameOfquestion: "exercise", answers:[], },
            ],

        
        checkmark: 'green',
        percentNo: '',
        weekdays: ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag'],
        download: 'pdf',
    },  
    ],

    Users: [
        {
            id: 2,
            isadmin:false,
            title: 'spørreundersøkelse',
            checkmark: 'green',
            weekdays: '',
            time: '',
            date: '',
      
        },
        ],
    };





//  function calculate(){
//     let tacoteller= 0;
//     for (let index = 0; index <  model.answers[0].answers.length; index++) {
//         if(model.answers[0].answers[index] == "taco"){
//             tacoteller++;
//         }
        
//     }
//    let percent = (tacoteller/model.answers[0].answers.length) *100;
//    return percent;
//  }

//  function findsurvey(){
//     if(model.Admin[0].id == model.answers[0].questionId){

//     }
//  }


  
   
    
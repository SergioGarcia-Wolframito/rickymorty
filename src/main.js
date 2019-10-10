import  request  from 'request';
import yargs from 'yargs';

const baseurl = "https://rickandmortyapi.com/api/";

const getURL = function(url,results){

  request({url : url, json:true}, (error,response)=>{
  
    

       response.body.results.forEach(element=>{

          results.push(element.name);
            
       });

       if(response.body.info.next !== ""){

          getURL(response.body.info.next,results);

       }else{

        results.forEach((elem,index) =>{
        
          console.log(index + " " + elem);
          
        });

       }
    
  });

  
}


const getStatus = function(url,results,status){


  request({url : url, json:true}, (error,response)=>{
  
       response.body.results.forEach(element=>{

        if(element.status === status){
          results.push(element.id +" " + element.name);
          
        }

       });

       if(response.body.info.next !== ""){

        getStatus(response.body.info.next,results,status);

       }else{

        results.forEach((elem) =>{
        
          console.log(elem);
          
          
        });

       }
    
  });

  
}

const list = function(argv){
    const datos_lista = {
     
      status: argv.status,
      page: argv.page,
  };


  if(datos_lista.status == null && datos_lista.page == null){

  
      let arry=[];
      let uri = "https://rickandmortyapi.com/api/character/?page=0";

      getURL(uri,arry,);

  }else{

      if(datos_lista.page !=null){

        let total_url = "https://rickandmortyapi.com/api/character/?page=" + datos_lista.page;
        
        request({url : total_url, json:true}, (error,response)=>{
  
          const arr = response.body.results;
      
              arr.forEach((elem,index) =>{

                      console.log(elem.id +" " + elem.name)

              });

        });

      }

      if(datos_lista.status != null){


      let arru=[];
      let uri = "https://rickandmortyapi.com/api/character/?page=0";

      getStatus(uri,arru,datos_lista.status);
      

      }



  }

}

const view = function(argv){

    const datos_personaje = {
      name: argv.name,
      id: argv.id,
  };

  
  if(datos_personaje.id != null){

    //View with Name

    const RyM_url = baseurl + "character/" + datos_personaje.id;

    request({url : RyM_url, json:true}, (error,response)=>{
      
      console.log("Name: "+response.body.name);
      console.log("Status: "+response.body.status);
      console.log("Species: "+response.body.species);
      console.log("Gender: "+response.body.gender);
      console.log("Origin: "+response.body.origin.name);
      console.log("Location: "+response.body.location.name);
      
    });

  }else{

    //View with Name and Id

    const RyM_url = "https://rickandmortyapi.com/api/character/?name=" + datos_personaje.name;

    request({url : RyM_url, json:true}, (error,response)=>{
  
      const arr = response.body.results;
  
          arr.forEach((elem,index) =>{
                  console.log(elem.id +" " + elem.name)
          });
      
    });

  }

}   


yargs.command({
    command: 'list',
    describe: 'List Character',

    builder: {
      
      status: {
        describe: 'Alive or Dead',
        demandOption: false,
        type: 'string',
      },
      page: {
        describe: 'Number of the Page',
        demandOption: false,
        type: 'number',
      },
    },

    handler: list,
  
});


yargs.command({
    command: 'view',
    describe: 'Find a Character',

    builder: {
      name: {
        describe: 'Name of the Character',
        demandOption: true,
        type: 'string',
      },
      id: {
        describe: 'Id of the Character',
        demandOption: false,
        type: 'number',
      },
      
    },

    handler: view,

});

yargs.parse();





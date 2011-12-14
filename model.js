/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


  myJson = Backbone.Model.extend({
        defaults:{
            id :'',
            timestamp:'',
            type:'', //error,warning,logs,asserts(enum)
            messageType:'',//string,Object Dump
            message:'',
            module:'',
            platform:'', //php,JS
            appId:'', //key corresponding user
            // userId not needed from user
            userAgent:'', //will be enum value from server
            ip:''
        },
        intialize:function(){
        },
        
        restoreUserAgent: function(){
            alert("Welcome to this world");
        }
  });
  userAgent = Backbone.Model.extend({
      defaults:{
          
      }
  });
  
  
  
  
  
        
		
    

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var myArray=[];

//document.addEventListener('DOMContentLoaded', init, false);

document.addEventListener('deviceready', init, false); //deviceready
    
    
function init()
{
   document.querySelector('#btnAdd').addEventListener('click', inTake);
    
    if(localStorage.getItem('grocery-sapa0002'))
    {
        // alert(myArray.length);
        
     myArray = JSON.parse(localStorage.getItem('grocery-sapa0002'));
    }
    
    displayList();
    
//document.querySelector('#btnDelete').addEventListener('click', remove);   
    
}

function inTake(ev)
{
    ev.preventDefault();
    var text = document.querySelector("#item").value;
    myArray.push(text);
    
    localStorage.setItem("grocery-sapa0002", JSON.stringify(myArray));
    
    displayList();
    
    document.querySelector('#item').value="";
    
}

function displayList()
{


    var element2="";
    
    //document.querySelector(".list").html="";
    for (var i=0; i<myArray.length; i++) {
        
//        element = element + ("<li>"+myArray[i]+"<button class='btnDelete' id='"+i+"'>delete </button></li>");
        
        element2 = element2 + ("<li><p>"+myArray[i]+"</p><input type='checkbox' name='checkbox' id='checkbox' class='custom' id='"+i+"'><button class='btnDelete' id='"+i+"'>delete</button></li>"); 
    }
    
    document.querySelector(".list").innerHTML= element2;
    $(".btnDelete").on('click', deleteItem);
   
}

function deleteItem()
{
    
    myArray.splice(this.id,1);
    
    localStorage.setItem("grocery-sapa0002", JSON.stringify(myArray));
    
    displayList();
}

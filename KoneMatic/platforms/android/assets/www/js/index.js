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
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        setCountdown(10,0);

        $("#button").click(function(){
            postRequest();
        });

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

    },
      
};

app.initialize();

function setCountdown(minutes, seconds) {


    var time = new Date().getTime();
   

    if(minutes != 0) {
        time = time + (minutes * 60000)
    } 

    if(seconds != 0) {
        time = seconds + (seconds * 1000)
    } 

    var date = new Date(time);
    alert(date.toString());

    $("#getting-started").countdown(date, function(event) {
        $(this).text(
          event.strftime('%M:%S')
        );
      });
  }

  function postRequest() {
    var user = {
        userid : 10,
        startingfloor: $("#id-startFloor").val(),
        desiredfloor:$("#id-endFloor").val(),
    }

    $('#button').html('sending..');

    $.ajax({
        type: 'POST',        
        url: 'https://peopletrafficflow.eu-gb.mybluemix.net/ConnectorServlet/',
        dataType: 'json',
        data: user,
        success: function (returnData) {
            console.log(returnData);
        },
        
    });
}

  
  
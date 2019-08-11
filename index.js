(function() {
    // Initialize Firebase
    
    
        var firebaseConfig = {
        apiKey: "AIzaSyB8fOkYQBighgoOxyoiAYWcmZt_tjaxsCU",
        authDomain: "weather-monitoring-007.firebaseapp.com",
        databaseURL: "https://weather-monitoring-007.firebaseio.com",
        projectId: "weather-monitoring-007",
        storageBucket: "weather-monitoring-007.appspot.com",
        messagingSenderId: "151297728813",
        appId: "1:151297728813:web:6858642bc58e50cd"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    
    //Get element
    
    
    
    
    const pretemp= document.getElementById('temp');
    //Create refences
    const dbReftemp= firebase.database().ref().child('TEMPERATURE');
    // sync logs cahnges
    dbReftemp.on('value', snap => {
    pretemp.innerText=JSON.stringify(snap.val(),null,3)+"° C";
    });
    
    
    const prehum= document.getElementById('hum');
    //Create refences
    const dbRefhum= firebase.database().ref().child('HUMIDITY');
    // sync logs cahnges
    dbRefhum.on('value', snap => {
    prehum.innerText=JSON.stringify(snap.val(),null,3)+" %";
    });
    
    
    
    const prealt= document.getElementById('alt');
    //Create refences
    const dbRefalt= firebase.database().ref().child('ALTITUDE');
    // sync logs cahnges
    dbRefalt.on('value', snap => {
    prealt.innerText=JSON.stringify(snap.val(),null,3)+" ";
    });
    
    const preprs= document.getElementById('prs');
    //Create refences
    const dbRefprs= firebase.database().ref().child('PRESSURE');
    // sync logs cahnges
    dbRefprs.on('value', snap => {
    preprs.innerText=JSON.stringify(snap.val(),null,3)+" ";
    });
    
    
    const prelit= document.getElementById('lit');
    //Create refences
    const dbReflit= firebase.database().ref().child('LIGHT INTENSITY');
    // sync logs cahnges
    dbReflit.on('value', snap => {
    prelit.innerText=JSON.stringify(snap.val(),null,3)+" ";
    });
    
    const prerai= document.getElementById('Rain');
    //Create refences
    const dbRefrai= firebase.database().ref().child('RAIN');
    // sync logs cahnges
    dbRefrai.on('value', snap => {
    prerai.innerText=JSON.stringify(snap.val(),null,3)+" ";
    });
    
    
    
    }());
    
    
    
    
    
    
    
    
    
    
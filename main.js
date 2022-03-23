var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

Recognition.onresult=function(event)
{
    console.log(event);
    Content=event.results[0][0].transcript;
    console.log(Content);

    if(Content=="take my selfie")
    {
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function taking_selfie()
{
    Webcam.snap(function(data_uri){

        if(img_id=="selfie1"){
            document.getElementById("result_1").innerHTML="<img id='selfie1' src='"+data_uri+"'></img>";
        }

        if(img_id=="selfie2"){
            document.getElementById("result_2").innerHTML="<img id='selfie2' src='"+data_uri+"'></img>";
        }

        if(img_id=="selfie3"){
            document.getElementById("result_3").innerHTML="<img id='selfie3' src='"+data_uri+"'></img>";
        }
        });
}

function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 3 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id="selfie1";
        taking_selfie();

    speak_data = "Taking your next Selfie in 3 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    }, 3000);

    setTimeout(function(){
        img_id="selfie2";
        taking_selfie();

    speak_data = "Taking your next Selfie in 3 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    }, 6000);

    setTimeout(function(){
        img_id="selfie3";
        taking_selfie();
    }, 9000);
}
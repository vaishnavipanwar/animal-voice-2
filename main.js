function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EABx5ZEHr/model.json" , modelReady );
}

function modelReady(){
    console.log("model is loaded");
    classifier.classify(gotResult);
}

function gotResult(error,results){
    if(error){
    console.log(error);
    }
    else{
        console.log(results);
    }
}
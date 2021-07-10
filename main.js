function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Yjl-sxfJ-/model.json',modelLoded);
}
function modelLoded()
{
    console.log("model loaded");
}
function draw()
{
    image(video,0,0,500,500);
    classifier.classify(video,gotResult)
}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
    }
    if (results[0].label=="dad") {
      document.getElementById("emoji").innerHTML="&#128104;"  
    } else if(results[0].label=="mom") {

        document.getElementById("emoji").innerHTML="&#129465;" 
    }
    else if(results[0].label=="btother") {

        document.getElementById("emoji").innerHTML="&#128118;" 
    }
    else if(results[0].label=="sister") {

        document.getElementById("emoji").innerHTML="&#129524;" 
    }
    

}

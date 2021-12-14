var daily = document.getElementById("daily-shift");
var weekly = document.getElementById("weekly-shift");
var monthly = document.getElementById("monthly-shift");
var workHours = document.getElementById("work-hours"),
    playHours = document.getElementById("play-hours"),
    studyHours = document.getElementById("study-hours"),
    exerciseHours = document.getElementById("exercise-hours"),
    socialHours = document.getElementById("social-hours"),
    selfcareHours = document.getElementById("selfcare-hours"),
    previousWorkHours = document.getElementById("work-previous"),
    previousPlayHours = document.getElementById("play-previous"),
    previousStudyHours = document.getElementById("study-previous"),
    previousExerciseHours = document.getElementById("exercise-previous"),
    previousSocialHours = document.getElementById("social-previous"),
    previousSelfcareHours = document.getElementById("selfcare-previous"),
    worklast = document.getElementById("worklast"),
    playlast = document.getElementById("playlast"),
    studylast = document.getElementById("studylast"),
    exerciselast = document.getElementById("exerciselast"),
    sociallast = document.getElementById("sociallast"),
    selfcarelast = document.getElementById("selfcarelast"),
    currenthrs = document.getElementsByClassName("current-hrs"),
    currenthours = document.getElementsByClassName("current-hours");
    



  
    
    

fetch('./apps/data.json').then(response => {
    return response.json();
    
}).then(data => {
    console.log(data[0].timeframes.daily.current);
    daily.addEventListener("click",function(){
        workHours.innerText = data[0].timeframes.daily.current;
        playHours.innerText = data[1].timeframes.daily.current;
        studyHours.innerText = data[2].timeframes.daily.current;
        exerciseHours.innerText = data[3].timeframes.daily.current;
        socialHours.innerText = data[4].timeframes.daily.current;
        selfcareHours.innerText = data[5].timeframes.daily.current;
        worklast.innerText = "Yesterday";
        playlast.innerText = "Yesterday";
        studylast.innerText = "Yesterday";
        exerciselast.innerText = "Yesterday";
        selfcarelast.innerText = "Yesterday";
        sociallast.innerText = "Yesterday";
        previousWorkHours.innerText = data[0].timeframes.daily.previous;
        previousPlayHours.innerText = data[1].timeframes.daily.previous;
        previousStudyHours.innerText = data[2].timeframes.daily.previous;
        previousExerciseHours.innerText = data[3].timeframes.daily.previous;
        previousSocialHours.innerText = data[4].timeframes.daily.previous;
        previousSelfcareHours.innerText = data[5].timeframes.daily.previous;

    
        

    })
    weekly.addEventListener("click",function(){
        workHours.innerText = data[0].timeframes.weekly.current;
        playHours.innerText = data[1].timeframes.weekly.current;
        studyHours.innerText = data[2].timeframes.weekly.current;
        exerciseHours.innerText = data[3].timeframes.weekly.current;
        socialHours.innerText = data[4].timeframes.weekly.current;
        selfcareHours.innerText = data[5].timeframes.weekly.current;
        worklast.innerText = "Last Week ";
        playlast.innerText = "Last Week ";
        studylast.innerText = "Last Week ";
        exerciselast.innerText = "Last Week ";
        selfcarelast.innerText = "Last Week ";
        sociallast.innerText = "Last Week ";
        previousWorkHours.innerText = data[0].timeframes.weekly.previous;
        previousPlayHours.innerText = data[1].timeframes.weekly.previous;
        previousStudyHours.innerText = data[2].timeframes.weekly.previous;
        previousExerciseHours.innerText = data[3].timeframes.weekly.previous;
        previousSocialHours.innerText = data[4].timeframes.weekly.previous;
        previousSelfcareHours.innerText = data[5].timeframes.weekly.previous;

    })
    monthly.addEventListener("click",function(){
        workHours.innerText = data[0].timeframes.monthly.current;
        playHours.innerText = data[1].timeframes.monthly.current;
        studyHours.innerText = data[2].timeframes.monthly.current;
        exerciseHours.innerText = data[3].timeframes.monthly.current;
        socialHours.innerText = data[4].timeframes.monthly.current;
        selfcareHours.innerText = data[5].timeframes.monthly.current;
        worklast.innerText = "Last Month ";
        playlast.innerText = "Last Month ";
        studylast.innerText = "Last Month ";
        exerciselast.innerText = "Last Month ";
        selfcarelast.innerText = "Last Month ";
        sociallast.innerText = "Last Month ";
        previousWorkHours.innerText = data[0].timeframes.monthly.previous;
        previousPlayHours.innerText = data[1].timeframes.monthly.previous;
        previousStudyHours.innerText = data[2].timeframes.monthly.previous;
        previousExerciseHours.innerText = data[3].timeframes.monthly.previous;
        previousSocialHours.innerText = data[4].timeframes.monthly.previous;
        previousSelfcareHours.innerText = data[5].timeframes.monthly.previous;

    })
    
        
});
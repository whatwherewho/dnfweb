$(document).ready(function () {

    var sortArrGender;
    var sortArrSpecies;
    var sortArrFaction;
    var partUrl;
    var requestUrl;

    // 筛选功能开始
    $(".sort-option").click(function () {
        sortArrGender=[];
        sortArrSpecies=[];
        sortArrFaction=[];
        partUrl="";
        requestUrl="";
        //分类选择器的样式变更
        if($(this).hasClass("sort-active")){
            $(this).removeClass("sort-active");
        }
        else{
            $(this).addClass("sort-active");
        }

        $(".sort-active").each(function (index,item) {
            if($(this).hasClass("sort-gender")){
                sortArrGender.push($(this).text());
            }
            if($(this).hasClass("sort-species")){
                sortArrSpecies.push($(this).text());
            }
            if($(this).hasClass("sort-faction")){
                sortArrFaction.push($(this).text());
            }
        });
/*        console.log("--------------");
        console.log(sortArrGender);
        console.log(sortArrSpecies);
        console.log("--------------");*/

        if(sortArrGender){
            for(var i=0;i<sortArrGender.length;i++){
                partUrl=partUrl+"&gender="+sortArrGender[i];
            }
        }
        if(sortArrSpecies){
            for(var j=0;j<sortArrSpecies.length;j++){
                partUrl=partUrl+"&species="+sortArrSpecies[j];
            }
        }
        if(sortArrFaction){
            for(var k=0;k<sortArrFaction.length;k++){
                partUrl=partUrl+"&faction="+sortArrFaction[k];
            }
        }

        partUrl=partUrl.substring(1);
        console.log(partUrl);
        if(partUrl!=""){
            requestUrl= "http://127.0.0.1:8081/sortCharacter?"+partUrl;
        }
        else{
            requestUrl= "http://127.0.0.1:8081/sortCharacter?searchall=1";
        }
        $.ajax({
            method:"get",
            url:requestUrl,
            success:function (data) {
/*                $("#inside").empty();
                for(var i=0;i<data.length;i++){
                    var appendspan = $("<span></span>").text(data[i].name);
                    $("#inside").append(appendspan);
                }*/
                rebuildPage(data);
            }
        });
    });

    function rebuildPage(data) {
        $(".character-table:eq(0) tbody").empty();
        for(var i=0;i<data.length;i++){
            var tr = $("<tr></tr>");
            var appendName = $("<td class='characterList-name'></td>").html("<a href='http://127.0.0.1:8081/character/"+data[i].name+"'>"+data[i].name+"</a>");
            var appendSpecies = $("<td class='characterList-species'></td>").text(data[i].species);
            var appendGender = $("<td class='characterList-gender'></td>").text(data[i].gender);
            var appendImg = $("<td class='characterList-img'></td>").html("<img src='" +data[i].imgsrc +"'>");
            var appendFaction = $("<td class='characterList-faction'></td>").text(data[i].faction);
            var appendPosition = $("<td class='characterList-position'></td>").text(data[i].position);
            var appendSummary = $("<td class='characterList-summary'></td>").text(data[i].summary);
            tr.append(appendName,appendSpecies,appendGender,appendImg,appendFaction,appendPosition,appendSummary);
            $(".character-table:eq(0)").append(tr);
        }
    }

});
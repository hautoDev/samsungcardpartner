//전환페이지용 로그
//const completeCheck = "completeCheckSuccess";

//let getCompleteCheck = localStorage.getItem(completeCheck);

window.addEventListener('DOMContentLoaded', () =>{
  customNaverLogSend();
  //console.log("완료!!");
});

function customNaverLogSend(){
  let complete = document.querySelector(".modal-complete");
  complete.addEventListener("click",()=>{
    //console.log("로그 전송");
    //전환페이지 설정 -->
    var _nasa={};
    if(window.wcs){
        _nasa["cnv"] = wcs.cnv("4","1"); // 전환유형, 전환가치 설정해야함. 설치매뉴얼 참고
    }

    if (!wcs_add) var wcs_add={};
    wcs_add["wa"] = "s_199d9a348ecd";
    
    if (!_nasa) var _nasa={};

    if(window.wcs){
      wcs.inflow();
      wcs_do(_nasa);
    }

  });
}





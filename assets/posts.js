// 블로그 설정 + 글 목록. 새 글을 쓰면 아래 POSTS 맨 위에 한 항목을 추가하세요.
// (file:// 로 열어도 동작하도록 JSON 대신 JS 파일로 둡니다.)

window.SITE = {
  name: "여행 노트",                       // 블로그 이름 (자유롭게 변경)
  tagline: "가족과 함께 다니며 기록하는 여행 이야기",
  footer: "© 2026 여행 노트",
  requestUrl: "https://airtable.com/appHZ07yo5Mzcj50j/shrHEW86CBgdmV9Vv"   // '다른지역 신청하기' 버튼이 여는 Airtable 폼
};

window.POSTS = [
  {
    file: "posts/forbidden-city-booking.html",   // 글 파일 경로
    title: "자금성 예약은 7일 전 저녁 8시에 열려요: 여권으로 하는 실명 예매 가이드",
    date: "2026-10-08",
    tags: ["베이징", "예약"],
    summary: "입장일 7일 전 20:00(중국 시간, 한국 시간 21:00)에 열리는 실명 예약. 오픈 시각 계산법과 준비물, 기본 정보를 정리했어요."
  }
];

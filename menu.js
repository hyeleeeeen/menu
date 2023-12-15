const $title = document.querySelector("h1");
const $meals = document.getElementById("meals");
const $sides = document.getElementById("sides");
const $drinks = document.getElementById("drinks");
const $bell = document.getElementById("bell");
const $mainList = document.getElementById("mainList");

const meals = ["뚜촌샤브샤브", "뚜볶이", "뚤리오올리오", "뚜치볶음밥"];
const sides = ["만뚜", "감자뚜김", "뚜포", "뚜과자"];
const drinks = ["진로", "화요", "테라", "콜라"];
const bell = ["물", "티슈", "물티슈", "집갈래요"];

const createList = (t) => { // 배열의 각 요소를 forEach를 통해 뿌려주기
  t.forEach((v) => {
    const menuItem = document.createElement("li"); // li 태그 생성
    menuItem.textContent = v; // 생성한 태그에 배열의 요소를 입력하기
    $mainList.append(menuItem); // 부모태그에 붙여넣기
    
  });
  const word = document.createElement("p")
    word.textContent = `⭐절대로 후회하는 일 없게 하겠습니다⭐`;
    word.style.cssText = "font-size: 3rem; text-align: center; "
    $mainList.append(word);
};

const menuChoiceBtn = (e) => {
  // 이전에 생성된 목록이 있다면 초기화
  while ($mainList.firstChild) { // 자식요소 제거하기
    $mainList.removeChild($mainList.firstChild);
  }

  if (e.target.textContent === "사이드") {
    createList(sides);
  } else if (e.target.textContent === "주류&음료") {
    createList(drinks);
  } else if (e.target.textContent === "식사") {
    createList(meals);
  } else {
    createList(bell);
  }
};

$title.addEventListener("click", () => location.reload());
$meals.addEventListener("click", menuChoiceBtn);
$sides.addEventListener("click", menuChoiceBtn);
$drinks.addEventListener("click", menuChoiceBtn);
$bell.addEventListener("click", menuChoiceBtn);

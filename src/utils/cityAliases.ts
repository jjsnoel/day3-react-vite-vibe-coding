/**
 * Open-Meteo Geocoding은 영문 지명 검색이 안정적입니다.
 * 한글 별칭 → API 검색용 영문명으로 변환합니다.
 */
const CITY_ALIASES: Record<string, string> = {
  서울: 'Seoul',
  서울특별시: 'Seoul',
  부산: 'Busan',
  부산광역시: 'Busan',
  대구: 'Daegu',
  대구광역시: 'Daegu',
  인천: 'Incheon',
  인천광역시: 'Incheon',
  광주: 'Gwangju',
  광주광역시: 'Gwangju',
  대전: 'Daejeon',
  대전광역시: 'Daejeon',
  울산: 'Ulsan',
  울산광역시: 'Ulsan',
  세종: 'Sejong',
  세종특별자치시: 'Sejong',
  제주: 'Jeju City',
  제주시: 'Jeju City',
  제주특별자치도: 'Jeju City',
  수원: 'Suwon',
  성남: 'Seongnam',
  고양: 'Goyang',
  용인: 'Yongin',
  창원: 'Changwon',
  청주: 'Cheongju',
  전주: 'Jeonju',
  포항: 'Pohang',
  강릉: 'Gangneung',
  춘천: 'Chuncheon',
  원주: 'Wonju',
  목포: 'Mokpo',
  여수: 'Yeosu',
  순천: 'Suncheon',
  경주: 'Gyeongju',
  안산: 'Ansan',
  안양: 'Anyang',
  파주: 'Paju',
  김해: 'Gimhae',
  진주: 'Jinju',
  나주: 'Naju',
  익산: 'Iksan',
  군산: 'Gunsan',
  통영: 'Tongyeong',
  거제: 'Geoje',
  화성: 'Hwaseong',
  평택: 'Pyeongtaek',
  의정부: 'Uijeongbu',
  남양주: 'Namyangju',
  하남: 'Hanam',
  구리: 'Guri',
  시흥: 'Siheung',
  광명: 'Gwangmyeong',
  부천: 'Bucheon',
  김포: 'Gimpo',
  이천: 'Icheon',
  양산: 'Yangsan',
  동해: 'Donghae',
  태백: 'Taebaek',
  삼척: 'Samcheok',
};

export function resolveCitySearchName(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return trimmed;

  const alias = CITY_ALIASES[trimmed];
  if (alias) return alias;

  return trimmed;
}

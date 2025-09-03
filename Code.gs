function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('7x34 테이블')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// 데이터 저장 함수
function saveData(data) {
  try {
    // 스크립트 속성에 데이터 저장
    PropertiesService.getScriptProperties().setProperty('TABLE_DATA', JSON.stringify(data));
    Logger.log('데이터 저장 성공');
    return { success: true, message: '데이터가 성공적으로 저장되었습니다.' };
  } catch (e) {
    Logger.log('저장 오류: ' + e.toString());
    return { success: false, error: e.toString() };
  }
}

// 데이터 불러오기 함수
function loadData() {
  try {
    const data = PropertiesService.getScriptProperties().getProperty('TABLE_DATA');
    Logger.log('데이터 불러오기 시도');
    if (data) {
      Logger.log('데이터 불러오기 성공');
      return JSON.parse(data);
    } else {
      Logger.log('저장된 데이터 없음');
      return { table1: [], table2: [], highlightTable: [] };
    }
  } catch (e) {
    Logger.log('불러오기 오류: ' + e.toString());
    return { table1: [], table2: [], highlightTable: [] };
  }
}

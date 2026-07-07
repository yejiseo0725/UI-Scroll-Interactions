// try catch finally
function readFile(path) {
  throw new Error("파일 경로 찾을 수 없음");
  return "파일의 내용";
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    content = "기본 내용입니다.";
  } finally {
    console.log("성공하든 실패하든 마지막으로 리소스 정리가능!!");
  }
  const result = "hi " + content;
  return result;
}

const result = processFile("경로");
console.log(result);

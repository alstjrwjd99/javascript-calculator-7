import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const Console = MissionUtils.Console;

    const userInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    Console.print(`결과 : ${userInput}`);
  }
}

export default App;